import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>Welcome to the admin dashboard. Here you can manage courses and view student lists.</p>
      <Link to="/student-list" className="text-blue-500 underline">View Student List</Link>
    </div>
  );
};

export default AdminDashboard;
