import React from "react";
import TestHero from "../../components/test-hero/TestHero";
import { useGlobalHook } from "../../Hooks/Context";
import "./testimonial.css";
import Title from '../../components/TItle/Title'
const Testimonial = () => {
  const { testData1, testData2, testData3, testData4,testTitle } = useGlobalHook();
  return (
    <>
      <Title {...testTitle} />
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <TestHero {...testData1} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <TestHero {...testData2}/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <TestHero {...testData3}/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
          <TestHero {...testData4} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Testimonial;
