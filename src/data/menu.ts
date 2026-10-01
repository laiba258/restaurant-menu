// ─────────────────────────────────────────────────────────────────────────────
// MENU DATA
// This file contains ALL food items, categories, deals and restaurant info.
// To add/edit/remove an item just change the values below.
// A beginner can edit prices, names, descriptions without touching any UI code.
// ─────────────────────────────────────────────────────────────────────────────

// WHATSAPP CONFIG — change the number here (country code + number, no spaces)
export const WHATSAPP_NUMBER = '923152511328';

// RESTAURANT INFO — update as needed
export const RESTAURANT = {
  name: 'Hunger Heaven',
  tagline: 'Love To Serve You',
  subtitle: 'Authentic flavors. Generous portions. Made to crave.',
  phone: '046-2511328',
  whatsapp: '0315-2511328',
  address: 'Near Dawat-e-Azam Marquee, Canal Road, Toba Tek Singh',
  deliveryNote: 'Delivery charges: Rs. 30/50/70/100/150',
  // Social links — leave empty string '' if not available
  instagram: '',
  facebook: '',
};

// ─── TypeScript types ───────────────────────────────────────────────────────
// Pizza size option — name shown to user + price for that size
export interface SizeOption {
  label: string;   // e.g. "Small", "Medium", "Large", "XL"
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;           // base/default price (used when no size is selected)
  priceLabel?: string;     // legacy display label — kept for non-pizza items
  sizes?: SizeOption[];    // if present, user must pick a size before adding
  image?: string;          // URL or path — leave '' for placeholder
  popular?: boolean;
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;        // display name in category bar
  emoji?: string;
  items: MenuItem[];
}

export interface Deal {
  id: string;
  name: string;
  includes: string[];   // list of items in the deal
  price: number;
  image?: string;
  badge?: string;       // e.g. "Best Value", "Family"
}

// ─── CATEGORIES & ITEMS ─────────────────────────────────────────────────────
// Each category maps to a section on the menu page.
// The `id` is used for smooth-scroll anchoring — keep it lowercase with no spaces.

export const categories: MenuCategory[] = [
  // ── PLATTERS ──────────────────────────────────────────────────────────────
  {
    id: 'platters',
    label: 'Platters',
    emoji: '🍽️',
    items: [
      {
        id: 'p1',
        name: 'Basic Platter',
        description: 'Spin Roll (4 pcs), B.B.Q Wings (5 pcs), Fries, Dip Sauce',
        price: 900,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
      },
      {
        id: 'p2',
        name: 'B.B.Q Platter',
        description: 'Spin Roll (4 pcs), B.B.Q Wings (5 pcs), Kabab (4 pcs), Fries, Dip Sauce',
        price: 1100,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      },
      {
        id: 'p3',
        name: 'Golden Platter',
        description: 'Spin Roll (4 pcs), Hot Wings (5 pcs), Fries, Dip Sauce',
        price: 850,
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80',
      },
      {
        id: 'p4',
        name: 'Chat Pata Platter',
        description: 'Chat Pata Roll, Chat Pata Wings, Chat Pata Fries, Chat Pata Sauce',
        price: 1100,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
      },
    ],
  },

  // ── PIZZAS ────────────────────────────────────────────────────────────────
  {
    id: 'pizzas',
    label: 'Pizzas',
    emoji: '🍕',
    items: [
      // Traditional Pizzas
      { id: 'pz1', name: 'Chicken Tikka Pizza', description: 'Classic tikka chicken with signature sauce', price: 550, sizes: [{label:'Small',price:550},{label:'Medium',price:900},{label:'Large',price:1350},{label:'XL',price:1750}], image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', popular: true },
      { id: 'pz2', name: 'Chicken Fajita Pizza', description: 'Tender fajita chicken, veggies & cheese', price: 550, sizes: [{label:'Small',price:550},{label:'Medium',price:900},{label:'Large',price:1350},{label:'XL',price:1750}], image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80', popular: true },
      { id: 'pz3', name: 'Chicken Supreme Pizza', description: 'Loaded chicken supreme with extra toppings', price: 550, sizes: [{label:'Small',price:550},{label:'Medium',price:900},{label:'Large',price:1350},{label:'XL',price:1750}], image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
      { id: 'pz4', name: 'Chicken Tandoori Pizza', description: 'Smoky tandoori chicken with herbs', price: 550, sizes: [{label:'Small',price:550},{label:'Medium',price:900},{label:'Large',price:1350},{label:'XL',price:1750}], image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
      // Special Pizzas
      { id: 'pz5', name: 'Hunger Haven Special', description: 'Our signature special pizza', price: 650, sizes: [{label:'Small',price:650},{label:'Medium',price:1000},{label:'Large',price:1450},{label:'XL',price:2000}], image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80', popular: true },
      { id: 'pz6', name: 'Veggie Lover', description: 'Fresh garden vegetables & cheese', price: 650, sizes: [{label:'Small',price:650},{label:'Medium',price:1000},{label:'Large',price:1450},{label:'XL',price:2000}], image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&q=80' },
      { id: 'pz7', name: 'Cheese Lover', description: 'Extra cheese loaded pizza', price: 650, sizes: [{label:'Small',price:650},{label:'Medium',price:1000},{label:'Large',price:1450},{label:'XL',price:2000}], image: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400&q=80' },
      { id: 'pz8', name: 'Malai Boti', description: 'Creamy malai chicken boti', price: 650, sizes: [{label:'Small',price:650},{label:'Medium',price:1000},{label:'Large',price:1450},{label:'XL',price:2000}], image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80' },
      { id: 'pz9', name: 'Peri Peri', description: 'Spicy peri peri chicken with sauce', price: 650, sizes: [{label:'Small',price:650},{label:'Medium',price:1000},{label:'Large',price:1450},{label:'XL',price:2000}], image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
      { id: 'pz10', name: 'Square Pizza', description: 'Square-cut signature pizza', price: 850, sizes: [{label:'Small',price:850},{label:'Medium',price:1200},{label:'Large',price:1600},{label:'XL',price:2200}], image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
      { id: 'pz11', name: 'Peproni', description: 'Classic pepperoni with mozzarella', price: 650, sizes: [{label:'Small',price:650},{label:'Medium',price:1000},{label:'Large',price:1450},{label:'XL',price:2000}], image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80' },
      { id: 'pz12', name: 'Achar Pizza', description: 'Tangy achar flavour with chicken', price: 650, sizes: [{label:'Small',price:650},{label:'Medium',price:1000},{label:'Large',price:1450},{label:'XL',price:2000}], image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
      // Signature Pizzas
      { id: 'pz13', name: 'Daro Pizza', description: 'Signature Daro pizza — bold flavours', price: 1200, sizes: [{label:'Medium',price:1200},{label:'Large',price:1600},{label:'XL',price:2250}], image: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400&q=80', popular: true },
      { id: 'pz14', name: 'Deep Dish', description: 'Thick-crust deep dish pizza', price: 1300, sizes: [{label:'Medium',price:1300},{label:'Large',price:1700},{label:'XL',price:2250}], image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&q=80' },
      { id: 'pz15', name: 'Cheese Stuffer', description: 'Cheese-stuffed crust pizza', price: 1200, sizes: [{label:'Medium',price:1200},{label:'Large',price:1600},{label:'XL',price:2250}], image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
      { id: 'pz16', name: 'Kabab Stuffer', description: 'Kabab-stuffed crust pizza', price: 1200, sizes: [{label:'Medium',price:1200},{label:'Large',price:1600},{label:'XL',price:2250}], image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
      { id: 'pz17', name: 'Royal Crust', description: 'Premium royal crust loaded pizza', price: 1200, sizes: [{label:'Medium',price:1200},{label:'Large',price:1600},{label:'XL',price:2250}], image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80', popular: true },
      { id: 'pz18', name: 'Star Bite', description: 'Star-shaped signature pizza', price: 1350, sizes: [{label:'Medium',price:1350},{label:'Large',price:1800},{label:'XL',price:2250}], image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80' },
      // One Meter Pizza
      { id: 'pz19', name: 'One Meter Pizza (3 Flavours)', description: 'Malai Boti + Beheri Kabab + Hunger Haven Special', price: 3399, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80', popular: true },
    ],
  },

  // ── BURGERS ───────────────────────────────────────────────────────────────
  {
    id: 'burgers',
    label: 'Burgers',
    emoji: '🍔',
    items: [
      { id: 'b1', name: 'Chapli Burger', description: 'Juicy chapli patty with fresh veggies', price: 350, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
      { id: 'b2', name: 'Zinger Burger', description: 'Crispy fried chicken zinger', price: 399, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80', popular: true },
      { id: 'b3', name: 'Chicken Patty Burger', description: 'Grilled chicken patty with sauce', price: 350, image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=400&q=80' },
      { id: 'b4', name: 'Max Burger', description: 'Double-stacked loaded burger', price: 400, image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80' },
      { id: 'b5', name: 'Mighty Zinger Burger', description: 'Extra-large zinger with double sauce', price: 600, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', popular: true },
      { id: 'b6', name: 'Tower Burger', description: 'Tall tower of flavour', price: 650, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80' },
      { id: 'b7', name: 'Chicken Grill Burger', description: 'Flame-grilled chicken breast', price: 600, image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=400&q=80' },
      { id: 'b8', name: 'Pizza Burger', description: 'Pizza-flavored loaded burger', price: 380, image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80' },
      { id: 'b9', name: 'Panda Burger', description: 'Hunger Haven signature panda burger', price: 700, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
      { id: 'b10', name: 'Beef Burger', description: 'Classic beef patty with fresh lettuce', price: 800, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80' },
      { id: 'b11', name: 'Damka Burger', description: 'Spicy damka-style chicken burger', price: 800, image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=400&q=80' },
      { id: 'b12', name: 'Fish Burger', description: 'Crispy fish fillet burger', price: 600, image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80' },
      { id: 'b13', name: 'Stack Burger', description: 'Stacked double-patty with extras', price: 800, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
    ],
  },

  // ── DONNER ────────────────────────────────────────────────────────────────
  {
    id: 'donner',
    label: 'Donner',
    emoji: '🌯',
    items: [
      { id: 'dn1', name: 'Donner Medium', description: 'Classic donner with fresh veggies & sauce', price: 1200, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80' },
      { id: 'dn2', name: 'Donner Large', description: 'Loaded large donner for big appetites', price: 1500, image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&q=80' },
    ],
  },

  // ── PASTAS ────────────────────────────────────────────────────────────────
  {
    id: 'pastas',
    label: 'Pastas',
    emoji: '🍝',
    items: [
      { id: 'pa1', name: 'Hunger Haven Special Pasta', description: 'Our signature pasta with special sauce', price: 700, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80', popular: true },
      { id: 'pa2', name: 'Special Pasta', description: 'Chef\'s special creamy pasta', price: 600, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80' },
      { id: 'pa3', name: 'Lava Pasta', description: 'Spicy lava sauce pasta', price: 600, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80' },
      { id: 'pa4', name: 'Crunchy Pasta', description: 'Pasta with crunchy toppings', price: 700, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
      { id: 'pa5', name: 'Macaroni Pasta', description: 'Classic macaroni in rich sauce', price: 550, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80' },
    ],
  },

  // ── SHAWARMAS ─────────────────────────────────────────────────────────────
  {
    id: 'shawarmas',
    label: 'Shawarmas',
    emoji: '🥙',
    items: [
      { id: 'sw1', name: 'Chicken Shawarma', description: 'Tender chicken in pita with garlic sauce', price: 250, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80', popular: true },
      { id: 'sw2', name: 'Zinger Shawarma', description: 'Crispy zinger in a shawarma wrap', price: 370, image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&q=80' },
      { id: 'sw3', name: 'Zinger Paratha Roll', description: 'Zinger chicken in crispy paratha', price: 400, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80' },
      { id: 'sw4', name: 'Malai Boti Roll', description: 'Creamy malai boti in soft roll', price: 370, image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&q=80' },
    ],
  },

  // ── STARTERS ──────────────────────────────────────────────────────────────
  {
    id: 'starters',
    label: 'Starters',
    emoji: '🍗',
    items: [
      { id: 'st1', name: 'Pop Corn Chicken (10 pcs)', description: 'Crispy bite-sized popcorn chicken', price: 580, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80', popular: true },
      { id: 'st2', name: 'Hot Wings (5 pcs)', description: 'Spicy hot wings', price: 300, priceLabel: '5pcs:300 / 10pcs:580', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
      { id: 'st3', name: 'Oven Baked Wings (5 pcs)', description: 'Oven-baked crispy wings', price: 320, priceLabel: '5pcs:320 / 10pcs:600', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80' },
      { id: 'st4', name: 'Peri Peri Wings (5 pcs)', description: 'Peri peri glazed wings', price: 320, priceLabel: '5pcs:320 / 10pcs:650', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
      { id: 'st5', name: 'Honey Wings (5 pcs)', description: 'Sweet honey-glazed wings', price: 320, priceLabel: '5pcs:320 / 10pcs:650', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80' },
      { id: 'st6', name: 'B.B.Q Wings (5 pcs)', description: 'Classic BBQ marinated wings', price: 320, priceLabel: '5pcs:320 / 10pcs:650', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
      { id: 'st7', name: 'Plain Fries (5 pcs)', description: 'Golden crispy fries', price: 250, priceLabel: '5pcs:250 / 10pcs:350', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
      { id: 'st8', name: 'Loaded Fries', description: 'Fries loaded with cheese & toppings', price: 400, priceLabel: '5pcs:400 / 10pcs:550', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
      { id: 'st9', name: 'Garlic Mayo Fries', description: 'Fries with garlic mayo sauce', price: 550, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
      { id: 'st10', name: 'Masala Fries', description: 'Spicy masala seasoned fries', price: 350, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80' },
      { id: 'st11', name: 'Nuggets (3 pcs)', description: 'Crispy chicken nuggets', price: 300, priceLabel: '3pcs:300 / 6pcs:600', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80' },
    ],
  },

  // ── SANDWICHES ────────────────────────────────────────────────────────────
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    emoji: '🥪',
    items: [
      { id: 'sn1', name: 'Hunger Haven Special Sandwich', description: 'Our signature loaded sandwich', price: 700, image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80', popular: true },
      { id: 'sn2', name: 'Tikka Sandwich', description: 'Tikka chicken sandwich', price: 400, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
      { id: 'sn3', name: 'Special Sandwich', description: 'Special chicken sandwich', price: 600, image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80' },
      { id: 'sn4', name: 'Lava Sandwich', description: 'Spicy lava sauce sandwich', price: 650, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
      { id: 'sn5', name: 'Cheese Sandwich', description: 'Loaded cheese sandwich', price: 400, image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80' },
      { id: 'sn6', name: 'Malai Boti Sandwich', description: 'Creamy malai boti sandwich', price: 900, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
      { id: 'sn7', name: 'Calzone Sandwich', description: 'Calzone-style folded sandwich', price: 900, image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80' },
      { id: 'sn8', name: 'Chashma Sandwich', description: 'Signature chashma-style sandwich', price: 1350, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
    ],
  },

  // ── SPIN ROLLS ────────────────────────────────────────────────────────────
  {
    id: 'spinrolls',
    label: 'Spin Rolls',
    emoji: '🌀',
    items: [
      { id: 'sr1', name: 'Hunger Haven Sp. Roll', description: 'Signature spin roll with special filling', price: 550, image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&q=80', popular: true },
      { id: 'sr2', name: 'Malai Boti Roll', description: 'Creamy malai boti in soft roll', price: 550, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80' },
      { id: 'sr3', name: 'Behari Roll', description: 'Smoky behari chicken roll', price: 600, image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&q=80' },
      { id: 'sr4', name: 'KMC Paratha Roll', description: 'Crispy paratha with KMC filling', price: 400, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80' },
      { id: 'sr5', name: 'Cheese Stick', description: 'Crispy fried cheese sticks', price: 900, image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=400&q=80' },
    ],
  },

  // ── WRAPS ─────────────────────────────────────────────────────────────────
  {
    id: 'wraps',
    label: 'Wraps',
    emoji: '🌮',
    items: [
      { id: 'wr1', name: 'Hunger Haven Sp. Wrap', description: 'Signature wrap with special filling', price: 650, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80', popular: true },
      { id: 'wr2', name: 'Special Wrap', description: 'Loaded special chicken wrap', price: 600, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80' },
      { id: 'wr3', name: 'Crunchy Wrap', description: 'Extra crunchy chicken wrap', price: 580, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80' },
      { id: 'wr4', name: 'Grilled Chicken Wrap', description: 'Healthy grilled chicken wrap', price: 680, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80' },
    ],
  },

  // ── DIP SAUCES ────────────────────────────────────────────────────────────
  {
    id: 'dips',
    label: 'Dips',
    emoji: '🫙',
    items: [
      { id: 'dp1', name: 'Chef Special Sauce', description: 'House secret recipe sauce', price: 100, image: '' },
      { id: 'dp2', name: 'Garlic Mayo Sauce', description: 'Creamy garlic mayonnaise', price: 80, image: '' },
      { id: 'dp3', name: 'Malai Boti Sauce', description: 'Creamy malai dipping sauce', price: 80, image: '' },
      { id: 'dp4', name: 'Peri Sauce', description: 'Spicy peri peri dipping sauce', price: 80, image: '' },
    ],
  },

  // ── CAFÉ ──────────────────────────────────────────────────────────────────
  {
    id: 'cafe',
    label: 'Café',
    emoji: '☕',
    items: [
      // Hot Beverages
      { id: 'cf1', name: 'Café Americano', description: 'Classic black coffee', price: 400, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80' },
      { id: 'cf2', name: 'Café Latte', description: 'Espresso with steamed milk', price: 450, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80' },
      { id: 'cf3', name: 'Café Cappuccino', description: 'Rich espresso with foam', price: 450, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', popular: true },
      { id: 'cf4', name: 'Café Mocha', description: 'Chocolate espresso with milk', price: 450, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80' },
      { id: 'cf5', name: 'Hot Chocolate', description: 'Rich creamy hot chocolate', price: 550, image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&q=80' },
      { id: 'cf6', name: 'Spanish Latte', description: 'Sweet espresso with condensed milk', price: 550, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80' },
      { id: 'cf7', name: 'Spanish Mocha', description: 'Chocolate Spanish-style coffee', price: 550, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80' },
      { id: 'cf8', name: 'Espresso', description: 'Pure concentrated espresso shot', price: 350, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80' },
      // Cold Beverages
      { id: 'cf9', name: 'Iced Latte', description: 'Cold espresso with milk over ice', price: 500, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80' },
      { id: 'cf10', name: 'Iced Americano', description: 'Chilled black coffee over ice', price: 500, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80' },
      { id: 'cf11', name: 'Iced Mocha', description: 'Cold chocolate coffee', price: 550, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80' },
      { id: 'cf12', name: 'Cold Coffee', description: 'Classic cold coffee blend', price: 580, image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400&q=80' },
      // Shakes
      { id: 'cf13', name: 'Caramel Shake', description: 'Creamy caramel milkshake', price: 580, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', popular: true },
      { id: 'cf14', name: 'Oreo Shake', description: 'Thick Oreo cookie milkshake', price: 580, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80' },
      { id: 'cf15', name: 'Strawberry Shake', description: 'Fresh strawberry milkshake', price: 580, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      { id: 'cf16', name: 'Chocolate Shake', description: 'Rich chocolate milkshake', price: 580, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80' },
      { id: 'cf17', name: 'Vanilla Shake', description: 'Classic vanilla milkshake', price: 580, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      { id: 'cf18', name: 'Nutella Shake', description: 'Nutella hazelnut milkshake', price: 580, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80' },
      { id: 'cf19', name: 'Pistachio Shake', description: 'Premium pistachio milkshake', price: 580, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      { id: 'cf20', name: 'Lotus Shake', description: 'Lotus Biscoff milkshake', price: 699, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80' },
      { id: 'cf21', name: 'Ferrero Rocher Shake', description: 'Indulgent Ferrero Rocher shake', price: 680, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      // Mocktails
      { id: 'cf22', name: 'Mint Margarita', description: 'Refreshing mint margarita mocktail', price: 300, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80', popular: true },
      { id: 'cf23', name: 'Lemonade', description: 'Fresh squeezed lemonade', price: 300, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
      { id: 'cf24', name: 'Pinacolada', description: 'Tropical pineapple coconut mocktail', price: 500, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
      { id: 'cf25', name: 'Pomegranate', description: 'Fresh pomegranate mocktail', price: 500, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
      { id: 'cf26', name: 'Blue Lagoon', description: 'Cool blue lagoon mocktail', price: 500, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
      { id: 'cf27', name: 'Passion Fruit', description: 'Exotic passion fruit mocktail', price: 500, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
      { id: 'cf28', name: 'Tropical Sunset', description: 'Tropical blended mocktail', price: 450, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
      { id: 'cf29', name: 'Fresh Lime', description: 'Fresh squeezed lime soda', price: 250, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80' },
      // Seasonal Juices
      { id: 'cf30', name: 'Peach Juice', description: 'Fresh peach juice', price: 450, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      { id: 'cf31', name: 'Mango Juice', description: 'Fresh mango juice', price: 450, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      { id: 'cf32', name: 'Grapes Juice', description: 'Fresh grape juice', price: 450, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      { id: 'cf33', name: 'Blue Berry Juice', description: 'Fresh blueberry juice', price: 450, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
      // Drinks
      { id: 'cf34', name: 'Green Tea', description: 'Light refreshing green tea', price: 100, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
      { id: 'cf35', name: 'Karak Chai', description: 'Strong spiced milk tea', price: 200, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
      { id: 'cf36', name: 'Peach Ice Tea', description: 'Chilled peach iced tea', price: 450, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
      { id: 'cf37', name: 'Peach Lemon Tea', description: 'Peach and lemon blended tea', price: 450, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
    ],
  },

  // ── DRINKS (Bottles) ──────────────────────────────────────────────────────
  {
    id: 'drinks',
    label: 'Drinks',
    emoji: '🥤',
    items: [
      // Cola
      { id: 'dr1', name: 'Cola', description: 'Ice cold Cola', price: 80,  sizes: [{label:'Regular',price:80},{label:'1 Ltr',price:120},{label:'1.5 Ltr',price:160},{label:'2 Ltr',price:200}], image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80', popular: true },
      { id: 'dr2', name: '7UP',       description: 'Refreshing lemon-lime soda', price: 80, sizes: [{label:'Regular',price:80},{label:'1 Ltr',price:120},{label:'1.5 Ltr',price:160},{label:'2 Ltr',price:200}], image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&q=80' },
      { id: 'dr3', name: 'Water Bottle', description: 'Still mineral water', price: 50, sizes: [{label:'500ml',price:50},{label:'1 Ltr',price:80},{label:'1.5 Ltr',price:100}], image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80' },
    ],
  },
];

// ─── DEALS ───────────────────────────────────────────────────────────────────
// Add, edit or remove deals here.
export const deals: Deal[] = [
  {
    id: 'd1',
    name: 'Deal 1',
    includes: ['1 Zinger Burger', '1 Reg. Fries', '1 Reg. Drink'],
    price: 549,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
  },
  {
    id: 'd2',
    name: 'Deal 2',
    includes: ['1 Patty Burger', '1 Reg. Fries', '1 Reg. Drink'],
    price: 459,
    badge: 'Value',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80',
  },
  {
    id: 'd3',
    name: 'Deal 3',
    includes: ['1 Small Pizza', '5 Hot Wings', '1 Reg. Drink'],
    price: 949,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  },
  {
    id: 'd4',
    name: 'Deal 4',
    includes: ['1 Medium Pizza', '1 Zinger Burger', '1 Patty Burger', '1 Ltr Drink'],
    price: 1699,
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80',
  },
  {
    id: 'd5',
    name: 'Deal 5',
    includes: ['1 Large Pizza', '10 Hot Wings', '1 Ltr Drink'],
    price: 1999,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  },
  {
    id: 'd6',
    name: 'Deal 6',
    includes: ['10 Hot Wings', '1 Reg. Drink'],
    price: 649,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80',
  },
  {
    id: 'd7',
    name: 'Deal 7',
    includes: ['2 Large Pizzas', '1.5 Ltr Drink'],
    price: 2899,
    badge: 'Best Value',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  },
  {
    id: 'd8',
    name: 'Best Deal',
    includes: ['1 Sp. Small Pizza', '1 Mint Margarita'],
    price: 850,
    badge: 'Best Deal',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80',
  },
  {
    id: 'd9',
    name: 'Meal 1',
    includes: ['5 Zinger Burger', '1.5 Ltr Drink'],
    price: 1949,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80',
  },
  {
    id: 'd10',
    name: 'Meal 2',
    includes: ['1 Large Sp. Pizza', '2 Patty Burger', '2 Chapli Burger', '2 Zinger Burger', '15 Hot Wings', '1.5 Ltr Drink'],
    price: 4199,
    badge: 'Mega Meal',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  },
  {
    id: 'd11',
    name: 'Meal 3',
    includes: ['1 Medium Sp. Pizza', '5 Nuggets', '5 Wings', '1 Sp. Pasta / Fries', '1.5 Ltr Drink'],
    price: 2399,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  },
  {
    id: 'd12',
    name: 'Meal 4',
    includes: ['2 Large Sp. Pizza', '2 Patty Burger', '1 Zinger Burger', '2 Sp. Pasta', '1.5 Ltr Drink'],
    price: 5200,
    badge: 'Family Feast',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80',
  },
  {
    id: 'd13',
    name: 'Family Deal 1',
    includes: ['2 Large Sp. Pizza', '1 Medium Sp. Pizza', '20 Hot Wings', '2 × 1.5 Ltr Drink'],
    price: 4999,
    badge: 'Family',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  },
  {
    id: 'd14',
    name: 'Family Deal 2',
    includes: ['6 Zinger Burger', '2 Fries', '10 Wings', '1.5 Ltr Drink'],
    price: 3399,
    badge: 'Family',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80',
  },
  {
    id: 'd15',
    name: 'Kids Meal',
    includes: ['8 Popcorn Chicken', '5 Hot Wings', '5 Nuggets', '1 M Plain Fries'],
    price: 1000,
    badge: '👧 Kids',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80',
  },
  {
    id: 'd16',
    name: 'Birthday Meal',
    includes: ['3 Large Sp. Pizza', '2 Spin Roll Deal', '2 Loaded Fries', '2 Popcorn Chicken', '1 Family Fries', '2 × 1.5 Ltr Drink', '3 Dip Sauce'],
    price: 7999,
    badge: '🎂 Birthday',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  },
  {
    id: 'd17',
    name: 'Mid Night Deal',
    includes: ['1 Sp. Sandwich', '4 Spin Rolls', '1 Ltr Drink'],
    price: 1249,
    badge: '🌙 Late Night',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80',
  },
];
