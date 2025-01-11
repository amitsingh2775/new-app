import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

export const Chat = ({ user }) => {
    if (!user) {
        return <div>Loading...</div>; // Fallback UI
      }
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      const newSocket = io('http://localhost:5000');
      setSocket(newSocket);
  
      newSocket.emit('join', user._id);
  
      return () => newSocket.close();
    }, [user._id]);
  
    useEffect(() => {
      if (socket) {
        socket.on('message', (message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        });
      }
    }, [socket]);
  
    const sendMessage = (e) => {
      e.preventDefault();
      if (newMessage.trim() && socket) {
        socket.emit('sendMessage', {
          userId: user._id,
          username: user.username,
          text: newMessage
        });
        setNewMessage('');
      }
    };
  
    return (
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.userId === user._id ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                  message.userId === user._id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white'
                }`}
              >
                <p className="text-sm font-semibold">{message.username}</p>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="p-4 bg-white border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  };
  