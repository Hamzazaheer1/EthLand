import React, { useState } from 'react'
import "./ChangeCO.css"
// import metamasklogo from "../../../../../img/Metamask-icon.png";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {abi,contract_address} from "../../../build/Config"
import Web3 from 'web3';
import {useNavigate } from 'react-router-dom'
let selectedAccount;
let nftContract;


const ChangeCO = () => {
  const [newSuperAdmin, setnewSuperAdmin] = useState("null");
  const navigate = useNavigate();

  const init = ()=> {
    let provider = window.ethereum;

    if(typeof provider !== 'undefined'){
      //metamask is installed

      provider.request({method: 'eth_requestAccounts'})
      .then(accounts=> {
        selectedAccount = accounts[0];
        // console.log("selected account is ", selectedAccount);
        const web3 = new Web3(provider);


        nftContract = new web3.eth.Contract(abi,contract_address);

        // console.log(newSuperAdmin);
         nftContract.methods.changeContractOwner(newSuperAdmin).send({from: selectedAccount});
        navigate("/", {replace: "true"});
      }).catch(err=> {
        console.log(err);
        return;
      });
    }
  }


  return (
    <div className="services" id="services" style={{marginTop: "35rem"}}>
      <div className="awesome">
        <span>Transfer</span>
        <span style={{
          marginBottom: 20
        }}>Contract Ownership</span>
          
          <form>
            {/* <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Public Key of Current Owner</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "25rem"}}/>
            </div> */}

            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Public Key of New Owner</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "25rem"}} onChange={e => setnewSuperAdmin(e.target.value)}/>
            </div>  


            <div style={{display: "flex", flexDirection: "column"}}>
            <button onClick={(event)=> {
                  event.preventDefault();
                  {init()}
                }} type="submit" class="btn btn-primary" style={{marginTop: "1rem", marginBottom: "5rem" ,width: "max-content", backgroundColor: "#242D49" , borderColor: "#FCA61F"}}>Transfer</button>
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