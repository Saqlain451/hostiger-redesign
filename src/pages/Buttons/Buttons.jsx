import React, { useState } from "react";
import High from "./btnPage/High";
import Security from "./btnPage/Security";
import Spam from "./btnPage/spam";
import Support from "./btnPage/Support";
import "./buttons.css";
const Buttons = () => {
  const [page, setPage] = useState(<High />);
  const [click, setClick] = useState({
    high: true,
    security: false,
    spam: false,
    support: false,
    uptime: false,
  });

  const btnDarkClik = (e) => {
    const name = e.target.name;

    setClick((...preVal) => {
      return { ...preVal, [name]: true };
    });

    // if (name === "high") {
    //   setClick({
    //     high: true,
    //     security: false,
    //     spam: false,
    //     support: false,
    //     uptime: false,
    //   });
    // } else if (name === "security") {
    //   setClick({
    //     high: false,
    //     security: true,
    //     spam: false,
    //     support: false,
    //     uptime: false,
    //   });
    // } else if (name === "spam") {
    //   setClick({
    //     high: false,
    //     security: false,
    //     spam: true,
    //     support: false,
    //     uptime: false,
    //   });
    // } else if (name === "support") {
    //   setClick({
    //     high: false,
    //     security: false,
    //     spam: false,
    //     support: true,
    //     uptime: false,
    //   });
    // } else {
    //   setClick({
    //     high: false,
    //     security: false,
    //     spam: false,
    //     support: false,
    //     uptime: true,
    //   });
    // }
    name === "security"
      ? setPage(<Security />)
      : name === "spam"
      ? setPage(<Spam />)
      : name === "support"
      ? setPage(<Support />)
      : setPage(<High />);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-12">
            <div className="input-buttons">
              <input
                type="button"
                name="high"
                value="High-Performance"
                className={click.high ? "btn-dark btn-primary" : "btn-dark "}
                onClick={btnDarkClik}
              />

              <input
                type="button"
                name="security"
                value="Enhanced Security"
                className={click.security ? "btn-dark btn-primary" : "btn-dark"}
                onClick={btnDarkClik}
              />

              <input
                type="button"
                name="spam"
                value="spam guard"
                className={click.spam ? "btn-dark btn-primary" : "btn-dark"}
                onClick={btnDarkClik}
              />
              <input
                type="button"
                name="support"
                value="Unbeatable Support"
                className={click.support ? "btn-dark btn-primary" : "btn-dark"}
                onClick={btnDarkClik}
              />
            </div>
          </div>
        </div>
      <div className="row justify-content-center btn-pages">{page}</div>
      </div>
    </>
  );
};

export default Buttons;
