import React from 'react'
import {Link} from 'react-router-dom';

function CatalogListItem({
    _id,
    img,
    title,
    category,
}) {
  return (
    <div className="allPosts">
        <div className='allPosts-info'>
          <img src={img}></img>
          <h6>{category}</h6>
          <h2>{title}</h2>
          <Link to={`/posts/${_id}/details`} className='details-button'>Details</Link>
        </div>    
      </div>
  )
}

export default CatalogListItem;