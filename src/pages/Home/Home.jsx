import { useEffect, useState } from 'react';
import './Home.css';
import postsAPI from "../../api/posts-api";
import LatestPost from './LatestPost';

export default function Home() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await postsAPI.getAll();

      setLatestPosts(result.reverse().slice(0, 3));
    })();
  }, [])

  return (
    <div className='hero'>    
      <div className="hero-content">
        <h1>Welcome to the World </h1>
        <h1> of Calisthenics</h1>
        <div className="allPosts">
          {latestPosts.length > 0
            ? latestPosts.map(post => <LatestPost key={post._id} {...post}/>)
            : <p className='no-posts'>No posts yet</p>
          }
        </div>
      </div>
    </div>
  );
}
