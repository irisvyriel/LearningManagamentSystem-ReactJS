import React, { useState, useEffect } from 'react';
import logo from '../assets/images/AthenaIQ Logo.png'; 

const Header = ({ onLogout }) => { 
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className='bg-blue-600 dark:bg-gray-800 text-white p-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className='text-xl'>AthenaIQ LMS</h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className='bg-white dark:bg-gray-700 text-blue-600 dark:text-white p-2 rounded mr-2'
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          onClick={onLogout} 
          className='bg-white dark:bg-gray-700 text-blue-600 dark:text-white p-2 rounded'
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
