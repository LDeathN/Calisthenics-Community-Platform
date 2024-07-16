import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const { currentUser } = useAuth();

  return !currentUser ? children : <Navigate to="/dashboard" />;
}
