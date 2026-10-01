// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION
// Style: houseofchilli.pk inspired — dark bg, left text, right food image
// - Small brand label top-left
// - Big ALL-CAPS bold headline, changes per slide with typewriter reveal
// - Colored word animates in with a character-by-character reveal
// - Food image slides in naturally from the right (not circle-cropped)
// - Minimal, clean, premium, craving-catching
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState, useRef } from 'react';
import { RESTAURANT } from '../data/menu';
import logoImg from '../assets/logo.png';

// ── Each slide: headline + colored keyword + image + description
const SLIDES = [
  {
    label:    'Our Specialty',
    line1:    'TASTE THE REAL',
    keyword:  'PIZZA',
    desc:     'Hand-stretched dough, rich tomato sauce, melted cheese and premium toppings — baked to perfection.',
    img:      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&q=90',
    color:    '#c8102e',
  },
  {
    label:    'Fan Favourite',
    line1:    'JUICY & LOADED',
    keyword:  'BURGERS',
    desc:     'Crispy, juicy, saucy — every bite of our burgers hits different. Built for real hunger.',
    img:      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=90',
    color:    '#e07b20',
  },
  {
    label:    'Sharing Platters',
    line1:    'FEAST ON OUR',
    keyword:  'PLATTERS',
    desc:     'BBQ wings, spin rolls, kababs and fries — everything you love in one massive platter.',
    img:      'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&q=90',
    color:    '#c8102e',
  },
  {
    label:    'Street Fresh',
    line1:    'WRAP IT UP WITH',
    keyword:  'SHAWARMA',
    desc:     'Tender marinated chicken, garlic sauce and fresh veggies wrapped in soft pita.',
    img:      'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1000&q=90',
    color:    '#e07b20',
  },
];

// Typewriter hook — reveals text char by char
function useTypewriter(text: string, speed = 55) {
  const [displayed, setDisplayed] = useState('');
  const [done,      setDone]      = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}

export default function Hero() {
  const [slide,   setSlide]   = useState(0);
  const [imgKey,  setImgKey]  = useState(0);  // triggers re-mount for img animation
  const [entered, setEntered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = SLIDES[slide];
  const { displayed: typedWord } = useTypewriter(current.keyword, 60);

  // Page load entrance
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Auto-advance slides
  const goTo = (next: number) => {
    setSlide(next);
    setImgKey(k => k + 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((slide + 1) % SLIDES.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [slide]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: '#0b0b0b' }}
    >
      {/* Subtle smoke/glow on the left */}
      <div
        className="absolute inset-y-0 left-0 w-2/3 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 15% 55%, rgba(180,10,30,0.09) 0%, transparent 60%)',
        }}
      />

      {/* ── Main content area ── */}
      <div className="flex-1 flex items-center w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0 items-center min-h-[calc(100vh-80px)]">

          {/* ══════════════════════════════
              LEFT COLUMN — all text
          ══════════════════════════════ */}
          <div className="flex flex-col justify-center py-12 lg:py-0 order-2 lg:order-1">

            {/* Logo */}
            <div
              style={{
                opacity:   entered ? 1 : 0,
                transform: entered ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                marginBottom: '2rem',
                display: 'inline-block',
                width: 'fit-content',
              }}
            >
              <img
                src={logoImg}
                alt="Hunger Heaven"
                style={{
                  height: '88px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Brand label — changes per slide */}
            <p
              key={`label-${slide}`}
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{
                color: current.color,
                animation: 'fadeUp 0.4s ease forwards',
              }}
            >
              — {current.label}
            </p>

            {/* BIG headline — line 1 static, keyword typewriter */}
            <div
              className="mb-5"
              style={{
                opacity:   entered ? 1 : 0,
                transform: entered ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              }}
            >
              {/* Line 1 — white */}
              <h1
                key={`l1-${slide}`}
                className="font-black leading-none text-white m-0 p-0"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                  letterSpacing: '-0.01em',
                  animation: 'fadeUp 0.35s ease forwards',
                }}
              >
                {current.line1}
              </h1>

              {/* Line 2 — colored typewriter word */}
              <h1
                className="font-black leading-none m-0 p-0"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2.6rem, 6vw, 4.6rem)',
                  letterSpacing: '-0.02em',
                  color: current.color,
                  transition: 'color 0.5s ease',
                  minHeight: '1.1em',
                }}
              >
                {typedWord}
                {/* Blinking cursor while typing */}
                <span
                  className="inline-block w-0.5 ml-1 align-middle"
                  style={{
                    height: '0.8em',
                    background: current.color,
                    animation: 'blink 0.7s step-end infinite',
                    verticalAlign: 'middle',
                  }}
                />
              </h1>
            </div>

            {/* Description */}
            <p
              key={`desc-${slide}`}
              className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8"
              style={{ animation: 'fadeUp 0.5s ease 0.1s forwards', opacity: 0 }}
            >
              {current.desc}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity:   entered ? 1 : 0,
                transform: entered ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
              }}
            >
              <a
                href="#menu"
                className="inline-flex items-center gap-2 font-bold text-white text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:brightness-110 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${current.color} 0%, #7a0015 100%)`,
                  boxShadow: `0 6px 24px ${current.color}44`,
                  transition: 'background 0.5s ease, box-shadow 0.5s ease, transform 0.2s',
                }}
              >
                View Our Menu
              </a>
              <a
                href="#deals"
                className="inline-flex items-center gap-2 font-bold text-[#f5c842] text-sm px-7 py-3.5 rounded-full border border-[#f5c842]/30 hover:border-[#f5c842]/70 hover:bg-[#f5c842]/8 transition-all duration-200 hover:scale-105"
              >
                Today's Deals 🔥
              </a>
            </div>

            {/* Slide dots */}
            <div className="flex gap-2 mt-10">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:      i === slide ? 28 : 8,
                    height:     8,
                    background: i === slide ? current.color : 'rgba(255,255,255,0.18)',
                  }}
                />
              ))}
            </div>

            {/* Address */}
            <p className="mt-6 text-gray-600 text-xs">
              📍 {RESTAURANT.address}
            </p>
          </div>

          {/* ══════════════════════════════
              RIGHT COLUMN — food image
          ══════════════════════════════ */}
          <div
            className="relative flex items-center justify-center order-1 lg:order-2 h-[300px] sm:h-[440px] lg:h-auto lg:min-h-[560px]"
          >
            {/* Image — circular, fixed size, slides in from right */}
            <div
              key={imgKey}
              style={{
                width: 'min(420px, 82vw)',
                height: 'min(420px, 82vw)',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: `0 24px 70px rgba(0,0,0,0.6), 0 0 0 2px ${current.color}33`,
                animation: 'imgEnter 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                transition: 'box-shadow 0.5s ease',
              }}
            >
              <img
                src={current.img}
                alt={current.keyword}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Soft glow behind image matching slide color */}
            <div
              className="absolute right-0 w-[380px] h-[380px] rounded-full blur-3xl pointer-events-none"
              style={{
                background: `${current.color}18`,
                transition: 'background 0.7s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Keyframes injected here so they work without Tailwind arbitrary values ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes imgEnter {
          from { opacity: 0; transform: translateX(60px) scale(0.96); }
          to   { opacity: 1; transform: translateX(0)    scale(1);    }
        }
      `}</style>
    </section>
  );
}
