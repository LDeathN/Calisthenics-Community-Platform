import React from 'react'
import './PostDetails.css'
import { useParams } from 'react-router-dom';
import { useGetOnePosts } from '../hooks/usePosts';
import {useForm} from '../hooks/useForm';
import { useAuthContext } from '../contexts/AuthContext';
import { useGetAllComments, useCreateComment } from '../hooks/useComments';

const initalValues = {
    comment: '',
};

function PostDetails() {
  const { postId } = useParams();
  const [comments, setComments] = useGetAllComments(postId);
  const createComment = useCreateComment();
  const [post] = useGetOnePosts(postId);
  const { isAuthenticated } = useAuthContext();
  const {
    changeHangler,
    submitHandler,
    values,
  } = useForm(initalValues, async ({ comment }) => {
    try {
        const newComment = await createComment(postId, comment);
        
        setComments(oldComments => [...oldComments, newComment]);
    } catch(err) {
        console.log(err.message);
    }
    
  });
  

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
                        {comments.map(comment => (
                            <li key={comment._id} className='comment'>
                                <p>Username: {comment.text}</p>
                            </li>
                            ))
                        }       
                    </ul>
                    {comments.length === 0 && <p className='no-comments'>No comments</p>}        
                </div>

                {isAuthenticated && (
                <div>
                    <h1>Add new comment:</h1>
                    
                    <form className='form' onSubmit={submitHandler}>       
                        <div className='comment-box'>
                            <textarea 
                            name='comment' 
                            placeholder='Comment......' 
                            onChange={changeHangler}
                            value={values.comment}
                            />
                            <input className='btn submit' type='submit' value="Add Comment"/>
                        </div>
                    </form>

                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                )}
        </div>
    </div>
  )
}

export default PostDetails;