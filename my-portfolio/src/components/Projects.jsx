import '../styles/AboutMe.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import '../styles/Projects.css'
import glassHomes from "../glassHomes.png"
import acousticSearch from "../acousticSearch.png"

const projects = [{ name: "Acoustic Guitar Search Engine", description: "An acoustic guitar search engine to help users search for acoustic guitars by specific dimensions. Inspired by guitar students who asked me for advice on buying a new guitar. This is my personal project and my hope is to create a website which helps both new and experienced guitarists find acoustic guitars best suited to their needs.", src: acousticSearch, link: "https://acoustafind.herokuapp.com/", github: "https://github.com/lukas-jj/acousta-find" },{ name: "Glass Homes", description: "A way for tenants to read and leave reviews for rental properties in Wellington. My role in this project is product owner. We managed to achieve our minimum viable product within one week using agile methods, sprints, kanban boards, pair programming and morning meet ups. I am very proud of our team!", src: glassHomes, github: "https://github.com/lukas-jj/glassHomes", link: "https://glasshome.herokuapp.com/" }]


function Projects() {

    AOS.init()

    return (
        <section id="projects" class="hero is-fullheight">
            <div className="container">
        <h1 data-aos="fade-left" className="title is-1 has-text-centered">Projects</h1>
        <div  className="columns is-multiline">
            {projects.map(project => <div  data-aos="fade-left" className='column'>
                <div className="card">
                    
                    <div className="card-content">
                    <div className="subtitle is-3 has-text-centered">{project.name}</div>

                        <div className="imageWrapper">
                            <img className="image" src={project.src} />
                        </div>                             
                        <div className="card-content"><p>{project.description}</p></div>
                    <div className="links">
                        {project.link &&

                        <div className="card-content"><a target="blank" href={project.link}>Website</a>
                        </div>
}{project.github &&
                        <div className="card-content"><a target="blank" href={project.github}>Github Repo</a>
</div>
}
</div>
                </div>
            </div>
            </div>)
            }
        </div>
        </div>
        
    </section>
    )
}

export default Projects;
