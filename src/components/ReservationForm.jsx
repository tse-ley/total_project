import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ token }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    partySize: 1,
    reservationTime: '',
    specialRequests: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reservations', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Reservation created successfully!');
    } catch (error) {
      console.error('Error creating reservation:', error);
      alert('Failed to create reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Reservation</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.customerName}
          onChange={(e) => setFormData({...formData, customerName: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.customerEmail}
          onChange={(e) => setFormData({...formData, customerEmail: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Party Size:</label>
        <input
          type="number"
          value={formData.partySize}
          onChange={(e) => setFormData({...formData, partySize: e.target.value})}
          min="1"
          required
        />
      </div>
      <div>
        <label>Reservation Time:</label>
        <input
          type="datetime-local"
          value={formData.reservationTime}
          onChange={(e) => setFormData({...formData, reservationTime: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Special Requests:</label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;