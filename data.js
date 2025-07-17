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
    id: "automatic-soap-dispenser",
    name: "Automatic Soap Dispenser",
    description: "Touchless soap dispenser with infrared sensor for hygienic, hands-free operation. Ideal for kitchen or bathroom.",
    priceINR: 1388,
    priceUSD: 16.21,
    category: getPriceBasedCategory(1388),
    categorySlug: "low-budget",
    link: "https://amzn.to/46sLIRc",
    image: "https://m.media-amazon.com/images/I/5173SHrfbyL._SL1024_.jpg", // Example: Use correct image URL if different
    rating: 4.2,
    features: ["Touchless operation for germ-free use", "Adjustable soap volume (3 levels)", "Battery-powered (AA batteries)", "Sleek and modern design", "Capacity: 300ml (approx)"],
    details: "Enhance hygiene in your kitchen or bathroom with this automatic soap dispenser. Its infrared motion sensor ensures a touch-free experience, reducing germ spread. You can easily adjust the dispensed soap volume to your preference. The modern design seamlessly integrates with any decor. Perfect for homes, offices, and public restrooms."
  },
  {
    id: "magnetic-fridge-shelf",
    name: "Magnetic Fridge Shelf Rack",
    description: "Multi-purpose magnetic storage organizer that attaches easily to your refrigerator, saving counter space.",
    priceINR: 1199,
    priceUSD: 14.00,
    category: getPriceBasedCategory(1199),
    categorySlug: "low-budget",
    link: "https://amzn.to/44rEZEO",
    image: "https://m.media-amazon.com/images/I/81aAamdevaL._SL1500_.jpg", // Example: Use correct image URL if different
    rating: 4.3,
    features: ["Strong magnetic back for secure hold", "Multi-tier design for various items", "Durable carbon steel construction", "Easy to install and reposition", "Space-saving solution"],
    details: "Maximize your kitchen space with this magnetic fridge shelf rack. Its powerful magnets provide a secure hold on your refrigerator, eliminating the need for drilling. The multi-tiered design is perfect for spices, condiments, paper towels, or small kitchen tools, keeping your countertops clutter-free and organized. Made of durable carbon steel for long-lasting use."
  },
  {
    id: "mini-food-chopper",
    name: "Mini Electric Food Chopper",
    description: "Compact and powerful wireless food chopper for garlic, ginger, chilies, and small quantities of vegetables.",
    priceINR: 999,
    priceUSD: 11.67,
    category: getPriceBasedCategory(999),
    categorySlug: "low-budget",
    link: "https://amzn.to/44k5wVJ",
    image: "https://m.media-amazon.com/images/I/61IK+zdG-IL._SL1200_.jpg", // Example: Use correct image URL if different
    rating: 4.6,
    features: ["USB rechargeable for cordless convenience", "One-button operation for ease of use", "Easy to clean components", "Portable design for small kitchens or travel", "Capacity: 250ml (approx)"],
    details: "This mini electric food chopper is your perfect companion for quick meal prep. Its cordless, USB rechargeable design offers ultimate convenience. Ideal for chopping garlic, onions, ginger, chilies, and even small amounts of baby food. The powerful motor ensures efficient chopping with a single button press. A compact solution for all your chopping needs."
  },
  {
    id: "digital-kitchen-scale",
    name: "Digital Kitchen Scale",
    description: "High-precision digital scale for accurate measurements of ingredients, perfect for baking and cooking.",
    priceINR: 850,
    priceUSD: 9.93,
    category: getPriceBasedCategory(850),
    categorySlug: "low-budget",
    link: "https://amzn.to/3Iffdfu",
    image: "https://m.media-amazon.com/images/I/313SCZswZZL.jpg", // Example: Use correct image URL if different
    rating: 4.7,
    features: ["Tare function for zeroing containers", "Multiple unit conversion (g, oz, ml, lb)", "Clear LCD display", "Sleek, slim design for easy storage", "Weight Capacity: 5kg"],
    details: "Achieve culinary precision with this high-precision digital kitchen scale. Its accurate sensors ensure perfect measurements for baking, cooking, and portion control. The tare function allows you to weigh ingredients directly in your bowl, and the multiple unit conversion makes it versatile for all recipes. Slim design for easy storage and a clear LCD for easy reading."
  },
  {
    id: "instant-pot-duo-7-in-1-electric-pressure-cooker",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    description: "7-in-1 functionality: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker and warmer. A versatile kitchen essential.",
    priceINR: 6999,
    priceUSD: 85.48,
    category: getPriceBasedCategory(6999),
    categorySlug: "mid-range",
    link: "https://amzn.to/3Go8aR6",
    image: "https://m.media-amazon.com/images/I/41LNYLNU28L._SX300_SY300_QL70_FMwebp_.jpg", // Example: Use correct image URL if different
    rating: 4.6,
    features: [
      "Automatic Keep Warm Setting",
      "Push-button Control Method",
      "Automatic Operation Mode",
      "Voltage: 230 Volts (ideal for India)",
      "Stainless Steel Inner Pot",
      "Capacity: 6 Liters (Most common for Duo 7-in-1)"
    ],
    details: "The Instant Pot Duo is a revolutionary kitchen appliance combining 7 functions in one. It acts as a pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and food warmer. With smart programs and a user-friendly interface, cooking healthy and delicious meals has never been easier. Its 6-liter capacity is perfect for families, making meal prep a breeze."
   },
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
