const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      companyName,
      phoneNumber,
      role,
      country,
      industry,
    } = req.body;

    const contact = new Contact({
      firstName,
      lastName,
      email,
      companyName,
      phoneNumber,
      role,
      country,
      industry,
    });

    await contact.save();
    res.status(201).json({ message: 'Thanks for sharing your details, Our AI Agent will connect you shortly!' });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Failed to create contact' });
  }
};
