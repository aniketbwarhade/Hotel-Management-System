import React from "react";
import "../compnents/Home.css";
import Navb from "../compnents/Navbar";
import Card from 'react-bootstrap/Card';
import customer from "../images/customer.jpg"
import { IoLocation,IoCall,AiTwotoneMail,IoLogoYoutube,FaFacebook,IoLogoInstagram,AiOutlineTwitter} from "react-icons/all";
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
            <div className="row d-flex justify-content-center" >

                <div className="col-md-4">

                <Card   style={{ width: '30rem', height:'23rem' , marginTop:"148px", opacity:"0.9"}} >
                    <Card.Body className="text-center">
                        <Card.Title>Contact Us</Card.Title>
                        <hr />
                            <div className="container">
                               <IoLocation/> 
                               <br/>
                                <b>Queensberry Street, Mumbai, Maharashtra</b>
                            </div>
                            <div className="container">
                                <IoCall/>				
                                <br/>
                                <a href="tel:+00 123 456 789">
                                    <b>+00 123 456 789</b>
                                </a>
                            </div>
                            <div className="container">
                                <AiTwotoneMail/>				
                                <br/>
                                <a href="mailto:hms@gmailcom">
                                    <b>hms@gmail.com</b>
                                </a>
                            </div>
                            <br />
                            <div className="container" style={{fontSize:"24px",marginBottom:"15px"}}>
                                <IoLogoYoutube/>  
                                <FaFacebook/>
                                <IoLogoInstagram/>
                                <AiOutlineTwitter/>
                            </div>
                            <a className="btn btn-outline-secondary" href="/">Go Back</a>

                    </Card.Body>
                </Card>

                </div>

            </div>
           
        </div>
        
    );
}
export default Contact;