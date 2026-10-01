// ─────────────────────────────────────────────────────────────────────────────
// MENU ITEM COMPONENT
// A single food item row — name, description, price and add/quantity buttons.
// If the item has `sizes` (like pizzas), shows a size selector before adding.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';
import type { MenuItem as MenuItemType } from '../data/menu';

const PLACEHOLDER = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=60';

interface Props {
  item: MenuItemType;
  quantity: number;
  onAdd:    (item: MenuItemType, sizeLabel?: string, sizePrice?: number) => void;
  onRemove: (item: MenuItemType) => void;
}

export default function MenuItem({ item, quantity, onAdd, onRemove }: Props) {
  const [imgError,      setImgError]      = useState(false);
  const [showSizes,     setShowSizes]     = useState(false);
  const [selectedSize,  setSelectedSize]  = useState<string>('');

  const imageSrc = !item.image || imgError ? PLACEHOLDER : item.image;
  const hasSizes = item.sizes && item.sizes.length > 0;

  // When Add is clicked on an item with sizes — show size picker first
  const handleAddClick = () => {
    if (hasSizes) {
      setShowSizes(true);
    } else {
      onAdd(item);
    }
  };

  // Confirm size selection and add to cart
  const handleSizeConfirm = (sizeLabel: string, sizePrice: number) => {
    setSelectedSize(sizeLabel);
    setShowSizes(false);
    onAdd(item, sizeLabel, sizePrice);
  };

  return (
    <div className="flex flex-col border-b border-white/6 last:border-0">
      {/* ── Main item row ── */}
      <div className="menu-item-card">
        {/* Food thumbnail */}
        <img
          src={imageSrc}
          alt={item.name}
          onError={() => setImgError(true)}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0 shadow-md"
          loading="lazy"
        />

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-white font-semibold text-sm leading-snug">
                {item.name}
                {item.popular && (
                  <span className="ml-1.5 text-[10px] bg-[#c8102e] text-white px-1.5 py-0.5 rounded-full font-bold">
                    🔥 Popular
                  </span>
                )}
              </p>

              {item.description && (
                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed line-clamp-1">
                  {item.description}
                </p>
              )}

              {/* Size price range — shown instead of priceLabel for sized items */}
              {hasSizes ? (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {item.sizes!.map(s => (
                    <span key={s.label} className="text-[10px] bg-white/8 border border-white/12 text-gray-300 px-1.5 py-0.5 rounded font-medium">
                      {s.label} <span className="text-[#f5c842]">{s.price}</span>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[#f5c842] font-bold text-sm mt-1">
                  Rs. {item.price.toLocaleString()}
                </p>
              )}

              {/* Show selected size if any */}
              {selectedSize && (
                <p className="text-[#25d366] text-[10px] mt-0.5">✓ {selectedSize} selected</p>
              )}
            </div>

            {/* Add / Qty controls */}
            <div className="flex-shrink-0">
              {quantity === 0 ? (
                <button
                  onClick={handleAddClick}
                  className="bg-[#c8102e] hover:bg-[#a50e26] text-white font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#c8102e]/25 active:scale-95"
                >
                  + Add
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button className="qty-btn" onClick={() => onRemove(item)}>−</button>
                  <span className="text-white font-bold text-sm w-5 text-center">{quantity}</span>
                  <button className="qty-btn" onClick={handleAddClick}>+</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Size Selector Panel (expands below the row) ── */}
      {showSizes && hasSizes && (
        <div className="mx-4 mb-3 animate-fadeInUp">
          <div className="bg-[#1a0a0a] border border-[#c8102e]/30 rounded-xl p-3">
            <p className="text-gray-300 text-xs font-bold uppercase tracking-wide mb-2">
              Choose a Size
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {item.sizes!.map(s => (
                <button
                  key={s.label}
                  onClick={() => handleSizeConfirm(s.label, s.price)}
                  className="flex flex-col items-center gap-0.5 bg-white/5 hover:bg-[#c8102e]/20 border border-white/10 hover:border-[#c8102e]/60 rounded-xl py-2.5 px-2 transition-all duration-200 hover:scale-105 group"
                >
                  <span className="text-white font-bold text-xs group-hover:text-white">{s.label}</span>
                  <span className="text-[#f5c842] font-black text-sm">Rs.{s.price}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowSizes(false)}
              className="mt-2 w-full text-gray-500 hover:text-gray-300 text-xs py-1 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
