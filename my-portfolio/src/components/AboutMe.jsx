import '../styles/AboutMe.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import {Link} from 'react-scroll'
import lukas from '../lukas-image.jpeg'

function AboutMe() {

    AOS.init()

    return (
        <section id="about-me"  class="hero is-fullheight">
            <div class="hero-body">
                <div  class="container">
                    <h1 data-aos="fade-right" className="title is-1 has-text-centered animate__backInDown">About Me</h1>
                    <div className="columns is-flex is-justify-content-center" >
                        <div className='column is-narrow'>
                            <div className="card" data-aos="fade-left">
                                <div className="card-content is-flex is-justify-content-center is-narrow "  >
                             <img className="image" id="about-me-image" src={lukas}/> 
                            </div>
                            </div>
                        </div>

                        <div className='column is-half'>
                            <div data-aos="flip-right" className="card">
                                <p id="about-me-p"  class="content is-large p-6">
                I'm a full stack web developer looking to work with people who value creativity, fun and giving back to the community. I also am a big lover of music, and am currently studying theory in my free time. Feel free to hit me up for a jam!
            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      

        </section>
    )
}

export default AboutMe;
