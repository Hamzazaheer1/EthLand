import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Web3 from 'web3';
import smartContractInstance from "contracts/Land.json"
import { useState } from 'react';


let selectedAccount;
let ContractInstance;


const ViewAdmins = () => {
    const [adminCount, setAdminCount] = useState([]);

    //metamask integration
    const init = () => {
        let provider = window.ethereum;
        // setIsConnected(true);
        if (typeof provider !== 'undefined') {
            //metamask is installed

            provider.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    selectedAccount = accounts[0];
                    const web3 = new Web3(provider);
                    ContractInstance = new web3.eth.Contract(smartContractInstance.abi, smartContractInstance.networks[5777].address);
                    console.warn("i am here ");
                    returnAllAdmins();

                }).catch(err => {
                    console.log(err);
                    return;
                });
        }
    }

    //to return Admins
    const returnAllAdmins = async () => {
        await ContractInstance.methods.ReturnAllAdminList().call().then(tx => {
            setAdminCount(tx);
        })
            .catch((error) => {
                console.log(error);
            });
    };

    //to remove Admins
    const RemoveAdmin = async (R_address) => {
        console.log("i am void")
        await ContractInstance.methods.removeAdmin(R_address).send({ from: selectedAccount });
        alert("Admin Removed Sucessfully");
    }



    return (
        <div className='container'>
            
            {init()}
            {

                adminCount ?
                    <table class="table table-hover" style={{
                        width: "75vw",
                        marginLeft: "-5rem",
                        marginTop: "-8rem"
                    }}>
                        <thead style={{
                            backgroundColor: "#060b26",
                            color: "#fca61f",
                            fontWeight: "bold"
                        }}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Admin Address</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminCount.map((item, index) => (

                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item}</td>
                                    <td><button className='menuItem button mybutton' onClick={(event) => {
                                        event.preventDefault();
                                        { RemoveAdmin(item) }
                                    }}
                                    style = {{
                                        paddingRight: "4rem",
                                        paddingLeft: "0.7rem",
                                        height: "2rem",
                                        marginBottom: "2rem"
                                    }}>Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : ""}
        </div>
    )
}

export default ViewAdmins