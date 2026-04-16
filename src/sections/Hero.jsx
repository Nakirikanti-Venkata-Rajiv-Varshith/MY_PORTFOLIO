import { ArrowRight, Github } from 'lucide-react';
import '../styles/components.css';
import '../styles/global.css';

function Hero() {
  return (
    <section className="hero-section dot-bg">
      <div className="hero-inner section-inner">

        {/* Text Content */}
        <div className="hero-content">
          <p style={{ color: '#00C8E0', fontWeight: 'bolder', fontSize: '1.8rem' }}>👋 Hello, World!</p>

          <h1  className="hero-title">
            I'm{' '}
            <span className="gradient-text">Varshith N </span>
          </h1>

          {/* <p className="hero-desc">
            <p></p><br />
            <strong style={{ color: 'var(--text-h)' }}>Architecting Intelligent, Resilient Infrastructure:</strong> Working to unify full-stack development, predictive ML, deep learning, and autonomous DevOps to build scalable, intelligent systems.
            <p></p><br />Myself Varshith Sukumar Computational Engineering student at{' '}
            <span style={{ color: 'var(--text-h)',fontWeight:'bold' }}>IIT Hyderabad</span>
          </p> */}
          <br />
          <p className="hero-desc">
            <strong style={{ color: 'var(--text-h)' }}>
              Architecting Intelligent Resilient Infrastructure:
            </strong><br />
            Working to unify <strong>Full-stack </strong>development, <strong>ML</strong> and <strong>DevOps</strong> to design and build scalable, autonomous infrastructure.

            <br />
            <br />

            Computational Engineering @{' '}
            <span style={{ color: 'var(--text-h)', fontWeight: 'bold' }}>
              IIT Hyderabad
            </span>
          </p>

          <div className="hero-cta">
            <a className="btn-primary" href="#projects">
              View My Work <ArrowRight size={16} />
            </a>
            <a
              className="btn-outline"
              href="https://github.com/Nakirikanti-Venkata-Rajiv-Varshith"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image-wrap">
          <div className="hero-image-ring">
            <img src="images/profile.jpg" alt="Varshith profile" />
          </div>
          <span className="hero-badge b1">🎓 IIT Hyderabad</span>
          <span className="hero-badge b2">⚡Full Stack, DevOps &amp; ML</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
