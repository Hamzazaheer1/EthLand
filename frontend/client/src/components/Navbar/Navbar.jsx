import React from 'react'
import '../Navbar/Navbar.css'
import "../Intro/Intro"
import {Link} from "react-router-dom"
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Toggle from '../Toggle/Toggle'
import About from "../About/About"


function Navbar() {

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
            <Link to="aboutus" spy={true} smooth={true}>
              <button className="button n-button navBtn" style={{marginTop: "1rem"}}>AboutUs</button>
            </Link>
            </li>
            <li>
              <Link to="contactus" spy={true} smooth={true}>
              <button className="button n-button navBtn" style={{marginTop: "1rem"}}>ContactUs</button>
              </Link>
            </li>
            <li>
              <Link to="gettingstartedhelp" spy={true} smooth={true}>
              <button className="button n-button navBtn" style={{marginTop: "1rem"}}>Help</button>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="login" spy={true} smooth={true}>
        <button className="button n-button navBtn">Login</button>
        </Link>
      </div>
      
    </div>
        <Intro/>
        <About/>
        <Footer/>
    </div>
    
  )
}

export default Navbar