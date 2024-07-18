import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Membership from './pages/Membership';
import LoginRegister from './pages/LoginRegister';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='main-section'>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/memberships' Component={Membership} />
          <Route className='login-register-section' path='/login-register' Component={LoginRegister} />
        </Routes>
      </div> 
    </Router>     
  );
}

export default App;
