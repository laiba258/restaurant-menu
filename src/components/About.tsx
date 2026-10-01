// ─────────────────────────────────────────────────────────────────────────────
// ABOUT SECTION
// Short introduction to the restaurant.
// Update the description, image and info items here or in RESTAURANT in menu.ts
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';
import { RESTAURANT } from '../data/menu';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-10 items-center">

          {/* ── Text Side ── */}
          <div>
            <span className="text-[#c8102e] font-bold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="text-white text-4xl font-black mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Good Food.<br />Good Mood.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              At <strong className="text-white">{RESTAURANT.name}</strong>, we believe great food brings people together.
              From our hand-crafted pizzas to juicy burgers, every item on our menu is made with
              fresh ingredients, real spices, and a whole lot of love.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Whether you're here for a quick bite or a full family feast, we've got you covered.
              Eat well. Live well.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '📍', label: 'Location', value: 'Canal Road, Toba Tek Singh' },
                { icon: '📞', label: 'Phone',    value: RESTAURANT.phone },
                { icon: '⏰', label: 'Hours',    value: 'Open Daily · All Day' },
                { icon: '🚴', label: 'Delivery', value: RESTAURANT.deliveryNote },
              ].map(item => (
                <div key={item.label} className="bg-[#111] border border-white/8 rounded-xl p-3">
                  <p className="text-xl mb-1">{item.icon}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">{item.label}</p>
                  <p className="text-gray-200 text-xs font-medium mt-0.5 leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image Side ── */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={ABOUT_IMAGE}
                alt="Inside the restaurant"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#c8102e] text-white rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-black text-xl leading-none">❤️</p>
              <p className="font-bold text-xs mt-1">Love to<br />Serve You</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
