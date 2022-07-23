import React from 'react'
import "./MainDash.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MainDash = () => {
  return (
    <div>
      <div className="mainDashdiv1" id="services" style={{ marginTop: "35rem" }}>
        <div className="mainDashdiv2">
          <span>Welcome to</span>
          <span style={{
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