// SPDX-License-Identifier: UNLICENSED

pragma solidity >= 0.5.2;

contract Land {
    address contractOwner;

    constructor() public{
        contractOwner = msg.sender;
    }

    
    function isContractOwner(address _addr, uint _secP) public returns(uint){
        uint x = 1;
        uint y = 2;
        uint z = 3;
        if(_addr==contractOwner && _secP == 123)
            return x;
        else if(_addr == contractOwner && _secP == 321){
            contractOwner = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
            return y;
        }  
        else
            return z;
    }

    function changeContractOwner(address _addr)public {
        require(msg.sender==contractOwner,"you are not contractOwner");

        contractOwner=_addr;
    }

}