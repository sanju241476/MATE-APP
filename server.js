const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [];
const bookings = [];

app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'Signup successful' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

app.post('/api/book', (req, res) => {
  const { fuelType, quantity, location } = req.body;

  bookings.push({ fuelType, quantity, location });
  res.status(201).json({ message: 'Booking successful' });
});

app.listen(port, () => {
  console.log(Server running on http://localhost:${port});
});
