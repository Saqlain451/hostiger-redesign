import React from 'react'
import OtherHero from '../../../components/OtherHero/OtherHero'
import img from '../../../assets/Img/other2.webp';
const High = () => {
    const data = {
        class1 :"col-md-6",
        class2 :"col-md-6",
        span :"Speed",
        title :"Advancements with a converged infrastructure",
        content :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore reprehenderit laborum, ab exercitationem sunt aliquam illo! Aliquid labore animi, alias ratione ad necessitatibus ipsa perspiciatis. Quae architecto totam, reprehenderit ipsa.",
        img :img
    }
  return (
    <>
        <OtherHero {...data} />
    </>
  )
}

export default High