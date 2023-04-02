import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import Navbar from '../navbar/Navbar'

/* Emailjs import
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  // Emailjs Intergraion code
  const form = useRef();
  const sendEmail = (e) => {
       e.preventDefault();
    emailjs.sendForm('service_8mekb29', 'template_1p44txb', form.current, 'RmQ8vzGcMBTBuFmCR')
    e.target.reset()
  };
*/
const Contact = () => {
  return (
    <>
  <Navbar />
    <section id='contact'>
      <div className="bg">
       <div className="contactContainer">
      <h2 className='pageTitle'>Contact Me</h2>
      <h5 className='pageDesc'>Get In Touch</h5>

      <div className="contact__container">

      <form >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea type="" name="message"  rows="7" required placeholder='Your Message'></textarea>
          <button class="button-77 btn contactbtn" role="button">Send Message</button>
        </form>


        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icons' />
            <h4>Email</h4>
            <h5 className='font__mail'>ujjannoormustafa123@gmail.com</h5>
            <a href="mailto:ujjannoormustafa123@gmail.com" target="_blank" >Send a message</a>
          </article>
      
          <article className="contact__option">
            <AiOutlineLinkedin  className='contact_option-icons'/>
            <h4>Linkedin</h4>
            <h5>Dm me on linkedin</h5>
            <a href="https://www.linkedin.com/in/noor-mustafa-ujjan" target="_blank">Send a message</a>
          </article>
      
          <article className="contact__option">
            <AiOutlineInstagram className='contact_option-icons'/>
            <h4>Instagram</h4>
            <h5>Dm me on instagram</h5>
            <a href="https://www.instagram.com/ujjannoormustafa7" target="_blank">Send a message</a>
          </article>
        </div>
            {/* ref={form} onSubmit={sendEmail} */}
       
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Contact