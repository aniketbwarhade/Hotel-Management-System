import React from "react";
import login_bg from "../images/login_bg.jpg";
import Navb from "../compnents/Navbar";

function Logout(){
    return(
        <div style={{  
            backgroundImage: `url("${login_bg}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:"100vh",
            width: "100%",
            paddingTop: "50px"
          }}>
            <Navb/>
            <div className="col-md-6 mx-auto">
                <div className="content-section" style={{border: "1px solid #0a2642" ,borderRadius: "15px", opacity: "0.9", marginTop: "150px",height:"130px"}}>
                    <h3 style={{textAlign: "center", color: "#0a2642", fontFamily: "Georgia Times New Roman Times serif" , fontWeight: "bold"}}>You have been logged out!</h3>
                    <div className="border-top pt-3" style={{textAlign: "center"}}>
                        <a className="btn btn-outline-primary" href="/">Log In Again</a>
                    </div>
                </div>
        </div>
            <div className="col-md-6 mx-auto">
                <div className="alert alert-info content-section" style={{borderRadius: "15px" ,border: "1px solid #0a2642",height:"110px",width:"65%",marginTop:"0px"}}>
                    <p>
                        <b>Note:</b> You need to login/sign up in order to make use of this
                        hotel management system.
                    </p>
                    <p>Thank you!</p>
                </div>
            </div>
        </div>
    );
}

export default Logout;