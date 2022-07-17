import React from 'react'
import "./MainDash.css"
// import metamasklogo from "../../../../../img/Metamask-icon.png";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { color } from '@mui/system';

const MainDash = () => {
  return (
    <div>
      <div className="services" id="services" style={{marginTop: "35rem"}}>
      <div className="awesome">
        <span>Welcome to</span>
        <span style={{
          width: "200px",
          marginBottom: 20
        }}>SuperAdmin Dashboard</span>
          
          
          
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
    </div>
    </div>
    
  )
}

export default MainDash