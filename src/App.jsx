import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Forgot from './Forgot'
import Dashboard from './Dashboard'
import Header from './Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
