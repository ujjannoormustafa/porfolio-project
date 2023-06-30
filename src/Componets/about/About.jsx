import React from 'react';
import './about.css'
import Img from '../../Assests/Images/about.png'
import Navbar from '../navbar/Navbar';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    
    <Navbar />

   <section id='about'>
    <h1 className='pageTitle'>About Me</h1>
    <h5 className='pageDesc'>Who am i</h5>
    <div className="aboutContainer">
      <div className="aboutLeft">
      <img src={Img} alt="about-img" />
      </div>
      <div className="aboutRight">
            <h2>My Intro:</h2>
            <p>As a front-end developer with 2 years of experience, I have honed my skills in <b>HTML, CSS, JavaScript, Bootstrap, ReactJS, and Tailwind CSS.</b> I take pride in my ability to create responsive and visually appealing websites and web applications that meet the needs of my clients.
      <br/>
I am passionate about staying up-to-date with the latest industry trends and technologies, and am constantly seeking opportunities to expand my skill set. Whether I am collaborating with a team or working independently, I always strive to deliver high-quality work that exceeds expectations. When it comes to front-end development, I believe that attention to detail and a user-centric approach are key to creating successful digital experiences.</p>
      <button className='btn button-77' ><a href="#contact">Let's talk</a></button>
      <button className='btn button-77'><a href="">Download CV</a></button>
      
      </div>
    </div>
   </section>
   </>
  )
}

export default About