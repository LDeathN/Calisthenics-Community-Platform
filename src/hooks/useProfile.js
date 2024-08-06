import { useEffect, useState } from 'react';
import profileAPI from '../api/profiles-api';

export function useGetProfile(userId) {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        (async () => {
            const {password: _, ...userData} = await profileAPI.getOne();
    
            setProfile(userData);
            
        })();
      }, [userId]);
      
    return [
        profile,
        setProfile,
    ];
}