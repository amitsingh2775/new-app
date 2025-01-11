import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Chat } from './components/Chat';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/chat" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register setUser={setUser} />}
        />
        <Route
          path="/chat"
          element={user ? <Chat user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
