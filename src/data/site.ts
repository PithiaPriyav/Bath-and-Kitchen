/**
 * Single source of truth for all editable content.
 *
 * Non-technical staff edit THIS file (not the pages). Each export is shaped so
 * it maps cleanly onto a CMS document later (Sanity / Payload): keep the shape
 * when adding fields.
 */

export interface SiteInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phones: string[];
  address: {
    line1: string;
    line2: string;
    city: string;
    region: string;
    country: string;
    countryCode: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
}

export const site: SiteInfo = {
  name: 'Bath & Kitchen Studio',
  legalName: 'Bath & Kitchen Studio LLP',
  tagline: 'Inspired Living, Every Day.',
  description:
    'Bath & Kitchen Studio is a Nairobi showroom for premium tiles, kitchens, bathrooms and wardrobes — with an in-house 3D rendering service to get it right the first time.',
  url: 'https://bath-kitchenstudio.com',
  email: 'info@bath-kitchenstudio.com',
  phones: ['+254 742 311 311', '+254 702 311 311'],
  address: {
    line1: '9th Floor, The Mandrake',
    line2: 'off Ring Road Parklands',
    city: 'Nairobi',
    region: 'Nairobi',
    country: 'Kenya',
    countryCode: 'KE',
  },
  socials: {
    instagram: 'https://www.instagram.com/bath_kitchen_studio',
    facebook: 'https://www.facebook.com/bathandkitchenstudio',
    linkedin: 'https://www.linkedin.com/company/bath-kitchen-studio',
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact', href: '/contact' },
];

export interface Deal {
  id: string;
  name: string;
  brand?: string;
  category: string;
  /** Original price in KES. */
  was: number;
  /** Promo price in KES. */
  now: number;
  unit?: string;
  note?: string;
}

export interface Offer {
  active: boolean;
  name: string;
  kicker: string;
  headline: string;
  sub: string;
  /** ISO date the promo opens. */
  start: string;
  /** ISO date the promo closes. */
  end: string;
  terms: string;
  deals: Deal[];
}

export const offer: Offer = {
  active: true,
  name: 'The Home Upgrade Event',
  kicker: 'Limited Time',
  headline: 'Luxury at Giveaway Prices',
  sub: 'Our biggest event of the year. Premium bath, kitchen and tile lines at once-a-year pricing — while stocks last.',
  start: '2026-06-22',
  end: '2026-07-31',
  terms: 'Offer valid 22 Jun – 31 Jul 2026, or while stocks last. Prices shown are showroom prices and exclude installation. Cannot be combined with other promotions.',
  deals: [
    {
      id: 'wb-subway-tile',
      name: 'Villeroy & Boch Subway 3.0 Wall Tile',
      brand: 'Villeroy & Boch',
      category: 'Tiles',
      was: 6800,
      now: 4200,
      unit: 'per m²',
      note: 'Matt white, large format',
    },
    {
      id: 'roca-meridian-wc',
      name: 'Roca Meridian Wall-Hung WC',
      brand: 'Roca',
      category: 'Bathrooms',
      was: 58000,
      now: 39900,
      unit: 'each',
      note: 'Rimless, soft-close seat included',
    },
    {
      id: 'nitco-porcelain',
      name: 'Nitco Large Format Porcelain 600×1200',
      brand: 'Nitco',
      category: 'Tiles',
      was: 5400,
      now: 3300,
      unit: 'per m²',
      note: 'Marble-effect, rectified edge',
    },
    {
      id: 'roca-basin-mixer',
      name: 'Roca L20 Basin Mixer',
      brand: 'Roca',
      category: 'Bathrooms',
      was: 24500,
      now: 16900,
      unit: 'each',
      note: 'Chrome, with click-clack waste',
    },
    {
      id: 'shaker-kitchen',
      name: 'Handle-less Matt Kitchen — 3m Run',
      category: 'Kitchens',
      was: 480000,
      now: 360000,
      unit: 'per run',
      note: 'Includes carcasses, fronts and soft-close',
    },
    {
      id: 'sliding-wardrobe',
      name: 'Sliding Wardrobe — 2.4m, Mirror Front',
      category: 'Wardrobes',
      was: 165000,
      now: 119000,
      unit: 'each',
      note: 'Soft-close runners, internal layout included',
    },
  ],
};

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  highlights: string[];
  brands: string[];
}

export const categories: Category[] = [
  {
    slug: 'tiles',
    name: 'Tiles',
    tagline: 'Surfaces that set the tone.',
    blurb:
      'From large-format porcelain to handmade-look ceramics, our tile collections are chosen to make rooms feel open, calm and considered — not busy.',
    highlights: [
      'Large-format porcelain that opens up small rooms',
      'Marble, stone and concrete effects',
      'Matt, gloss and textured finishes',
      'Floor, wall and outdoor-rated ranges',
    ],
    brands: ['Villeroy & Boch', 'Nitco'],
  },
  {
    slug: 'kitchens',
    name: 'Kitchens',
    tagline: 'The heart of the home, engineered.',
    blurb:
      'Fully bespoke kitchens designed around how you actually live and cook. Handle-less and shaker fronts, soft-close everything, and finishes that last.',
    highlights: [
      'Bespoke layouts designed in 3D',
      'Handle-less, shaker and slab door styles',
      'Soft-close hinges and runners throughout',
      'Worktops in quartz, granite and laminate',
    ],
    brands: ['Bath & Kitchen Studio'],
  },
  {
    slug: 'bathrooms',
    name: 'Bathrooms',
    tagline: 'Spa-grade, every day.',
    blurb:
      'Sanitaryware, brassware and shower systems from the names that define the category — specified to work together as one calm, coherent space.',
    highlights: [
      'Wall-hung and back-to-wall sanitaryware',
      'Rainfall and thermostatic shower systems',
      'Vanities, mirrors and storage',
      'Brassware in chrome, black and brushed finishes',
    ],
    brands: ['Villeroy & Boch', 'Roca'],
  },
  {
    slug: 'wardrobes',
    name: 'Wardrobes',
    tagline: 'Storage worth showing off.',
    blurb:
      'Fitted and sliding wardrobes that make the most of every wall. Interiors planned around your life, fronts finished to match your room.',
    highlights: [
      'Sliding and hinged door systems',
      'Mirror, matt and textured fronts',
      'Custom internal layouts',
      'Soft-close runners as standard',
    ],
    brands: ['Bath & Kitchen Studio'],
  },
];

export interface Clientele {
  title: string;
  blurb: string;
}

export const clientele: Clientele[] = [
  {
    title: 'Homeowners',
    blurb: 'Renovating one room or building from the ground up — we guide every choice.',
  },
  {
    title: 'Developers & Contractors',
    blurb: 'Spec-grade product, reliable supply and pricing that works at volume.',
  },
  {
    title: 'Hospitality & Commercial',
    blurb: 'Durable, design-led finishes for spaces that take heavy daily use.',
  },
  {
    title: 'Designers & Architects',
    blurb: 'A specification partner with 3D rendering to sell the vision to clients.',
  },
];

/** The in-house service that sets the studio apart. */
export const service = {
  name: 'In-house 3D Rendering',
  blurb:
    'See your bathroom, kitchen or whole space photo-realistically before a single tile is cut. Our designers render your room so you get it right the first time — no costly guesswork.',
};

/** Format a KES amount as a clean currency string. */
export function fmt(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(amount);
}

export type OfferStatus = 'upcoming' | 'live' | 'ended' | 'off';

/** Where the offer sits relative to today: upcoming / live / ended / off. */
export function offerStatus(o: Offer = offer, today: Date = new Date()): OfferStatus {
  if (!o.active) return 'off';
  const start = new Date(o.start + 'T00:00:00');
  const end = new Date(o.end + 'T23:59:59');
  if (today < start) return 'upcoming';
  if (today > end) return 'ended';
  return 'live';
}

/**
 * Whether to feature the offer at all. True while it is upcoming OR running —
 * so it can be promoted ahead of time — and false once it has ended or is
 * switched off, which is when pages fall back to their empty state.
 */
export function offerIsVisible(o: Offer = offer, today: Date = new Date()): boolean {
  const s = offerStatus(o, today);
  return s === 'upcoming' || s === 'live';
}

/** Has the offer actually opened yet? Drives "starts" vs "ends" copy. */
export function offerHasStarted(o: Offer = offer, today: Date = new Date()): boolean {
  return offerStatus(o, today) === 'live';
}

function fmtDate(iso: string, withYear = false): string {
  const opts: Intl.DateTimeFormatOptions = withYear
    ? { day: 'numeric', month: 'short', year: 'numeric' }
    : { day: 'numeric', month: 'short' };
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', opts);
}

/** Human-readable promo window, e.g. "22 Jun – 31 Jul 2026". */
export function offerWindow(o: Offer = offer): string {
  return `${fmtDate(o.start)} – ${fmtDate(o.end, true)}`;
}

/** Short status line that adapts to upcoming vs live, e.g. "Starts 22 Jun". */
export function offerStatusLabel(o: Offer = offer, today: Date = new Date()): string {
  switch (offerStatus(o, today)) {
    case 'upcoming':
      return `Starts ${fmtDate(o.start)}`;
    case 'live':
      return `Now on · ends ${fmtDate(o.end)}`;
    default:
      return '';
  }
}
