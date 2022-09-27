import React from "react";
import "./testHero.css";
const TestHero = ({ img, name, job, content }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <article className="review">
              <div className="img-container">
                <img
                  src={img}
                  className="person-img"
                  alt="person-img"
                />
              </div>
              <h1 className="author">{name}</h1>
              <p className="job">{job}</p>
              <p className="info">{content}</p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestHero;
