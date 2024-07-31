import { useEffect, useState } from 'react';
import profileAPI from '../api/profiles-api';

export function useGetProfile(userId) {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        (async () => {
            const result = await profileAPI.getOne(userId);
    
            setProfile(result);
        })();
      }, [userId]);
      
    return [
        profile,
        setProfile,
    ];
}