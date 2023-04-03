import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import './side.css'
const Side = () => {
  return (
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
        }}>
          <span className='barbtn'><GiHamburgerMenu /></span> 
        <span className='close barshow'><AiOutlineClose /></span> 
        </div>
  )
}

export default Side