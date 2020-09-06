import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.png";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
}

export default Header;
