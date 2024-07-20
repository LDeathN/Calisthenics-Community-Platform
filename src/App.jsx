import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Membership from './pages/Membership';
import Coaches from './pages/Coaches';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';
import LoginRegister from './pages/LoginRegister';
import ProfileDetails from './pages/ProfileDetails';

function App() {
  return (
    <Router>
      <Navbar />

      <div className='main-section'>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/memberships' Component={Membership} />
          <Route path='/coaches' Component={Coaches} />
          <Route path='/contact-us' Component={ContactUs} />
          <Route className='login-register-section' path='/login-register' Component={LoginRegister} />
          <Route path='/profile-details' Component={ProfileDetails} />
        </Routes>
      </div> 
      
      <Footer />
    </Router> 
        
  );
}

export default App;
