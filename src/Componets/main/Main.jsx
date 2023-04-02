import React from 'react'
import Img from '../../Assests/Images/bg.png'
import './main.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Navbar from '../navbar/Navbar'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const main = () => {
  return (
    <>
    <Navbar />
   <main>
    <div className="container">
    <div className="sidebar-btn"
    onClick={()=>{
      document.querySelector('.header_bar').classList.toggle('hide')

      if(document.querySelector('.header_bar').classList.contains('hide')){
        document.querySelector('.barbtn').classList.add('barshow')
        document.querySelector('.close').classList.remove('barshow')
      }else{
        document.querySelector('.barbtn').classList.remove('barshow')
        document.querySelector('.close').classList.add('barshow')
      }
    }}
    >
     <span className='barbtn'><GiHamburgerMenu /></span> 
     <span className='close barshow'><AiOutlineClose /></span> 
    </div>
    
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