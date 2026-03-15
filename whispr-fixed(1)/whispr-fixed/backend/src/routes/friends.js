const express = require('express');
const auth = require('../middleware/auth');
const FriendRequest = require('../models/FriendRequest');
const User = require('../models/User');
const router = express.Router();

// Send friend request
router.post('/request', auth, async (req, res) => {
  try {
    const { receiverId } = req.body;
    if (receiverId === req.user._id.toString()) {
      return res.status(400).json({ error: 'Cannot send request to yourself' });
    }
    const exists = await FriendRequest.findOne({
      $or: [
        { sender: req.user._id, receiver: receiverId },
        { sender: receiverId, receiver: req.user._id }
      ]
    });
    if (exists) return res.status(409).json({ error: 'Request already exists', request: exists });

    const request = await FriendRequest.create({
      sender: req.user._id,
      receiver: receiverId
    });

    // Real-time: notify receiver
    const io = req.app.get('io');
    io.to(receiverId).emit('friend_request', {
      request: {
        _id: request._id,
        sender: { _id: req.user._id, username: req.user.username, isOnline: true },
        createdAt: request.createdAt
      }
    });

    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get pending requests (received)
router.get('/requests', auth, async (req, res) => {
  try {
    const requests = await FriendRequest.find({
      receiver: req.user._id,
      status: 'pending'
    }).populate('sender', 'username isOnline lastSeen');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Accept/reject request
router.patch('/request/:id', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const request = await FriendRequest.findOneAndUpdate(
      { _id: req.params.id, receiver: req.user._id },
      { status },
      { new: true }
    ).populate('sender receiver', 'username isOnline');

    if (!request) return res.status(404).json({ error: 'Request not found' });

    // Real-time: notify original sender of the outcome
    const io = req.app.get('io');
    if (status === 'accepted') {
      // Tell sender their request was accepted — push the new friend data
      io.to(request.sender._id.toString()).emit('friend_accepted', {
        friend: { _id: req.user._id, username: req.user.username, isOnline: true, lastSeen: new Date() },
        requestId: request._id
      });
      // Also tell receiver to refresh their own friend list
      io.to(req.user._id.toString()).emit('friend_accepted', {
        friend: { _id: request.sender._id, username: request.sender.username, isOnline: request.sender.isOnline, lastSeen: new Date() },
        requestId: request._id
      });
    } else {
      io.to(request.sender._id.toString()).emit('friend_rejected', { requestId: request._id });
    }

    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get friends list
router.get('/', auth, async (req, res) => {
  try {
    const accepted = await FriendRequest.find({
      $or: [{ sender: req.user._id }, { receiver: req.user._id }],
      status: 'accepted'
    }).populate('sender receiver', 'username isOnline lastSeen bio');

    const friends = accepted.map(r => {
      const friend = r.sender._id.toString() === req.user._id.toString() ? r.receiver : r.sender;
      return friend;
    });

    res.json(friends);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove friend
router.delete('/:friendId', auth, async (req, res) => {
  try {
    await FriendRequest.deleteOne({
      $or: [
        { sender: req.user._id, receiver: req.params.friendId },
        { sender: req.params.friendId, receiver: req.user._id }
      ],
      status: 'accepted'
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
