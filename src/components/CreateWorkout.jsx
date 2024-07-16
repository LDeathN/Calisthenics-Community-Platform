import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../firebase';

export default function CreateWorkout() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('workouts').add({
        title: titleRef.current.value,
        description: descriptionRef.current.value
      });
      navigate('/workouts');
    } catch {
      setError('Failed to create workout');
    }
  };

  return (
    <div>
      <h1>Create Workout</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} placeholder="Title" required />
        <textarea ref={descriptionRef} placeholder="Description" required />
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
}
