// import React, { useState } from "react";
// import "./Sidebar.css";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "./Data/Data";
// import { UilBars } from "@iconscout/react-unicons";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import MainDash from "./MainDash/MainDash";
// import ChangeCO from "./ChangeCO/ChangeCO";
// import {
//   UilEstate,
//   UilUsersAlt,

// } from "@iconscout/react-unicons";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const [selected, setSelected] = useState(0);
//   const [expanded, setExpaned] = useState(true)

//   const [index, setIndex] = useState(0);

//   const sidebarVariants = {
//     true: {
//       left : '0'
//     },
//     false:{
//       left : '-60%'
//     }
//   }
//   // console.log(window.innerWidth)

//   return (
//     <>
//       <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
//         <UilBars />
//       </div>
//       <motion.div className='sidebar'
//       variants={sidebarVariants}
//       animate={window.innerWidth<=768?`${expanded}`:''}
//       >
//         {/* logo */}
//         <div className="logo" >
//           <span style={{fontSize: "1.8rem"}}>
//             Super<span style={{fontSize: "2.5rem"}}>A</span>dmin
//           </span>
//         </div>
        
//         <div className="menu">
//           {SidebarData.map((item, index) => {
//             return (
//               <div
//                 className={selected === index ? "menuItem active" : "menuItem"}
//                 key={index}
//                 onClick={() => setSelected(index) && setIndex(item.i)}
//               >
//                 <item.icon />
//                 <span>{item.heading}</span>
//               </div>
              
//             );
            
//           })}
          
          
//             {/* <div className="menuItem">
//               <div> <UilEstate / ></div>
//               <span onClick={()=> {
//                 <ChangeCO/>
//               }}>Dashboard</span>
              
//             </div>
//             <div className="menuItem">
//               <div> <UilEstate / ></div>
//               <span>Dashboard</span>
//             </div> */}

  
//           {/* signoutIcon */}
//           <div className="menuItem">
//             <UilSignOutAlt  onClick={ ()=> {
//               navigate("/login");
//             }}/>
            
//           </div>
//         </div>
//     </motion.div>
//     </>
//   );
// };

// export default Sidebar;
