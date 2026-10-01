// ─────────────────────────────────────────────────────────────────────────────
// CART COMPONENT
// Floating cart button + slide-up drawer with order summary.
// Includes simple name/address/type input before WhatsApp ordering.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';
import type { MenuItem as _MI, Deal as _Deal } from '../data/menu';
import { RESTAURANT, WHATSAPP_NUMBER } from '../data/menu';

// Each item tracked in the cart
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isDeal?: boolean;
}

interface Props {
  items: CartItem[];
  onAdd:    (id: string) => void;
  onRemove: (id: string) => void;
  onClear:  () => void;
}

export default function Cart({ items, onAdd, onRemove, onClear }: Props) {
  const [open,         setOpen]         = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [address,      setAddress]      = useState('');
  const [orderType,    setOrderType]    = useState<'Delivery' | 'Pickup'>('Delivery');

  // Total item count and price
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  // Don't show the floating button when cart is empty
  if (totalItems === 0) return null;

  // WHATSAPP ORDER — builds and opens the WhatsApp message
  const handleWhatsAppOrder = () => {
    // Build the order lines
    const orderLines = items
      .map(i => `• ${i.name} × ${i.quantity} — Rs. ${(i.price * i.quantity).toLocaleString()}`)
      .join('\n');

    // Compose the message
    const message = [
      `Hello ${RESTAURANT.name}! 👋`,
      ``,
      `I'd like to place an order:`,
      ``,
      orderLines,
      ``,
      `*Total: Rs. ${totalPrice.toLocaleString()}*`,
      ``,
      `Order Type: ${orderType}`,
      customerName ? `Name: ${customerName}` : '',
      address      ? `Address: ${address}`   : '',
      ``,
      `Thank you! 🙏`,
    ]
      .filter(line => line !== null)
      .join('\n');

    // Open WhatsApp with the pre-filled message
    // WHATSAPP NUMBER — change WHATSAPP_NUMBER in src/data/menu.ts
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* ── Floating Cart Button ── */}
      <div className="floating-cart">
        <button
          onClick={() => setOpen(true)}
          className="bg-[#c8102e] hover:bg-[#a50e26] text-white font-bold px-6 py-4 rounded-full shadow-2xl shadow-[#c8102e]/40 flex items-center gap-3 transition-all duration-200 hover:scale-105 animate-pulse-ring"
          aria-label="View cart"
        >
          <span className="text-xl">🛒</span>
          <span className="text-sm">{totalItems} Item{totalItems !== 1 ? 's' : ''}</span>
          <span className="h-4 w-px bg-white/30" />
          <span className="text-sm font-black">Rs. {totalPrice.toLocaleString()}</span>
        </button>
      </div>

      {/* ── Cart Backdrop ── */}
      {open && (
        <div
          className="cart-backdrop"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Cart Drawer (slides up from bottom) ── */}
      {open && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-slideUp">
          <div className="bg-[#111111] rounded-t-3xl border-t border-white/10 max-h-[85vh] overflow-y-auto">

            {/* Drawer handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <h3 className="text-white font-black text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Order 🧾
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                ✕
              </button>
            </div>

            <div className="px-5 py-4">
              {/* ── Cart Items ── */}
              <div className="space-y-3 mb-5">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    {/* Item name + price */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{item.name}</p>
                      <p className="text-[#f5c842] text-xs">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button className="qty-btn" onClick={() => onRemove(item.id)}>−</button>
                      <span className="text-white font-bold text-sm w-5 text-center">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => onAdd(item.id)}>+</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Order Type Toggle ── */}
              <div className="mb-4">
                <p className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-wide">Order Type</p>
                <div className="flex gap-2">
                  {(['Delivery', 'Pickup'] as const).map(type => (
                    <button
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                        orderType === type
                          ? 'bg-[#c8102e] text-white'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {type === 'Delivery' ? '🚴 Delivery' : '🏠 Pickup'}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Customer Info (optional) ── */}
              <div className="space-y-3 mb-5">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8102e]/50 transition-colors"
                />
                {orderType === 'Delivery' && (
                  <input
                    type="text"
                    placeholder="Delivery address (optional)"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8102e]/50 transition-colors"
                  />
                )}
              </div>

              {/* ── Total ── */}
              <div className="flex justify-between items-center py-3 border-t border-white/10 mb-4">
                <span className="text-gray-300 font-medium">Total</span>
                <span className="text-[#f5c842] font-black text-xl">Rs. {totalPrice.toLocaleString()}</span>
              </div>

              {/* ── WhatsApp Order Button ── */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25d366] hover:bg-[#20bc5a] text-white font-black text-lg py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#25d366]/30 flex items-center justify-center gap-3 active:scale-95"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order via WhatsApp
              </button>

              {/* Clear cart link */}
              <button
                onClick={() => { onClear(); setOpen(false); }}
                className="w-full text-gray-500 hover:text-gray-300 text-xs py-3 transition-colors"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
