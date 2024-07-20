import React from 'react';
import './Navbar.css';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <div className='nav'>
            <Link to="/" className="nav-link">
                <img src={logo} alt='logo' />
            </Link>
            <div className='nav-main'>
                <div className='nav-menu'>
                    <Link to="/services" className="nav-link">
                    Services
                    </Link>
                    <Link to="/memberships" className="nav-link">
                    Memberships
                    </Link>
                    <Link to="/coaches" className="nav-link">
                    Coaches
                    </Link>
                    <Link to="/contact-us" className="nav-link">
                    Contact Us
                    </Link>
                    <Link to="/profile-details" className="nav-link">
                    Profile
                    </Link>
                    <Link to="/post-create" className="nav-link">
                    Create Post
                    </Link>
                    <Link to="/post-details" className="nav-link">
                    View Post
                    </Link>
                </div> 
                <div className='nav-btn'>
                    <Link to="/login-register" className='nav-btn-link'>Login/Register</Link>
                </div>
            </div>
        </div>
    </>
  );
}

export default Navbar