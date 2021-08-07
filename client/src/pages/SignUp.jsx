import React , { useContext, useState } from "react";
import login_bg from "../images/login_bg.jpg";
import Navb from "../compnents/Navbar";
import axios from "axios"
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
function SignUp(){
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();
    
    async function register(e) {
      e.preventDefault();
      try {
        const registerData = {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword
        };

        await axios.post("http://localhost:5000/auth", registerData);
        await getLoggedIn();
        history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
    return(
        <div style={{  
            backgroundImage: `url("${login_bg}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:"150vh",
            width: "100%",
            paddingTop: "50px"

        }}>
            <Navb/>,
            <div className="col-md-6 mx-auto">
        
                <div className="content-section" style={{border: "1px solid #0a2642" ,borderRadius: "15px",width:"75%",height:"65%"}}>
                    <form onSubmit={register}>  
                        <fieldset className="form-group">
                            <legend className="border-bottom">Register</legend>
                            <div id="div_id_username" className="form-group"> 
                            <label htmlFor="id_username" className=" requiredField">Username<span className="asteriskField">*</span> </label>
                                <div className=""> 
                                    <input type="text"  autoComplete="username" maxLength="150"  className="textinput textInput form-control" required="" id="id_username" onChange={(e) => setUserName(e.target.value)} value={username}/> 
                                    <small id="hint_id_username" className="form-text text-muted">Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small> 
                                </div> 
                            </div> 
                            <div id="div_id_first_name" className="form-group">
                                <label htmlFor="id_first_name" className=" requiredField">First name<span className="asteriskField">*</span> </label>
                                <div className=""> 
                                    <input type="text"  maxLength="50" className="textinput textInput form-control" required="" id="id_first_name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/> 
                                </div> 
                            </div> 
                            <div id="div_id_last_name" className="form-group"> 
                                <label htmlFor="id_last_name" className=" requiredField">Last name<span className="asteriskField">*</span> </label> 
                                <div className=""> 
                                    <input type="text"  maxLength="150" className="textinput textInput form-control" required="" id="id_last_name" onChange={(e) => setLastName(e.target.value)} value={lastName}/> 
                                </div> 
                            </div> 
                            <div id="div_id_email" className="form-group"> 
                                <label htmlFor="id_email" className=" requiredField">Email-Id<span className="asteriskField">*</span> </label>
                                <div className=""> 
                                    <input type="email"  className="emailinput form-control" required="" id="id_email" onChange={(e) => setEmail(e.target.value)} value={email}/> 
                                </div> 
                            </div> 
                            <div id="div_id_password1" className="form-group"> 
                                <label htmlFor="id_password1" className=" requiredField">Password<span className="asteriskField">*</span> </label>
                                <div className=""> 
                                    <input type="password"  autoComplete="new-password" className="textinput textInput form-control" required="" id="id_password1" onChange={(e) => setPassword(e.target.value)} value={password}/> 
                                    <small id="hint_id_password1" className="form-text text-muted">
                                        <ul>
                                            <li>Your password can’t be too similar to your other personal information.</li>
                                            <li>Your password must contain at least 8 characters.</li>
                                            <li>Your password can’t be a commonly used password.</li>
                                            <li>Your password can’t be entirely numeric.</li>
                                        </ul>
                                    </small> 
                                </div> 
                            </div> 
                            <div id="div_id_password2" className="form-group"> 
                                <label htmlFor="id_password2" className=" requiredField">Password confirmation<span className="asteriskField">*</span> </label>
                                <div className="">
                                    <input type="password"  autoComplete="new-password" className="textinput textInput form-control" required="" id="id_password2" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/> 
                                    <small id="hint_id_password2" className="form-text text-muted" >
                                        Enter the same password as before, for verification.
                                    </small> 
                                </div> 
                            </div>

                        </fieldset>
                        <div className="form-group">
                            <button className="btn btn-outline-info" type="submit" value="submit">Sign Up</button>
                        </div>
                    </form>
                    <div className="border-top pt-3">
                        <small className="text-muted">
                            Already Have an Acoount? <a href="/login" className="ml-2">Sign In</a>
                        </small>
                    </div>
                </div>

            </div>
            <div className="col-md-6 mx-auto">
                <div className="alert alert-info content-section" style={{borderRadius: "15px" ,border: "1px solid #0a2642",height:"110px",width:"75%",marginTop:"0px"}}>
                    <p>
                        <b>Note:</b> You need to login/sign up in order to make use of this
                        hotel management system.
                    </p>
                    <p>Thank you!</p>
                </div>
            </div>
        </div>
    )
    
}
export default SignUp;

