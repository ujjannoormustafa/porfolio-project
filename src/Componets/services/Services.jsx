import React from 'react'
import './services.css'
import {FaCode} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {BsWordpress} from 'react-icons/bs'
import Navbar from '../navbar/Navbar'
import Side from '../side/Side'

const Services = () => {
  return (
    <>
    <Navbar />
    <section id="services">
    <div className='bg'>
    
    <Side />
       <h1 className='pageTitle'>Services</h1>
    <h5 className='pageDesc'>What I Offer</h5>
    <div className="servicesContainer">
    <div className="servicesBox">
        <div className="card web">
          <h1><FaCode className='icons'/></h1>
          <h2>Web Development</h2>

        </div>
        <div className="card app">
        <h1><BsWordpress className='icons'/></h1>
        <h2>WordPress Development</h2></div>
        <div className="card uiux"> 
        <h1><MdDesignServices className='icons'/></h1>
        <h2>UI/UX Design</h2></div>
      
    </div>
    </div>
  </div>
    </section>
    </>
  )
}

export default Services