const express = require('express')
const app = express();
const http = require('http').Server(app);
const socket = require('socket.io')(http);
const path = require('path')
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection");
});