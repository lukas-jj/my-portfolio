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
                    <div className="content">
                    <div className="columns" data-aos="fade-right" >
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="imageWrapper">
                             <img className="image is-128x128" src={git}/> 
                             </div>
                             <div className="subtitle is-5">Git</div>
                            </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                <div className="imageWrapper">
                             <img className="image is-128x128" src={html5}/> 
                             </div>                             <div className="subtitle is-5">HTML5</div>
                            </div>
                            </div>
                        </div>


                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                <div className="imageWrapper">
                             <img className="image is-128x128" src={css}/> 
                             </div>                             <div className="subtitle is-5">CSS3</div>
                            </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                <div className="imageWrapper">
                             <img className="image is-128x128" src={react}/> 
                             </div>                              <div className="subtitle is-5">React</div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="columns" data-aos="fade-left">
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                <div className="imageWrapper">
                             <img className="image is-128x128" src={express}/> 
                             </div>                              <div className="subtitle is-5">Express</div>
                            </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                <div className="imageWrapper">
                             <img className="image is-128x128" src={node}/> 
                             </div>                              <div className="subtitle is-5">NodeJs</div>
                            </div>
                            </div>        
                        </div>

                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                <div className="imageWrapper">
                             <img className="image is-128x128" src={javascript}/> 
                             </div>                              <div className="subtitle is-5">Javascript</div>
                            </div>
                            </div>
                        </div> 
                    
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                <div className="imageWrapper">
                             <img className="image is-128x128" src={mysql}/> 
                             </div>         
                                                  <div className="subtitle is-5">MySQL</div>
                            </div>
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
