import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ContactUs.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import supportG from '../../img/customerSupport.png'


function ContactUs() {
    const navigate = useNavigate();

    return (
        <div className='wholePage'>
            <div className="wholeCU Sdiv1">
                <img class="customerSupport" src={supportG} alt="support img not working" />
                <div className="contactUsD Sdiv2">
                    <span>EthLand</span>
                    <span className='SecondTitle'>
                        Contact Us.
                    </span>
                    <h1 style={{ fontSize: "3rem" }}> For inquiries contact: <hr className="hrStyle" /></h1>
                    <h3 style={{ color: "var(--orange)" }}>* EthLand Admin</h3>
                    <h5 style={{ marginLeft: "2rem" }}>admin@ethland.pk</h5>
                    <h3 style={{ color: "var(--orange)" }}>* Headquater</h3>
                    <h5 style={{ marginLeft: "2rem" }}>Islamabad</h5>
                    <h3 style={{ color: "var(--orange)" }}>* Telephone No</h3>
                    <h5 style={{ marginLeft: "2rem" }}>051-123-45-67-89   </h5>

                    <div className="SAblur1 s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>

                <div
                    className="SAblur1 s-blur2"
                    style={{ background: "var(--purple)" }}
                >
                </div>

            </div>
            {/* signoutIcon */}
            <div className="menuItem button LoginGoBackbutton">
                <UilSignOutAlt onClick={() => {
                    navigate("/");
                }} />
            </div>
        </div>
    )
}

export default ContactUs