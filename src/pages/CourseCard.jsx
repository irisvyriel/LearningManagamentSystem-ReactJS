import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="p-4 border border-gray-200 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out 
      transform hover:-translate-y-1 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
    </div>
  );
};

export default CourseCard;
