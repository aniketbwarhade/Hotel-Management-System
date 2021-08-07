import axios from "axios";
import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
// import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";

function LogoutBtn(){
    const {getLoggedIn} = useContext(AuthContext)
    // const history = useHistory();
    async function logOut(){
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        // history.push("/logout");
    }

    return (
        <FiLogOut size='30px' onClick={logOut} />
    )
}

export default LogoutBtn;


    
