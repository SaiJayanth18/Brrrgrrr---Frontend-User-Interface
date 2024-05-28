import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MenuApp from "./MenuItem";
function Stan()
{
    return(
<div><Header />
<h1 className="title">Standard Menu</h1>
<MenuApp />
<Footer />
</div>
    );
}
export default Stan;