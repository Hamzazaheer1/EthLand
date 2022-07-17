import React from 'react'
import "../AdminLogin/login.css";
import metamasklogo from "../../../img/Metamask-icon.png";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Toggle from '../Toggle/Toggle';


function Login() {
  return (
    <div>
        <div className="services" id="services">
          <div className="awesome">
            <span>Login</span>
            <span style={{
              marginBottom: 20
            }}>Super Admin</span>
              <p> Method 1<hr style={{
                color: "black",
                backgroundColor: "black",
                height: 5,
                marginBottom: 1,
                marginTop: 1
              }}/></p>
              <form>
                <div class="mb-2">
                  <label for="exampleInputEmail1" class="form-label">Private Key</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "25rem"}}/>
                  <div id="emailHelp" class="form-text">Never share your Private Key with anyone.</div>
                </div>


                <div style={{display: "flex", flexDirection: "column"}}>
                <button type="submit" class="btn btn-primary" style={{marginBottom: "5rem" ,width: "max-content", backgroundColor: "#242D49" , borderColor: "#FCA61F"}}>Login</button>

                <p style={{
                  color: "grey",
                  fontSize: "15px"
                }}> Method 2<hr style={{
                color: "black",
                backgroundColor: "black",
                height: 5,
                marginBottom: 1,
                marginTop: 1
                }}/></p>
                <button style={{width: "15rem" , borderRadius: "15px", borderColor: "#FCA61F", backgroundColor: "#242D49", color: "white"}}>
                  <img style={{width: "1.8rem"}} src={metamasklogo} alt="metamask img is not working"/>
                    Connect to Metamask Wallet
                </button>
                </div>
                
              </form>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          </div>

          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
    </div>
    
  )
}

export default Login