import React, { useEffect, useState } from 'react'
import './Catalog.css';
import * as postsAPI from '../api/posts-api';
import CatalogListItem from './CatalogListItem';

function Catalog() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    postsAPI.getAll()
      .then(result => setPosts(result));
  }, []);

  return (
    <section id='catalog-page'>
      <h1>All Posts</h1>

      {posts.length > 0
        ? posts.map(post => <CatalogListItem key={post._id} {...post} />)
        : <h3 className='no-posts'>No posts yet</h3>
      }

    </section>
  );
}

export default Catalog;