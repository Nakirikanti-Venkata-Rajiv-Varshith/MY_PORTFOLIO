import {
  SiC, SiPython, SiJavascript, SiReact,
  SiNodedotjs, SiDocker, SiGit, SiLinux,
  SiHtml5,
  SiCss,
  SiCssdesignawards,
} from 'react-icons/si';
import { BrainCircuit } from 'lucide-react';
import { skills } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/components.css';
import '../styles/global.css';

const SI_ICONS = { SiC, SiPython, SiJavascript, SiReact, SiNodedotjs, SiDocker, SiGit, SiLinux, SiHtml5};
const LUCIDE_ICONS = { BrainCircuit };

function SkillIcon({ skill }) {
  if (skill.type === 'img') {
    return <img src={skill.icon} alt={skill.name} width={36} height={36} />;
  }
  if (skill.type === 'lucide') {
    const Icon = LUCIDE_ICONS[skill.icon];
    return Icon ? <Icon size={36} color="var(--accent)" /> : null;
  }
  const Icon = SI_ICONS[skill.icon];
  return Icon ? <Icon size={36} color="var(--accent)" /> : null;
}

function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <span style={{fontSize:'1.5rem'}}  className="section-label">Tech Stack</span>
          <h2>Skills &amp; Technologies</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-card reveal reveal-delay-${Math.min(i % 6 + 1, 5)}`}
            >
              <div className="skill-icon">
                <SkillIcon skill={skill} />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
