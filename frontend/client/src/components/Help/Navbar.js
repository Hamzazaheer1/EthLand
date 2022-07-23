import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';


function Navbar() {

  return (
    <>
      <div className='nav-menu active' style={{ width: "15rem", marginLeft: "-1rem" }}>
        <div className="mylogo">
          <span>
            Super<span>A</span>dmin
          </span>
        </div>
        <ul className='nav-menu-items' style={{ marginTop: "8rem", marginLeft: "-13rem" }}>
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
