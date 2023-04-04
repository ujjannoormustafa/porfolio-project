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
   <main>
    <div className="container">
   <Side />
    
      <div className="mainLeft">
          <h5>Hello I'm a</h5>
          <h1>Noor Mustafa</h1>
          <p>A Front-end developer with 2 years of experience – making the web a more beautiful place!</p>
          {/* <p>Elevating your online presence through innovative front-end development </p> */}
          <button class="button-77 btn" role="button">
          <Link to="contact">Contact Me</Link>
            </button>
      </div>
      <div className="mainRight">
        <div className="bgshape">
        </div>
        <img src={Img} alt="Profile" />
      </div>
    </div>
   </main>
   </>
  )
}

export default main