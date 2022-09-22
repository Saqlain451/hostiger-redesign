import React from "react";
import "./card3.css";

const Card3 = ({
  price,
  service,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
 
}) => {
 
  return (
    <>
      <div className="col-md-4">
        <div className="card card-pricing">
          <div className="card-heading">
            <p>Starting at</p>
            <h1 className="price-title">
              {price}
              <span>/m</span>
            </h1>
          </div>
          <div className="card-middle">
            <h1>{service}</h1>
          </div>
          <div className="card-last">
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
          <p>{para4}</p>
          <p>{para5}</p>
          <p>{para6}</p>
          </div>
          <button className="btn-start" >order now</button>
        </div>
      </div>
    </>
  );
};

export default Card3;
