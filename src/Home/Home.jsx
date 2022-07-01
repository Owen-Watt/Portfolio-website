import '../index.css';
import './Project.css'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faFile, faGlobe, faFlag } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";
import Project from './Project'

function Home() {

  return (
    <>
      <Helmet>
        <title>Home | Owen Watt</title>
      </Helmet>

      <div className = "explore">
        <div className = "name">Hi, I'm Owen Watt.</div>
          <div className = "home-links">
              <a href="https://github.com/Owen-Watt" className = "socials-btn"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="/#" className = "socials-btn"><FontAwesomeIcon icon={faFile} /></a>
              <a href="https://www.linkedin.com/in/owen-watt-b9334a227" className = "socials-btn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
    
          <button className = "view-work-button" onClick={homeToProjectScroll}>View Projects</button>  
      </div>
    
      <div className = "title-projects" id="projects-home">Projects</div>
      
      <div className="contentBack">
        <div className = "projects-container">
            <Project
              icon={faDiscord}
              title="Discord Bot"
              description="A Discord bot with custom commands that utilises a database to keep track of statistics."
              software={["Javascript", "Node.js", "MongoDB"]}
              github='https://github.com/Owen-Watt/discord-bot'
            />

            <div className = "mobile-horizontal-line"></div>

            <Project
              icon={faGlobe}
              title="Portfolio Website"
              description="Portfolio website made from scratch with React.js to display my portfolio."
              software={["HTML", "CSS", "React"]}
              github='https://github.com/Owen-Watt/Portfolio-website'
            />

            <div className = "mobile-horizontal-line"></div>

            <Project
              icon={faFlag}
              title="Title"
              description="Description"
              software={["software", "software", "software"]}
              github='https://github.com/Owen-Watt/'
            />

            <div className = "mobile-horizontal-line"></div>

            <Project
              icon={faFlag}
              title="Title"
              description="Description"
              software={["software", "software", "software"]}
              github='https://github.com/Owen-Watt/'
            />
        </div>
      </div>
      <footer>© 2022 Owen Watt</footer>
    </>
  );
}

// scrolling found to projects with offset to finish scroll in better place
function homeToProjectScroll(){
  const yOffset = -50; 
  const element = document.getElementById('projects-home');
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}

export default Home;