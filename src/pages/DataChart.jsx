import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const students = [
    { id: 1, name: 'John Doe', status: 'Active' },
    { id: 2, name: 'Jane Smith', status: 'Inactive' },
    { id: 3, name: 'Sam Johnson', status: 'Active' },
    { id: 4, name: 'Vincent Christian', status: 'Active' },
    { id: 5, name: 'Sam Johnson', status: 'Active' },
    { id: 6, name: 'Sam Johnson', status: 'Active' },
    { id: 7, name: 'Alice Brown', status: 'Inactive' },
  ];

  const activeStudents = students.filter(student => student.status === 'Active').length;
  const inactiveStudents = students.filter(student => student.status === 'Inactive').length;

  const data = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        label: 'Students',
        data: [activeStudents, inactiveStudents],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Students Data',
      },
    },
  };

  return (
    <div className="p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
