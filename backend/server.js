const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formsRoutes = require('./routes/formsRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/replaice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.use('/api/forms', formsRoutes);
app.get('/', (req, res) => {
    res.send('Backend is running!');
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});