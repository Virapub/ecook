const categories = [
  {
    id: 'cat-low-price',
    name: 'Low Budget Finds',
    slug: 'low-budget',
    image: 'images/low-budget.png'
  },
  {
    id: 'cat-mid-price',
    name: 'Mid Range Picks',
    slug: 'mid-range',
    image: 'images/mid-range.png'
  },
  {
    id: 'cat-high-price',
    name: 'Premium Products',
    slug: 'premium',
    image: 'images/cat-premium.png'
  }
];

function getPriceBasedCategory(priceINR) {
  if (priceINR >= 0 && priceINR <= 1999) {
    return 'Low Budget Finds';
  } else if (priceINR >= 2000 && priceINR <= 29999) {
    return 'Mid Range Picks';
  } else if (priceINR >= 30000) {
    return 'Premium Products';
  } else {
    return 'Uncategorized';
  }
}
// --- Products Data (Includes previously discussed products + your new list) ---
const products = [
  {
  id: "collapsible-electric-kettle",
  name: "Collapsible Electric Kettle",
  priceIN: 1499,
  priceUS: 25.19,
  rating: 4.5,
  image: "images/kettle.jpg",
  category: "kitchen-appliances",
  features: [
    "Collapsible design for portability",
    "800W rapid boil power",
    "BPA-free food-grade silicone",
    "Auto shut-off & boil-dry protection",
    "Capacity: 0.6 Liters (approx)"
  ],
  buyLinkIN: "https://www.amazon.in/dp/https://amzn.to/3IwoUX0?tag=YOUR_TRACKING_ID",
  buyLinkUS: "https://www.amazon.com/dp/https://amzn.to/4nSPlX5?tag=YOUR_TRACKING_ID"
}
];

// --- Featured Products (You can adjust this list as needed for your homepage) ---
// Currently featuring some from your original list and some newly added ones.
const featuredProducts = products.filter(product =>
    ['collapsible-electric-kettle', 'automatic-soap-dispenser', 'magnetic-fridge-shelf', 'mini-food-chopper', 'fridge-organizer-bins', 'smart-trash-can', 'roll-up-drying-rack', 'automatic-pan-stirrer'].includes(product.id)
);
