const express = require('express');
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');
const { v4: uuidv4 } = require('uuid');
const auth    = require('../middleware/auth');

const router = express.Router();

// ── Storage: Docker volume at UPLOAD_DIR env var ───────────────
const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, '../../uploads/voice');

// Ensure directory exists on startup
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Allowed audio MIME types
const ALLOWED_TYPES = new Set([
  'audio/webm',
  'audio/webm;codecs=opus',
  'audio/ogg',
  'audio/ogg;codecs=opus',
  'audio/mp4',
  'audio/mpeg',
  'audio/wav',
  'audio/x-wav',
]);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    // timestamp + uuid + sanitised extension
    const ext = path.extname(file.originalname).toLowerCase() || '.webm';
    const safe = ext.replace(/[^.a-z0-9]/g, '');
    cb(null, `${Date.now()}_${uuidv4().slice(0, 8)}${safe}`);
  }
});

function fileFilter(_req, file, cb) {
  // Check MIME type (normalise codec suffix e.g. "audio/webm; codecs=opus")
  const mime = (file.mimetype || '').split(';')[0].trim();
  if (mime.startsWith('audio/')) {
    cb(null, true);
  } else {
    cb(new Error(`Unsupported file type: ${file.mimetype}`), false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,  // 10 MB max per voice message
    files: 1,
  }
});

// POST /api/voice/upload
// Multipart: field "audio" = the voice blob
router.post('/upload', auth, upload.single('audio'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No audio file received' });
  }

  // Public URL served by nginx directly from the volume
  const publicPath = `/uploads/voice/${req.file.filename}`;

  res.json({
    url: publicPath,
    filename: req.file.filename,
    size: req.file.size,
    mimetype: req.file.mimetype,
  });
});

// Error handler for multer errors (file too large, wrong type)
router.use((err, _req, res, _next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ error: 'Voice message too large (max 10 MB)' });
  }
  res.status(400).json({ error: err.message || 'Upload failed' });
});

module.exports = router;
