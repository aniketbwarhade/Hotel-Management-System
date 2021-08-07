import React from "react";
import "../compnents/Home.css";
import Navb from "../compnents/Navbar";
import "./form.css";
import proback from "../images/background.jpg"
function Profile(){
    return(
        <div style={{  
            backgroundImage: `url("${proback}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:"140vh",
            width: "100%",
            paddingTop: "50px"
        }}>
            <Navb/>
                <div className="col-md-8 mx-auto">
                    <div className="content-section" style={{opacity: "0.9", color:"black"}} >
                        <form method="POST" >
                            <fieldset className="form-group">
                                <legend className="border-bottom" style={{textAlign: "center", fontWeight: "bold"}}>CUSTOMER INFORMATION</legend>
                                <div id="div_id_username" className="form-group"> 
                                    <label htmlFor="id_username" className=" requiredField">Username<span className="asteriskField">*</span> </label> 
                                    <div className=""> 
                                        <input type="text" name="username" value="" maxLength="150" className="textinput textInput form-control" required="" id="id_username" /> 
                                        <small id="hint_id_username" className="form-text text-muted">Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small> 
                                    </div> 
                                </div> 
                                <div id="div_id_first_name" className="form-group"> 
                                    <label htmlFor="id_first_name" className="">First name</label> 
                                    <div className=""> 
                                        <input type="text" name="first_name" value="" maxLength="150" className="textinput textInput form-control" id="id_first_name"/> 
                                    </div> 
                                </div> 
                                <div id="div_id_last_name" className="form-group"> 
                                    <label htmlFor="id_last_name" className="">Last name</label> 
                                    <div className=""> 
                                    <input type="text" name="last_name" value="" maxLength="150" className="textinput textInput form-control" id="id_last_name"/> 
                                    </div> 
                                </div> 
                                <div id="div_id_email" className="form-group"> 
                                    <label htmlFor="id_email" className=" requiredField">Email<span className="asteriskField">*</span> </label> 
                                    <div className=""> 
                                        <input type="email" name="email" value="" className="emailinput form-control" required="" id="id_email"/> 
                                    </div>
                                </div>
                                <div id="div_id_date_of_birth" className="form-group"> 
                                    <label htmlFor="id_date_of_birth" className=""> Date of birth</label>
                                    <div className=""> 
                                        <input type="text" name="date_of_birth" value="" className="dateinput form-control" id="id_date_of_birth"/>
                                    </div> 
                                </div> 
                                <div id="div_id_state" className="form-group"> 
                                    <label htmlFor="id_state" className="">State</label>
                                    <div className=""> 
                                    <input type="text" name="state" value="" maxLength="50" className="textinput textInput form-control" id="id_state"/> 
                                    </div> 
                                </div> 
                                <div id="div_id_city" className="form-group"> 
                                    <label htmlFor="id_city" className="">City</label> 
                                    <div className=""> 
                                    <input type="text" name="city" value="" maxLength="50" className="textinput textInput form-control" id="id_city"/> 
                                    </div> 
                                </div> 
                                <div id="div_id_district" className="form-group"> 
                                <label htmlFor="id_district" className="">District</label>
                                    <div className=""> 
                                    <input type="text" name="district" value="" maxLength="50" className="textinput textInput form-control" id="id_district"/> 
                                    </div> 
                                </div> 
                                <div id="div_id_zip_code" className="form-group"> 
                                    <label htmlFor="id_zip_code" className="">Zip code</label>
                                    <div className=""> 
                                    <input type="number" name="zip_code" value="" className="numberinput form-control" id="id_zip_code"/> 
                                    </div> 
                                </div>

                            </fieldset>
                            <div className="form-group">
                                <button className="btn btn-outline-info button-dark" type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
        
        </div>
    );
}
export default Profile;