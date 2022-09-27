import React, { useEffect } from 'react'
import "./vps.css"
import Hero from '../../components/Hero/Hero'
import { useGlobalHook } from '../../Hooks/Context'
import Title from '../../components/TItle/Title'
import TableHead from '../../components/TableHead/TableHead'
const Vps = () => {
  const {titleChange,tableRowVps, vpsHero,vpsFeature,vpsfeatureTitle,titlePrice,priceCard,faqVps,titleFaq,vpsTableHeader} =useGlobalHook()
  
  useEffect(()=>{
    titleChange("Vps Page")
  })
  
  return (
    <>
        <div className="vps-hero">
         <Hero {...vpsHero}/>
         </div>
        <div className="vps-feature">
          <Title {...vpsfeatureTitle}/>
          <div className="container">
            <div className="row justify-content-center">
              {vpsFeature}
            </div>
          </div>
        </div>

        <div className="vps-pricing">
            <Title {...titlePrice}/>
            <div className="container">
            <div className="row justify-content-center gy">
            {priceCard}
            </div>
        </div>
        </div>

        <div className="vps-table">
        <div className="container">
        <div className="table-responsive">
        <table className="table">
            <TableHead {...vpsTableHeader}/>
        <tbody>
            {tableRowVps}
        </tbody>
        </table>
        </div>
      </div>
        </div>

        <div className="vps-faq">
          <Title {...titleFaq}/>
          <div className="container">
            <div className="row justify-content-center gy-4">
              {faqVps}
            </div>
          </div>
        </div>
    </>
  )
}

export default Vps