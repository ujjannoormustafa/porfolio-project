import React from 'react'
import Img from '../../Assests/Images/bg.png'
import './main.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Navbar from '../navbar/Navbar'
import Side from '../bar/Side'
import { Link } from 'react-router-dom'
const main = () => {
  return (
    <>
    <Navbar />
   <main id='home'>
    <div className="container">
   <Side />
    
      <div className="mainLeft">
          <h5>Hello I'm a</h5>
          <h1>Noor Mustafa</h1>
          <p>A Front-end developer with 2 years of experience – making the web a more beautiful place!</p>
          {/* <p>Elevating your online presence through innovative front-end development </p> */}
          <button className='btn button-77' ><a href="#contact">Contact Me</a></button>
      </div>
      <div className="mainRight">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
  <path id="blob" d="M384.5,328Q301,406,184,394.5Q67,383,94.5,270Q122,157,223.5,88.5Q325,20,396.5,135Q468,250,384.5,328Z" fill="#a29bfe" />
</svg>

        <img src={Img} alt="Profile" />
      </div>
    </div>
   </main>
   </>
  )
}

export default main