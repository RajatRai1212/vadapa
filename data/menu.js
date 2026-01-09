export const MENU_CATEGORIES = [
  { key: "vada_pav", label: "Vada Pav" },
  { key: "chai", label: "Chai" },
  { key: "snacks", label: "Snacks" },
  { key: "meals", label: "Meals" },
  { key: "addons", label: "Add-ons" }
];

export const MENU_ITEMS = [
  {
    id: "vp-classic",
    name: "Classic Mumbai Vada Pav",
    description: "Hot batata vada, pav, sweet + spicy chutneys. Real Mumbai bite.",
    category: "vada_pav",
    veg: true,
    spiceLevel: "medium",
    price: 49,
    tags: ["Best Seller", "Mumbai Style"]
  },
  {
    id: "vp-garlic",
    name: "Fiery Garlic Vada Pav",
    description: "Our signature: extra garlic powder + chutneys + crunch.",
    category: "vada_pav",
    veg: true,
    spiceLevel: "hot",
    price: 59,
    tags: ["Signature", "Fiery"]
  },
  {
    id: "chura-pav",
    name: "Chura Pav",
    description: "Crunchy chura + chutney magic. Street-style comfort.",
    category: "snacks",
    veg: true,
    spiceLevel: "medium",
    price: 69,
    tags: ["Crunchy", "Fan Favourite"]
  },
  {
    id: "poha",
    name: "Kanda Poha",
    description: "Light, fresh, and satisfying — Mumbai breakfast vibes.",
    category: "meals",
    veg: true,
    spiceLevel: "mild",
    price: 79,
    tags: ["Breakfast", "Light"]
  },
  {
    id: "misal",
    name: "Misal Pav",
    description: "Spicy misal, farsan crunch, served with pav. Bold and filling.",
    category: "meals",
    veg: true,
    spiceLevel: "hot",
    price: 129,
    tags: ["Spicy", "Full Meal"]
  },
  {
    id: "pav-bhaji",
    name: "Pav Bhaji",
    description: "Buttery pav + thick bhaji — classic street indulgence.",
    category: "meals",
    veg: true,
    spiceLevel: "medium",
    price: 149,
    tags: ["Classic", "Comfort"]
  },

  // Chai
  {
    id: "cutting-chai",
    name: "Cutting Chai",
    description: "Kadak, aromatic, and served hot — perfect with vada pav.",
    category: "chai",
    veg: true,
    spiceLevel: "mild",
    price: 25,
    tags: ["Kadak", "Best Pairing"]
  },
  {
    id: "adrak-chai",
    name: "Adrak Chai",
    description: "Ginger kick for that winter and monsoon mood.",
    category: "chai",
    veg: true,
    spiceLevel: "mild",
    price: 30,
    tags: ["Ginger", "Warming"]
  },

  // Add-ons
  {
    id: "addon-garlic",
    name: "Extra Garlic Powder",
    description: "Turn it up. Our fiery signature dust.",
    category: "addons",
    veg: true,
    spiceLevel: "hot",
    price: 10,
    tags: ["Add-on"]
  },
  {
    id: "addon-chutney",
    name: "Extra Chutney",
    description: "Sweet + spicy chutney cup.",
    category: "addons",
    veg: true,
    spiceLevel: "medium",
    price: 10,
    tags: ["Add-on"]
  }
];
