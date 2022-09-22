import React from "react";
import "./footerMid.css";
import { useNavigate } from "react-router-dom";
const FooterMid = ({
  title,
  list1,
  list2,
  list3,
  list4,
  list5,
  listPath1,
  listPath2,
  listPath3,
  listPath4,
  listPath5,
}) => {
  const navigate = useNavigate();
  return (
    <div className="col-md-3 footer-mid">
      <h1>{title}</h1>
      <p
        onClick={() => {
          navigate(listPath1);
        }}
      >
        {list1}
      </p>
      <p
        onClick={() => {
          navigate(listPath2);
        }}
      >
        {list2}
      </p>
      <p
        onClick={() => {
          navigate(listPath3);
        }}
      >
        {list3}
      </p>
      <p
        onClick={() => {
          navigate(listPath4);
        }}
      >
        {list4}
      </p>
      <p
        onClick={() => {
          navigate(listPath5);
        }}
      >
        {list5}
      </p>
    </div>
  );
};

export default FooterMid;
