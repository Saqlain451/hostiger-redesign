import React from 'react'
import './card4.css'
const Card4 = ({icon, title}) => {
  return (
    <div className="col-md-3">
        <div className="card card-service">
            <span className='icons'>{icon}</span>
            <div className="card-body">
                <p className="card-title">
                    {title}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card4