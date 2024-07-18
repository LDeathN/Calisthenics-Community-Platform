import React from 'react'
import './Footer.css'
import {FaInstagram, FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-desc">
                <h1>ThenX Program</h1>
                <p>Luxury fitness gym located in downtown Miami.</p>
                <p id='phone'>305 - 123 - 4568</p>
            </div>
            <div className="footer-links">
                <h2 className="footer-title">Contact Us</h2>
                <a href='#' className='footer-link'>Contact</a>
                <a href='#' className='footer-link'>Support</a>
                <a href='#' className='footer-link'>Sponsorships</a>
            </div>
        </div>
        <div className="footer-wrapper">
            <div className="footer-links">
                <h2 className="footer-title">Memberships</h2>
                <a href='#' className='footer-link'>Pricing</a>
                <a href='#' className='footer-link'>Plans</a>
                <a href='#' className='footer-link'>FAQ</a>
            </div>

            <div className="footer-links">
                <h2 className="footer-title">Social Media</h2>
                <a href='#' className='footer-link'><FaInstagram /> Instagram</a>
                <a href='#' className='footer-link'><FaFacebook /> Facebook</a>
                <a href='#' className='footer-link'><FaYoutube /> Youtube</a>
                <a href='#' className='footer-link'><FaTwitter /> Twitter/X</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;