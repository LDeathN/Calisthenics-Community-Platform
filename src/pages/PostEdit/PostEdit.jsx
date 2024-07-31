import React from 'react'
import './PostEdit.css';
import { Link, useParams } from 'react-router-dom';

function PostEdit() {
    const { postId } = useParams();

    return (
        <div className='wrapper-post'>
            <div className='form-box-post'>
                <form >
                    <h1>Edit Post</h1>
                    <div className='input-box'>
                        <input 
                        type="text" 
                        id="title" 
                        name='title' 
                        placeholder='Title' 
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='text' 
                        id='category' 
                        name='category' 
                        placeholder='Category' 
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='url' 
                        id='imgUrl' 
                        name='imgUrl' 
                        placeholder='URL for image' 
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='text' 
                        id='summary' 
                        name='summary' 
                        placeholder='Summary' 
                        />
                    </div>

                    <Link to={`/posts/${postId}/details`} type="submit"><button className='post-edit-button'>Edit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default PostEdit;