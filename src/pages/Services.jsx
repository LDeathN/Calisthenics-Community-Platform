import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import './Services.css';

function Services() {
  return (
    <div className='services'>
        <div className="services-container">
            <div>
                <p className='topline'>Features</p>
                <h1 className="services-heading">What we offer</h1>
                <div className="services-features">
                    <p className="services-feature">
                        <FaCheckCircle className='circle' />Group Classes
                    </p>
                    <p className="services-feature">
                        <FaCheckCircle className='circle' />Personal Workout Plans
                    </p>
                    <p className="services-feature">
                        <FaCheckCircle className='circle' />Personal Trainer Sessions
                    </p>
                    <p className="services-feature">
                        <FaCheckCircle className='circle' />Personal Diet Plans
                    </p>
                    <p className="services-feature">
                        <FaCheckCircle className='circle' />Feedback 24/7
                    </p>
                    <p className="services-feature">
                        <FaCheckCircle className='circle' />Indoor Pool
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;