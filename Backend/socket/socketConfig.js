const { Server } = require('socket.io');
const Message = require('../models/Message');

const socketConfig = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "https://new-app-frontend-j0jw2j2eo-amits-projects-9a022097.vercel.app",
      methods: ["GET", "POST"],
    },
  });

  let onlineUsers = {};

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // User joins
    socket.on('join', async (userId) => {
      socket.join(userId);
      onlineUsers[userId] = { socketId: socket.id, userId };
      io.emit('updateOnlineUsers', Object.keys(onlineUsers));

      console.log(`User ${userId} joined`);

      const messages = await Message.find({ userId }).sort({ createdAt: -1 }).limit(50);
      io.to(userId).emit('previousMessages', messages);
    });

    // Typing indicator
    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', data);
    });

    // Send message
    socket.on('sendMessage', async (message) => {
      try {
        const newMessage = new Message(message);
        await newMessage.save();
        io.emit('message', message);
      } catch (err) {
        console.error(err);
      }
    });

    // User disconnects
    socket.on('disconnect', () => {
      const disconnectedUser = Object.keys(onlineUsers).find(
        (userId) => onlineUsers[userId].socketId === socket.id
      );
      if (disconnectedUser) {
        delete onlineUsers[disconnectedUser];
      }
      io.emit('updateOnlineUsers', Object.keys(onlineUsers));
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
};

module.exports = socketConfig;
