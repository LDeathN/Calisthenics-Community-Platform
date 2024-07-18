import React from 'react'
import './Coaches.css';

function Coaches() {
  return (
    <div className='team'>
        <div className="team-wrapper">
            <div className="team-text">
                <p className="topline">Private Coaching</p>
                <h1>Meet our Trainers</h1>
                <p className="team-desc">
                    All our personal trainers have over 20 years of experience combined.
                    Each trainer specializes in both static and dynamic focused workouts.
                </p>
            </div>

            <div className="team-text">
                <p className="topline">Free Trial</p>
                <h1>7 Day Trial</h1>
                <p className="team-desc">
                    You can work with each trainer up to 7 days for free in order
                    to see if they are a good fit for your goals.
                </p>
            </div>
            <div className="team-card">
                <p>Marcus</p>
                <img src='https://i1.feedspot.com/original/5623029.jpg' className='team-img' alt='person' />
            </div>

            <div className="team-card">
                <p>Daniel</p>
                <img src='https://preview.redd.it/calisthenics-athlete-v0-j34u994wcj5a1.jpg?width=1080&crop=smart&auto=webp&s=ebd98e22cd7b6431d579aa199bf15e34fb16b31a' className='team-img' alt='person' />
            </div>

            <div className="team-card">
                <p>JD</p>
                <img src='https://media.licdn.com/dms/image/C5603AQEoYLZTxZp3PQ/profile-displayphoto-shrink_800_800/0/1652990267836?e=2147483647&v=beta&t=oJDQ6k9G1ZyxnveIHLvPFFGzgy34UQFcgjkdhaYN7kk' className='team-img' alt='person' />
            </div>

            <div className="team-card">
                <p>Makane</p>
                <img src='https://preview.redd.it/cwbgic5af6791.jpg?auto=webp&s=55b14196de7f6d216eb682a1aa8a0409e2541c17' className='team-img' alt='person' />
            </div>
        </div>
    </div>
  )
}

export default Coaches;