const express = require('express');
const app = express();
const port = 3000;

// Route for the tracking pixel
app.get('/pixel', (req, res) => {
  // Extract unique ID from query (sent via ?uid=)
  const id = req.query.uid || 'unknown';
  const timestamp = new Date().toISOString();
  console.log(`Pixel hit – id: ${id}, time: ${timestamp}, IP: ${req.ip}`);
  
  // Send a 1×1 transparent PNG
  const imgData = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=', 
    'base64'
  );