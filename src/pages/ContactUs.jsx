import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='email'>
        <div className="email-content">
            <h1>Get Access to Members Only Perks</h1>
            <p>Sign up for our newsletter below to get $100 off your first
                personal training session!
            </p>
            <form className='newsletter-form' action='#'>
                <div className="form-wrap">
                    <label for='email'>
                        <input type='email' placeholder='Enter your email' id='email' />
                    </label>
                    <button className='button' type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactUs;