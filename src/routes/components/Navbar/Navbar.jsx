import React from 'react'
import {Link} from "react-router-dom"
import '../Navbar/Navbar.css'
import "../Intro/Intro"
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Toggle from '../Toggle/Toggle'
import { useNavigate } from 'react-router-dom'




function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={{padding: "0.5rem 3.5rem"}}>
        <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">EthLand</div>
        <Toggle/>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
            <Link to="login" spy={true} smooth={true}>
              <button className="button n-button" style={{marginTop: "1rem"}}>SuperAdmin</button>
            </Link>
            </li>
            <li>
              <Link to="admin" spy={true} smooth={true}>
              <button className="button n-button" style={{marginTop: "1rem"}}>Admin</button>
              </Link>
            </li>
            <li>
              <Link to="user" spy={true} smooth={true}>
              <button className="button n-button" style={{marginTop: "1rem"}}>User</button>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="gettingstartedhelp" spy={true} smooth={true}>
        <button className="button n-button">Help</button>
        </Link>
      </div>
      
    </div>
        <Intro/>
        <Footer/>
    </div>
    
  )
}

export default Navbar