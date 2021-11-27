import React from "react";
import { Home, HomeH1 } from "./HomeElements";
import image from "../Images/jay.beatz.jpg";
function Homes() {
    
  return (
    <>
      <Home style={{ backgroundImage: `url(${image})` }} id="/"></Home>
      <HomeH1><h1 style={{marginTop:'-20rem',color:'black',fontFamily:"'Montserrat', sans-serif",fontWeight:'bolder'}} data-aos="fade-up" >Welcome to JayBeatz.com</h1></HomeH1>
    </>
  );
}

export default Homes;
