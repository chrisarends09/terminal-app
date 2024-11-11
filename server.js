// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware to parse JSON bodies from POST requests
app.use(express.json());

// POST route that handles the task completion and sends a 302 redirect
app.post('/complete-task', (req, res) => {
    console.log("Task completed, redirecting...");
    res.status(302).redirect('http://casl.digital');  // 302 redirect to casl.digital
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
