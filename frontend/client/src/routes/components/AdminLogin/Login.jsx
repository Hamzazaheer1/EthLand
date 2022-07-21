import React from 'react'
import "../AdminLogin/login.css";
import metamasklogo from "../../../img/Metamask-icon.png";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Navigate, useNavigate } from 'react-router-dom'
import Web3 from 'web3';


// import {abi,contract_address} from "../../build/Config"
import Land from "contracts/Land.json"
import { useState } from 'react';
// console.log(abi);

// console.log(contract_address);

let selectedAccount;
let nftContract;
let setOwnerC = 0;
let isCO = "NULL";


function Login() {
  const [secrectPhrase, setSecrectPhrase] = useState(0);
  const navigate = useNavigate();

  //metamask integration
  const init = ()=> {
    let provider = window.ethereum;

    if(typeof provider !== 'undefined'){
      //metamask is installed

      provider.request({method: 'eth_requestAccounts'})
      .then(accounts=> {
        selectedAccount = accounts[0];
        // console.log("selected account is ", selectedAccount);
        const web3 = new Web3(provider);

        // const networkId = web3.eth.net.getId();
        nftContract = new web3.eth.Contract(Land.abi,"0x9Ae26d194E6e25Fb8A99412eA9D7A1ba7254FBA1");

      
        contractOwnerChecker();

      }).catch(err=> {
        console.log(err);
        return;
      });
    }
  }

  //to check if is contract owner or not
  const contractOwnerChecker = async () => {
     
     nftContract.methods.isContractOwner(selectedAccount,secrectPhrase).call().then(tx => {
      //  console.log("hello max");
      // console.log(setOwnerC);
        setOwnerC = tx;
        //  console.log(setOwnerC);
        if(setOwnerC == 1){
          //  console.log("hello from 1");
           navigate("/superadmindashboard", {replace: "true"});
            // isCO = "false";
            // return;
          }else if(setOwnerC == 2){ 
            //  console.log("hello from 2");
             nftContract.methods.changeContractOwner("0xe0dde07dE0D39108e3C29AF507EBD0F9a33b3522").send({from: selectedAccount});
             alert("System is down");
            // isCO = "true";
            // navigate("/superadmindashboard", {replace: "true"});
            
          }else{
            // console.log("hello from 3");
            alert("Wrong secrect key or Wallet")
          }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
        <div className="services" id="services">
          <div className="awesome">
            <span>Login</span>
            <span style={{
              marginBottom: 20
            }}>Super Admin</span>
              <p> Welcome to SuperAdmin Login<hr style={{
                color: "black",
                backgroundColor: "black",
                height: 5,
                marginBottom: 1,
                marginTop: 1
              }}/></p>
              <form>
                <div class="mb-2">
                  <label for="exampleInputEmail1" class="form-label">Secrect Key</label>
                  <input type="text" class="form-control" id="secPhrase" aria-describedby="emailHelp" style={{width: "25rem"}} onChange={e => setSecrectPhrase(e.target.value)}/>
                  <div id="emailHelp" class="form-text">Never share your Secret Key with anyone.</div>
                </div>


                <div style={{display: "flex", flexDirection: "column"}}>
                {/* <button type="submit" class="btn btn-primary" style={{marginBottom: "5rem" ,width: "max-content", backgroundColor: "#242D49" , borderColor: "#FCA61F"}}>Login</button> */}

                {/* <p style={{
                  color: "grey",
                  fontSize: "15px"
                }}> Method 2<hr style={{
                color: "black",
                backgroundColor: "black",
                height: 5,
                marginBottom: 1,
                marginTop: 1
                }}/></p> */}

                <br/>
                <button style={{width: "15rem" , borderRadius: "15px", borderColor: "#FCA61F", backgroundColor: "#242D49", color: "white"}}
                onClick={(event)=> {
                  event.preventDefault();
                  {init()}
                }}
                >
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