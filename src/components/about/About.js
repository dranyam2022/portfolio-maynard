import React from 'react';
import './About.css';
import ME from '../../assets/3426526.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <a href='https://www.linkedin.com/in/maynard-escalante-3033ab1a3/' target='_blank' rel='me' className='about__card'>                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Web Development and TechSupport</small>
                        </a>
                        <a className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>none</small>
                        </a>
                        <a className='about__card' href='#portfolio'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>Click to see Completed</small>
                        </a>
                    </div>

                    <p>
                        I have been a technical support specialist for eight years, looking into making a career in the Web and Software Development industry. I have been teaching myself how to code for more than a year and also completed the Zuitt Coding Bootcamp. As technical support, I love solving problems with minimum supervision. I am currently seeking job opportunities in the Web and Software development field.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About