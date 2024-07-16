import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkoutCatalog from './components/WorkoutCatalog';
import WorkoutDetails from './components/WorkoutDetails';
import CreateWorkout from './components/CreateWorkout';
import EditWorkout from './components/EditWorkout';
import DeleteWorkout from './components/DeleteWorkout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="main">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<WorkoutCatalog />} />
          <Route path="/workouts/:id" element={<WorkoutDetails />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/create-workout" element={<PrivateRoute><CreateWorkout /></PrivateRoute>} />
          <Route path="/edit-workout/:id" element={<PrivateRoute><EditWorkout /></PrivateRoute>} />
          <Route path="/delete-workout/:id" element={<PrivateRoute><DeleteWorkout /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  );
}

export default App
