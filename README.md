# Real-Time Chat Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)

## Overview

This is a real-time chat application built using a modern stack including Express.js, Socket.io, MongoDB, and React. The application allows users to register, login, and engage in chat conversations in real-time.

Login Page -> 
 ![image](https://github.com/user-attachments/assets/e28ea22d-943d-4376-b2f0-febfdd52cdf9)

Register Page->
![image](https://github.com/user-attachments/assets/75be2ca3-44e6-4b83-b31c-e51c9f094de7)

Chat Room-> 
![image](https://github.com/user-attachments/assets/b0045fd2-6dc1-4fa7-9116-01aa00ff30e1)


## Note -> How to run the App
1. open the frontend link in two tab
2. create account with username and password in both tab
3. now chat with each other
   


## Features

- User registration and login
- Real-time messaging using WebSockets
- CORS configuration for cross-origin requests
- Socket communication for sending and receiving messages
- Authentication using JWT (JSON Web Tokens)

## Requirements

- Node.js 
- MongoDB 
- npm or

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amitsingh2775/chatapp.git
   

2. Install dependencies: navigate both folder frontend and backend and run this command in both folder
   ```bash
   npm install

   

3. Set environment variables:
   ```bash
   DATABASE_URI=mongodb+srv://dearjhon977:7777@cluster0.yyg2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your-jwt-secret
   CLIENT_ORIGIN=http://localhost:5173
   PORT=5000

4 .Architecture and Flow
 Backend Architecture
 User Registration/Login:

Users can register and login using username and password.
Authentication is handled via JWT (JSON Web Token).
Database:

MongoDB stores user data and messages.
Mongoose is used for schema definition and interactions with MongoDB.
Socket.io:

Real-time communication is facilitated through WebSocket using Socket.io.
Users can join rooms, send, and receive messages instantly.
Flow
User Registration/Login:

User provides credentials to register or login.
Backend validates credentials and returns a token upon successful login.
Socket Connection:

After successful login, the frontend establishes a WebSocket connection to the server.
Messages are emitted and received in real-time.
Message Handling:

Messages sent by users are stored in MongoDB.
Real-time updates are pushed to all connected users via Socket.io.


