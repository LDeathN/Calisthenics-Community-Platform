import React from 'react'
import './Membership.css';
import { FaDumbbell, FaBicycle, FaMedal, FaCheck } from 'react-icons/fa';

function Membership() {
  return (
    <div className='memberships'>
      <h1>View Our Plans</h1>
      <p className="membership-desc">Get Started today and receive 25% off your first month</p>
      <div className="membership-wrapper">
        <div className="membership-card">
          <div className="membership-title">
            <FaDumbbell className='icon' />
            <h3>Starter</h3>
          </div>
          <div className="membership-perks">
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Get access to the entire gym</p>
            </div>
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Group Classes</p>
            </div>
            <p className='bolded'>$29 per month</p>
          </div>
          <a href='/' className='button'>Sign Up</a>
        </div>

        <div className="membership-card">
          <div className="membership-title">
            <FaBicycle className='icon' />
            <h3>Silver</h3>
          </div>
          <div className="membership-perks">
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Get access to the entire gym</p>
            </div>
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Personal Workout and Diet Plan</p>
            </div>
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Group Classes</p>
            </div>
            <p className='bolded'>$39 per month</p>
          </div>
          <a href='/' className='button'>Sign Up</a>
        </div>

        <div className="membership-card">
          <div className="membership-title">
            <FaMedal className='icon' />
            <h3>Gold</h3>
          </div>
          <div className="membership-perks">
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Get access to the entire gym</p>
            </div>
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Personal Workout and Diet Plan</p>
            </div>
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Private Personal Training</p>
            </div>
            <div className='membership-perk'>
              <FaCheck  className='check'/><p>Group Classes</p>
            </div>
            <p className='bolded'>$59 per month</p>
          </div>
          <a href='/' className='button'>Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Membership;