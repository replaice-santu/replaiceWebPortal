const Candidate = require('../models/Candidate');

exports.createCandidate = async (req, res) => {
  try {
    const { name, email, position } = req.body;
    const resumePath = req.file ? req.file.path : '';

    const candidate = new Candidate({
      name,
      email,
      position,
      resumePath,
    });

    await candidate.save();
    res.status(201).json({ message: 'Thanks for sharing your details. Our AI agent will review your application shortly!' });
  } catch (error) {
    console.error('Error creating candidate:', error);
    res.status(500).json({ message: 'Failed to share your details. Please try again later.' });
  }
};
