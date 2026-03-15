const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    // FIX 4: Not required — voice messages use voiceFile as their payload.
    // Content holds the "[voice:...]" tag for voice, or plain text otherwise.
    // Validation is enforced in server.js (must have content OR voiceFile).
    type: String,
    default: '',
    maxlength: 5000
  },
  // Voice message metadata stored alongside the path
  voiceDuration: {
    type: Number,
    default: null
  },
  voiceFile: {
    type: String,   // e.g. "/uploads/voice/1716000000000_a1b2c3d4.webm"
    default: null
  },
  readAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

messageSchema.index({ sender: 1, receiver: 1 });
messageSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Message', messageSchema);
