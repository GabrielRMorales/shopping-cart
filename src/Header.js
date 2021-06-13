import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>{
    return <nav id="primary-nav">
        <Link to="/shopping">Shopping</Link>
        <Link to="/home">Home</Link>
    </nav>
}

export default Header;