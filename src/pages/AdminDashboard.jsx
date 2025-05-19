import React, { useState } from 'react';
import axios from 'axios';
import ReservationForm from '../components/ReservationForm';
import OrderForm from '../components/OrderForm';

const AdminDashboard = () => {
  const [token, setToken] = useState(null);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', loginData);
      setToken(response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };

  if (!token) {
    return (
      <div>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <ReservationForm token={token} />
        </div>
        <div style={{ flex: 1 }}>
          <OrderForm token={token} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;