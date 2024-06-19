import React from 'react';
import { useParams } from 'react-router-dom';

const Attendance = () => {
  const { id } = useParams();

  const courses = [
    { id: 1, title: 'React JS', description: 'Learn the basics of React.' },
    { id: 2, title: 'Advanced React', description: 'Dive deeper into React.' },
    { id: 3, title: 'Introduction to Economics', description: 'Basics of economics.' },
    { id: 4, title: 'Python for Beginners', description: 'Learn Python from scratch.' },
    { id: 5, title: 'Math for Computer Science', description: 'Learn Math is important for Computer Science Students.' },
    { id: 6, title: 'Artificial Intelligent', description: 'Learn AI.' },
    { id: 7, title: 'Calculus', description: 'Calculus is easy to learn.' },
  ];

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{course.title} - Attendance</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default Attendance;
