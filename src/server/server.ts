import express from "express";
import http from "http";
import { Server as WebSocketServer, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Neuron Devtools is running on port ${PORT}`);
});

const io = new WebSocketServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {});
