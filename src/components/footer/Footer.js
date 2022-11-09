import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <footer id='footer'>
            <a href='#' className='footer__logo'>MAYNARD ESCALANTE</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>

                <li><a href='#portfolio'>Portfolio</a></li>

                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.facebook.com/maynard.escalante/' target='_blank' rel='me'><FaFacebookF /></a>
                <a href='https://instagram.com' target='_blank' rel='me'><FaInstagram /></a>
                <a href='https://twitter.com/escalantenard' target='_blank' rel='me'><FaTwitter /></a>
                <a href='https://www.linkedin.com/in/maynard-escalante-3033ab1a3/' target='_blank' rel='me'><FaLinkedinIn /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Maynard Escalante. All rights reservered.</small>
            </div>
        </footer>
    )
}

export default Footer