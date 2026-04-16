import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/components.css';

const NAV_LINKS = [
  { label: 'Home ',     href: '#' },
  { label: 'About Me',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Handle Home active state
      if (window.scrollY < 50) {
        setActive('#');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_LINKS
      .filter(l => l.href !== '#')
      .map(l => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.id) {
            setActive('#' + e.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {/* <a href="#" className="nav-logo">VARSHITH SUKUMAR - IITH</a> */}

      <button
        className="nav-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={active === href ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;