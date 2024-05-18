import React from 'react'
import Logo from '../Images/Logo1.png'
import img1 from '../Images/Frame 1261154651.png'
import img2 from '../Images/Frame 1261154652.png'
import img3 from '../Images/Frame 1261154653.png'
import img4 from '../Images/Frame 1261154660.png'
import img5 from '../Images/Frame 1261154661.png'
import img6 from '../Images/Frame 1261154662.png'
import img7 from '../Images/Frame 1261154663.png'
import img8 from '../Images/Frame 1261154664.png'
import '../style/landingPage.css'


const LandingPage = () => {
  return (
    <div className='main-container'>
    <div className='header'>
        <img src={Logo} alt="loading.." />
        <h1>Astrix.</h1>
    </div>
    <div className='main-content'>
    <p>
      WE 
      <img src={img1} alt="img1"/>
      ORGANIZE THE CONNECTION
      <img src={img2} alt="img2"/> 
      <img src={img3} alt="img3"/> 
      BETWEEN
      <img src={img4} alt="img4"/>
      MUSIC ARTIST
      <img src={img5} alt="img5"/>
      CULTURE
      <img src={img6} alt="img6"/>
      <img src={img7} alt="img7"/>
      ART
      <img src={img8} alt="img8"/>
      & COLLECTIONS
    </p>
    </div>
    </div>
  )
}

export default LandingPage;