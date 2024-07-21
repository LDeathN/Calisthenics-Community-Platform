import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Footer from './components/Footer';
import LoginRegister from './pages/LoginRegister';
import ProfileDetails from './pages/ProfileDetails';
import PostCreate from './pages/PostCreate';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <Router>
      <Navbar />

      <div className='main-section'>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/catalog' Component={Catalog} />
          <Route className='login-register-section' path='/login-register' Component={LoginRegister} />
          <Route path='/profile-details' Component={ProfileDetails} />
          <Route path='/post-create' Component={PostCreate} />
          <Route path='/post-details' Component={PostDetails} />
        </Routes>
      </div> 
      
      <Footer />
    </Router> 
        
  );
}

export default App;
