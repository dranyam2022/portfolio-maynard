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
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com'><FaFacebookF /></a>
                <a href='https://instagram.com'><FaInstagram /></a>
                <a href='https://twitter.com'><FaTwitter /></a>
                <a href='https://linkedin.com'><FaLinkedinIn /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Maynard Escalante. All rights reservered.</small>
            </div>
        </footer>
    )
}

export default Footer