import React from 'react'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillGitlab } from 'react-icons/ai'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
            <a href='https://gitlab.com' target='_blank'><AiFillGitlab /></a>
            <a href='https://facebook.com' target='_blank'><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocials