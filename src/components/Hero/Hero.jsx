import React from "react";
import { useNavigate } from "react-router-dom";
import './hero.css'
const Hero = ({ title, content, img, class1, class2,path }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row justify-content-center d-flex align-items-center">
          <div className={class1}>
            <h1 className="carosel-title">{title}</h1>
            <p className="carosel-content">{content}</p>
            <button className="btn-start" onClick={()=>{navigate(path)}} >
              view details
            </button>
          </div>
          <div className={class2}>
            <img src={img} alt="slider_img"  width="570" height="400" className="carousel-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
