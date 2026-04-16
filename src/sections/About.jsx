import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/components.css';
import '../styles/global.css';

function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="section-inner" ref={ref}>

        <div className="about-grid reveal">
          {/* Left: Text */}
          <div className="about-text">
            <span style={{fontSize:'1.5rem'}} className="section-label">About Me</span>
            <h2>Passionate about building things that matter</h2>
            <div className="section-divider" />

            <div className="about-body">
              <p>
                I'm a Computational Engineering student at IIT Hyderabad with a passion for building data-driven systems. 
                My work bridges the gap between Full-stack JS and Machine Learning to create intelligent DevOps workflows.
                I specialize in implementing time-series forecasting and statistical anomaly detection within containerized pipelines.
                I strive to build high-performance, resource-efficient infrastructure that proactively manages its own health and resource allocation.
              </p>
              {/* <p>
                "My technical curiosity lies in performance tuning and system-level reliability.
                I spend my time exploring how to squeeze maximum efficiency out of hardware through precise orchestration,
                aiming to build high-availability services that stay resilient under extreme load."
              </p> */}
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">8+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">15+</div>
                <div className="stat-label">Skills Learned</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">∞</div>
                <div className="stat-label">Lines of Code</div>
              </div>
            </div>
          </div>

          {/* Right: Highlight card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '3.5rem' }}>
            <div className="about-highlight">
              "Engineering isn't just about solving problems — it's about finding better
              questions to ask."
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              {[
                { label: 'Institution', value: 'IIT Hyderabad' },
                { label: 'Degree',      value: 'B.Tech — Computational Engineering' },
                { label: 'Focus',       value: 'Full Stack · DevOps · ML ' },
                { label: 'Status',      value: '🟢 Open to opportunities' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', fontSize: '1rem' }}>
                  <span style={{ color: 'var(--text)', minWidth: '100px',minHeight: '40px', flexShrink: 0 }}>{label}</span>
                  <span style={{ color: 'var(--text-h)', fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
