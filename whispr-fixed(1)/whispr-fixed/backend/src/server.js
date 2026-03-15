const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const authRoutes    = require('./routes/auth');
const userRoutes    = require('./routes/users');
const friendRoutes  = require('./routes/friends');
const messageRoutes = require('./routes/messages');
const voiceRoutes   = require('./routes/voice');
const Message = require('./models/Message');
const User = require('./models/User');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.use(cors());
app.use(express.json());

// Serve uploaded voice files statically (fallback for non-nginx environments)
const uploadDir = process.env.UPLOAD_DIR || require('path').join(__dirname, '../uploads/voice');
app.use('/uploads/voice', require('express').static(uploadDir));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Online users map: userId -> socketId
const onlineUsers = new Map();

// Attach io to app so routes can emit events
app.set('io', io);
app.set('onlineUsers', onlineUsers);

// Routes
app.use('/api/auth',     authRoutes);
app.use('/api/users',    userRoutes);
app.use('/api/friends',  friendRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/voice',    voiceRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok', app: 'Whispr' }));

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error('Auth required'));
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.id;
    next();
  } catch {
    next(new Error('Invalid token'));
  }
});

io.on('connection', async (socket) => {
  const userId = socket.userId;
  onlineUsers.set(userId, socket.id);

  // Mark user online
  await User.findByIdAndUpdate(userId, { isOnline: true, lastSeen: new Date() });
  io.emit('user_status', { userId, isOnline: true });

  console.log(`🟢 User ${userId} connected`);

  // Join personal room
  socket.join(userId);

  // Notify senders of any messages sent while this user was offline → now delivered
  const pendingMsgs = await Message.find({
    receiver: userId,
    readAt: null
  }).select('sender _id').lean();

  if (pendingMsgs.length > 0) {
    // Group by sender
    const bySender = {};
    pendingMsgs.forEach(m => {
      const sid = m.sender.toString();
      if (!bySender[sid]) bySender[sid] = [];
      bySender[sid].push(m._id.toString());
    });
    // Tell each sender their messages are now delivered
    Object.entries(bySender).forEach(([senderId, ids]) => {
      if (onlineUsers.has(senderId)) {
        io.to(senderId).emit('messages_delivered', { to: userId, messageIds: ids });
      }
    });
  }

  // Send message
  socket.on('send_message', async (data) => {
    try {
      const { receiverId, content, tempId, voiceDuration, voiceFile } = data;

      // FIX 4b: Validate that the message has either text content or a voice file.
      // Previously, content was required on the model, which could throw an
      // unhandled validation error if a voice payload arrived without content.
      if (!receiverId) {
        return socket.emit('error', { message: 'receiverId is required' });
      }
      if (!content && !voiceFile) {
        return socket.emit('error', { message: 'Message must have content or a voice file' });
      }

      const msgData = {
        sender: userId,
        receiver: receiverId,
        content: content || '',
        readAt: null,
      };

      // Persist voice metadata if present
      if (voiceDuration != null) msgData.voiceDuration = voiceDuration;
      if (voiceFile)             msgData.voiceFile = voiceFile;

      const message = await Message.create(msgData);
      const populated = await message.populate('sender', 'username');
      const msgObj = populated.toObject();

      // Check if receiver is currently connected (online)
      const receiverOnline = onlineUsers.has(receiverId);

      if (receiverOnline) {
        io.to(receiverId).emit('new_message', msgObj);
        socket.emit('message_sent', { ...msgObj, tempId, deliveryStatus: 'delivered' });
      } else {
        socket.emit('message_sent', { ...msgObj, tempId, deliveryStatus: 'sent' });
      }
    } catch (err) {
      socket.emit('error', { message: err.message });
    }
  });

  // Typing indicator
  socket.on('typing', ({ receiverId, isTyping }) => {
    io.to(receiverId).emit('user_typing', { senderId: userId, isTyping });
  });

  // Mark messages as read — return IDs of messages that were actually just marked
  socket.on('mark_read', async ({ senderId }) => {
    const updated = await Message.find(
      { sender: senderId, receiver: userId, readAt: null }
    ).select('_id');
    const ids = updated.map(m => m._id.toString());
    if (ids.length === 0) return; // nothing newly read, don't emit

    await Message.updateMany(
      { sender: senderId, receiver: userId, readAt: null },
      { readAt: new Date() }
    );
    // Tell the sender which specific messages were just seen
    io.to(senderId).emit('messages_read', { by: userId, messageIds: ids });
  });

  socket.on('disconnect', async () => {
    onlineUsers.delete(userId);
    await User.findByIdAndUpdate(userId, { isOnline: false, lastSeen: new Date() });
    io.emit('user_status', { userId, isOnline: false, lastSeen: new Date() });
    console.log(`🔴 User ${userId} disconnected`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`🚀 Whispr server running on port ${PORT}`));
