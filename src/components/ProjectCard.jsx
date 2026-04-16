import { Github, ArrowUpRight, ExternalLink } from 'lucide-react';
import '../styles/components.css';

function ProjectCard({ title, description, image, github, demo }) {
  const hasGithub = github && github !== 'ADD_GITHUB_LINK';
  const hasDemo = demo && demo !== 'ADD_DEMO_LINK';

  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img src={image} alt={title} />
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px", }}>

          {hasDemo && (
            <a
              className="project-link"
              href={demo}
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", padding: "3px", border:'1px solid #00C8E0',}}
            >
              <ExternalLink size={15} /> Live Demo <ArrowUpRight size={14} />
            </a>
          )}

          {hasGithub ? (
            <a
              className="project-link"
              href={github}
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", padding: "3px", border:'1px solid white' }}
            >
              <Github size={15} /> View on GitHub <ArrowUpRight size={14} />
            </a>
          ) : (
            <span
              className="project-link"
              style={{ opacity: 0.4, cursor: 'default' }}
            >
              <Github size={15} /> Coming soon
            </span>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;