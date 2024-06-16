import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Intro from './pages/Intro'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App