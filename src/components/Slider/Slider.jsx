import React from 'react'
import { useGlobalHook } from '../../Hooks/Context'
import Hero from '../Hero/Hero'
const Slider = () => {
const  {firstCurousel,secondCarousel,thirdCarousel,fourthCarousel} = useGlobalHook();
  return (
    <>
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
            <Hero {...firstCurousel} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Hero {...secondCarousel} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Hero {...thirdCarousel} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Hero {...fourthCarousel} />
          </div>
        </div>

      </div>
      </>
  )
}

export default Slider