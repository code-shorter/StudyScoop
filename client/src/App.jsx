import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PostViewer from './pages/PostViewer';
import FlicksComponent from './pages/Flicks';
import CloudMessage from './pages/CloudMessage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/post/:postId" element={<PostViewer />} />
        <Route exact path="/flicks/:flicksId" element={<FlicksComponent />} />
        <Route exact path="/cloudmessage" element={<CloudMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
