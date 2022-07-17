import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';


function Navbar() {

  return (
    <>  
        <div className='nav-menu active' style={{width: "15rem", marginLeft: "-1rem"}}>
        <div>
        <h1 style={{color: 'white', marginLeft: "3rem", marginTop: "2rem"}}>EthLand</h1>  
        </div>
          <ul className='nav-menu-items' style={{marginTop: "8rem", marginLeft: "-13rem"}}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
    </>
  );
}

export default Navbar;
