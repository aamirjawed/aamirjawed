import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SlSocialInstagram} from 'react-icons/sl'
import {FaLinkedin} from 'react-icons/fa'
import  {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vb7c24t', 'template_vldhebi', form.current, 'Le_t7zQ_62DBDbKF5')

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>responsetoaamir@gmail.com</h5>
            <a href='mailto:responsetoaamir@gmail.com' target='_blank'>Send a message</a>
          </article>
          {/* <article className='contact__option'>
            <SlSocialInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Aamir Jawed</h5>
            <a href='https://www.instagram.com/direct/inbox/' target='_blank'>Send a message</a>
          </article> */}
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            <h4>Linked</h4>
            <h5>Aamir Jawed</h5>
            <a href='https://www.linkedin.com/in/md-aamir-jawed-76a462230/' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows = "7" placeholder = "Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact