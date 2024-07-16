import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Calisthenics Community Platform</h1>
      <p>Your go-to platform for all things calisthenics. Connect, share, and track your progress with the community.</p>
      <Link to="/workouts">Explore Workouts</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
