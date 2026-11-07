export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  category: 'Heritage' | 'Nature' | 'Wildlife' | 'Adventure';
  highlights: string[];
}

export const packages: TourPackage[] = [
  {
    id: '1',
    slug: 'mysore-palace-heritage-trail',
    title: 'Mysore Palace & Heritage Trail',
    description: 'Immerse yourself in the royal history of Mysore. Visit the majestic Mysore Palace, Chamundi Hills, and the historic Srirangapatna.',
    image: '/assets/images/tour_mysore_palace_v2_1794081075364.jpg',
    duration: '2 Days, 1 Night',
    price: '₹8,500 per person',
    category: 'Heritage',
    highlights: ['Mysore Palace Lighting', 'Chamundi Hills Temple', 'Brindavan Gardens'],
  },
  {
    id: '2',
    slug: 'kabini-wildlife-expedition',
    title: 'Kabini Wildlife Expedition',
    description: 'A deep dive into the wilderness of Nagarhole National Park. Spot the elusive Black Panther and majestic herds of elephants.',
    image: '/assets/images/tour_kabini_wildlife_v2_1794081075798.jpg',
    duration: '3 Days, 2 Nights',
    price: '₹18,200 per person',
    category: 'Wildlife',
    highlights: ['Boat Safari', 'Jeep Safari', 'Luxury Jungle Lodge'],
  },
  {
    id: '3',
    slug: 'coorg-coffee-estates-retreat',
    title: 'Coorg Coffee Estates Retreat',
    description: 'Escape to the Scotland of India. Walk through aromatic coffee plantations and witness the stunning Abbey Falls.',
    image: '/assets/images/tour_coorg_coffee_v2_1794081075372.jpg',
    duration: '3 Days, 2 Nights',
    price: '₹12,400 per person',
    category: 'Nature',
    highlights: ['Coffee Plantation Walk', 'Abbey Falls', 'Mandalpatti Sunrise'],
  },
  {
    id: '4',
    slug: 'hampi-boulder-ruins',
    title: 'Hampi Boulder Ruins',
    description: 'Explore the ruins of the Vijayanagara Empire. A UNESCO World Heritage site known for its stunning architecture and boulder landscapes.',
    image: '/assets/images/tour_hampi_ruins_v2_1794081075656.jpg',
    duration: '3 Days, 2 Nights',
    price: '₹10,800 per person',
    category: 'Heritage',
    highlights: ['Virupaksha Temple', 'Vitthala Temple Complex', 'Sunset at Hemakuta Hill'],
  },
];
