import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHotel,FaCalendarAlt,FiLogIn,BsFillQuestionCircleFill,RiHotelBedFill,BiRestaurant,IoMdPhotos,FaTelegramPlane,CgProfile,BsCreditCard } from "react-icons/all";
import './Navbar.css';
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogoutBtn from "../context/LogOutBtn";

function Navb(){
  const {loggedIn} = useContext(AuthContext);

    return(
        <header className="site-header">
         <Navbar className="navbar navbar-expand-md navbar-dark bg-steel fixed-top" style={{height:"50px"}}>
            {loggedIn===true && (
              <Navbar.Brand  className="fontcolor" id="wid" href="/Home" ><FaHotel size='35px' className="icon" /> Hotel Management System</Navbar.Brand>
            )}
            {loggedIn===false && (
              <Navbar.Brand  className="fontcolor" id="wid" href="/" ><FaHotel size='35px' className="icon" /> Hotel Management System</Navbar.Brand>
            )}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                            
                 {/* Link to tag doesnt refresh page */}
                 {loggedIn===true && (
                     <>
                      <NavDropdown className="font" title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <Link to="/Booking">
                            <RiHotelBedFill size='25px'/>  Room Booking
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <Link to="/table">
                            <BiRestaurant size='25px'/>  Book a table
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>    
                      <Link  className="fontcolor" to="/Booked"><FaCalendarAlt size='30px'/></Link>
                      <Link  className="fontcolor" to="/Payment"><BsCreditCard size='30px' /></Link>
                      <Link  className="fontcolor" to="/Profile"><CgProfile size='30px'  /></Link>
                      <Link  className="fontcolor" to="/Gallery"><IoMdPhotos size='30px'  /></Link>
                      <Link  className="fontcolor" to="/Contacts"><FaTelegramPlane size='30px' /></Link>
                      <Link  className="fontcolor" to="/logout"><LogoutBtn/></Link>
                   </>
                  )}
                  {
                    loggedIn===false &&(
                      <>
                        <Link className="nav-link" style={{color: "white",marginRight: "50px",marginLeft: "220px"}}  to="/about" data-toggle="tooltip" data-placement="bottom" title="About"><BsFillQuestionCircleFill size='35px' className="icon"/></Link>
                        <Link className="nav-link" to="/" data-toggle="tooltip" data-placement="bottom" title="Login"><FiLogIn size='35px' className="icon" color="white" /></Link>
                      </>
                    )
                  }
                
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </header>
       
    );
}

export default Navb;