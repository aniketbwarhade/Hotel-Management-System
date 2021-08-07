import React from "react";
import Home from "./compnents/Home"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Payment from "./pages/Payment"
import Room from "./pages/Room"
import Table from "./pages/Table"
import Booking from "./pages/Booking"
import Profile from "./pages/Profile"
import Booked from "./pages/booked"
import login from "./pages/login"
import about from "./pages/about"
import SignUp from "./pages/SignUp"
import Logout from "./pages/Logout"

import { BrowserRouter , Switch, Route} from 'react-router-dom';
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
function Router() {
  const {loggedIn} = useContext(AuthContext);
  return (
    <BrowserRouter>
        <Switch>
          {
            loggedIn === false && (
              <>
                <Route exact path="/" component={login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/about" component={about}/>
                <Route path="/logout" component={Logout}/>

              </>
            )
          }
          {
            loggedIn === true && (
              <>
                <Route path="/Home" component={Home}/>
                <Route path="/Contacts" component={Contact}/>
                <Route path="/Gallery" component={Gallery}/>
                <Route path="/Payment" component={Payment}/>
                <Route path="/Room" component={Room}/>
                <Route path="/Table" component={Table}/>
                <Route path="/Booking" component={Booking}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/Booked" component={Booked}/>
              </>
            )
          }
          
        </Switch>
  </BrowserRouter>
    
  );
}

export default Router;
