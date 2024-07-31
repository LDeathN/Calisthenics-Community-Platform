import React from 'react'
import './PostDelete.css';
import { Link, useParams } from 'react-router-dom';

function PostDelete() {
    const { postId } = useParams();

    return (
    <div className='wrapper-post'>
        <div className='form-box-post'>
            <form >
                <h1>Are you sure you want to delete this post?</h1>
             
                <button className='post-delete-button'>Delete</button>
                <Link to={`/posts/${postId}/details`}><button className='go-back'>Back</button></Link>
            </form>
        </div>
    </div>
    )
}

export default PostDelete;