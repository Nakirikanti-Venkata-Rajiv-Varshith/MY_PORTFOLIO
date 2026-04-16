import { ArrowUp } from 'lucide-react';
import '../styles/components.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Varshith. Crafted with ❤️</p>
      <a
        href="#"
        className="footer-top"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      >
        Back to top <ArrowUp size={25} />
      </a>
    </footer>
  );
}

export default Footer;
