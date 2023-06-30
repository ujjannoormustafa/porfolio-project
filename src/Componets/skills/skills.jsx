import React from 'react'
import './skill.css'
import Navbar from '../navbar/Navbar'
import Html from '../../Assests/icons/html-5.png'
import Css from '../../Assests/icons/css.png'
import Js from '../../Assests/icons/java-script.png'
import Reacticon from '../../Assests/icons/physics.png'
import Bootstrap from '../../Assests/icons/bootstrap.png'
import Nodejs from '../../Assests/icons/nodejs.png'
import Db from '../../Assests/icons/db.png'
import Java from '../../Assests/icons/java.png'
import Sp from '../../Assests/icons/sp.png'


const skills = () => {
  return (
  
       <>
  <Navbar />
    
<section id="skills">
    
    <h1 className='pageTitle' pageTitle>My Skills</h1>
    <h5 className='pageDesc' >Progress</h5>
    <div className="skillsContainer">
        <div className="skillLeft">
            <h4>Front-end developer</h4>
            <div className="barbox">
                <div className="title">
                    <span>HTML</span>
                    <span>90%</span>
                </div>
                <div className='barline'>
                     <div className="bar"></div>
                </div>
                <div className="title">
                    <span>CSS</span>
                    <span>60%</span>
                </div>
                <div className='barline'>
                     <div className="bar css"></div>
                </div>
              
                <div className="title">
                    <span>JavaScript</span>
                    <span>50%</span>
                </div>
                <div className='barline'>
                     <div className="bar js"></div>
                </div>
              
                <div className="title">
                    <span>Reacjs</span>
                    <span>40%</span>
                </div>
                <div className='barline'>
                     <div className="bar react"></div>
                </div>
                <div className="title">
                    <span>Bootstrap</span>
                    <span>80%</span>
                </div>
                <div className='barline'>
                     <div className="bar bostrap"></div>
                </div>
            </div>
           
        </div>
        <div className="skillRight">
        <h4>Back-end development</h4>
        <div className="barbox">
                <div className="title">
                    <span>Nodejs</span>
                    <span>60%</span>
                </div>
                <div className='barline'>
                     <div className="bar react"></div>
                </div>
                <div className="title">
                    <span>MongoDB</span>
                    <span>40%</span>
                </div>
                <div className='barline'>
                     <div className="bar bostrap"></div>
                </div>
                <div className="title">
                    <span>Java</span>
                    <span>50%</span>
                </div>
                <div className='barline'>
                     <div className="bar bostrap"></div>
                </div>
                <div className="title">
                    <span>Spring Boot</span>
                    <span>30%</span>
                </div>
                <div className='barline'>
                     <div className="bar bostrap"></div>
                </div>
            </div>
            
        </div>
        </div>
        <div className="brandIcons">
            <div className="frontImg">
                <img src={Html} alt="Html" />
                <img src={Css} alt="Html" />
                <img src={Js} alt="Html" />
                <img src={Reacticon} alt="Html" />
                <img src={Bootstrap} alt="Html" />
            </div>
       
            <div className="backImg">
                <img src={Nodejs} alt="Html" />
                <img src={Db} alt="Html" />
                <img src={Java} alt="Html" />
                <img src={Sp} alt="Html" />
            </div>
        </div>
   
        
    </section>
    </>
  )
}

export default skills
