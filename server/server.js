// server.js – Express server for tracking pixel
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
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': imgData.length,
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'  // Allow any origin
  });
  res.end(imgData);
});

// Start the server
app.listen(port, () => {
  console.log(`Pixel tracker server running at http://localhost:${port}`);
});
