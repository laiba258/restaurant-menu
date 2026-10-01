// ─────────────────────────────────────────────────────────────────────────────
// APP — Main entry point
// Manages the cart state and renders all page sections.
// The cart state lives here and is passed down to components that need it.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from 'react';
import { categories } from './data/menu';
import type { MenuItem, Deal } from './data/menu';
import type { CartItem } from './components/Cart';

import Header      from './components/Header';
import Hero        from './components/Hero';
import Categories  from './components/Categories';
import MenuSection from './components/MenuSection';
import Deals       from './components/Deals';
import Cart        from './components/Cart';
import About       from './components/About';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

// Cart is stored as a map: { itemId: CartItem }
type CartMap = { [id: string]: CartItem };

export default function App() {
  // ── Cart state ───────────────────────────────────────────────────────────
  const [cart, setCart] = useState<CartMap>({});

  // Active category for the sticky category bar highlight
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '');

  // Cart quantity lookup (used by MenuItem to show current qty)
  // For pizza items with sizes, we sum all size variants
  const qtyMap: { [id: string]: number } = {};
  Object.values(cart).forEach(ci => {
    // Strip size suffix to get base item id
    const baseId = ci.id.includes('_') ? ci.id.substring(0, ci.id.lastIndexOf('_')) : ci.id;
    qtyMap[baseId] = (qtyMap[baseId] ?? 0) + ci.quantity;
    // Also keep the full keyed entry for cart display
    qtyMap[ci.id] = ci.quantity;
  });

  // Add a regular menu item to the cart
  // sizeLabel and sizePrice are used for pizza size variants
  const handleAdd = useCallback((item: MenuItem, sizeLabel?: string, sizePrice?: number) => {
    // Use size-specific id so each size is a separate cart entry
    const cartId = sizeLabel ? `${item.id}_${sizeLabel}` : item.id;
    const displayName = sizeLabel ? `${item.name} (${sizeLabel})` : item.name;
    const price = sizePrice ?? item.price;

    setCart(prev => {
      const existing = prev[cartId];
      return {
        ...prev,
        [cartId]: {
          id:       cartId,
          name:     displayName,
          price,
          quantity: (existing?.quantity ?? 0) + 1,
        },
      };
    });
  }, []);

  // Remove one unit of a menu item from the cart
  // Works for both regular items and size-keyed pizza items
  const handleRemove = useCallback((item: MenuItem) => {
    // For sized items, we remove the most recently added size variant
    // Find any cart entry that starts with this item's id
    setCart(prev => {
      // First try exact id match, then try size-keyed match
      const exactKey = prev[item.id] ? item.id : 
        Object.keys(prev).find(k => k.startsWith(item.id + '_') && prev[k].quantity > 0);
      
      if (!exactKey) return prev;
      const existing = prev[exactKey];
      if (existing.quantity <= 1) {
        const next = { ...prev };
        delete next[exactKey];
        return next;
      }
      return { ...prev, [exactKey]: { ...existing, quantity: existing.quantity - 1 } };
    });
  }, []);

  // Add a deal to the cart (deals stored with a "deal_" prefix to avoid id clashes)
  const handleAddDeal = useCallback((deal: Deal) => {
    const id = `deal_${deal.id}`;
    setCart(prev => {
      const existing = prev[id];
      return {
        ...prev,
        [id]: {
          id,
          name:     deal.name,
          price:    deal.price,
          quantity: (existing?.quantity ?? 0) + 1,
          isDeal:   true,
        },
      };
    });
  }, []);

  // Increase quantity from the cart drawer (by id string)
  const handleCartAdd = useCallback((id: string) => {
    setCart(prev => {
      const existing = prev[id];
      if (!existing) return prev;
      return { ...prev, [id]: { ...existing, quantity: existing.quantity + 1 } };
    });
  }, []);

  // Decrease quantity from the cart drawer (by id string)
  const handleCartRemove = useCallback((id: string) => {
    setCart(prev => {
      const existing = prev[id];
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: { ...existing, quantity: existing.quantity - 1 } };
    });
  }, []);

  // Clear the entire cart
  const handleClear = useCallback(() => setCart({}), []);

  // Convert cart map to array for the Cart component
  const cartItems = Object.values(cart);

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* ── Sticky Header ── */}
      <Header />

      {/* ── Hero Section ── */}
      <Hero />

      {/* ── Sticky Category Bar ── */}
      <Categories activeCategory={activeCategory} onSelect={setActiveCategory} />

      {/* ── DEALS Section (shown before menu for visibility) ── */}
      <Deals cart={qtyMap} onAddDeal={handleAddDeal} />

      {/* ── MENU Section ── */}
      <section id="menu" className="py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-10">
            <span className="text-[#c8102e] font-bold text-sm tracking-widest uppercase">Full Menu</span>
            <h2 className="text-white text-4xl font-black mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              What We Serve
            </h2>
            <p className="text-gray-400 mt-2 text-sm">Fresh ingredients · Made to order · Always delicious</p>
          </div>

          {/* Render each category */}
          {categories.map(cat => (
            <MenuSection
              key={cat.id}
              category={cat}
              cart={qtyMap}
              onAdd={handleAdd}
              onRemove={handleRemove}
              onVisible={setActiveCategory}
            />
          ))}
        </div>
      </section>

      {/* ── About Section ── */}
      <About />

      {/* ── Contact Section ── */}
      <Contact />

      {/* ── Footer ── */}
      <Footer />

      {/* ── Floating Cart (appears when items are added) ── */}
      <Cart
        items={cartItems}
        onAdd={handleCartAdd}
        onRemove={handleCartRemove}
        onClear={handleClear}
      />
    </div>
  );
}
