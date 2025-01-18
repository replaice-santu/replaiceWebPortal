const express = require('express');
const { createContact } = require('../controllers/contactController');

const Contact = require('../models/Contact');
const Candidate = require('../models/Candidate');

const router = express.Router();

const handleJoinUs = async (req, res) => {
  try {
    const { name, email, position } = req.body;
    const resumePath = req.file ? req.file.path : '';
    const newCandidate = new Candidate({ name, email, position, resumePath });
    await newCandidate.save();
    res.status(201).json({ message: 'Thank you for applying. Our AI Agent will review your application shortly!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};

// Routes
router.post('/signup', createContact);
router.post('/joinus', handleJoinUs);

module.exports = router;
