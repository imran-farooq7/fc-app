import React from "react";
import "./custombutoon.scss";

function CustomButoon({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButoon;
