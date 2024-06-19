import React from 'react';

const DataAnalytics = () => {
  const students = [
    { name: 'Vincent Christian', attendance: '100%', performance: 'Excellent' },
    { name: 'Lee Donna', attendance: '95%', performance: 'Excellent' },
    { name: 'John Doe', attendance: '90%', performance: 'Excellent' },
    { name: 'Jane Smith', attendance: '80%', performance: 'Good' },
    { name: 'Peter Johnson', attendance: '70%', performance: 'Good' },
    { name: 'Kate Miller', attendance: '25%', performance: 'Bad' },
    { name: 'Alice Brown', attendance: '15%', performance: 'Bad' },
  ];

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold">Data Analytics</h1>
      <p>Here you can check the attendance and performance of students.</p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Student Attendance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-center text-xs leading-4 font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-center text-xs leading-4 font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Attendance
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-center text-xs leading-4 font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-white text-center">{student.name}</td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 dark:text-white text-center">{student.attendance}</td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-center" style={{ color: student.performance === 'Bad' ? 'red' : 'inherit' }}>{student.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
