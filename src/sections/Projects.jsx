import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/components.css';
import '../styles/global.css';

function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <span style={{fontSize:'1.3rem'}} className="section-label">What I've Built</span>
          <h2>Featured Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div 
              key={project.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
