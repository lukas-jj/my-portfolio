
import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
import 'aos/dist/aos.css'
import AOS from 'aos';

function Nav() {

    AOS.init()

    const [burgerVisible, setBurgerVisible] = useState(false)

    const toggleBurger = () => {
        setBurgerVisible(currentBurgerState => {
            return !currentBurgerState
        })
    }
    return (
        

        <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a href='/' className='navbar-item'>
                    <img
                        src='https://bulma.io/images/bulma-logo.png'
                        alt='Logo'
                        width='112'
                        height='28'
                    />
                </a>

                <a onClick={toggleBurger} className={`navbar-burger burger ${burgerVisible ? 'is-active' : ''}`}
                    role='button'
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='navbarBasicExample' className={`navbar-menu ${burgerVisible ? "is-active" : ''}`}>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                    {/* <Link className="navbar-item" to="/">
                             Home
      </Link> */}
      <div className="navbar-item">
      <Link to="about-me" spy={true} smooth={true} offset={-100}>About Me</Link>
      </div>

      <div  className="navbar-item">
      <Link to="skills" spy={true} smooth={true} offset={-100}>Skills</Link>
      </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;
