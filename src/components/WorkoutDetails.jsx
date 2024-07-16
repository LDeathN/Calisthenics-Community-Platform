import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { firestore } from '../firebase';

export default function WorkoutDetails() {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const workoutDoc = await firestore.collection('workouts').doc(id).get();
      if (workoutDoc.exists) {
        setWorkout(workoutDoc.data());
      }
    };

    fetchWorkout();
  }, [id]);

  return (
    <div>
      {workout ? (
        <>
          <h1>{workout.title}</h1>
          <p>{workout.description}</p>
          <Link to={`/edit-workout/${id}`}>Edit</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
