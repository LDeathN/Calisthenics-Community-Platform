import React, { useEffect, useState } from 'react'
import postsAPI from '../api/posts-api';

export function useGetAllPosts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        postsAPI.getAll()
        .then(result => setPosts(result));
    }, []);

    return [posts, setPosts];
}