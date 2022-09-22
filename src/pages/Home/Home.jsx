import React from "react";
import { useEffect } from "react";
import Title from "../../components/TItle/Title";
import TextBtn from "../../components/txt&input/TextBtn";
import { useGlobalHook } from "../../Hooks/Context";
import "./home.css";
import OtherHero from "../../components/OtherHero/OtherHero";
import Slider from "../../components/Slider/Slider";
import Buttons from "../Buttons/Buttons";
import Testimonial from "../Test/Testimonial";
import Countup from "../../components/Countup/Countup";
const Home = () => {
  const { titleChange,otherHero,homeicons,otherSeo,otherInternet, serviceCard,txtbtnHome,priceCard,titlePrice,txtbtnHome2,titleService,otheTitle } =
    useGlobalHook();
  useEffect(() => {
    titleChange("Hostinger home page");
  }, [titleChange]);

  return (
    <>
      <div className="home">
          <Slider/>
        </div>
      <div className="home-textbtn">
        <TextBtn {...txtbtnHome}/>
      </div>
      <div className="home-icon">
        <div className="container">
          <div className="row justify-content-center">
            {homeicons}
          </div>
        </div>
      </div>
      <div className="home-price">
        <Title {...titlePrice} />
        <div className="container">
            <div className="row justify-content-center gy-5">
            {priceCard}
            </div>
        </div>
      </div>
      <div className="home-textbtn2">
          <TextBtn {...txtbtnHome2}/>
      </div>
      <div className="home-service">
        <Title {...titleService} />
        <div className="container">
          <div className="row justify-content-center gy-5">
            {serviceCard}
          </div>
        </div>
      </div>
      <div className="other-service">
        <Title {...otheTitle}/>
        <OtherHero {...otherHero}/>
      </div>
      <div className="other-service seo">
      <OtherHero {...otherSeo}/>
      </div>
      <div className="other-service internet">
      <OtherHero {...otherInternet}/>
      </div>

    <div className="home-countup">
      <Countup/>
    </div>

      <div className="home-buttons">
          <Buttons />
      </div>
      <div className="home-testimonial">
        <Testimonial/>
      </div>
    </>
  );
};

export default Home;
