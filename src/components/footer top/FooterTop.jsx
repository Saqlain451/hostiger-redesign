import React from "react";
import { useNavigate } from "react-router-dom";
import "./footerTop.css";
const FooterTop = ({ icon, content }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-3 footer-top" onClick={()=>{navigate("/contact")}}>
        <p className="footer-top-icon">{icon}</p>
        <p className="footer-top-content">{content}</p>
      </div>
    </>
  );
};

export default FooterTop;
