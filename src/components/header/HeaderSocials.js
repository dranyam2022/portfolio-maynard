import React from 'react'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillGitlab } from 'react-icons/ai'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/maynard-escalante-3033ab1a3/' target='_blank'><BsLinkedin /></a>
            <a href='https://gitlab.com/dranyam123' target='_blank'><AiFillGitlab /></a>
            <a href='https://www.facebook.com/maynard.escalante/' target='_blank'><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocials