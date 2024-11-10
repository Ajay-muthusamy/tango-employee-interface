import React from 'react';

const TimeLog = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Time Log</h1>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 py-3 px-4 text-left text-gray-600">Date</th>
                <th className="border-b-2 py-3 px-4 text-left text-gray-600">Task</th>
                <th className="border-b-2 py-3 px-4 text-left text-gray-600">Start Time</th>
                <th className="border-b-2 py-3 px-4 text-left text-gray-600">End Time</th>
                <th className="border-b-2 py-3 px-4 text-left text-gray-600">Total Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border-b py-3 px-4 text-gray-800">2024-11-01</td>
                <td className="border-b py-3 px-4 text-gray-800">Task 1</td>
                <td className="border-b py-3 px-4 text-gray-800">09:00 AM</td>
                <td className="border-b py-3 px-4 text-gray-800">05:00 PM</td>
                <td className="border-b py-3 px-4 text-gray-800">8 hrs</td>
              </tr> 
            </tbody>
          </table>
        </div>
        
        
      </div>
    </div>
  );
};

export default TimeLog;
