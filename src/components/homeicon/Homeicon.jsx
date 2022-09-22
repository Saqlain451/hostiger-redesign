import React from "react";
import "./homeicon.css";
const Homeicon = ({classname,icon,content}) => {
  return (
    <>
  
          <div className="col-md-2">
            <div className={classname}>
              <span>
                {icon}
              </span>
              <p>{content}</p>
            </div>
          </div>

    </>
  );
};

export default Homeicon;
