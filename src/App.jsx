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
import PostEdit from './pages/PostEdit/PostEdit';
import { AuthContextProvider } from './contexts/AuthContext';
import PostDelete from './pages/PostDelete/PostDelete';
import PrivateGuard from './components/common/PrivateGuard';

function App() {

  return (
    <AuthContextProvider>
      <Router>
        <Navbar />

        <div className='main-section'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/catalog' element={<Catalog/>} />
            <Route className='login-register-section' path='/login-register' element={<LoginRegister/>} />
            <Route path='/posts/:postId/details' element={<PostDetails/>} />
            <Route element={<PrivateGuard />}>
              <Route path='/post-create' element={<PostCreate/>} />
              <Route path='/profile-details' element={<ProfileDetails/>} />
              <Route path='/posts/:postId/edit' element={<PostEdit/>} />
              <Route path='/posts/:postId/delete' element={<PostDelete/>} />
              <Route path='/logout' element={<Logout/>} />
            </Route>
          </Routes>
        </div> 
        
        <Footer />
      </Router> 
    </AuthContextProvider>
        
  );
}

export default App;
