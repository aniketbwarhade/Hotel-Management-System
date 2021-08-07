import React from "react";
import login_bg from "../images/login_bg.jpg";
import Navb from "../compnents/Navbar";

function about(){
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
                <article className="content-section box-shadow" style={{borderRadius: "15px",border: "1px solid #0a2642",height:"70%",width:"65%",marginBottom:"20px"}}>
                <h3 className="article-title">About</h3>
                <p className="article-content text-wrap">
                    This is a Hotel Management System. It allows it's customer users to book
                    rooms in hotels for a time period. It also allows the Hotel owners to manage
                    their guests well! Hop into the application for more insights! Go ahead and
                    create an account for yourself.
                </p>
            </article>
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

export default about;