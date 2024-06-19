import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import courses from '../data/CoursesData';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleCardClick = (id) => {
    navigate(`/course/${id}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCourses.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Courses</h2>
      <div className="mb-4">
        <button
          onClick={() => handleCategoryClick('All')}
          className={`mr-2 px-4 py-2 rounded ${selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'}`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('Computer Science')}
          className={`mr-2 px-4 py-2 rounded ${selectedCategory === 'Computer Science' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'}`}
        >
          Computer Science
        </button>
        <button
          onClick={() => handleCategoryClick('Economy')}
          className={`mr-2 px-4 py-2 rounded ${selectedCategory === 'Economy' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'}`}
        >
          Economy
        </button>
        <button
          onClick={() => handleCategoryClick('Mathematics')}
          className={`mr-2 px-4 py-2 rounded ${selectedCategory === 'Mathematics' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'}`}
        >
          Mathematics
        </button>
        <button
          onClick={() => handleCategoryClick('Artificial Intelligent')}
          className={`mr-2 px-4 py-2 rounded ${selectedCategory === 'Artificial Intelligent' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white'}`}
        >
          Artificial Intelligent
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCardClick(course.id)}
            className="p-4 border border-gray-300 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
            <img src={course.imageUrl} alt="Course" className="w-full h-40 object-cover mb-4" />
          </div>
        ))}
      </div>
      <div className='mt-8 flex justify-center'>
        <nav>
          <ul className='pagination flex items-center'>
            <li className='page-item'>
              <button
                onClick={goToPreviousPage}
                className={`page-link px-3 py-1 mr-2 border rounded ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </li>
            {pageNumbers.map(number => (
              <li key={number} className={`page-item mx-1 ${currentPage === number ? 'active' : ''}`}>
                <button onClick={() => setCurrentPage(number)} className='page-link px-3 py-1 border rounded'>
                  {number}
                </button>
              </li>
            ))}
            <li className='page-item'>
              <button
                onClick={goToNextPage}
                className={`page-link px-3 py-1 ml-2 border rounded ${currentPage === pageNumbers.length ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={currentPage === pageNumbers.length}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Courses;
