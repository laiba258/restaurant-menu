// ─────────────────────────────────────────────────────────────────────────────
// HEADER COMPONENT
// The top navigation bar. Shows the restaurant logo/name and nav links.
// On mobile it collapses into a hamburger menu.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { RESTAURANT } from '../data/menu';
import Logo from './Logo';

// Nav links — change the labels or add/remove sections here
const NAV_LINKS = [
  { label: 'Menu',   href: '#menu' },
  { label: 'Deals',  href: '#deals' },
  { label: 'About',  href: '#about' },
  { label: 'Contact',href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  // Add a dark background when user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* ── Logo / Restaurant Name ── */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Logo size="sm" />
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#c8102e]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${RESTAURANT.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] hover:bg-[#20bc5a] text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-1"
          >
            <span>📲</span> Order Now
          </a>
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-lg border-t border-white/10 animate-slideDown">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <a
              href={`https://wa.me/${RESTAURANT.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25d366] text-white text-center font-bold py-3 rounded-full text-sm"
              onClick={() => setMenuOpen(false)}
            >
              📲 Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
