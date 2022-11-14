import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SlSocialInstagram} from 'react-icons/sl'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/md-aamir-jawed-76a462230/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/aamirjawed?tab=projects" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/_aamirjawed/" target="_blank"><SlSocialInstagram /></a>
    </div>
  )
}

export default HeaderSocials