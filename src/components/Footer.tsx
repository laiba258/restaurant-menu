// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// Simple footer with restaurant name, quick links and copyright.
// ─────────────────────────────────────────────────────────────────────────────

import { RESTAURANT, WHATSAPP_NUMBER } from '../data/menu';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/8 px-4 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
              <span className="text-2xl">🍕</span>
              <p className="font-black text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                HUNGER <span className="text-[#c8102e]">HEAVEN</span>
              </p>
            </div>
            <p className="text-gray-500 text-xs">{RESTAURANT.tagline}</p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-5 justify-center">
            {[
              ['Menu',     '#menu'],
              ['Deals',    '#deals'],
              ['About',    '#about'],
              ['Contact',  '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                {label}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 text-[#25d366] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
          >
            📲 Order via WhatsApp
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs">
            © {year} {RESTAURANT.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            {RESTAURANT.address}
          </p>
        </div>

        {/* HIDDEN ADMIN LOGIN — future use, subtle and not visible to customers */}
        {/* To access admin panel in the future, navigate to /admin */}
        <div className="mt-4 text-center">
          <a
            href="/admin"
            className="text-[#1a1a1a] hover:text-gray-700 text-[10px] transition-colors select-none"
            tabIndex={-1}
            aria-hidden="true"
          >
            ·
          </a>
        </div>
      </div>
    </footer>
  );
}
