import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';

const MusicApp = lazy(() => import('music/MusicApp'));

const Dashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/', { replace: true });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Dashboard ({role})</h2>
        <button onClick={handleLogout} style={{backgroundColor:"#008CBA", borderRadius:"30px"}}>Logout</button>
      </div>

      <Suspense fallback={<div>Loading Music Library...</div>}>
        <MusicApp />
      </Suspense>
    </div>
  );
};

export default Dashboard;









