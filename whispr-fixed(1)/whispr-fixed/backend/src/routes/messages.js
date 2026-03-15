const express = require('express');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const Message = require('../models/Message');
const FriendRequest = require('../models/FriendRequest');
const router = express.Router();

// ── FIX 1: /preview/all MUST come before /:userId ──────────────
// Otherwise Express matches "preview" as a userId param and throws
// a MongoDB CastError trying to cast "preview" to ObjectId.

// Get last message preview for each friend (for sidebar)
router.get('/preview/all', auth, async (req, res) => {
  try {
    // FIX 2: Explicitly cast to ObjectId — Mongoose does NOT auto-cast
    // inside aggregate pipelines the way it does for .find() queries.
    const userId = new mongoose.Types.ObjectId(req.user._id);

    const previews = await Message.aggregate([
      {
        $match: {
          $or: [{ sender: userId }, { receiver: userId }]
        }
      },
      {
        $sort: { createdAt: -1 }
      },
      {
        $group: {
          _id: {
            $cond: [{ $eq: ['$sender', userId] }, '$receiver', '$sender']
          },
          lastMessage: { $first: '$$ROOT' },
          unreadCount: {
            // FIX 3: Use $in to reliably match null/missing readAt.
            // { $eq: ['$readAt', null] } misses documents where the field
            // is absent; $in handles both null and missing fields.
            $sum: {
              $cond: [
                {
                  $and: [
                    { $eq: ['$receiver', userId] },
                    { $in: ['$readAt', [null]] }
                  ]
                },
                1,
                0
              ]
            }
          }
        }
      }
    ]);

    res.json(previews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get conversation with a user
router.get('/:userId', auth, async (req, res) => {
  try {
    // Verify they are friends
    const friendship = await FriendRequest.findOne({
      $or: [
        { sender: req.user._id, receiver: req.params.userId },
        { sender: req.params.userId, receiver: req.user._id }
      ],
      status: 'accepted'
    });
    if (!friendship) return res.status(403).json({ error: 'Not friends' });

    const page = parseInt(req.query.page) || 1;
    const limit = 50;
    const skip = (page - 1) * limit;

    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: req.params.userId },
        { sender: req.params.userId, receiver: req.user._id }
      ]
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('sender', 'username');

    res.json(messages.reverse());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
