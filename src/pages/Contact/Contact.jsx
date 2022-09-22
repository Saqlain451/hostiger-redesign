import React, { useEffect } from "react";
import { useGlobalHook } from "../../Hooks/Context";
import { IoIosArrowForward } from "react-icons/io";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import { address, contactData } from "../../Hooks/data";
import ConIcon from "../../components/conIcon/ConIcon";
import ConCard from "../../components/conIcon/ConCard";
import Testimonial from '../Test/Testimonial'
const Contact = () => {
  const { titleChange } = useGlobalHook();
  const navigate = useNavigate();
  useEffect(() => {
    titleChange("Contact Page");
  });
  return (
    <>
      <div className="contact-top">
        <div className="row top d-flex align-items-center">
          <div className="col-md-6">
            <h1>Contact</h1>
          </div>
          <div className="col-md-6">
            <p>
              You are here :
              <span
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </span>
              <IoIosArrowForward />
              Contact
            </p>
          </div>
        </div>
      </div>

      <div className="contact-mid">
        <div className="row justify-content-center d-flex align-items-center">
          <div className="col-md-6">
            <h1 className="ms-5">
              <span>Con</span>tact Address
            </h1>
            {address.map((element, index) => {
              return (
                <ConIcon
                  key={index}
                  icon={element.icon}
                  content={element.content}
                />
              );
            })}
          </div>
          <div className="col-md-6 bg-secondary">
            <div className="row justify-content-center margin">
              <div className="col-md-9">
                <form action="https://formspree.io/f/mwkzljeq" method="POST">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name "
                    required
                  />
                  <input
                    name="sub"
                    type="text"
                    className="form-control"
                    placeholder="subject"
                    required
                  />
                  <input
                    name="mail"
                    type="mail"
                    className="form-control"
                    placeholder="Mail address "
                    required
                  />
                  <textarea
                    name="textarea"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    className="form-control"
                    required
                  ></textarea>
                  <button className="btn-send">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-mid2">
        <div className="container">
          <div className="row justify-content-center gy-5">
            {contactData.map((element, index) => {
              const { icon, title, content, btnText } = element;
              return (
                <ConCard
                  key={index}
                  icon={icon}
                  title={title}
                  content={content}
                  btntext={btnText}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="contact-test">
      <Testimonial/>
      </div>
    </>
  );
};



export default Contact;
