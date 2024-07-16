import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditWorkout() {
  const { id } = useParams();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = async () => {
      const workoutDoc = await firestore.collection('workouts').doc(id).get();
      if (workoutDoc.exists) {
        const data = workoutDoc.data();
        titleRef.current.value = data.title;
        descriptionRef.current.value = data.description;
      }
    };

    fetchWorkout();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('workouts').doc(id).update({
        title: titleRef.current.value,
        description: descriptionRef.current.value
      });
      navigate(`/workouts/${id}`);
    } catch {
      setError('Failed to update workout');
    }
  };

  return (
    <div>
      <h1>Edit Workout</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} placeholder="Title" required />
        <textarea ref={descriptionRef} placeholder="Description" required />
        <button type="submit">Update Workout</button>
      </form>
    </div>
  );
}
