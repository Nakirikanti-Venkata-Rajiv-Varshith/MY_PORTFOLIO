import { Github, Linkedin, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/components.css';
import '../styles/global.css';

function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner" ref={ref}>
        <div className="reveal">
          <span style={{fontSize:'1.5rem'}} className="section-label">Get In Touch</span>
          <h2 style={{fontSize:'3.5rem'}}>Let's Connect</h2>
          <div className="section-divider" style={{ margin: '1rem auto 0' }} />
          <p style={{fontSize:'1.25rem'}}  className="contact-subtitle">
            Open to collaborations, internships, and interesting problems.
          </p>
        </div>

        <div className="contact-links reveal reveal-delay-2">
          <a
            className="contact-link-btn"
            href="mailto:varshithlinkdinacc@gmail.com"
          >
            <Mail size={20} /> Email Me
          </a>

          <a
            className="contact-link-btn"
            href="https://github.com/Nakirikanti-Venkata-Rajiv-Varshith"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} /> GitHub
          </a>

          <a
            className="contact-link-btn"
            href="https://www.linkedin.com/in/varshith-nakirikanti-3349ba388/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
