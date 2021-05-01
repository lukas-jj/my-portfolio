import '../styles/AboutMe.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import '../styles/Projects.css'
import glassHomes from "../glassHomes.png"

const projects = [{ name: "Acoustic Guitar Search Engine", description: "An acoustic guitar search engine so that users can search for acoustic guitars by specific dimensions", src: "", link: "", github: "https://github.com/lukas-jj/acousta-find" },{ name: "GlassHomes", description: "A way for tenants to read and leave reviews for rental properties in Wellington.", src: glassHomes, github: "https://github.com/lukas-jj/glassHomes", link: "https://glasshome.herokuapp.com/" }]


function Projects() {

    AOS.init()


    return (
        <section id="projects" class="hero is-fullheight">
        <h1 data-aos="fade-left" className="title is-1 has-text-centered">Projects</h1>
        <div  className="columns is-multiline">
            {projects.map(project => <div  data-aos="fade-left" className='column is-half'>
                <div className="card">
                    
                    <div className="card-content">
                    <div className="title is-5 has-text-centered">{project.name}</div>

                        <div className="imageWrapper">
                            <img className="image" src={project.src} />
                        </div>                             
                    <div className="links">
                        <div className="card-content">{project.description}</div>
                        <div className="card-content"><a target="blank" href={project.link}>Website</a>
                        </div>
                        <div className="card-content"><a target="blank" href={project.github}>Github Repo</a>
</div>
</div>
                </div>
            </div>
            </div>)
            }
        </div>
    </section>
    )
}

export default Projects;
