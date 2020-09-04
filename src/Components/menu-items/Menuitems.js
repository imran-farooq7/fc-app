import React from "react";
import "./menuitems.scss";

function Menuitems({ title, imageUrl }) {
  return (
    <div
      className="menu-item"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default Menuitems;
