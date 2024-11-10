import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const MainLeave = () => {
  const token = localStorage.getItem("token");
  const organizationDetails = JSON.parse(localStorage.getItem("organizationDetails"));
  const userEmail = organizationDetails.organizationDetails.email;

  const [leavedata, setleavedata] = useState({});
  
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(`https://employe-tango-backend.onrender.com/tango/employeleave/${userEmail}`);
        setleavedata(response.data.empleave);
      } catch (error) {
        console.log("Error fetching the LeaveTypes", error);
      }
    }
    fetchdata();
  }, [userEmail]);


  const leaveDataForChart = [
    { name: "Annual Leave", value: leavedata.annuaLeave || 0 },
    { name: "Casual Leave", value: leavedata.casualLeave || 0 },
    { name: "Medical Leave", value: leavedata.medicalLeave || 0 },
    { name: "Sick Leave", value: leavedata.sickLeave || 0 },
  ];

 
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <main className="h-[100vh] flex flex-col items-center justify-center pt-[80vh] px-4 bg-gray-50 overflow-y-scroll mt-[20] pb-[100vh]">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">Remaining Leave</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Annual Leave</h2>
          <p className="text-lg font-medium text-gray-700">{leavedata.annuaLeave || 0} days</p>
        </div>
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Casual Leave</h2>
          <p className="text-lg font-medium text-gray-700">{leavedata.casualLeave || 0} days</p>
        </div>
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Medical Leave</h2>
          <p className="text-lg font-medium text-gray-700">{leavedata.medicalLeave || 0} days</p>
        </div>
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Sick Leave</h2>
          <p className="text-lg font-medium text-gray-700">{leavedata.sickLeave || 0} days</p>
        </div>
      </div>

  
      <div className="mt-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">Leave Taken Chart</h2>
        <PieChart width={400} height={280} className="ms-56">
          <Pie
            data={leaveDataForChart}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {leaveDataForChart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>


      <div className="max-w-4xl w-full mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">Upcoming Holidays</h2>
          <p className="text-lg text-gray-600 mb-4">Our upcoming holidays for the year 2024:</p>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b pb-4">
              <span className="text-xl font-medium text-gray-700">Christmas - December 25, 2024</span>
              <span className="text-sm text-gray-500">1 day</span>
            </li>
            <li className="flex justify-between items-center border-b pb-4">
              <span className="text-xl font-medium text-gray-700">New Year's Day - January 1, 2025</span>
              <span className="text-sm text-gray-500">1 day</span>
            </li>
            <li className="flex justify-between items-center pb-4">
              <span className="text-xl font-medium text-gray-700">Republic Day - January 26, 2025</span>
              <span className="text-sm text-gray-500">1 day</span>
            </li>
          </ul>
        </div>

 
        
      </div>
    </main>
  );
};

export default MainLeave;
