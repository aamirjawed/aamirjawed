import React from 'react'
import './footer.css'
import {FaInstagram , FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Aamir</a>

      <ul className='permalinks'>
        <li><a href='#'></a>Home</li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__social'>
        <a href='https://www.linkedin.com/in/md-aamir-jawed-76a462230/'><FaLinkedin /></a>
        <a href='https://www.instagram.com/'><FaInstagram /></a>
        
      </div>

      <div className='footer__copyright'></div>
      <small>© : Aamir Jawed. All right reserved.</small>
    </footer>
  )
}

export default Footer