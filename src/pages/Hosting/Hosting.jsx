import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import TableHead from "../../components/TableHead/TableHead";
import Title from "../../components/TItle/Title";
import { useGlobalHook } from "../../Hooks/Context";
import "./hosting.css";
const Hosting = () => {
  const {
    titleChange,
    hostingFeatures,
    faqHosting,
    hostTitle,
    titlePrice,
    priceCard,
    titleFaq,
    hostTableHeader,
    tableRow,
  } = useGlobalHook();
  useEffect(() => {
    titleChange("Hosting Page");
  }, [titleChange]);
  return (
    <>
      <div className="hosting">
        <Slider />
      </div>
      <div className="hosting-features">
        <div className="container">
          <Title {...hostTitle} />
          <div className="row justify-content-center">{hostingFeatures}</div>
        </div>
      </div>
      <div className="hosting-pricing">
        <Title {...titlePrice} />
        <div className="container">
          <div className="row justify-content-center gy-5">{priceCard}</div>
        </div>
      </div>

      <div className="hosting-table">
        <div className="container">
        <div className="table-responsive">
        <table className="table table-striped table-bordered">
            <TableHead {...hostTableHeader}/>
        <tbody>
            {tableRow}
        </tbody>
        </table>
        </div>
      </div>
      </div>

      <div className="hosting-faq">
        <Title {...titleFaq} />
        <div className="container">
          <div className="row justify-content-center gy-4">{faqHosting}</div>
        </div>
      </div>
    </>
  );
};

export default Hosting;
