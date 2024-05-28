import React from "react";
import Footer from "./Footer";
import videointro from "./In1.mp4";
import Header from "./Header";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
    <Header />
  <div className="main">
   
  <div className="ov"></div>
 
    <video src={videointro} autoPlay loop muted />
    <div className="content">
      
      <Link to="/standard"><button className="bu">Standard Menu</button></Link>
      <br></br>
    <Link to="/customize"><button className="bu">Customize Order</button></Link>
      
    </div>
    
  </div>
  <Footer />
  </div>
  );
}

export default Home;