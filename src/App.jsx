import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DataChart from './pages/DataChart';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail'; 
import AdminDashboard from './pages/AdminDashboard';
import StudentList from './pages/StudentList';
import DataAnalytics from './pages/DataAnalytics';
import StudentAttendance from './pages/StudentAttendance';
import ChatbotIcon from './components/ChatbotIcon';
import Login from './components/Login';
import Attendance from './pages/Attendance'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  const handleLogin = (userinfo) => {
    setIsLoggedIn(true);
    setUserRole(userinfo.role);
    console.log("Logging in with", userinfo);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <div className="flex">
          <Sidebar isLoggedIn={isLoggedIn} onLogout={handleLogout} userRole={userRole} />
          <div className="flex-1">
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <main className="p-4 relative">
              <Routes>
                {userRole === 'admin' ? (
                  <>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/student-list" element={<StudentList />} />
                    <Route path="/data-analytics" element={<DataAnalytics />} />
                    <Route path="/data-chart" element={<DataChart />} />
                  </>
                ) : (
                  <>
                    <Route path="/" element={<StudentAttendance />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/course/:id" element={<CourseDetail />} /> 
                    <Route path="/attendance/:id" element={<Attendance />} /> 
                  </>
                )}
              </Routes>
              <ChatbotIcon />
            </main>
          </div>
        </div>
      ) : (
        <div className='App'>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </Router>
  );
};

export default App;
