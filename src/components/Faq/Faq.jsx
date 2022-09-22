import React, { useState } from "react";
import "./faq.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="col-md-10">
        <div className="card card-qna">
          <div className={show ? "card-ques white" : "card-ques"}>
            <p>{question}</p>
            <button aria-label="arrow-btn"
              className={show ? "add-icon white-icon" : "add-icon"}
              onClick={() => {
                show ? setShow(false) : setShow(true);
              }}
            >
              {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {show ? <div className="card-ans">{answer}</div> : ""}
        </div>
      </div>
    </>
  );
};

export default Faq;
