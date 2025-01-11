import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Chat } from './component/chat.jsx'
import { Login } from './component/login.jsx'
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {!user ? (
        // Show Login if the user is not authenticated
        <Login setUser={setUser} />
      ) : (
        // Show Chat if the user is logged in
        <Chat user={user} />
      )}
    </>
  )
}

export default App
