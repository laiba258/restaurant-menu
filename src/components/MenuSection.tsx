// ─────────────────────────────────────────────────────────────────────────────
// MENU SECTION COMPONENT
// Renders one category (e.g. Pizzas, Burgers) with all its items.
// Used by the main menu page to render all categories.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';
import type { MenuCategory, MenuItem as MenuItemType } from '../data/menu';
import MenuItemComp from './MenuItem';

interface CartMap {
  [itemId: string]: number;
}

interface Props {
  category: MenuCategory;
  cart: CartMap;
  onAdd:    (item: MenuItemType, sizeLabel?: string, sizePrice?: number) => void;
  onRemove: (item: MenuItemType) => void;
  onVisible?: (id: string) => void;
}

export default function MenuSection({ category, cart, onAdd, onRemove, onVisible }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer — tells the category bar which section is visible
  useEffect(() => {
    if (!onVisible) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(category.id); },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [category.id, onVisible]);

  // SECTION REVEAL ANIMATION (via IntersectionObserver + CSS class)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    // The id here is used for smooth scrolling from the category bar
    <div id={category.id} ref={ref} className="reveal mb-10">

      {/* Category heading */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{category.emoji}</span>
        <h2 className="text-white font-black text-xl uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
          {category.label}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#c8102e]/40 to-transparent" />
      </div>

      {/* List of menu items */}
      <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/5">
        {category.items.map(item => (
          <MenuItemComp
            key={item.id}
            item={item}
            quantity={cart[item.id] ?? 0}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
