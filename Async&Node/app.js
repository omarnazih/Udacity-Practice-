// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

const port = 8000;

const isListening = () => {
  console.log(`Server is runing on port:${port}`);
};

const server = app.listen(port, isListening);

// Call Back Function
// NFN (Arrow Function)
