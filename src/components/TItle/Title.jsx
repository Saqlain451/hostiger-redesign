import React from 'react'
import "./title.css";
const Title = ({title1,title2,span}) => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12">
                <h1 className='title'>{title1}<span>{span}</span>{title2}</h1>
            </div>
        </div>
    </div>
  )
}

export default Title