import '../styles/AboutMe.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import lukas from '../lukas-image.jpeg'
import git from '../git-icon.svg'
import css from '../css-3.svg'
import javascript from '../javascript.svg'
import html5 from '../html-5.svg'
import react from '../react.svg'
import node from '../nodejs.svg'
import express from '../express.svg'
import mysql from '../mysql.svg'
import '../styles/Skills.css'


function Skills() {

    AOS.init()

    return (
        <section id="skills"  class="hero is-fullheight">
            <div class="hero-body">
                <div  class="container">
                    <h1 data-aos="fade-right" className="title is-1 has-text-centered">Skills</h1>
                    <div className="columns" >
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={git}/> 
                             <h2 className="subtitle is-5">Git</h2>
                            </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={html5}/> 
                             <h2 className="subtitle is-5">HTML5</h2>
                            </div>
                            </div>
                        </div>


                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={css}/> 
                             <h2 className="subtitle is-5">CSS3</h2>
                            </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={react}/> 
                             <h2 className="subtitle is-5">React</h2>
                            </div>
                            </div>
                        </div>
                        
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={express}/> 
                             <h2 className="subtitle is-5">Express</h2>
                            </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={node}/> 
                             <h2 className="subtitle is-5">NodeJs</h2>
                            </div>
                            </div>        
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={javascript}/> 
                             <h2 className="subtitle is-5">Javascript</h2>
                            </div>
                            </div>
                        </div> 
                    
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                             <img className="image is-128x128" src={mysql}/> 
                             <h2 className="subtitle is-5">MySQL</h2>
                            </div>
                            </div>
                        </div> 
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
