import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';

function LatestPost({
    _id,
    imgUrl,
    title,
    category,
}) {
  return (
      <div className='allPosts-info'>
        <img src={imgUrl}></img>
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link to={`/posts/${_id}/details`}><button className='details-button'>Details</button></Link>
      </div>    
  )
}

export default LatestPost;