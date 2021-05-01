
import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
import 'aos/dist/aos.css'
import AOS from 'aos';
import logo from "../logo.jpeg"
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
                <a href='/https://www.youtube.com/watch?v=mvSR8lyLKtY&ab_channel=DanielPadim' className='navbar-item'>
                    <img
                        src={logo}
                        alt='Logo'
                        width='50'
                        height='100'
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
      <Link to="about-me" spy={true} smooth={true}>About Me</Link>
      </div>

      <div  className="navbar-item">
      <Link to="skills" spy={true} smooth={true}>Skills</Link>
      </div>
      <div  className="navbar-item">
      <Link to="projects" spy={true} smooth={true}>Projects</Link>
      </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;
