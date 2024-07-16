import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {currentUser?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
