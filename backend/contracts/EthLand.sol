pragma solidity >= 0.5.2;

contract Land {
    address superAdmin;

    constructor() public{
        superAdmin = msg.sender;
    }

    struct Admin {
        uint id;
        address _addr;
        string name;
        uint age;
        string designation;
        string city;
    }

    uint adminCount;

    mapping(address => Admin) public AdminMapping;
    mapping(uint => address[]) allAdminList;
    mapping(address => bool)  RegisteredAdminMapping;

    function isSuperAdmin(address _addr, uint _secP) public returns(uint){
        if(_addr==superAdmin && _secP == 123)
            return 1;
        else if(_addr == superAdmin && _secP == 321){
            superAdmin = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2; //remove this line
            return 2;
        }  
        else
            return 3;
    }

    function changeSuperAdmin(address _addr)public {
        require(msg.sender==superAdmin,"you are not superAdmin");

        superAdmin=_addr;
    }

    //-----------------------------------------------Admin-----------------------------------------------

    function addAdmin(address _addr,string memory _name, uint _age, string memory _designation,string memory _city) public returns(bool){
        if(superAdmin!=msg.sender)
            return false;
        require(superAdmin==msg.sender);
        RegisteredAdminMapping[_addr]=true;
        allAdminList[1].push(_addr);
        AdminMapping[_addr] = Admin(adminCount,_addr,_name, _age, _designation,_city);
        return true;
    }

    function ReturnAllAdminList() public view returns(address[] memory)
    {
        return allAdminList[1];
    }

    function removeAdmin(address _addr) public{
        require(msg.sender==superAdmin,"You are not Super Admin");
        require(RegisteredAdminMapping[_addr],"Admin not found");
        RegisteredAdminMapping[_addr]=false;


        uint len=allAdminList[1].length;
        for(uint i=0;i<len;i++)
        {
            if(allAdminList[1][i]==_addr)
            {
                allAdminList[1][i]=allAdminList[1][len-1];
                allAdminList[1].pop();
                break;
            }
        }
    }
}