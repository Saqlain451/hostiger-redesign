import React from 'react'
import "./table.css"
const TableHead = (props) => {
  return (
    <thead>
    <tr>
      <th scope="col" >{props.th1}</th>
      <th scope="col" >{props.th2}</th>
      <th scope="col" >{props.th3}</th>
      <th scope="col" >{props.th4}</th>
      <th scope="col" >{props.th5}</th>
      <th scope="col" >{props.th6}</th>
      <th scope="col" >{props.th7}</th>
      <th scope="col" >{props.th8}</th>
    </tr>
    </thead>
  )
}

export default TableHead