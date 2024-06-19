import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isLoggedIn, onLogout, userRole }) => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-4">
        <Link to="/" className="text-xl font-bold"></Link>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="flex items-center p-2 text-sm font-medium rounded hover:bg-gray-700">
              <span className="material-icons mr-2"></span>
              {userRole === 'admin' ? 'Dashboard' : 'Attendance'}
            </Link>
          </li>
          {userRole === 'admin' ? (
            <>
              <li className="mb-2">
                <Link to="/student-list" className="flex items-center p-2 text-sm font-medium rounded hover:bg-gray-700">
                  <span className="material-icons mr-2"></span>
                  Student List
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/data-analytics" className="flex items-center p-2 text-sm font-medium rounded hover:bg-gray-700">
                  <span className="material-icons mr-2"></span>
                  Data Analytics
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/data-chart" className="flex items-center p-2 text-sm font-medium rounded hover:bg-gray-700">
                  <span className="material-icons mr-2"></span>
                  Data Chart
                </Link>
              </li>
            </>
          ) : (
            <li className="mb-2">
              <Link to="/courses" className="flex items-center p-2 text-sm font-medium rounded hover:bg-gray-700">
                <span className="material-icons mr-2"></span>
                Courses
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
