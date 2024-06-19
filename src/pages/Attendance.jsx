import React from 'react';
import { useParams } from 'react-router-dom';
import { attendanceCourses } from '../data/AttendanceCoursesData';

const Attendance = () => {
  const { id } = useParams();
  const course = attendanceCourses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleAttendance = () => {
    alert(`Attendance marked for ${course.title}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
      <p className="mb-4">{course.description}</p>
      <p className="mt-4">Category: {course.category}</p>
      <button onClick={handleAttendance} className="px-4 py-2 bg-blue-500 text-white rounded mt-2">Mark Attendance</button>
    </div>
  );
};

export default Attendance;
