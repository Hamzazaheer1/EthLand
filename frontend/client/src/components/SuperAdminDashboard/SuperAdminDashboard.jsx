import React, { useState } from 'react'
import "./SuperAdminDashboard.css"
import MainDash from "../SuperAdmincomponents/MainDash/MainDash"
import ChangeCO from '../SuperAdmincomponents/ChangeCO/ChangeCO';
import AddAdmin from '../SuperAdmincomponents/AddAdmin/AddAdmin';
import ViewAdmin from '../SuperAdmincomponents/ViewAdmin/ViewAdmin';

import { UilSignOutAlt, UilEstate, UilUsersAlt } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";




function SuperAdminDashboard() {

  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <div className="SuperAdminApp">
      <div className="AppGlass">
          <div className='sidebar'>
            {/* logo */}
            <div className="logo">
              <span>
                Super<span>A</span>dmin
              </span>
            </div>

            <div className='menu'>

              {/* Tabs   */}
              <div className="menuItem">

                <div style={{ marginRight: "9rem" }} >
                  <button className="button mybutton"
                    onClick={() => {
                      setSelectedTab(0);
                    }}>
                    <UilEstate /> Home
                  </button>

                  <button className="button mybutton"
                    onClick={() => {
                      setSelectedTab(1);
                    }}>
                    <UilUsersAlt /> ChangeCO
                  </button>

                  <button className="button mybutton"
                    onClick={() => {
                      setSelectedTab(2);
                    }}>
                    <UilUsersAlt /> Add Admin
                  </button>

                  <button className="button mybutton"
                    onClick={() => {
                      setSelectedTab(3);
                    }}>
                    <UilUsersAlt /> View Admin
                  </button>
                </div>

                {selectedTab === 0 && <MainDash />}
                {selectedTab === 1 && <ChangeCO />}
                {selectedTab === 2 && <AddAdmin />}
                {selectedTab === 3 && <ViewAdmin />}
              </div>

              {/* signoutIcon */}
              <div className="menuItem button mybutton">
                <UilSignOutAlt onClick={() => {
                  navigate("/login");
                }} />
              </div>


            </div>
          </div>
      </div>
    </div>
  )
}

export default SuperAdminDashboard