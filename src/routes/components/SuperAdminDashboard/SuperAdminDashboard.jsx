import React, { useState } from 'react'
import "./SuperAdminDashboard.css"
import MainDash from "../SuperAdmincomponents/MainDash/MainDash"
import ChangeCO from '../SuperAdmincomponents/ChangeCO/ChangeCO';
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
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
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
 

  return (
    <div className="SuperAdminApp">
      <div className="AppGlass">
      <>
        <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
          <UilBars />
        </div>
        <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:''}
        >
          {/* logo */}
          <div className="logo" style={{marginLeft: "2rem"}}>
            <span style={{fontSize: "1.8rem"}}>
              Super<span style={{fontSize: "2.5rem"}}>A</span>dmin
            </span>
          </div>

          <div className='menu'>

            {/* Tabs   */}
            <div className="menuItem">

              <div style={{marginRight: "9rem"}} >
                <button className="button" 
                style={{ height: "2.1rem" ,width: "10rem", 
                alignItems: 'center' , marginTop: "2rem",
                color: 'black', fontWeight: "bold", alignContent: "center"}} onClick={()=>{
                    setSelectedTab(0);
                  }}>
                  <UilEstate/> Home
                </button>

                <button className="button" 
                style={{ height: "2.1rem" ,width: "10rem", 
                alignItems: 'center' , marginTop: "2rem",
                color: 'black', fontWeight: "bold", alignContent: "center"}} onClick={()=>{
                    setSelectedTab(1);
                  }}>
                  <UilUsersAlt/> ChangeCO
                </button>  
              </div>

                {selectedTab === 0 && <MainDash/>}
                {selectedTab === 1 && <ChangeCO/>}
            </div>
            

            {/* signoutIcon */}
            <div className="menuItem">
              <UilSignOutAlt  onClick={ ()=> {
                navigate("/login");
              }}/> 
            </div>
            

          </div>
        </motion.div>
     </>
      </div>
    </div>
  )
}

export default SuperAdminDashboard