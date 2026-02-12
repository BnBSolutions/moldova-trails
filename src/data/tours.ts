export type TourCategory = 'vinicol' | 'cultural' | 'aventura' | 'rural' | 'manastiri';

export interface Tour {
  id: string;
  slug: string;
  title: string;
  category: TourCategory;
  categoryLabel: string;
  duration: string;
  priceEur: number;
  priceMdl: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: { day: number; title: string; description: string }[];
  maxGroup: number;
  difficulty: string;
  region: string;
}

export const tourCategories = [
  { key: 'toate' as const, label: 'Toate' },
  { key: 'vinicol' as const, label: 'Vinicol' },
  { key: 'cultural' as const, label: 'Cultural' },
  { key: 'aventura' as const, label: 'Aventură' },
  { key: 'rural' as const, label: 'Rural' },
  { key: 'manastiri' as const, label: 'Mănăstiri' },
];

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'cricova-milestii-mici-wine-tour',
    title: 'Cricova & Mileștii Mici - Beciurile Subterane',
    category: 'vinicol',
    categoryLabel: 'Tur Vinicol',
    duration: '2 zile',
    priceEur: 249,
    priceMdl: 4850,
    rating: 4.9,
    reviewCount: 127,
    shortDescription: 'Descoperă cele mai mari beciuri de vin din lume în Mileștii Mici și galeria subterană a Cricovei.',
    description: 'Un tur exclusiv prin cele două bijuterii vinicole ale Moldovei. Vei explora galeriile subterane ale Cricovei, unde lideri mondiali și-au păstrat colecțiile de vin, și vei descoperi recordul mondial Guinness la Mileștii Mici — cele mai mari beciuri de vin din lume, cu peste 200 km de tuneluri.',
    image: '/hero-wine-cellar.jpg',
    gallery: [],
    highlights: ['Degustare de 8 vinuri premium', 'Vizită în galeriile VIP Cricova', 'Prânz tradițional moldovenesc', 'Transfer privat'],
    included: ['Transport', 'Ghid profesionist', 'Degustări', 'Prânz inclus', 'Asigurare'],
    notIncluded: ['Băuturi suplimentare', 'Cheltuieli personale'],
    itinerary: [
      { day: 1, title: 'Cricova — Orașul Subteran al Vinului', description: 'Plecăm din Chișinău dimineața. Vizitare Cricova cu degustare de 5 vinuri și prânz în pivnița subterană.' },
      { day: 2, title: 'Mileștii Mici — Record Mondial Guinness', description: 'Explorare Mileștii Mici, degustare de 3 vinuri rare, vizitare colecția istorică. Retur Chișinău seara.' },
    ],
    maxGroup: 12,
    difficulty: 'Ușor',
    region: 'Codru',
  },
  {
    id: '2',
    slug: 'orheiul-vechi-adventure',
    title: 'Orheiul Vechi — Traseul Misterelor',
    category: 'cultural',
    categoryLabel: 'Tur Cultural',
    duration: '1 zi',
    priceEur: 89,
    priceMdl: 1730,
    rating: 4.8,
    reviewCount: 203,
    shortDescription: 'Explorează complexul cultural și natural Orheiul Vechi, patrimoniu UNESCO, cu mănăstirea rupestră medievală.',
    description: 'Orheiul Vechi este o capodoperă naturală și culturală, un loc unde istoria de mii de ani se îmbină cu peisaje spectaculoase. Vei vizita mănăstirea rupestră din secolul XIII, vei explora formațiunile geologice unice și vei savura un prânz la o gospodărie tradițională din satul Butuceni.',
    image: '/hero-monastery.jpg',
    gallery: [],
    highlights: ['Mănăstirea rupestră din sec. XIII', 'Peisaje spectaculoase', 'Prânz tradițional în Butuceni', 'Drumeție ghidată'],
    included: ['Transport', 'Ghid', 'Prânz tradițional', 'Intrări muzee'],
    notIncluded: ['Suveniruri', 'Băuturi extra'],
    itinerary: [
      { day: 1, title: 'Orheiul Vechi — O Călătorie în Timp', description: 'Plecare dimineața din Chișinău. Vizitare complexul Orheiul Vechi, drumeție pe traseul panoramic, vizitare mănăstire rupestră, prânz tradițional. Retur seara.' },
    ],
    maxGroup: 15,
    difficulty: 'Moderat',
    region: 'Codru',
  },
  {
    id: '3',
    slug: 'wine-route-stefan-voda',
    title: 'Ruta Vinului — Ștefan Vodă',
    category: 'vinicol',
    categoryLabel: 'Tur Vinicol',
    duration: '3 zile',
    priceEur: 399,
    priceMdl: 7770,
    rating: 4.9,
    reviewCount: 89,
    shortDescription: 'Trei zile prin cele mai renumite crame din regiunea Ștefan Vodă, cu degustări și cazare în podgorii.',
    description: 'O aventură viticolă de trei zile prin inima regiunii Ștefan Vodă. Vei vizita cramele Purcari, Château Vartely și Et Cetera, vei participa la degustări profesionale și vei dormi în pensiuni elegante înconjurate de vii.',
    image: '/wine-tasting.jpg',
    gallery: [],
    highlights: ['Vizită 4 crame premium', 'Degustare 15+ vinuri', 'Cazare în podgorie', 'Workshop vinificație'],
    included: ['Transport', 'Cazare 2 nopți', 'Mic dejun', 'Degustări', 'Ghid'],
    notIncluded: ['Cină (opțional)', 'Vinuri cumpărate'],
    itinerary: [
      { day: 1, title: 'Purcari — Legendarul Negru de Purcari', description: 'Transfer Chișinău — Purcari. Vizitare cramă, degustare vinuri roșii premium, cină în podgorie.' },
      { day: 2, title: 'Château Vartely & Et Cetera', description: 'Vizitare ambele crame cu degustări, atelier vinificație, prânz cu produse locale.' },
      { day: 3, title: 'Vinăriile mici & Retur', description: 'Vizitare producători artizanali locali, ultimele degustări, retur Chișinău.' },
    ],
    maxGroup: 10,
    difficulty: 'Ușor',
    region: 'Ștefan Vodă',
  },
  {
    id: '4',
    slug: 'monastery-trail',
    title: 'Drumul Mănăstirilor — Nord',
    category: 'manastiri',
    categoryLabel: 'Mănăstiri',
    duration: '2 zile',
    priceEur: 199,
    priceMdl: 3880,
    rating: 4.7,
    reviewCount: 156,
    shortDescription: 'Un pelerinaj prin cele mai frumoase mănăstiri din nordul Moldovei: Căpriana, Hâncu, Curchi.',
    description: 'Descoperă patrimoniul spiritual al Moldovei într-un tur de două zile prin mănăstirile istorice din nordul țării. De la Căpriana, cea mai veche mănăstire, la Curchi — „Perla Moldovei", fiecare loc spune o poveste de secole.',
    image: '/hero-monastery.jpg',
    gallery: [],
    highlights: ['5 mănăstiri istorice', 'Peisaje naturale unice', 'Prânz monastic', 'Ghid specializat istorie'],
    included: ['Transport', 'Cazare 1 noapte', 'Mese', 'Ghid', 'Intrări'],
    notIncluded: ['Donații personale', 'Suveniruri'],
    itinerary: [
      { day: 1, title: 'Căpriana & Hâncu', description: 'Vizitare mănăstirile Căpriana și Hâncu, plimbare în Codrii Moldovei, cazare.' },
      { day: 2, title: 'Curchi & Japca', description: 'Vizitare mănăstirile Curchi și Japca, prânz monastic, retur Chișinău.' },
    ],
    maxGroup: 15,
    difficulty: 'Ușor',
    region: 'Codru',
  },
  {
    id: '5',
    slug: 'rural-moldova-experience',
    title: 'Moldova Rurală — Viața la Sat',
    category: 'rural',
    categoryLabel: 'Turism Rural',
    duration: '2 zile',
    priceEur: 179,
    priceMdl: 3490,
    rating: 4.8,
    reviewCount: 94,
    shortDescription: 'Trăiește autentic viața la sat: gătit tradițional, meșteșuguri, plimbări cu căruța și nopți sub stele.',
    description: 'O experiență autentică în inima satului moldovenesc. Vei învăța să faci plăcinte cu bunica, vei vedea cum se face brânza proaspătă, vei călări sau te vei plimba cu căruța, și vei adormi sub cerul înstelat al Moldovei rurale.',
    image: '/hero-village.jpg',
    gallery: [],
    highlights: ['Gătit tradițional cu localnicii', 'Plimbare cu căruța', 'Noapte la pensiune rurală', 'Workshop meșteșuguri'],
    included: ['Transport', 'Cazare', 'Toate mesele', 'Activități', 'Ghid'],
    notIncluded: ['Băuturi alcoolice', 'Suveniruri'],
    itinerary: [
      { day: 1, title: 'Sosire & Tradiții', description: 'Sosire la sat, întâlnire cu gazda, atelier de gătit plăcinte, cină tradițională cu muzică live.' },
      { day: 2, title: 'Viața de Zi cu Zi', description: 'Vizitare fermă, fabricare brânză, plimbare cu căruța, prânz la iarbă verde, retur.' },
    ],
    maxGroup: 8,
    difficulty: 'Ușor',
    region: 'Codru',
  },
  {
    id: '6',
    slug: 'soroca-fortress-adventure',
    title: 'Cetatea Soroca & Canionul Duruitoarea',
    category: 'aventura',
    categoryLabel: 'Aventură',
    duration: '1 zi',
    priceEur: 99,
    priceMdl: 1930,
    rating: 4.6,
    reviewCount: 78,
    shortDescription: 'Aventură la Cetatea Soroca din sec. XV și drumeție prin canionul spectaculos Duruitoarea.',
    description: 'Un tur plin de aventură ce combină istoria medievală cu natura sălbatică. Vei vizita Cetatea Soroca, construită în stil genovez în secolul XV, și vei face o drumeție prin canionul Duruitoarea cu cascada sa spectaculoasă.',
    image: '/fortress.jpg',
    gallery: [],
    highlights: ['Cetatea medievală sec. XV', 'Drumeție în canion', 'Cascada Duruitoarea', 'Prânz local'],
    included: ['Transport', 'Ghid', 'Prânz', 'Echipament drumeție'],
    notIncluded: ['Băuturi', 'Cheltuieli personale'],
    itinerary: [
      { day: 1, title: 'Soroca — Istorie & Natură', description: 'Plecare Chișinău, vizitare Cetatea Soroca, drumeție canionul Duruitoarea, prânz tradițional, retur seara.' },
    ],
    maxGroup: 12,
    difficulty: 'Moderat',
    region: 'Soroca',
  },
];

export const destinations = [
  {
    id: 'codru',
    name: 'Codru',
    description: 'Inima verde a Moldovei, cu păduri seculare, mănăstiri istorice și cele mai renumite crame subterane.',
    attractions: ['Cricova', 'Mileștii Mici', 'Orheiul Vechi', 'Căpriana'],
    tourCount: 12,
  },
  {
    id: 'stefan-voda',
    name: 'Ștefan Vodă',
    description: 'Regiunea viticolă de elită a Moldovei, renumită pentru vinurile roșii premium și cramele istorice.',
    attractions: ['Purcari', 'Château Vartely', 'Et Cetera'],
    tourCount: 8,
  },
  {
    id: 'soroca',
    name: 'Soroca',
    description: 'Cetatea medievală, canioane spectaculoase și tradiții ancestrale în nordul Moldovei.',
    attractions: ['Cetatea Soroca', 'Canionul Duruitoarea', 'Lumânarea Recunoștinței'],
    tourCount: 5,
  },
  {
    id: 'bugeac',
    name: 'Bugeac',
    description: 'Stepele sudice cu lacuri sălbatice, podgorii și influențe turcești și găgăuze.',
    attractions: ['Comrat', 'Lacul Beleu', 'Vinăriile sudice'],
    tourCount: 4,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Marie Dupont',
    country: 'Franța',
    text: 'O experiență incredibilă! Beciurile de la Cricova m-au lăsat fără cuvinte. Ghidul nostru a fost excepțional și vinul — magnific. Recomand cu căldură!',
    rating: 5,
    tour: 'Cricova & Mileștii Mici',
  },
  {
    id: '2',
    name: 'Thomas Müller',
    country: 'Germania',
    text: 'Am vizitat Moldova pentru prima dată și m-am îndrăgostit. Orheiul Vechi este un loc magic, iar mâncarea tradițională — delicioasă. Top Tour a organizat totul impecabil.',
    rating: 5,
    tour: 'Orheiul Vechi',
  },
  {
    id: '3',
    name: 'Elena Popescu',
    country: 'România',
    text: 'Turul rural a fost cea mai frumoasă experiență de vacanță. Plăcintele bunicii, plimbarea cu căruța, noaptea sub stele — pur și simplu magic!',
    rating: 5,
    tour: 'Moldova Rurală',
  },
];

export const blogPosts = [
  {
    id: '1',
    slug: 'top-10-vinuri-moldovenesti',
    title: 'Top 10 Vinuri Moldovenești pe Care Trebuie Să Le Încerci',
    excerpt: 'De la Negru de Purcari la Feteasca Neagră, descoperă vinurile care au pus Moldova pe harta mondială a viticulturii.',
    date: '2026-01-15',
    readTime: '7 min',
    category: 'Vinuri',
  },
  {
    id: '2',
    slug: 'ghid-orheiul-vechi',
    title: 'Ghid Complet: Orheiul Vechi — Ce Trebuie Să Știi',
    excerpt: 'Tot ce trebuie să știi înainte de a vizita cel mai spectaculos complex cultural și natural din Moldova.',
    date: '2026-01-08',
    readTime: '10 min',
    category: 'Ghid de Călătorie',
  },
  {
    id: '3',
    slug: 'bucataria-moldoveneasca',
    title: 'Bucătăria Moldovenească: 5 Preparate Tradiționale',
    excerpt: 'Plăcinte, mămăligă, sarmale și multe altele — un ghid culinar al celor mai delicioase preparate tradiționale.',
    date: '2025-12-20',
    readTime: '5 min',
    category: 'Gastronomie',
  },
];
