import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/CoursesData'; 

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
      <p className="mb-4">{course.description}</p>
      <div className="relative" style={{ paddingTop: '50.25%' }}> 
        <iframe
          src={course.videoUrl}
          title={course.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <p className="mt-4">Category: {course.category}</p>
    </div>
  );
};

export default CourseDetail;
