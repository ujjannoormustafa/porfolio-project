import React from 'react'
import './navbar.css'
import { a } from 'react-router-dom'
const Navbar = () => {
  return (
   <header>
    <div className="header_bar">
      <div className="logo">Noor Mustafa</div>
        <div className="menus">
        <ul>
          <li>
          <a href='#home'>Home</a>
            </li>
          <li>
          <a href='#about'>About</a>
            </li>
          <li>
          <a href='#services'>Services</a>
            </li>
          <li>
          <a href='#skills'>Skills</a>
            </li>
          <li>
          <a href='#contact'>Contact</a>
            </li>
         
        </ul>
      </div>
   
    </div>
   </header>
  )
}

export default Navbar