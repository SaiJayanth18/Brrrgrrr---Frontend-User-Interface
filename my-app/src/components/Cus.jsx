import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BackgroundVideo from "./BackgroundVideo";
import ShopSection from "./ShopSection";
function Cus()
{
    return(
<div className="App">
<Header />
<div className="content">
<h1 className="title">Customize Order</h1>
</div>
<BackgroundVideo />
<br></br>
<br></br>
<ShopSection />
<Footer />
</div>
    );
}
export default Cus;