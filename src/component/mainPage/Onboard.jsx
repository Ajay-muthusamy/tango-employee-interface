import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Onboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const organizationDetails = JSON.parse(
    localStorage.getItem("organizationDetails")
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [employeedata, setemployeedata] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEmail("");
    setError("");
  };

  const companyMail = organizationDetails.organizationDetails.companyMail;
  console.log("my email right", companyMail);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      if (!companyMail) return;

      try {
        const response = await axios.get(
          `https://employe-tango-backend.onrender.com/tango/fetchdata/${companyMail}`
        );
        setemployeedata(response.data.employees);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployeeData();
  }, [companyMail]);

  function handleSend(data) {
    console.log(data);
    navigate("/homepage/profile", { state: data });
  }
  return (
    <div className="px-8 py-4">
      <div className="overflow-x-scroll w-[160vh] ms-20 mt-10">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">
                Company Mail
              </th>
              <th className="px-4 py-2 border-b border-gray-200">
                Profile Photo
              </th>
              <th className="px-4 py-2 border-b border-gray-200">
                Employee ID
              </th>
              <th className="px-4 py-2 border-b border-gray-200">First Name</th>
              <th className="px-4 py-2 border-b border-gray-200">Last Name</th>
              <th className="px-4 py-2 border-b border-gray-200">
                Designation
              </th>
              <th className="px-4 py-2 border-b border-gray-200">Email</th>
              <th className="px-4 py-2 border-b border-gray-200">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {employeedata.map((data, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100"
                onClick={() => handleSend(data)}
              >
                <td className="px-4 py-2 border-b border-gray-200">
                  {data.companyMail}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <img
                    src={`https://employe-tango-backend.onrender.com/${data.profilePhoto}`}
                    alt=""
                    className="w-24"
                  />
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {data.employeeId}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {data.firstName}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {data.lastName}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {data.designation}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {data.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {data.phoneNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Onboard;
