import '../styles/Home.css'
import React, { useState, useEffect } from 'react'
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'
import AOS from 'aos';
import Background from './Background'

function Home() {


    const [loading, setLoading] =useState(true)

    return (

        <section id="home" className="hero is-fullheight is-fullheight-with-navbar">
            <div className="is-hidden-mobile">
            <Background />
            </div>
            <div className="hero-body">
                <div className="container">
                    <div id="homeEntry"> 
                    <h2 className="subtitle is-5 has-text-white">Kia ora! I'm</h2>
        <h1 className="title is-1" >
                        Lukas Jury
        </h1>
                    <h2 className="subtitle is-3 has-text-white">
                        Full Stack Web Developer
        </h2>
        </div>
                <div className="home-scroll has-text-centered animate__animated animate__pulse animate__delay-1s animate__repeat-10">
      <Link className="title is-5" to="about-me" spy={true} smooth={true} offset={-100}>Scroll down for more</Link>
                </div>
      <span className="icon">
      <i className="fas fa-ellipsis-h"></i>
      </span>
      </div>
            </div>
        
        </section>
    )
}

export default Home;
