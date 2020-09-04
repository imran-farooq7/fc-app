import React from "react";
import "./menuitems.scss";
import { withRouter } from "react-router-dom";

function Menuitems({ title, imageUrl, history, linkUrl, match }) {
  return (
    <div
      className="menu-item"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(Menuitems);
