import React from 'react'
import "./conicon.css"
const ConCard = ({icon,title,content,btntext}) => {
  return (
    <div className="col-md-3">
        <div className="card card-contact p-3">
            <p> {icon} </p>
            <h1>{title}</h1>
            <span>{content}</span>
            <button className='btn-start' >{btntext}</button>
        </div>
    </div>
  )
}

export default ConCard