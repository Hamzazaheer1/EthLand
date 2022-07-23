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
                <label for="exampleInputEmail1" class="form-label">Admin Public Address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "31.5rem" }} />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-sm-6'>
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "15rem" }} />
              </div>
              <div className='col-sm-6'>
                <label for="exampleInputEmail1" class="form-label">Age</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "15rem" }} />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-sm-6'>
                <label for="exampleInputEmail1" class="form-label">Designation</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "15rem" }} />
              </div>
              <div className='col-sm-6'>
                <label for="exampleInputEmail1" class="form-label">City</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "15rem" }} />
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