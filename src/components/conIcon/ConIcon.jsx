import React from "react";
import "./conicon.css";
const ConIcon = ({ icon, content }) => {
  return (
    <div className="d-flex align-items-center gap-3 gap-lg-5">
      <span className="contact-icon ms-5">{icon}</span> 
      <p className="con-mid-text">{content}</p>
    </div>
  );
};

export default ConIcon;
