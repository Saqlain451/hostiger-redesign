import React from 'react'
import './feature.css'; 
const Features = ({title,content,img,width,height}) => {
  return (
    <>
        <div className="col-md-3 features">
            <img src={img} alt="img" width={width} height={height} className='d-flex mx-auto' />
            <h1>{title}</h1>
            <p>{content}</p>
            <button className="btn-start"> view details </button>
        </div>
    </>
  )
}

export default Features