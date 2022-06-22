import React from "react";
import "./Button.scss";

const Button = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? "google-sign-in" : null} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
