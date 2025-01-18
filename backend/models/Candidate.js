const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  resumePath: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Candidate', CandidateSchema);
