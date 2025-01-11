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

## Features

- User registration and login
- Real-time messaging using WebSockets
- CORS configuration for cross-origin requests
- Socket communication for sending and receiving messages
- Authentication using JWT (JSON Web Tokens)

## Requirements

- Node.js (v14 or higher)
- MongoDB (v4.x or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/chat-app.git
   cd chat-app

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install

3. Set environment variables:
   ```bash
   cp .env.example .env
