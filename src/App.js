import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Search from './pages/Search'
import About from './pages/About'
import Login from './pages/Login'
import Help from './pages/Help'

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;