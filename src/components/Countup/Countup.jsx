import React from "react";
import { countUpData } from "../../Hooks/data";
import ConCard from "../conIcon/ConCard";
import "./count.css"
const Countup = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center countup">
          {countUpData.map((element, index) => {
            const { icon, title, content } = element;
            return (
              <ConCard
                key={index}
                icon={icon}
                title={title}
                content={content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Countup;
