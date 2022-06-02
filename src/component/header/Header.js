import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import './Header.scss'

const Header = () => {
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
			</div>
		</div>
	);
};

export default Header;
