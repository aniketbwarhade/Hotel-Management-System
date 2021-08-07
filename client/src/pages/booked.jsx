import React from "react";
import "../compnents/Home.css";
import Navb from "../compnents/Navbar";
import customer from "../images/customer.jpg";
function Contact(){
    return(
        <div style={{  
            backgroundImage: `url("${customer}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:"100vh",
            width: "100%",
            paddingTop: "50px"
          }}>
            <Navb/>
           
        </div>
        
    );
}
export default Contact;