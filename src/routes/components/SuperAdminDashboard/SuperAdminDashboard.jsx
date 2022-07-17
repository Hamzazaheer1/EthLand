import React from 'react'
import "./SuperAdminDashboard.css"
import Sidebar from "../SuperAdmincomponents/Sidebar";
import MainDash from "../SuperAdmincomponents/MainDash/MainDash"
import ChangeCO from '../SuperAdmincomponents/ChangeCO/ChangeCO';


function SuperAdminDashboard() {
  return (
    <div className="SuperAdminApp">
      <div className="AppGlass">
        <Sidebar/>
        {/* <MainDash/> */}
        <ChangeCO/>
      </div>
    </div>
  )
}

export default SuperAdminDashboard