import React from 'react'
import "./ChangeCO.css"
// import metamasklogo from "../../../../../img/Metamask-icon.png";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ChangeCO = () => {
  return (
    <div className="services" id="services" style={{marginTop: "35rem"}}>
      <div className="awesome">
        <span>Transfer</span>
        <span style={{
          marginBottom: 20
        }}>Contract Ownership</span>
          
          <form>
            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Private Key of Current Owner</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "25rem"}}/>
            </div>

            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Private Key of New Owner</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "25rem"}}/>
            </div>  


            <div style={{display: "flex", flexDirection: "column"}}>
            <button type="submit" class="btn btn-primary" style={{marginTop: "1rem", marginBottom: "5rem" ,width: "max-content", backgroundColor: "#242D49" , borderColor: "#FCA61F"}}>Transfer</button>
            </div>
            
          </form>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
    </div>
  )
}

export default ChangeCO