import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Attendance = () => {

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Attendance (%)',
        data: [95, 85, 90, 80, 100], 
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      },
    ],
  };

 
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Attendance (%)',
        },
        min: 0,
        max: 100,
      },
    },
  };


  const attendanceData = [
    { date: '2024-11-01', status: 'Present' },
    { date: '2024-11-02', status: 'Absent' },
    { date: '2024-11-03', status: 'Present' },
    { date: '2024-11-04', status: 'Present' },
    { date: '2024-11-05', status: 'Absent' },
  ];


  const leaveCount = attendanceData.filter(record => record.status === 'Absent').length;

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Attendance</h1>


        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Attendance</h2>
          <Line data={data} options={options} />
        </div>

       
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Leave Count</h3>
          <p className="text-gray-600">Number of days on leave (Absent): <span className="font-bold text-red-600">{leaveCount}</span></p>
        </div>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 py-3 px-4 text-left text-gray-600">Date</th>
                <th className="border-b-2 py-3 px-4 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border-b py-3 px-4 text-gray-800">{record.date}</td>
                  <td className="border-b py-3 px-4 text-gray-800">{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
