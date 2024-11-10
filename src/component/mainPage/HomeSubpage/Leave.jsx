import React, { useState } from "react";
import axios from "axios";

const Leave = () => {


    const token = localStorage.getItem("token");
  const organizationDetails = JSON.parse(
    localStorage.getItem("organizationDetails")
  );

  console.log(organizationDetails.organizationDetails);
  

  const companyMail = organizationDetails.organizationDetails.companyMail;
  const logo = organizationDetails.organizationDetails.profilePhoto;
  const employeeId = organizationDetails.organizationDetails.employeeId;
  const firstName = organizationDetails.organizationDetails.firstName;
  const email = organizationDetails.organizationDetails.email;
  const mobileNumber = organizationDetails.organizationDetails.mobileNumber;


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const openModal = (type) => {
    setLeaveType(type);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://employe-tango-backend.onrender.com/tango/api/empleave", {
        leaveType,
        startDate,
        endDate,
        reason,
        companyMail,
        logo,
        employeeId,
        firstName,
        email,
        mobileNumber
      });
      setIsModalOpen(false);
      setStartDate("");
      setEndDate("");
      setReason("");
    } catch (error) {
      console.error("Error applying for leave:", error);
    }
  };

  return (
    <div className="h-[50vh] overflow-y-scroll">
      <section>
        {["casualLeave", "medicalLeave", "annuaLeave", "sickLeave"].map((type, index) => (
          <div key={index} className="bg-white p-5 rounded-lg flex justify-between mt-3">
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://icons.veryicon.com/png/o/business/dynamic-office-icon/leave-6.png"
                  alt=""
                  className="w-10"
                />
              </div>
              <div>
                <h1 className="font-poppins">{type}</h1>
              </div>
            </div>
            <div>
              <button
                onClick={() => openModal(type)}
                className="px-6 py-2 rounded-lg bg-violet-400"
              >
                Apply leave
              </button>
            </div>
          </div>
        ))}

        <div>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-10">
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">Leave Policy</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our leave policy ensures work-life balance, giving employees time for rest and personal commitments.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li><strong>Casual Leave (CL):</strong> 12 days per year.</li>
            <li><strong>Medical Leave (ML):</strong> 10 days per year.</li>
            <li><strong>Annual Leave (AL):</strong> 20 days per year.</li>
            <li><strong>Public Holidays:</strong> Observed as per the company calendar.</li>
          </ul>
        </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg w-80">
              <h2 className="text-lg font-semibold mb-4">Apply for {leaveType}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm">Leave Type</label>
                  <input
                    type="text"
                    value={leaveType}
                    readOnly
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm">Reason</label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-2 border rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-violet-500 rounded-lg text-white"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 text-sm text-red-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Leave;
