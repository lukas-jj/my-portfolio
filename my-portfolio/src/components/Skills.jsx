import '../styles/AboutMe.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import lukas from '../lukas-image.jpeg'
import Git from '../git-icon.svg'
import CSS3 from '../css-3.svg'
import Javascript from '../javascript.svg'
import HTML5 from '../html-5.svg'
import React from '../react.svg'
import Node from '../nodejs.svg'
import Express from '../express.svg'
import MySQL from '../mysql.svg'
import Redux from '../redux.svg'
import Bulma from '../bulma.png'
import Ableton from '../ableton.png'
import ComingSoon from '../comingSoon.png'

import '../styles/Skills.css'

const images = [{ name: "Git", src: Git }, { name: "CSS3", src: CSS3 }, { name: "Javascript", src: Javascript }, { name: "HTML5", src: HTML5 }, { name: "React", src: React }, { name: "Node", src: Node }, { name: "Express", src: Express }, { name: "MySQL", src: MySQL }, { name: "Redux", src: Redux }, { name: "Bulma", src: Bulma }, { name: "Ableton", src: Ableton }, { name: "More soon!", src: ComingSoon }]

function Skills() {

    AOS.init()


    return (
        <section id="skills" class="hero is-fullheight">
            <h1 data-aos="fade-left" className="title is-1 has-text-centered">Skills</h1>
            <div id="icon-columns" className="columns is-multiline">
                {images.map(image => <div  data-aos="fade-left" className='column is-one-quarter'>
                    <div className="card">
                        <div className="card-content">
                            <div className="imageWrapper">
                                <img className="image is-128x128" src={image.src} />
                            </div>                             <div className="subtitle is-5">{image.name}</div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </section>
    )
}

export default Skills;
