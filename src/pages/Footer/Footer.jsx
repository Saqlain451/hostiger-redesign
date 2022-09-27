import React from "react";
import FooterTop from "../../components/footer top/FooterTop";
import "./footer.css";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdChatboxes, IoIosCall } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
import FooterMid from "../../components/Footer-middle/FooterMid";
import { useGlobalHook } from "../../Hooks/Context";
import pament from "../../assets/Img/pament.webp";
const Footer = () => {
  const { firstMid, secondMid, thirdMid } = useGlobalHook();
  const curYear = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <FooterTop
              icon=<RiCustomerService2Fill />
              content="24/7 Customer Support"
            />
            <FooterTop icon=<HiOutlineMail /> content="support@example.com" />
            <FooterTop
              icon=<IoMdChatboxes />
              content="click here to live chat"
            />
            <FooterTop icon=<IoIosCall /> content="+91 9845207684" />
          </div>
          <div className="row justify-content-center">
            <FooterMid {...firstMid} />
            <FooterMid {...secondMid} />
            <FooterMid {...thirdMid} />
            <div className="col-md-3 footer-mid">
              <h1>Subscribe</h1>
              <input
                type="text"
                className="form-control py-4"
                placeholder="Enter your email address"
              />
              <button className="btn btn-primary d-block mx-auto form-control py-3 my-4">
                Subscribe
              </button>
              <span>Follow Us On :</span>
              <div className="footer-icons">
                <p>
                  
                  <a
                    href="https://www.facebook.com/hydra.saqlain/"
                    aria-label="fb"
                    className="icons"
                    target = "blank"
                  >
                    <ImFacebook />
                  </a>
                </p>
                <p>
                  
                  
                  <a
                    href="https://www.instagram.com/hydra_saqlain/"
                    aria-label="insta"
                    className="icons"
                    target = "blank"
                  >
                    <AiFillInstagram />
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    href="https://github.com/Saqlain451"
                    aria-label="github"
                    className="icons"
                    target = "blank"
                  >
                    <AiOutlineGithub />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last">
        <div className="container">
        <div className="row justify-content-center d-flex align-items-center">
          <div className="col-md-6">
            Copyrigth {curYear}© <span className="text-primary">Hostinger</span> . All Reserved
          </div>
          <div className="col-md-6 footer-last-right">
            WE ACCEPT:
            <img src={pament} alt="pament" width="315" height="40"/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
