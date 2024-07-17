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
                    <Link to="/dashboard" className="nav-link">
                    Dashboard
                    </Link>
                    <Link to="/services" className="nav-link">
                    Services
                    </Link>
                    <Link to="/contact-us" className="nav-link">
                    Contact Us
                    </Link>
                </div> 
                <div className='nav-btn'>
                    <div to="/sign-in" className='nav-btn-link'>Sign In</div>
                    <div to="/sign-up" className='nav-btn-link'>Register</div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Navbar