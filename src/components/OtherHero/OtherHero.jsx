import React from 'react'
import {BiCheck} from 'react-icons/bi'
import "./other.css"
import { useNavigate } from 'react-router-dom'
const OtherHero = ({class1,class2,span,title,content,img,path}) => {
  const navigate = useNavigate();
  return (
    <>
    <div className="container">
        <div className="row justify-content-center other-hero">
            <div className={class1}>
                <p className='hero-span'>{span}</p>
                <h1 className="carosel-title">{title}</h1>
                <p className="carosel-content">{content}</p>
                <div className="list">
                    <div className="list-left">
                        <p><span className="check-icon"><BiCheck/></span> Lorem ipsum dolor sit amet</p>
                        <p><span className="check-icon"><BiCheck/></span> Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="list-right">
                        <p><span className="check-icon"><BiCheck/></span> Lorem ipsum dolor sit amet</p>
                        <p><span className="check-icon"><BiCheck/></span> Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button className='btn-start' onClick={()=>{navigate(path)}} >View Details</button>
            </div>
            <div className={class2}>
                <img src={img} alt="img logo" width="518" height="454" className='carousel-img' />
            </div>
        </div>
    </div>
    </>
  )
}

export default OtherHero