import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const SubpageRoute = () => {
  return (
    <div className='flex flex-col'>
      <div className="w-full md:w-[100%] relative -top-10">
          <nav className="bg-white p-5 rounded-lg">
            <ul className="flex flex-wrap gap-4 md:space-x-10">
              <li>
                <Link to="">Activities</Link>
              </li>
              <li>
                <Link to="feeds">Feeds</Link>
              </li>
              <li>
                <Link to="profile">Profile</Link>
              </li>
              <li>
                <Link to="leave">Leave</Link>
              </li>
              <li>
                <Link to="attendence">Attendance</Link>
              </li>
              <li>
                <Link to="timelog">Time Logs</Link>
              </li>
            </ul>
          </nav>
 
        </div>

        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default SubpageRoute
