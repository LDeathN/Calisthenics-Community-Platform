import React from 'react'
import './PostEdit.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useGetOnePosts } from '../../hooks/usePosts';
import postsAPI from '../../api/posts-api';

function PostEdit() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post] = useGetOnePosts(postId);
    const {
        changeHangler,
        submitHandler,
        values,
    } = useForm(post, async (values) => {
        await postsAPI.update(postId, values);
        navigate(`/posts/${postId}/details`);
    });

    return (
        <div className='wrapper-post'>
            <div className='form-box-post'>
                <form onSubmit={submitHandler}>
                    <h1>Edit Post</h1>
                    <div className='input-box'>
                        <input 
                        type="text" 
                        id="title" 
                        name='title' 
                        placeholder='Title' 
                        onChange={changeHangler}
                        value={values.title}
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='text' 
                        id='category' 
                        name='category' 
                        placeholder='Category' 
                        onChange={changeHangler}
                        value={values.category}
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='url' 
                        id='imgUrl' 
                        name='imgUrl' 
                        placeholder='URL for image' 
                        onChange={changeHangler}
                        value={values.imgUrl}
                        />
                    </div>
                    <div className='input-box'>
                        <input 
                        type='text' 
                        id='summary' 
                        name='summary' 
                        placeholder='Summary' 
                        onChange={changeHangler}
                        value={values.summary}
                        />
                    </div>

                    <button type='submit' className='post-edit-button'>Edit</button>
                </form>
            </div>
        </div>
    )
}

export default PostEdit;