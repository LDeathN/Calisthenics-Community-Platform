import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import LoginRegister from './pages/LoginRegisterLogout/LoginRegister';
import Logout from './pages/LoginRegisterLogout/Logout';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import PostCreate from './pages/PostCreate/PostCreate';
import PostDetails from './pages/PostDetails/PostDetails';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
        
  );
}

export default App;
