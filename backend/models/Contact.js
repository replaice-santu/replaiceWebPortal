const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, required: true },
  country: { type: String, required: true },
  industry: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);
