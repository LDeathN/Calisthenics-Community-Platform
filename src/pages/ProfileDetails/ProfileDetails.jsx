import React from 'react'
import './ProfileDetails.css'
import { useGetProfile } from '../../hooks/useProfile';
import { useAuthContext } from '../../contexts/AuthContext';

function ProfileDetails() {
    const { userId } = useAuthContext();
    const [user] = useGetProfile(userId);
    console.log(user);

    return (
        <div className='wrapper-profile'>
            <div className='form-box-profile'>
                <form action="">
                    <h1>Profile Page</h1>
                    <div className='profile-box'>
                        <img className='profile-img' src={user.imgUrl ? (user.imgUrl) : ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9_MLENF5iGUwFKCy_2vcN9Aecfg1xm5MgA&usqp=CAU')}/>
                        <div>
                            <div className='input-box'>
                                First Name: <span>{user.firstName ? (user.firstName) : ('Ivan')}</span>
                            </div>
                            <div className='input-box'>
                                Last Name: <span>{user.lastName ? (user.lastName) : ('Ivanov')}</span>
                            </div>
                            <div className='input-box'>
                                Age: <span>{user.age ? (user.age) : (18)}</span>
                            </div>
                        </div> 
                    </div>
                    <div className='input-box'>
                        Username: {user.username ? (user.username) : ('Anonymous')}
                    </div>
                    <div className='input-box'>
                        Email: {user.email}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileDetails;