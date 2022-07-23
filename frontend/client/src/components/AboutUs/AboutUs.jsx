import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./AboutUs.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";



function ContactUs() {
    const navigate = useNavigate();

    return (
        <>
            <div className="aboutusDiv1">
                <div className="aboutusDiv2">
                    <span>EthLand</span>
                    <span className='aboutusSecondTitle'>
                        About Us.
                    </span>
                    <p><hr className="abouthrStyle" /></p>
                    <p>The Government of Punjab has embarked upon a revolutionary initiative of computerization of land records
                        in Punjab province for bringing about a qualitative change in the lives of people. The overall objective
                        is to improve service delivery and to enhance the perceived level of security. </p>
                    <br />
                    <p >I feel privileged, writing this message as Director General Punjab Land Records Authority.
                        I am incredibly excited for being part of EthLand’s journey and committed to: “Operational Excellence, Leadership
                        by Example, Integrity and Transparency, Client’s Facilitation and Employee’s Welfare”.</p>
                    <p>Looking ahead, we need to be focused on our growth strategy while continuing to build on the strength of
                        our organization – in helping our clients and in bringing positive change to the communities in which
                        we work and live. I truly believe the best of EthLand is yet to come.</p>
                    <p>Me and my team with our mission to deliver efficient and transparent services, are well positioned to
                        make EthLand a symbol of facilitation for the general public through making meaningful innovations and
                        making our organization healthier and sustainable.
                        God Bless Us All</p>
                    <h3 style={{ color: "var(--orange)" }}>Director General</h3>
                    <p style={{backgroundColor: "#DDF8FE"}}>Based upon the EthLand futuristic approach of transforming the manual land records management into 
                        an efficient, accountable, secure, distributed and transparent system through integrated technology solution, 
                        this property registration system was envisaged.</p>

                    <div className="SAblur1 s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>

                <div
                    className="SAblur1 s-blur2"
                    style={{ background: "var(--purple)" }}
                >
                </div>

            </div>
            {/* signoutIcon */}
            <div className="menuItem button LoginGoBackbutton"
                style={{ width: "4rem" }}>
                <UilSignOutAlt onClick={() => {
                    navigate("/");
                }} />
            </div>
        </>
    )
}

export default ContactUs