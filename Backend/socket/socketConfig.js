const { Server } = require('socket.io');
const Message = require('../models/Message');

const socketConfig = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
      methods: ["GET", "POST"],
    }
  });

  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('join', async (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined`);

      const messages = await Message.find({ userId }).sort({ createdAt: -1 }).limit(50); // Fetch last 50 messages for the given userId
      io.to(userId).emit('previousMessages', messages);
    });

    socket.on('sendMessage', async (message) => {
      try {
        const newMessage = new Message(message);
        await newMessage.save();
        io.emit('message', message);
      } catch (err) {
        console.error(err);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};

module.exports = socketConfig;
