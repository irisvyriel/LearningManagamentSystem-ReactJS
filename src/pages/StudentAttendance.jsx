import React from 'react';
import { Link } from 'react-router-dom';
import { attendanceCourses } from '../data/AttendanceCoursesData';

const StudentAttendance = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Student Attendance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {attendanceCourses.map((course) => (
          <Link to={`/attendance/${course.id}`} key={course.id} className="block p-4 border border-gray-200 rounded shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img src={course.imageUrl} alt={course.title} className="w-full h-32 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-sm">Lecturer: {course.lecturer}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentAttendance;
