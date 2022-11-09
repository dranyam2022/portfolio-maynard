import React, { useState } from 'react'
import './Nav.css'
import { AiFillHome } from 'react-icons/ai'
import { FaUserGraduate, FaBook } from 'react-icons/fa'
import { RiCustomerServiceFill, RiContactsBookFill } from 'react-icons/ri'

function Nav() {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBookFill /></a>
        </nav>
    )
}

export default Nav



