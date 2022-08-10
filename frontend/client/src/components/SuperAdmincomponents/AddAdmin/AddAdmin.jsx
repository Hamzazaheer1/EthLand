import React from "react";
import "./AddAdmin.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Web3 from "web3";
import Land from "contracts/Land.json";
import { useState } from "react";

let selectedAccount;
let ContractInstance;

const AddAdmin = () => {
  const [publicAddress, setPublicAddress] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(0);
  const [designation, setDesignation] = useState(null);
  const [city, setCity] = useState(null);

  //metamask integration
  const init = () => {
    let provider = window.ethereum;
    // setIsConnected(true);
    if (typeof provider !== "undefined") {
      //metamask is installed

      provider
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          selectedAccount = accounts[0];
          const web3 = new Web3(provider);
          ContractInstance = new web3.eth.Contract(
            Land.abi,
            Land.networks[5777].address
          );

          AddNewAdmin();
        })
        .catch((err) => {
          // setIsConnected(false);
          console.log(err);
          return;
        });
    }
  };

  //to add new admin
  const AddNewAdmin = async () => {
    await ContractInstance.methods
      .addAdmin(publicAddress, name, age, designation, city)
      .send({ from: selectedAccount });
    alert("Admin registered Sucessfully.");
  };

  return (
    <div className="AddAdmindiv1">
      <div className="AddAdmindiv2">
        <span>Register</span>
        <span
          style={{
            marginBottom: 20,
          }}
        >
          New Admin
        </span>

        <form>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <label for="AdminAddress" class="form-label">
                  Admin Public Address
                  <span style={{ color: "#ff0000", marginLeft: "3px" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="AdminAddress"
                  aria-describedby="AdminAddress"
                  required
                  style={{ width: "31.5rem" }}
                  onChange={(e) => setPublicAddress(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-6">
                <label for="Name" class="form-label">
                  Name
                  <span style={{ color: "#ff0000", marginLeft: "3px" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  aria-describedby="Name"
                  required
                  style={{ width: "15rem" }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label for="Age" class="form-label">
                  Age
                  <span style={{ color: "#ff0000", marginLeft: "3px" }}>*</span>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="Age"
                  aria-describedby="Age"
                  required
                  style={{ width: "15rem" }}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-6">
                <label for="Designation" class="form-label">
                  Designation
                  <span style={{ color: "#ff0000", marginLeft: "3px" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Designation"
                  aria-describedby="Designation"
                  required
                  style={{ width: "15rem" }}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label for="City" class="form-label">
                  City
                  <span style={{ color: "#ff0000", marginLeft: "3px" }}>*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="City"
                  aria-describedby="City"
                  required
                  style={{ width: "15rem" }}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                type="submit"
                class="btn btn-primary"
                style={{
                  marginTop: "1rem",
                  marginBottom: "5rem",
                  width: "max-content",
                  backgroundColor: "#242D49",
                  borderColor: "#FCA61F",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  {
                    init();
                  }
                }}
              >
                Transfer
              </button>
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
  );
};

export default AddAdmin;
