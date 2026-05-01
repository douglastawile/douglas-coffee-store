import { Coffee } from '@/types'

export const coffees: Coffee[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright, floral single-origin from the birthplace of coffee. Notes of blueberry and jasmine with a clean finish.',
    price: 16.99,
    image: '/images/coffee-1.jpg',
    category: 'single-origin',
    roastLevel: 'light',
    origin: 'Ethiopia',
    flavor: ['floral', 'berry', 'tea-like'],
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: '2',
    name: 'Colombian Geisha',
    description: 'Premium single-origin known for its exceptional complexity. Tropical fruit, jasmine, and citrus notes.',
    price: 24.99,
    image: '/images/coffee-2.jpg',
    category: 'single-origin',
    roastLevel: 'light',
    origin: 'Colombia',
    flavor: ['tropical', 'jasmine', 'citrus'],
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: '3',
    name: 'Sumatra Mandheling',
    description: 'Full-bodied, earthy single-origin with a rich chocolate undertone. Perfect for espresso or French press.',
    price: 14.99,
    image: '/images/coffee-3.jpg',
    category: 'single-origin',
    roastLevel: 'dark',
    origin: 'Indonesia',
    flavor: ['earthy', 'chocolate', 'tobacco'],
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    id: '4',
    name: 'Brazilian Santos',
    description: 'Smooth and balanced blend from Brazil. Notes of nut, chocolate, and subtle spice.',
    price: 12.99,
    image: '/images/coffee-4.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Brazil',
    flavor: ['nutty', 'chocolate', 'spice'],
    rating: 4.5,
    reviews: 312,
    inStock: true
  },
  {
    id: '5',
    name: 'Kenya AA',
    description: 'High-grade single-origin with vibrant acidity. Blackcurrant, berry, and wine-like complexity.',
    price: 17.99,
    image: '/images/coffee-5.jpg',
    category: 'single-origin',
    roastLevel: 'light',
    origin: 'Kenya',
    flavor: ['berry', 'wine', 'blackcurrant'],
    rating: 4.7,
    reviews: 143,
    inStock: true
  },
  {
    id: '6',
    name: 'Douglas Blend Premium',
    description: 'Our signature blend combining single-origins for the perfect balance of flavor and body.',
    price: 13.99,
    image: '/images/coffee-6.jpg',
    category: 'blend',
    roastLevel: 'medium',
    origin: 'Multi-Region',
    flavor: ['balanced', 'smooth', 'chocolatey'],
    rating: 4.8,
    reviews: 421,
    inStock: true
  },
  {
    id: '7',
    name: 'Dark Roast Espresso',
    description: 'Bold, concentrated espresso blend with low acidity. Rich crema and full-bodied shot.',
    price: 14.99,
    image: '/images/coffee-7.jpg',
    category: 'espresso',
    roastLevel: 'dark',
    origin: 'Multi-Region',
    flavor: ['bold', 'cocoa', 'dark chocolate'],
    rating: 4.6,
    reviews: 278,
    inStock: true
  },
  {
    id: '8',
    name: 'Vanilla Hazelnut',
    description: 'Smooth blend with natural vanilla and hazelnut flavoring. Creamy and aromatic.',
    price: 13.99,
    image: '/images/coffee-8.jpg',
    category: 'flavored',
    roastLevel: 'medium',
    origin: 'Multi-Region',
    flavor: ['vanilla', 'hazelnut', 'creamy'],
    rating: 4.4,
    reviews: 167,
    inStock: true
  },
  {
    id: '9',
    name: 'Mocha Java Blend',
    description: 'Classic blend of Sumatra and Yemen coffees. Complex flavor with cocoa and spice.',
    price: 15.99,
    image: '/images/coffee-9.jpg',
    category: 'blend',
    roastLevel: 'dark',
    origin: 'Indonesia/Yemen',
    flavor: ['cocoa', 'spice', 'complex'],
    rating: 4.7,
    reviews: 198,
    inStock: true
  },
  {
    id: '10',
    name: 'Tanzanian Peaberry',
    description: 'Unique single-origin with wine and berry notes. Bright acidity with balanced sweetness.',
    price: 18.99,
    image: '/images/coffee-10.jpg',
    category: 'single-origin',
    roastLevel: 'light',
    origin: 'Tanzania',
    flavor: ['wine', 'berry', 'sweet'],
    rating: 4.8,
    reviews: 112,
    inStock: true
  },
  {
    id: '11',
    name: 'Guatemalan Huehuetenango',
    description: 'High-altitude single-origin with jasmine and chocolate notes. Smooth and sweet.',
    price: 16.99,
    image: '/images/coffee-11.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Guatemala',
    flavor: ['jasmine', 'chocolate', 'sweet'],
    rating: 4.6,
    reviews: 134,
    inStock: true
  },
  {
    id: '12',
    name: 'Ethiopian Natural Process',
    description: 'Full-bodied with intense berry and wine notes. Funky, complex single-origin.',
    price: 17.99,
    image: '/images/coffee-12.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Ethiopia',
    flavor: ['berry', 'wine', 'funky'],
    rating: 4.9,
    reviews: 89,
    inStock: true
  },
  {
    id: '13',
    name: 'Costa Rican Tarrazú',
    description: 'Rich single-origin with chocolate, blackberry, and subtle spice. Full-bodied and balanced.',
    price: 15.99,
    image: '/images/coffee-13.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Costa Rica',
    flavor: ['chocolate', 'blackberry', 'spice'],
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: '14',
    name: 'Madagascar Sambava',
    description: 'Distinctive single-origin with cocoa and berry notes. Medium body with good balance.',
    price: 16.99,
    image: '/images/coffee-14.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Madagascar',
    flavor: ['cocoa', 'berry', 'balanced'],
    rating: 4.5,
    reviews: 98,
    inStock: true
  },
  {
    id: '15',
    name: 'Decaf Single-Origin',
    description: 'Premium decaffeinated with all the flavor. Swiss water process, smooth and clean.',
    price: 14.99,
    image: '/images/coffee-15.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Colombia',
    flavor: ['smooth', 'balanced', 'clean'],
    rating: 4.4,
    reviews: 76,
    inStock: true
  },
  {
    id: '16',
    name: 'Italian Roast Espresso',
    description: 'Dark, oily espresso blend with low acidity. Perfect for milk-based drinks.',
    price: 14.99,
    image: '/images/coffee-16.jpg',
    category: 'espresso',
    roastLevel: 'dark',
    origin: 'Multi-Region',
    flavor: ['bold', 'smoky', 'chocolatey'],
    rating: 4.6,
    reviews: 234,
    inStock: true
  },
  {
    id: '17',
    name: 'Caramel Macchiato Blend',
    description: 'Smooth blend with notes of caramel and vanilla. Great for lattes and cappuccinos.',
    price: 13.99,
    image: '/images/coffee-17.jpg',
    category: 'flavored',
    roastLevel: 'medium',
    origin: 'Multi-Region',
    flavor: ['caramel', 'vanilla', 'smooth'],
    rating: 4.5,
    reviews: 156,
    inStock: true
  },
  {
    id: '18',
    name: 'Rwanda Burundian Blend',
    description: 'Unique blend with floral and berry notes. Clean, bright, and complex.',
    price: 16.99,
    image: '/images/coffee-18.jpg',
    category: 'blend',
    roastLevel: 'light',
    origin: 'Rwanda/Burundi',
    flavor: ['floral', 'berry', 'bright'],
    rating: 4.7,
    reviews: 102,
    inStock: true
  },
  {
    id: '19',
    name: 'Venezuelan Cacao',
    description: 'Premium single-origin with natural cacao flavor. Rich, complex, and smooth.',
    price: 19.99,
    image: '/images/coffee-19.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Venezuela',
    flavor: ['cacao', 'rich', 'smooth'],
    rating: 4.8,
    reviews: 67,
    inStock: true
  },
  {
    id: '20',
    name: 'Papua New Guinea',
    description: 'Earthy single-origin with herbal and spice notes. Medium body and unique character.',
    price: 15.99,
    image: '/images/coffee-20.jpg',
    category: 'single-origin',
    roastLevel: 'medium',
    origin: 'Papua New Guinea',
    flavor: ['earthy', 'herbal', 'spicy'],
    rating: 4.6,
    reviews: 81,
    inStock: true
  }
]

/**
 * Get a single coffee by ID
 */
export function getCoffeeById(id: string): Coffee | undefined {
  return coffees.find(coffee => coffee.id === id)
}

/**
 * Get coffees by category
 */
export function getCoffeesByCategory(category: string): Coffee[] {
  return coffees.filter(coffee => coffee.category === category)
}

/**
 * Search coffees by name or description
 */
export function searchCoffees(query: string): Coffee[] {
  const lowerQuery = query.toLowerCase()
  return coffees.filter(coffee =>
    coffee.name.toLowerCase().includes(lowerQuery) ||
    coffee.description.toLowerCase().includes(lowerQuery) ||
    coffee.flavor.some(f => f.toLowerCase().includes(lowerQuery))
  )
}

/**
 * Coffee of the Month - featured coffee for hero section
 */
export const coffeeOfTheMonth = coffees[0] // Ethiopian Yirgacheffe
