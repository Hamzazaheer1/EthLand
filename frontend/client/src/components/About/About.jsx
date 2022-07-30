import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./About.css";
import About1 from "../../img/About1.png"
import About2 from "../../img/About2.png"
import About3 from "../../img/About3.png"
import About4 from "../../img/About4.png"
import About5 from "../../img/About5.png"



const About = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // transition
    return (
        <div className="works">
            {/* left side */}
            <div className="w-left">
                <div className="awesome">
                    {/* dark Mode */}
                    <span style={{ color: darkMode ? "white" : "" }}>
                        EthLand
                    </span>
                    <span style={{ width: "50rem" }}>A Decentralized Land Record Managment</span>
                    <spane style={{ width: "40rem", marginLeft: "1rem" }}>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printingLorem ispum is simpley dummy
                        text
                        <br />
                        y dummy text of printingLorem
                        <br />
                        ispum is simpley dummy text of printing
                    </spane>
                    <button className="button s-button btnExtLink"
                        onClick={() => window.open("https://en.wikipedia.org/wiki/Blockchain", "_blank")}>
                        Learn More About Blockchain
                    </button>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>

                {/* right side */}
            </div>
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img src={About1} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={About2} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={About5} alt="" />
                    </div>{" "}
                    <div className="w-secCircle">
                        <img src={About4} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={About3} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default About;