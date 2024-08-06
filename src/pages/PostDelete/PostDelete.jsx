import React from 'react'
import './PostDelete.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import postsAPI from '../../api/posts-api';

function PostDelete() {
    const { postId } = useParams();
    const navigate = useNavigate();

    const postDeleteHandler = async (event) => {
        event.preventDefault();
        try {
            await postsAPI.remove(postId);
            navigate('/');

        }  catch (err) {
            console.log(err.message);
        } 
        
    }
    return (
    <div className='wrapper-post'>
        <div className='form-box-post'>
            <form >
                <h1>Are you sure you want to delete this post?</h1>
             
                <button onClick={postDeleteHandler} className='post-delete-button'>Delete</button>
                <Link to={`/posts/${postId}/details`}><button className='go-back'>Back</button></Link>
            </form>
        </div>
    </div>
    )
}

export default PostDelete;