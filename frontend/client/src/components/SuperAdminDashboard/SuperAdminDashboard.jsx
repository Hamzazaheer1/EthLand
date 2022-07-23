import React, { useState } from 'react'
import "./SuperAdminDashboard.css"
import MainDash from "../SuperAdmincomponents/MainDash/MainDash"
import ChangeCO from '../SuperAdmincomponents/ChangeCO/ChangeCO';
import AddAdmin from '../SuperAdmincomponents/AddAdmin/AddAdmin';
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

// import { Link } from 'react-router-dom';
// import { SidebarData } from './SADashboardData';

import {
  UilEstate,
  UilUsersAlt,

} from "@iconscout/react-unicons";

function SuperAdminDashboard() {

  const navigate = useNavigate();

  const [expanded, setExpaned] = useState(true)
  const [selectedTab, setSelectedTab] = useState(0);


  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }


  return (
    <div className="SuperAdminApp">
      <div className="AppGlass">
        <>
          {/* <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
          <UilBars />
        </div> */}
          <div className='sidebar'
          // variants={sidebarVariants}
          // animate={window.innerWidth<=768?`${expanded}`:''}
          >
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
                </div>

                {selectedTab === 0 && <MainDash />}
                {selectedTab === 1 && <ChangeCO />}
                {selectedTab === 2 && <AddAdmin />}
              </div>

              {/* signoutIcon */}
              <div className="menuItem button mybutton"
              style={{width: "4rem"}}>
                <UilSignOutAlt onClick={() => {
                  navigate("/login");
                }} />
              </div>


            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default SuperAdminDashboard