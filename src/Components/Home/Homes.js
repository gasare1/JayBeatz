import React from 'react'
import { Home } from './HomeElements'
import image from "../Images/jay.beatz.jpg";
function Homes() {
    return (
        <Home style={{backgroundImage:`url(${image})`}} id="/">
            <h1 style={{zIndex:'1',justifyContent:'center',alignItems:'center',display:'flex'}}>Welcome</h1>
          
        </Home>
    )
}

export default Homes
