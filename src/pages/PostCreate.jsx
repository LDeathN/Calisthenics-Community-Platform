import React from 'react'
import './PostCreate.css'

function PostCreate() {
  return (
    <div className='wrapper-post'>
        <div className='form-box-post'>
            <form action="">
                <h1>Create Post</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Title' required />
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Category' required />
                </div>
                <div className='input-box'>
                    <input type='url' placeholder='URL for image' />
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Summary' />
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    </div>
  )
}

export default PostCreate;
