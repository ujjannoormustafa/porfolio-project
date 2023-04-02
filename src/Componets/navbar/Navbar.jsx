import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <header>
    <div className="header_bar">
      <div className="logo">Noor Mustafa</div>
        <div className="menus">
        <ul>
          <li>
          <Link to="/">Home</Link>
            </li>
          <li>
          <Link to="/about">About</Link>
            </li>
          <li>
          <Link to="/services">Services</Link>
            </li>
          <li>
          <Link to="/skills">Skills</Link>
            </li>
          <li>
          <Link to="/contact">Contact</Link>
            </li>
         
        </ul>
      </div>
   
    </div>
   </header>
  )
}

export default Navbar