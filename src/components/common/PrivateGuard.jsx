import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext';
import { Navigate, Outlet } from "react-router-dom";

function PrivateGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login-register" />
}

export default PrivateGuard;