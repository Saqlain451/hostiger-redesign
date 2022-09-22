import React from 'react'
import './txtbtn.css'
const TextBtn = ({title,content,placeholder,btnName}) => {
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h1 className='txt-input-title'>{title}</h1>
                    <p className='txt-input-content'>{content}</p>
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <input type="text" placeholder={placeholder} name="input" className='form-control'/>
                    <button className='btn-search' >{btnName}</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TextBtn