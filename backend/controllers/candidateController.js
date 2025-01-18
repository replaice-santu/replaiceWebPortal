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
    res.status(201).json({ message: 'Candidate created successfully. Our team will review your application shortly!' });
  } catch (error) {
    console.error('Error creating candidate:', error);
    res.status(500).json({ message: 'Failed to create candidate. Please try again later.' });
  }
};
