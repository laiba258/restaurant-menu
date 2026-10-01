// ─────────────────────────────────────────────────────────────────────────────
// DEALS SECTION
// Shows all special deals and meal combos from the menu.
// Each deal has a badge, included items and price.
// To edit deals, open src/data/menu.ts and change the `deals` array.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';
import { deals } from '../data/menu';
import type { Deal } from '../data/menu';

// Placeholder used when a deal image is not available
const DEAL_PLACEHOLDER = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80';

interface CartMap { [key: string]: number; }

interface Props {
  cart: CartMap;
  onAddDeal: (deal: Deal) => void;
}

export default function Deals({ cart, onAddDeal }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // SECTION REVEAL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="deals" className="py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div ref={ref} className="reveal text-center mb-10">
          <span className="text-[#c8102e] font-bold text-sm tracking-widest uppercase">Limited Time</span>
          <h2 className="text-white text-4xl font-black mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            🔥 Today's Deals
          </h2>
          <p className="text-gray-400 mt-2 text-sm">Unbeatable value combos — pick your favourite</p>
        </div>

        {/* Deals grid — 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {deals.map((deal, i) => (
            <DealCard
              key={deal.id}
              deal={deal}
              quantity={cart[`deal_${deal.id}`] ?? 0}
              onAdd={() => onAddDeal(deal)}
              animationDelay={`${(i % 4) * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Single Deal Card ────────────────────────────────────────────────────────
interface DealCardProps {
  deal: Deal;
  quantity: number;
  onAdd: () => void;
  animationDelay: string;
}

function DealCard({ deal, quantity, onAdd, animationDelay }: DealCardProps) {
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
    <div
      ref={ref}
      className="deal-card reveal flex flex-col"
      style={{ transitionDelay: animationDelay }}
    >
      {/* Deal image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={deal.image || DEAL_PLACEHOLDER}
          alt={deal.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e0808] via-transparent to-transparent" />

        {/* Badge */}
        {deal.badge && (
          <span className="absolute top-2 right-2 bg-[#c8102e] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
            {deal.badge}
          </span>
        )}

        {/* Deal name on image */}
        <div className="absolute bottom-2 left-3">
          <p className="text-white font-black text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{deal.name}</p>
        </div>
      </div>

      {/* Deal body */}
      <div className="p-3 flex flex-col flex-1">
        {/* Included items */}
        <ul className="flex-1 mb-3">
          {deal.includes.map((item, i) => (
            <li key={i} className="text-gray-300 text-xs flex items-start gap-1.5 leading-relaxed">
              <span className="text-[#c8102e] mt-0.5 flex-shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Price + Add button */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
          <p className="text-[#f5c842] font-black text-base">Rs. {deal.price.toLocaleString()}</p>
          {quantity === 0 ? (
            <button
              onClick={onAdd}
              className="bg-[#c8102e] hover:bg-[#a50e26] text-white font-bold text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              + Add
            </button>
          ) : (
            <span className="text-[#25d366] font-bold text-xs bg-[#25d366]/10 px-3 py-1.5 rounded-full">
              ✓ {quantity} added
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
