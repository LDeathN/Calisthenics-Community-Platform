import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='main-section'>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route className='login-register-section' path='/login-register' Component={LoginRegister} />
        </Routes>
      </div> 
    </Router>     
  );
}

export default App;
