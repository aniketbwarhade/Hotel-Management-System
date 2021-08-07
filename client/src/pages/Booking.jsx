import React from "react";
import Navb from "../compnents/Navbar";
import room from "../images/room.jpg"

function Booking(){
    return(
        <div style={{  
            backgroundImage: `url("${room}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:"100vh",
            width: "100%",
            paddingTop: "50px"
          }}>
            <Navb/>
            <div className="col-md-5 mx-auto" style={{border: "1px solid #0a2642", borderRadius: "15px", opacity: "0.9",backgroundColor:"#333",color:"white",padding:"25px",marginTop:"50px"}}>
                <form method="POST">
                    <fieldset className="form-group">
                        <legend className="border-bottom" style={{fontFamily: "Georgia" , fontWeight: "bold"}}>Room Booking</legend>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" type="date" required=""></input>
                                        <span className="form-label">Check In</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" type="date" required=""></input>
                                        <span className="form-label">Check out</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <select className="form-control" required="">
                                            <option value="" selected="" hidden="">Room Categary</option>
                                            <option>AC</option>
                                            <option>Non-AC</option>
                                            <option>Deluxe</option>
                                            <option>King</option>
                                            <option>Queen</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                        <span className="form-label">Rooms</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <select className="form-control" required="">
                                            <option value="" selected="" hidden="">no of adults</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                        <span className="form-label">Adults</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <select className="form-control" required="">
                                            <option value="" selected="" hidden="">no of children</option>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                        <span className="form-label">Children</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" type="email" placeholder="Enter your Email" ></input>
                                        <span className="form-label">Email</span>
                                    </div>
                                    </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" type="tel" placeholder="Enter you Phone"></input>
                                        <span className="form-label">Phone</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <button className="btn btn-outline-info" type="submit">Book</button>
                        <a className="btn btn-outline-secondary" href="/">Go Back</a>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
export default Booking;