const express = require('express');
const { createContact } = require('../controllers/contactController');
const { createCandidate } = require('../controllers/candidateController');
const Contact = require('../models/Contact');
const Candidate = require('../models/Candidate');
const multer = require('multer');
const fs = require('fs');

const router = express.Router();

// File upload configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = 'uploads/';
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true }); // Create the directory if it doesn't exist
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  

const upload = multer({ storage });

// Routes
router.post('/signup', createContact);
router.post('/joinus', upload.single('resume'), createCandidate);

module.exports = router;
