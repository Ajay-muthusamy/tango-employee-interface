import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Auth/Login";
import HomePage from "./component/mainPage/HomePage";
import AdminHome from "./component/mainPage/pages/AdminHome";
import Overview from "./component/mainPage/pages/Overview";
import Dashboard from "./component/mainPage/pages/Dashboard";
import SubpageRoute from "./component/mainPage/HomeSubpage/SubpageRoute";
import Feeds from "./component/mainPage/HomeSubpage/Feeds";
import Activity from "./component/mainPage/HomeSubpage/Activity";
import Calender from "./component/mainPage/Calender";
import Onboard from "./component/mainPage/Onboard";
import EmployeeData from "./component/employeeform/EmployeeData";
import Profile from "./component/mainPage/Profile";
import ProfileSub from "./component/mainPage/HomeSubpage/ProfileSub";
import Leave from "./component/mainPage/HomeSubpage/Leave";
import TimeLog from "./component/mainPage/HomeSubpage/TimeLog";
import Attendence from "./component/mainPage/HomeSubpage/Attendence";
import MainLeave from "./component/mainPage/MainLeave";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route exact path="/homepage" element={<HomePage />}>
          <Route path="/homepage" element={<AdminHome />}>
            <Route path="onboard" element={<Onboard />} />
            <Route path="mainleave" element={<MainLeave />} />
            <Route exact path="" element={<Overview />}>
              <Route path="" element={<SubpageRoute />}>
                <Route path="" element={<Activity />} />
                <Route path="feeds" element={<Feeds />} />
                <Route path="profile" element={<ProfileSub />} />
                <Route path="leave" element={<Leave />} />
                <Route path="timelog" element={<TimeLog />} />
                <Route path="attendence" element={<Attendence />} />
              </Route>
            </Route>

            <Route path="dasboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calender />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="homepage/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="/employeedata" element={<EmployeeData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
