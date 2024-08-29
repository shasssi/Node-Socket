import http from "http";
import express from "express";
import { Server } from "socket.io";

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send(`<h1>Hello from Node Socket App Server</h1>`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(PORT, () => console.log(`Server started at ${PORT}`));
