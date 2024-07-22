import React, { useEffect, useState } from 'react'
import './PostDetails.css'
import { useParams } from 'react-router-dom';
import postsAPI from "../api/posts-api"

function PostDetails() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    (async () => {
        const result = await postsAPI.getOne(postId);

        setPost(result);
    })();
  }, []);

  return (
    <div className='wrapper-post-details'>
        <div className='form-box-post-details'>
            <form action="">
                <h1>Post Details</h1>
                <div className='post-details-box'>
                    <img className='post-details-img' src={post.img} />
                    <div>
                        <div className='input-box'>
                            <h3>{post.title}</h3>
                        </div>
                        <div className='input-box'>
                            <p>Category: {post.category}</p>
                        </div>
                    </div>
                </div>
                <div className='input-box summary'>
                    <p>Summary: {post.summary}</p>
                </div>

                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default PostDetails;