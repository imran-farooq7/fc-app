import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { auth } from "../../firebase";
import "./Header.scss";

const Header = ({ currentUser }) => {
  const signOutHandler = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Crown className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutHandler}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
