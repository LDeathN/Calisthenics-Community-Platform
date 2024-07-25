import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Footer from './components/Footer';
import LoginRegister from './pages/LoginRegister';
import Logout from './pages/Logout';
import ProfileDetails from './pages/ProfileDetails';
import PostCreate from './pages/PostCreate';
import PostDetails from './pages/PostDetails';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  const constextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={constextData}>
      <Router>
        <Navbar />

        <div className='main-section'>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/catalog' Component={Catalog} />
            <Route className='login-register-section' path='/login-register' Component={LoginRegister} />
            <Route path='/logout' Component={Logout} />
            <Route path='/profile-details' Component={ProfileDetails} />
            <Route path='/post-create' Component={PostCreate} />
            <Route path='/posts/:postId/details' Component={PostDetails} />
          </Routes>
        </div> 
        
        <Footer />
      </Router> 
    </AuthContext.Provider>
        
  );
}

export default App;
