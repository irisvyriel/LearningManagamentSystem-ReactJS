import React from 'react';

const students = [
  { id: 1, name: 'John Doe', course: 'Mathematics' },
  { id: 2, name: 'Jane Smith', course: 'Mathematics' },
  { id: 3, name: 'Peter Johnson', course: 'Machine Learning' },
  { id: 3, name: 'Sam Johnson', course: 'Machine Learning' },
  { id: 4, name: 'Vincent Christian', course: 'Machine Learning' },
  { id: 5, name: 'Lee Donna', course: 'Computer Science' },
  { id: 6, name: 'Kate Miller', course: 'Computer Science' },
  { id: 7, name: 'Alice Brown', course: 'Artificial Intelligent' },
];

const StudentList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <table className="min-w-full bg-gray-500 border text-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
