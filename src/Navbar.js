import React from "react";
import ReactDOM from "react-dom";

import NavbarCSS from "./Navbar.css";
import AirBnbLogo from "./airbnb-logo.png";

function Navbar() {
  return (
    <nav>
      <img src={AirBnbLogo} alt="AirBnb Logo" />
    </nav>
  );
}

export default Navbar;
