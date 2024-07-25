import React, { useState } from 'react'
import './PostDetails.css'
import { useParams } from 'react-router-dom';
import commentsApi from '../api/comments-api';
import { useGetOnePosts } from '../hooks/usePosts';

function PostDetails() {
  const { postId } = useParams();
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [post, setPost] = useGetOnePosts(postId);
  
  const commentSubmitHandler = async (e) => {
    e.preventDefault();

    const newComment = await commentsApi.create(postId, username, comment);
    
    setPost(prevState => ({
        ...prevState,
        comments: {
            ...prevState.comments,
            [newComment._id]: newComment,
        }
    }));

    setUsername('');
    setComment('');
  }

  return (
    <div className='wrapper-post-details'>
        <div className='form-box-post-details'>
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

                <div className='comments-details'>
                    <h3>Comments</h3>
                    <ul>
                        {Object.keys(post.comments || {}).length > 0
                        ? Object.values(post.comments).map(comment => (
                            <li key={comment._id} className='comment'>
                                <p>{comment.username}: {comment.text}</p>
                            </li>
                        ))
                        : <p className='no-comments'>No comments</p>
                        }       
                    </ul>
                    
                </div>

                <h1>Add new comment:</h1>
                
                <form className='form' onSubmit={commentSubmitHandler}>       
                    <div className='comment-box'>
                        <input
                        type='text'
                        placeholder='Pesho'
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        />
                        <textarea 
                        name='comment' 
                        placeholder='Comment......' 
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        />
                        <input className='btn submit' type='submit' value="Add Comment"/>
                    </div>
                </form>

                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
        </div>
    </div>
  )
}

export default PostDetails;