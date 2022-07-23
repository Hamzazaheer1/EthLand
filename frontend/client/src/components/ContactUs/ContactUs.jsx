import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ContactUs.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";



function ContactUs() {
    const navigate = useNavigate();

    return (
        <>
            <div className="Sdiv1">
                <div className="Sdiv2">
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