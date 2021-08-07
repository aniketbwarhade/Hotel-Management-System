import React, {  useContext, useState } from "react";
import login_bg from "../images/login_bg.jpg";
import Navb from "../compnents/Navbar";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    async function login(e) {
        e.preventDefault();

        try {
            const loginData = {
                email,
                password,
            };
            await axios.post("http://localhost:5000/auth/login/",loginData);
            await getLoggedIn();
            history.push("/Home");
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
            height:"100vh",
            width: "100%",
            paddingTop: "50px"
          }}>
            <Navb/>
            <div className="col-md-6 mx-auto">
                <div className="content-section" style={{border: "1px solid #0a2642" , borderRadius: "15px", opacity: "0.9",height:"350px",width:"75%",marginBottom:"20px"}}>
                    <form onSubmit={login}>
                        <fieldset className="form-group">
                            <legend className="border-bottom" style={{fontFamily: "Georgia Times New Roman Times serif" ,fontWeight: "bold"}}>Log In</legend>
                            <div id="div_id_email" className="form-group"> 
                                <label htmlFor="id_email" className=" requiredField">Email-Id<span className="asteriskField">*</span> </label>
                                <div className=""> 
                                    <input type="email" autoComplete="username" className="emailinput form-control" required="" id="id_email" onChange={(e) => setEmail(e.target.value)} value={email}/> 
                                </div> 
                            </div> 
                            <div id="div_id_password" className="form-group"> 
                                <label htmlFor="id_password" className=" requiredField">Password<span className="asteriskField">*</span> </label> 
                                <div className=""> 
                                    <input type="password" autoComplete="current-password" className="textinput textInput form-control" required="" id="id_password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                                </div> 
                            </div>

                        </fieldset>
                        <div className="form-group">
                            <button className="btn btn-outline-info" type="submit"  >Login</button>
                            <small className="text-muted ml-2">
                                <a href="/password-reset/" style={{paddingRight: "10px"}}>Forgot Password?</a>
                            </small>
                        </div>
                    </form>
                    <div className="border-top pt-3">
                        <small className="text-muted">
                            Need an Account? 
                            <a href="/signup" className="ml-2">Sign up</a>
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
    );
}

export default Login;
