import { Github, ArrowUpRight, ExternalLink } from 'lucide-react';
import '../styles/components.css';
import { useState } from 'react';

function ProjectCard({ title, description, image, github, demo }) {
  const hasGithub = github && github !== 'ADD_GITHUB_LINK';
  const hasDemo = demo && demo !== 'ADD_DEMO_LINK';
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img src={image} alt={title} />
      </div>

      <div className="project-body">
        <h3 style={{ fontWeight: 'bolder', fontSize: '2rem' }}>{title}</h3>
        <div
          onClick={() => setExpanded(!expanded)}
          style={{ cursor: 'pointer' }}
        >
          <div className={`project-description ${expanded ? 'expanded' : ''}`}>
            {description}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span
              onClick={() => setExpanded(!expanded)}
              style={{
                fontSize: "1rem",
                opacity: 0.9,
                cursor: "pointer",
                border: "1px solid rgba(119, 119, 119, 0.51)",
                padding: "4px 8px",
                borderRadius: "6px",
                color:' #00C8E0'
              }}
            >
              {expanded ? "Show less ↑" : "Tap to know more ↓"}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px", }}>

          {hasDemo && (
            <a
              className="project-link"
              href={demo}
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", padding: "3px", border: '1px solid #00cae05b',borderRadius:'6px' }}
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
              style={{ display: "flex", alignItems: "center", padding: "3px", border: '1px solid rgba(179, 177, 177, 0.51)',borderRadius:'6px' }}
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