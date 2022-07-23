import React from 'react'
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import item1 from "../../img/item1.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";

import { motion } from "../../../node_modules/framer-motion/dist/es/index";

function Intro() {
  return (
    <div className="Intro" id="Intro">

      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Welcome to</span>
          <span>Eth Land</span>
          <span>
            Eth Land is Blockchain based Land Record System with overall objective to improve
          </span>
          <span style={{ color: "#788097", fontSize: "15px" }}>
            Trust, Disintermediation and faster Transactions.
          </span>

          {/* Left slider */}
          <div className='imgSlider'>

          </div>
        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-30%" }}
          // transition={transition}
          src={item1}
          alt=""
          width={"400px"}

        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          // transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Immutable" text2="and Transparent" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          // transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka  */}
          <FloatinDiv img={thumbup} text1="Durability" text2="and Security" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        >

        </div>
      </div>

    </div>
  )
}

export default Intro