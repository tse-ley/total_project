import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ token }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    items: [],
    totalPrice: 0,
    orderTime: '',
    specialInstructions: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Order created successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Order</h2>
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
        <label>Items (JSON format):</label>
        <textarea
          value={JSON.stringify(formData.items)}
          onChange={(e) => setFormData({...formData, items: JSON.parse(e.target.value)})}
          required
        />
      </div>
      <div>
        <label>Total Price:</label>
        <input
          type="number"
          value={formData.totalPrice}
          onChange={(e) => setFormData({...formData, totalPrice: parseFloat(e.target.value)})}
          step="0.01"
          required
        />
      </div>
      <div>
        <label>Order Time:</label>
        <input
          type="datetime-local"
          value={formData.orderTime}
          onChange={(e) => setFormData({...formData, orderTime: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Special Instructions:</label>
        <textarea
          value={formData.specialInstructions}
          onChange={(e) => setFormData({...formData, specialInstructions: e.target.value})}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrderForm;