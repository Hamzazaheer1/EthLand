import React, { useState } from 'react'
import "./help.css"
import MetamaskGuide from "../Help/helpComponents/metamaskGuide/metamask"
import UserRegisterGuide from './helpComponents/usersRegisterGuide/userRegister'
import UserLoginGuide from './helpComponents/userLoginGuide/userLogin'
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import {useNavigate} from "react-router-dom";
import {
  UilEstate,
  UilUsersAlt,

} from "@iconscout/react-unicons";




function Help() {
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
                <span style={{fontSize: "2.5rem"}}>EthLand</span>
                <span style={{fontSize: "2.0rem" , color: "grey"}}>Help</span>
              </span>
            </div>

            <br/>
            <br/>
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
                    <UilEstate/> Getting Started
                  </button>
  
                  <button className="button" 
                  style={{ height: "2.1rem" ,width: "10rem", 
                  alignItems: 'center' , marginTop: "2rem",
                  color: 'black', fontWeight: "bold", alignContent: "center"}} onClick={()=>{
                      setSelectedTab(1);
                    }}>
                    <UilUsersAlt/> User Register 
                  </button>

                  <button className="button" 
                  style={{ height: "2.1rem" ,width: "10rem", 
                  alignItems: 'center' , marginTop: "2rem",
                  color: 'black', fontWeight: "bold", alignContent: "center"}} onClick={()=>{
                      setSelectedTab(2);
                    }}>
                    <UilUsersAlt/> User Login 
                  </button>    
                </div>
  
                  {selectedTab === 0 && <MetamaskGuide/>}
                  {selectedTab === 1 && <UserRegisterGuide/>}
                  {selectedTab === 2 && <UserLoginGuide/>}
              </div>
              
  
              {/* signoutIcon */}
              <div className="menuItem">
                <UilSignOutAlt  onClick={ ()=> {
                    navigate("/");
                }}/> 
              </div>
              
  
            </div>
          </motion.div>
       </>
        </div>
      </div>
    )
}

export default Help