// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES BAR
// Shows all food categories as scrollable horizontal pills.
// Clicking a category smoothly scrolls the page to that section.
// On mobile it scrolls horizontally — no arrows needed.
// ─────────────────────────────────────────────────────────────────────────────

import { categories } from '../data/menu';

interface Props {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export default function Categories({ activeCategory, onSelect }: Props) {
  const handleClick = (id: string) => {
    onSelect(id);
    // Smooth scroll to the menu section with that category
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // accounts for the sticky header + category bar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    // Sticky bar just below the header
    <div className="sticky top-16 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/8 shadow-md shadow-black/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="pt-3 pb-1">
          <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500">
            Browse by Category
          </p>
        </div>
        {/* Category pills */}
        <div className="flex gap-2 pb-3 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`cat-pill flex items-center gap-1.5 flex-shrink-0 ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.emoji && <span>{cat.emoji}</span>}
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
