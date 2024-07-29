import React from 'react'
import {Link} from 'react-router-dom';
import './Catalog.css';

function CatalogListItem({
    _id,
    title,
    category,
}) {
  return (
      <div className='allPosts-info-catalog'>
        <h2>{title} -</h2>
        <h6>{category}</h6>
        <div className='spacer'></div>
        <Link to={`/posts/${_id}/details`}><button className='details-button-catalog'>Details</button></Link>
      </div>    
  )
}

export default CatalogListItem;