// ============================================================
// CORAL BRACELET — PREMIUM PRODUCT CATALOG
// ============================================================

export type ProductCategory =
  | "Pearl Bracelets"
  | "Crystal Bracelets"
  | "Beaded Bracelets"
  | "Charm Bracelets"
  | "Self-Love Collection"
  | "Gift Collection"
  | "Friendship Bracelets"
  | "Minimalist Collection"
  | "Statement Collection";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;

  tagline: string;
  description: string;

  price: number;

  image: string;
  gallery: string[];

  badge?:
    | "Bestseller"
    | "New"
    | "Limited"
    | "Handcrafted"
    | "Gift Pick";

  material?: string;
  size?: string;
  adjustable?: boolean;

  slug: string;
  productUrl: string;

  featured?: boolean;
  available?: boolean;
}

// ============================================================
// COLLECTION DATA
// ============================================================

export interface Collection {
  name: ProductCategory;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    name: "Pearl Bracelets",
    slug: "pearl-bracelets",
    eyebrow: "TIMELESS ELEGANCE",
    title: "The Pearl Edit",
    description:
      "Soft, sophisticated and effortlessly elegant pieces designed for everyday beauty.",
    image: "/images/pearl/pearl.jpeg",
  },

  {
    name: "Crystal Bracelets",
    slug: "crystal-bracelets",
    eyebrow: "SUBTLE SPARKLE",
    title: "The Crystal Edit",
    description:
      "Delicate crystal-inspired designs that bring color and sparkle to every look.",
    image: "/images/crystal/crystal1.png",
  },

  {
    name: "Beaded Bracelets",
    slug: "beaded-bracelets",
    eyebrow: "PLAYFUL DETAILS",
    title: "The Beaded Edit",
    description:
      "Expressive handmade designs created to add color and personality.",
    image: "/images/beaded/beaded1.png",
  },

  {
    name: "Charm Bracelets",
    slug: "charm-bracelets",
    eyebrow: "MADE MEANINGFUL",
    title: "The Charm Edit",
    description:
      "Beautiful little details that turn a bracelet into something personal.",
    image: "/images/charm/charm1.jpeg",
  },

  {
    name: "Self-Love Collection",
    slug: "self-love",
    eyebrow: "CHOOSE YOURSELF",
    title: "The Self-Love Edit",
    description:
      "Wearable reminders to celebrate yourself and your journey.",
    image: "/images/selflove/sl1.jpeg",
  },

  {
    name: "Gift Collection",
    slug: "gift-bracelets",
    eyebrow: "GIVE WITH MEANING",
    title: "The Gift Edit",
    description:
      "Thoughtful pieces for birthdays, celebrations and special moments.",
    image: "/images/gift/gift1.png",
  },

  {
    name: "Friendship Bracelets",
    slug: "friendship-bracelets",
    eyebrow: "MADE FOR YOUR PEOPLE",
    title: "The Friendship Edit",
    description:
      "Meaningful designs created to celebrate beautiful friendships.",
    image: "/images/friendship/friendship1.jpg",
  },

  {
    name: "Minimalist Collection",
    slug: "minimal-bracelets",
    eyebrow: "LESS, BEAUTIFULLY",
    title: "The Minimal Edit",
    description:
      "Clean and understated pieces for effortless everyday styling.",
    image: "/images/minimalist/minimal.jpg",
  },

  {
    name: "Statement Collection",
    slug: "statement-bracelets",
    eyebrow: "MAKE AN ENTRANCE",
    title: "The Statement Edit",
    description:
      "Bold expressive designs created to stand out.",
    image: "/images/statement/statement1.png",
  },
];

// ============================================================
// PEARL BRACELETS
// ============================================================

const pearlProducts: Product[] = [
  {
    id: 101,
    name: "Pearl Whisper",
    category: "Pearl Bracelets",
    tagline: "Quiet elegance, beautifully worn.",
    description:
      "A refined pearl bracelet designed for an elegant everyday look.",
    price: 299,

    image: "/images/pearl/pearl.jpeg",

    gallery: [
      "/images/pearl/pearl.jpeg",
    ],

    badge: "Bestseller",
    material: "Pearl",
    size: "Adjustable",
    adjustable: true,

    slug: "pearl-whisper",
    productUrl: "/products/pearl-bracelets/pearl-whisper",

    featured: true,
    available: true,
  },
];

// ============================================================
// CRYSTAL BRACELETS
// ============================================================

const crystalProducts: Product[] = [
  {
    id: 201,
    name: "Crystal Glow",
    category: "Crystal Bracelets",
    tagline: "A little sparkle. A lot of personality.",
    description:
      "A beautiful crystal-inspired bracelet designed to add color and sparkle to your everyday style.",
    price: 299,

    image: "/images/crystal/crystal1.png",

    gallery: [
      "/images/crystal/crystal1.png",
      "/images/crystal/crystal2.jpeg",
    ],

    badge: "Bestseller",
    material: "Crystal",
    size: "Adjustable",
    adjustable: true,

    slug: "crystal-glow",
    productUrl: "/products/crystal-bracelets/crystal-glow",

    featured: true,
    available: true,
  },

  {
    id: 202,
    name: "Crystal Bloom",
    category: "Crystal Bracelets",
    tagline: "Delicate sparkle, everyday.",
    description:
      "A refined crystal-inspired design created for a subtle touch of shimmer.",
    price: 299,

    image: "/images/crystal/crystal2.jpeg",

    gallery: [
      "/images/crystal/crystal2.jpeg",
      "/images/crystal/crystal1.png",
    ],

    badge: "New",
    material: "Crystal",
    size: "Adjustable",
    adjustable: true,

    slug: "crystal-bloom",
    productUrl: "/products/crystal-bracelets/crystal-bloom",

    featured: true,
    available: true,
  },
];

// ============================================================
// BEADED BRACELETS
// ============================================================

const beadedProducts: Product[] = [
  {
    id: 301,
    name: "Beaded Bliss",
    category: "Beaded Bracelets",
    tagline: "Color your story.",
    description:
      "A playful handcrafted bracelet designed to add personality and effortless charm to your style.",
    price: 299,

    image: "/images/beaded/beaded1.png",

    gallery: [
      "/images/beaded/beaded1.png",
    ],

    badge: "Bestseller",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "beaded-bliss",
    productUrl: "/products/beaded-bracelets/beaded-bliss",

    featured: true,
    available: true,
  },

  {
    id: 302,
    name: "Pearl Bloom",
    category: "Beaded Bracelets",
    tagline: "Delicate details, made to shine.",
    description:
      "A graceful handcrafted bracelet combining playful beadwork with an elegant finish.",
    price: 299,

    image: "/images/beaded/beaded2.jpg",

    gallery: [
      "/images/beaded/beaded2.jpg",
    ],

    badge: "New",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "pearl-bloom",
    productUrl: "/products/beaded-bracelets/pearl-bloom",

    featured: true,
    available: true,
  },

  {
    id: 303,
    name: "Golden Petal",
    category: "Beaded Bracelets",
    tagline: "A little elegance in every detail.",
    description:
      "A beautifully handcrafted design created to bring a soft, refined touch to your everyday look.",
    price: 299,

    image: "/images/beaded/beaded3.jpg",

    gallery: [
      "/images/beaded/beaded3.jpg",
    ],

    badge: "Handcrafted",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "golden-petal",
    productUrl: "/products/beaded-bracelets/golden-petal",

    featured: false,
    available: true,
  },
];

// ============================================================
// CHARM BRACELETS
// ============================================================

const charmProducts: Product[] = [
  {
    id: 401,
    name: "Little Wishes",
    category: "Charm Bracelets",
    tagline: "Carry a little meaning.",
    description:
      "A beautiful charm bracelet designed to make your jewelry feel personal and memorable.",
    price: 299,

    image: "/images/charm/charm1.jpeg",

    gallery: [
      "/images/charm/charm1.jpeg",
    ],

    badge: "Gift Pick",
    material: "Charm",
    size: "Adjustable",
    adjustable: true,

    slug: "little-wishes",
    productUrl: "/products/charm-bracelets/little-wishes",

    featured: true,
    available: true,
  },
];

// ============================================================
// SELF-LOVE COLLECTION
// ============================================================

const selfLoveProducts: Product[] = [
  {
    id: 501,
    name: "Love Yourself",
    category: "Self-Love Collection",
    tagline: "Choose yourself, every day.",
    description:
      "A beautiful wearable reminder to celebrate your worth, growth and individuality.",
    price: 299,

    image: "/images/selflove/sl1.jpeg",

    gallery: [
      "/images/selflove/sl1.jpeg",
      "/images/selflove/sl2.jpeg",
      "/images/selflove/sl3.jpeg",
    ],

    badge: "Bestseller",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "love-yourself",
    productUrl: "/products/self-love/love-yourself",

    featured: true,
    available: true,
  },

  {
    id: 502,
    name: "Be You",
    category: "Self-Love Collection",
    tagline: "Your worth is worth celebrating.",
    description:
      "A delicate bracelet created as a reminder of confidence and self-belief.",
    price: 299,

    image: "/images/selflove/sl2.jpeg",

    gallery: [
      "/images/selflove/sl2.jpeg",
      "/images/selflove/sl1.jpeg",
      "/images/selflove/sl3.jpeg",
    ],

    badge: "Gift Pick",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "be-you",
    productUrl: "/products/self-love/be-you",

    featured: true,
    available: true,
  },

  {
    id: 503,
    name: "Choose You",
    category: "Self-Love Collection",
    tagline: "Becoming your own favourite person.",
    description:
      "A meaningful piece designed to celebrate the person you are becoming.",
    price: 299,

    image: "/images/selflove/sl3.jpeg",

    gallery: [
      "/images/selflove/sl3.jpeg",
      "/images/selflove/sl1.jpeg",
      "/images/selflove/sl2.jpeg",
    ],

    badge: "Handcrafted",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "choose-you",
    productUrl: "/products/self-love/choose-you",

    featured: false,
    available: true,
  },
];

// ============================================================
// GIFT COLLECTION
// ============================================================

const giftProducts: Product[] = [
  {
    id: 601,
    name: "Wrapped With Love",
    category: "Gift Collection",
    tagline: "Give a little love.",
    description:
      "A thoughtful handcrafted bracelet created for birthdays, celebrations and meaningful moments.",
    price: 299,

    image: "/images/gift/gift1.png",

    gallery: [
      "/images/gift/gift1.png",
    ],

    badge: "Gift Pick",
    material: "Handcrafted",
    size: "Adjustable",
    adjustable: true,

    slug: "wrapped-with-love",
    productUrl: "/products/gift-bracelets/wrapped-with-love",

    featured: true,
    available: true,
  },
];

// ============================================================
// FRIENDSHIP BRACELETS
// ============================================================

const friendshipProducts: Product[] = [
  {
    id: 701,
    name: "Forever Us",
    category: "Friendship Bracelets",
    tagline: "For friendships worth keeping forever.",
    description:
      "A sweet handcrafted bracelet designed to celebrate the people who make life special.",
    price: 299,

    image: "/images/friendship/friendship1.jpg",

    gallery: [
      "/images/friendship/friendship1.jpg",
      "/images/friendship/friendship2.jpeg",
      "/images/friendship/friendship3.jpeg",
    ],

    badge: "Bestseller",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "forever-us",
    productUrl: "/products/friendship-bracelets/forever-us",

    featured: true,
    available: true,
  },

  {
    id: 702,
    name: "Always Together",
    category: "Friendship Bracelets",
    tagline: "Made for shared memories.",
    description:
      "A matching-inspired design created to celebrate friendship and connection.",
    price: 299,

    image: "/images/friendship/friendship2.jpeg",

    gallery: [
      "/images/friendship/friendship2.jpeg",
      "/images/friendship/friendship1.jpg",
      "/images/friendship/friendship3.jpeg",
    ],

    badge: "Gift Pick",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "always-together",
    productUrl: "/products/friendship-bracelets/always-together",

    featured: true,
    available: true,
  },

  {
    id: 703,
    name: "Made For Memories",
    category: "Friendship Bracelets",
    tagline: "A little reminder of your people.",
    description:
      "A meaningful everyday piece designed to celebrate a special bond.",
    price: 299,

    image: "/images/friendship/friendship3.jpeg",

    gallery: [
      "/images/friendship/friendship3.jpeg",
      "/images/friendship/friendship1.jpg",
      "/images/friendship/friendship2.jpeg",
    ],

    badge: "New",
    material: "Beads",
    size: "Adjustable",
    adjustable: true,

    slug: "made-for-memories",
    productUrl: "/products/friendship-bracelets/made-for-memories",

    featured: false,
    available: true,
  },
];

// ============================================================
// MINIMALIST COLLECTION
// ============================================================

const minimalistProducts: Product[] = [
  {
    id: 801,
    name: "Simply Yours",
    category: "Minimalist Collection",
    tagline: "Less, beautifully.",
    description:
      "A clean and understated bracelet made for effortless everyday styling.",
    price: 299,

    image: "/images/minimalist/minimal.jpg",

    gallery: [
      "/images/minimalist/minimal.jpg",
    ],

    badge: "Bestseller",
    material: "Minimal design",
    size: "Adjustable",
    adjustable: true,

    slug: "simply-yours",
    productUrl: "/products/minimal-bracelets/simply-yours",

    featured: true,
    available: true,
  },
];

// ============================================================
// STATEMENT COLLECTION
// ============================================================

const statementProducts: Product[] = [
  {
    id: 901,
    name: "The Statement Piece",
    category: "Statement Collection",
    tagline: "Make yourself seen.",
    description:
      "A bold handcrafted piece designed to become the centerpiece of your look.",
    price: 299,

    image: "/images/statement/statement1.png",

    gallery: [
      "/images/statement/statement1.png",
      "/images/statement/statement2.jpeg",
    ],

    badge: "Bestseller",
    material: "Statement design",
    size: "Adjustable",
    adjustable: true,

    slug: "the-statement-piece",
    productUrl: "/products/statement-bracelets/the-statement-piece",

    featured: true,
    available: true,
  },

  {
    id: 902,
    name: "Bold Allure",
    category: "Statement Collection",
    tagline: "Bold enough to be remembered.",
    description:
      "A striking design created for confident styling and unforgettable looks.",
    price: 299,

    image: "/images/statement/statement2.jpeg",

    gallery: [
      "/images/statement/statement2.jpeg",
      "/images/statement/statement1.png",
    ],

    badge: "New",
    material: "Statement design",
    size: "Adjustable",
    adjustable: true,

    slug: "bold-allure",
    productUrl: "/products/statement-bracelets/bold-allure",

    featured: true,
    available: true,
  },
];

// ============================================================
// MASTER PRODUCT LIST
// ============================================================

export const products: Product[] = [
  ...pearlProducts,
  ...crystalProducts,
  ...beadedProducts,
  ...charmProducts,
  ...selfLoveProducts,
  ...giftProducts,
  ...friendshipProducts,
  ...minimalistProducts,
  ...statementProducts,
];

// ============================================================
// CATEGORY LIST
// ============================================================

export const categories: ProductCategory[] = [
  "Pearl Bracelets",
  "Crystal Bracelets",
  "Beaded Bracelets",
  "Charm Bracelets",
  "Self-Love Collection",
  "Gift Collection",
  "Friendship Bracelets",
  "Minimalist Collection",
  "Statement Collection",
];

// ============================================================
// HELPERS
// ============================================================

export function getProductById(
  id: number
): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(
  slug: string
): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(
  category: ProductCategory
): Product[] {
  return products.filter(
    (product) => product.category === category
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter(
    (product) => product.featured && product.available
  );
}