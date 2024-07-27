import React from 'react';
import './Logout.css';
import {Navigate} from 'react-router-dom'
import useAuthContext from '../contexts/AuthContext';
import { useLogout } from '../hooks/useAuth';


function Logout() {
  const logout = useLogout();

  logout();

  return <Navigate to="/" />

}

export default Logout;