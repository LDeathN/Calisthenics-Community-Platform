import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import { FaLock, FaEnvelope} from 'react-icons/fa';
import { useForm } from '../../hooks/useForm';
import { useLogin, useRegister } from '../../hooks/useAuth';

const initialValues = { email: '', password: '', 'confirm-password': '' };

function LoginRegister() {
    const [action, setAction] = useState('');

    const registerLink = () => {
        setError('');
        setAction(' active');
    }

    const loginLink = () => {
        setError('');
        setAction('');
    }

    
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const login = useLogin();
    const register = useRegister();
    
    const formHandler = async (values) => {
        try {
            if (action !== ' active') {
                await login(values.email, values.password)
            } else {
                if (values.password !== values['confirm-password']) {
                    return setError('Password missmatch!');
                }
                await register(values.email, values.password)
            }
            navigate('/');
        } catch (err) {
            setError(err.message);
        } 
    };

const {values, changeHangler, submitHandler} = useForm(
    initialValues,
    formHandler,
);


  return (
    <div className={`wrapper${action}`}>
        <div className='form-box login'>
            <form onSubmit={submitHandler}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input 
                    type="email" 
                    name='email'
                    placeholder='Email' 
                    value={values.email}
                    onChange={changeHangler}
                    />
                    <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                    <input 
                    type='password' 
                    name='password'
                    placeholder='Password' 
                    value={values.password}
                    onChange={changeHangler}
                    />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remeber me</label>
                    <a href="#">Forgor password?</a>
                </div>

                {error && (
                    <p>{error}</p>
                )}
                
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>              
                </div>
            </form>
        </div>

        <div className='form-box register'>
            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <div className='input-box'>
                    <input 
                    type="email" 
                    name='email'
                    placeholder='Email' 
                    value={values.email}
                    onChange={changeHangler}
                    />
                    <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                    <input 
                    type='password' 
                    name='password'
                    placeholder='Password' 
                    value={values.password}
                    onChange={changeHangler}
                    />
                    <FaLock className='icon' />
                </div>
                <div className='input-box'>
                    <input 
                    type='password' 
                    name='confirm-password'
                    placeholder='Confirm Password' 
                    value={values['confirm-password']}
                    onChange={changeHangler}
                    />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox' required/>I agree to the terms & conditions</label>
                </div>

                {error && (
                    <p>{error}</p>
                )}

                <button type="submit">Register</button>

                <div className="register-link">
                    <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>              
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginRegister;
