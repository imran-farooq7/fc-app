import React from "react";
import "./Homepage.scss";
import Directory from "../../Components/directory-item/Directory";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
}

export default Homepage;
