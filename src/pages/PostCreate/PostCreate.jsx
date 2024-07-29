import React from 'react'
import './PostCreate.css'
import { useForm } from '../../hooks/useForm';
import { useCreatePost } from '../../hooks/usePosts';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    title: '',
    category: '',
    imgUrl: '',
    summary: '',
}

function PostCreate() {
    const navigate = useNavigate();
    const createPost = useCreatePost();

    const createHandler = async (values) => {
        try {
            const { _id: postId } = await createPost(values);
            
            navigate(`/posts/${postId}/details`);
        } catch (err) {
            console.log(err.message);
        }      
    };

    const {
        values,
        changeHangler,
        submitHandler,
    } = useForm(initialValues, createHandler);

  return (
    <div className='wrapper-post'>
        <div className='form-box-post'>
            <form onSubmit={submitHandler}>
                <h1>Create Post</h1>
                <div className='input-box'>
                    <input 
                    type="text" 
                    id="title" 
                    name='title' 
                    placeholder='Title' 
                    required 
                    value={values.title}
                    onChange={changeHangler}
                    />
                </div>
                <div className='input-box'>
                    <input 
                    type='text' 
                    id='category' 
                    name='category' 
                    placeholder='Category' 
                    required 
                    value={values.category}
                    onChange={changeHangler}
                    />
                </div>
                <div className='input-box'>
                    <input 
                    type='url' 
                    id='imgUrl' 
                    name='imgUrl' 
                    placeholder='URL for image' 
                    value={values.imgUrl}
                    onChange={changeHangler}
                    />
                </div>
                <div className='input-box'>
                    <input 
                    type='text' 
                    id='summary' 
                    name='summary' 
                    placeholder='Summary' 
                    value={values.summary}
                    onChange={changeHangler}
                    />
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    </div>
  )
}

export default PostCreate;
