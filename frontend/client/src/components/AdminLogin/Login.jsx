import React from 'react'
import Web3 from 'web3';
import Land from "contracts/Land.json"
import metamasklogo from "../../img/Metamask-icon.png";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "../AdminLogin/login.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";

let selectedAccount;
let nftContract;
let setOwnerC = 0;


function Login() {
  const [secrectPhrase, setSecrectPhrase] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  //metamask integration
  const init = () => {
    let provider = window.ethereum;
    setIsConnected(true);
    if (typeof provider !== 'undefined') {
      //metamask is installed

      provider.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          selectedAccount = accounts[0];
          const web3 = new Web3(provider);
          nftContract = new web3.eth.Contract(Land.abi, Land.networks[5777].address);

          contractOwnerChecker();

        }).catch(err => {
          setIsConnected(false);
          console.log(err);
          return;
        });
    }
  }

  //to check if is contract owner or not
  const contractOwnerChecker = async () => {

    nftContract.methods.isContractOwner(selectedAccount, secrectPhrase).call().then(tx => {
      setOwnerC = tx;
      if (setOwnerC == 1) {
        navigate("/superadmindashboard", { replace: "true" });
      } else if (setOwnerC == 2) {
        nftContract.methods.changeContractOwner("0xe0dde07dE0D39108e3C29AF507EBD0F9a33b3522").send({ from: selectedAccount });
        alert("System is down");
        setIsConnected(false);
      } else {
        alert("Wrong secrect key or Wallet")
        setIsConnected(false);
      }
    })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <div className="Sdiv1">
        <div className="Sdiv2">
          <span>Login</span>
          <span className='SecondTitle'>
            Super Admin
          </span>
          <h2> Welcome to SuperAdmin Login <hr className="hrStyle" /></h2>

          <form>
            <div className="mb-2">
              <label htmlFor="SecretKey" className="form-label">Secret Key</label>
              <input type="password" className="form-control" id="SecretKey" aria-describedby="SecretKey"
                onChange={e => setSecrectPhrase(e.target.value)} />
              <div id="text" className="form-text">Never share your Secret Key with anyone.</div>
            </div>

            <div className="ConnectMetamaskdiv">
              <br />
              <button className="metamaskButton"
                onClick={(event) => {
                  event.preventDefault();
                  { init() }
                }}
              >
                <img style={{ width: "1.8rem" }} src={metamasklogo} alt="metamask img is not working" />
                {!isConnected && "Connect to Metamask Wallet"}
                {isConnected && "Loading...."}
              </button>
            </div>
          </form>

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
    </>

  )
}

export default Login