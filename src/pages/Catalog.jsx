import React, { useEffect, useState } from 'react'
import './Catalog.css';
import * as postsAPI from '../api/posts-api';

function Catalog() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    postsAPI.getAll()
    .then(result => setPosts(result));
  }, []);

  return (
    <h1>Catalog (Not Finished)</h1>
  )
}

export default Catalog;