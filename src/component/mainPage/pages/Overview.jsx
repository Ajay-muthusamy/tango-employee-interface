import React, { useEffect, useState } from "react";
import bg from "../../../assets/bg.jpg";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Overview = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const organizationDetails = JSON.parse(
    localStorage.getItem("organizationDetails")
  );

  const companyMail = organizationDetails.organizationDetails.companyMail;
  console.log(companyMail);

  const [employeedata, setemployeedata] = useState([]);

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

  console.log(employeedata);

  function handlesend(data) {
    navigate("homepage/profile", { state: data });
  }

  return (
    <div className="bg-gray-200">
      <div>
        <img src={bg} alt="Background" className="w-full h-auto" />
      </div>

      <main className="px-4 md:px-20 flex gap-10">
        <div>
          <div className="mt-10 relative -top-32">
            <div className="bg-white w-64 flex flex-col items-center text-center p-4 rounded-lg">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                alt="Profile"
                className="w-28 h-28 relative -top-10 border-2 border-gray-300 mb-2 rounded-md"
              />
              <div className="relative -top-5">
                <h1 className="text-lg font-semibold text-gray-800">
                  {organizationDetails.organizationDetails.firstName}
                </h1>
                <h2 className="text-sm text-gray-600">
                  {organizationDetails.organizationDetails.designation}
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-10 relative -top-32 font-poppins">
            <div className="bg-white w-64 p-5 rounded-lg border border-gray-300">
              <h1 className="font-semibold text-lg mb-4">Reportees</h1>

              {employeedata.map((data, index) => (
                <div
                  className="flex gap-5 items-center border-b-2 mb-2 pb-2 cursor-pointer"
                  onClick={() => handlesend(data)}
                  key={index}
                >
                  <img
                    src={`https://employe-tango-backend.onrender.com/${data.profilePhoto}`}
                    alt="Reportee Profile"
                    className="w-16  rounded-md"
                  />
                  <div>
                    <h1>
                      {data.employeeId} {data.firstName}
                    </h1>
                    <span
                      className={`text-sm ${
                        data.checkinStatus ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {data.checkinStatus ? "Checked In" : "Yet to Check In"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Overview;
