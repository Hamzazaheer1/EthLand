import React from 'react'
import "./AddAdmin.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AddAdmin = () => {
  return (
    <div className="AddAdmindiv1" >
      <div className="AddAdmindiv2">
        <span>Register</span>
        <span style={{
          marginBottom: 20
        }}>New Admin</span>

        <form>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <label for="AdminAddress" class="form-label">Admin Public Address<span style={{color: "#ff0000", marginLeft: "3px"}}>*</span></label>
                <input type="text" class="form-control" id="AdminAddress" aria-describedby="AdminAddress" required style={{ width: "31.5rem" }} />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-sm-6'>
                <label for="Name" class="form-label">Name<span style={{color: "#ff0000", marginLeft: "3px"}}>*</span></label>
                <input type="text" class="form-control" id="Name" aria-describedby="Name" required style={{ width: "15rem" }} />
              </div>
              <div className='col-sm-6'>
                <label for="Age" class="form-label">Age<span style={{color: "#ff0000", marginLeft: "3px"}}>*</span></label>
                <input type="number" class="form-control" id="Age" aria-describedby="Age" required style={{ width: "15rem" }} />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-sm-6'>
                <label for="Designation" class="form-label">Designation<span style={{color: "#ff0000", marginLeft: "3px"}}>*</span></label>
                <input type="text" class="form-control" id="Designation" aria-describedby="Designation" required style={{ width: "15rem" }} />
              </div>
              <div className='col-sm-6'>
                <label for="City" class="form-label">City<span style={{color: "#ff0000", marginLeft: "3px"}}>*</span></label>
                <input type="text" class="form-control" id="City" aria-describedby="City" required style={{ width: "15rem" }} />
              </div>
            </div>
            <br />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button type="submit" class="btn btn-primary" style={{ marginTop: "1rem", marginBottom: "5rem", width: "max-content", backgroundColor: "#242D49", borderColor: "#FCA61F" }}>Transfer</button>
            </div>
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

export default AddAdmin