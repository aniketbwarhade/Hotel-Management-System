import React from "react";
import "../compnents/Home.css";
import "./hover.css"
import Navb from "../compnents/Navbar";
function Gallery(){
    return(
        <div style={{  
            paddingTop: "50px",
            backgroundColor:"black"
          }}>
            <Navb/>
            <h4 style={{"text-align": "center" ,"text-decoration": "underline", "color": "white",marginTop:"50px"}}>GALLERY</h4>
            <br/>
            <div style={{margin:"0 150px"}}>
                <div className="row" >
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-one" >
                            <span className="text">Swimming Pool</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-two">
                            <span className="text">Buffet</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-three">
                            <span className="text">Deluxe Room</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-four">
                            <span className="text">King Room</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-five">
                            <span className="text">Queen Room</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-six">
                            <span className="text">Lobby</span>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-seven">
                            <span className="text">Reception</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-eight">
                            <span className="text">Restaurant</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cont container" style={{padding:"0px"}}>
                            <div className="child bg-nine">
                            <span className="text">Non-AC Room</span>
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>  
        </div> 
            
    );
}
export default Gallery;