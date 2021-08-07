import React from "react";
import "../compnents/Home.css";
import Navb from "../compnents/Navbar";
import table from "../images/tabless.jpeg"
function Table(){
    return(
        <div style={{  
            backgroundImage: `url("${table}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:"100vh",
            width: "100%",
            paddingTop: "50px"
        }}>
            <Navb/>
            <div className="alert alert-info col-md-6 mx-auto" style={{borderRadius: "15px", border: "1px solid #0a2642" , margin:"15px 70px",width:"30%"}}>
                <p className="text-wrap" style={{margin: "0%"}}>
                    <b>Note:</b> Enter the room number, check-in and check-out date of the room
                    that you have booked, for which you want to book a table at the restaurant.
                </p>
                <p style={{margin:"0%"}}>Thank you :)</p>
            </div>
            <div className=" col-md-6 mx-auto" style={{border: "1px solid #0a2642", borderRadius: "15px", opacity: "0.9",backgroundColor:"white",width:"30%"}}>
                <form method="POST">
                    <input type="hidden" name="csrfmiddlewaretoken" value="G5OQzBdRzDM3zVREI3m1ce4IF3YGOmYYw60qUHnYzTxqMn2DhW7M5deQMg7LPAYx"/>
                    <fieldset className="form-group">
                        <legend className="border-bottom" style={{fontFamily: "Georgia 'Times New Roman' Times serif",fontWeight: "bold"}}>Restaurant Table Booking</legend>
                        <div id="div_id_room" className="form-group"> <label for="id_room" className=" requiredField">
                        Room<span className="asteriskField">*</span> </label> <div className=""> <input type="number" name="room" className="numberinput form-control" required="" id="id_room"/> </div> </div> <div id="div_id_check_in" className="form-group"> <label for="id_check_in" className=" requiredField">
                        Check in<span className="asteriskField">*</span> </label> <div className=""> <input type="date" name="check_in" className="dateinput form-control" required="" id="id_check_in"/> </div> </div> <div id="div_id_check_out" className="form-group"> <label for="id_check_out" className=" requiredField">
                        Check out<span className="asteriskField">*</span> </label> <div className=""> <input type="date" name="check_out" className="dateinput form-control" required="" id="id_check_out"/> </div> </div> <div id="div_id_time" className="form-group"> <label for="id_time" className=" requiredField">
                        Time<span className="asteriskField">*</span> </label> <div className=""> <input type="datetime-local" name="time" className="datetimeinput form-control" required="" id="id_time"/> </div> </div>
                    </fieldset>
                    <div className="form-group">
                        <button className="btn btn-outline-info" type="submit">Book</button>
                        <a className="btn btn-outline-secondary" href="/main/home-customer/">Go Back</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Table;