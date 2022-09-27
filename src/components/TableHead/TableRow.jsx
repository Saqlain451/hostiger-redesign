import React from "react";
import "./table.css"
const TableRow = (props) => {
  return (
    <>
      <tr>
        <td className="pt-5 pb-5 first">{props.td1}</td>
        <td className="pt-5 pb-5">{props.td2}</td>
        <td className="pt-5 pb-5">{props.td3}</td>
        <td className="pt-5 pb-5">{props.td4}</td>
        <td className="pt-5 pb-5">{props.td5}</td>
        <td className="pt-5 pb-5">{props.td6}</td>
        <td className="pt-5 pb-5">{props.td7}</td>
        <td className="pt-5 pb-5">{props.td8}</td>
      </tr>
    </>
  );
};

export default TableRow;
