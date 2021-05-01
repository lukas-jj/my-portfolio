import '../styles/AboutMe.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import { Link } from 'react-scroll'
import lukas from '../lukas-image.jpeg'

function AboutMe() {

    AOS.init()

    return (
        <section id="about-me" class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">

                    <h1 data-aos="fade-right" className="title is-1 has-text-centered animate__backInDown">About Me</h1>
                    <div className="columns">
                        <div className="column is-narrow" >
                            <div className="card" data-aos="fade-right" >
                                <div className="card-content is-flex is-justify-content-center is-align-items-center"   >
                                    <div className="card-image" >
                                        <img className="image" id="about-me-image" src={lukas} />

                                        <div className="subtitle is-5 has-text-centered">My flatmate Izzy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column" data-aos="fade-left">
                        <div className="card">
                            <div className="card-content">
                                <p id="about-me-p" class="content is-large p-3">

                                    I'm a web developer based in Wellington, NZ and I'm looking to work with people who value creativity, fun and giving back to the community. 
</p>
<p id="about-me-p" class="content is-large p-3">
                                    I have experience in developing full stack apps both alone and in groups using agile methodologies and am continuing to broaden my horizons by learning new languages and frameworks. Music is also one of my passions, and I'm currently studying theory in my free time. Feel free to contact me about work or simply having a jam! 
                                    </p>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe;
