import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';

export default function WorkoutCatalog() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const workoutsCollection = await firestore.collection('workouts').get();
      setWorkouts(workoutsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1>Workout Catalog</h1>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>{workout.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
