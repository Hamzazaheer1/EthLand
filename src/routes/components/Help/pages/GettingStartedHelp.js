import React from 'react';
import meta1 from "../img/01.png"
// import meta2 from "../img/02.png"
// import meta3 from "../img/03.png"
// import meta4 from "../img/1.png"
// import meta5 from "../img/2.png"
// import meta6 from "../img/3.png"
// import meta7 from "../img/4.png"
// import meta8 from "../img/5.png"
// import meta9 from "../img/6.png"
// import meta10 from "../img/7.png"
// import meta11 from "../img/8.png"
// import meta12 from "../img/9.png"
// import meta13 from "../img/10.png"
// import meta14 from "../img/11.png"
import HelpNav from "../Navbar"

function Home() {
  
  return (
    <>
    <HelpNav/>
    <div className='home' style={{display: "block", marginTop: "5rem", marginLeft:"30rem"}}>
      
        <img src={meta1} alt="meta1 img missing" width={"1000"} style={{marginBottom: "3rem"}}/>
        <img src={meta1} alt="meta1 img missing" width={"1000"} style={{marginBottom: "3rem"}}/>
        <img src={meta1} alt="meta1 img missing" width={"1000"} style={{marginBottom: "3rem"}}/>

    </div>
    </>
    
  );
}

export default Home;
