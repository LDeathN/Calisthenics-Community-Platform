import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { firestore } from '../firebase';

export default function DeleteWorkout() {
  const { id } = useParams();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await firestore.collection('workouts').doc(id).delete();
      navigate('/workouts');
    } catch {
      setError('Failed to delete workout');
    }
  };

  return (
    <div>
      <h1>Delete Workout</h1>
      <p>Are you sure you want to delete this workout?</p>
      <button onClick={handleDelete}>Yes, delete it</button>
      <button onClick={() => navigate(`/workouts/${id}`)}>Cancel</button>
      {error && <p>{error}</p>}
    </div>
  );
}
