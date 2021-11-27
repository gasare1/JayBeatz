import React from "react";
import { Home, HomeH1 } from "./HomeElements";
import image from "../Images/djmainback.jpg";
import { useEffect } from "react";

function Homes() {
  return (
    <>
      <Home style={{ backgroundImage: `url(${image})` }} id="/"></Home>
      <HomeH1 data-aos="fade-up" data-aos-duration="3000">
        <h1
          style={{
            marginTop: "-30rem",
            color: "black",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "bolder",
          }}
        >
          Welcome to JayBeatz.com
        </h1>
      </HomeH1>
    </>
  );
}

export default Homes;
