import React from "react";
import Carsel from "./Carousel";
import './Home.css';
import Navb from "./Navbar";
function Home(){
    return(
        <div className="back">
            <Navb/>,
             <Carsel/>
        </div>
  
    );
}

export default Home;