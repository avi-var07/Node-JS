//Q2 create an http server that sends html response to the client

// Import the HTTP module
const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with content type 'text/html'
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send an HTML response
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Node.js HTTP Server</title>
      
    </head>
    <body>
      <div class="container">
        <h1>Welcome to My Node.js Server 🚀</h1>
        <p>This is an HTML response sent from the server.</p>
        <p>Try changing the route to see how it behaves!</p>
      </div>
    </body>
    </html>
  `);

  // End the response
  res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000/');
});