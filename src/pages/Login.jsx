import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = () => {
    const token = btoa(`${username}:${role}`);
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin} style={{backgroundColor:"#008CBA", borderRadius:"30px"}}>Login</button>
    </div>


  );
};

export default Login;
