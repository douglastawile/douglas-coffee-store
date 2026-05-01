/**
 * Coffee product type definition
 */
export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'single-origin' | 'blend' | 'espresso' | 'flavored'
  roastLevel: 'light' | 'medium' | 'dark'
  origin: string
  flavor: string[]
  rating: number
  reviews: number
  inStock: boolean
}

/**
 * Cart item with quantity
 */
export interface CartItem extends Coffee {
  quantity: number
}

/**
 * Order history record
 */
export interface Order {
  id: string
  items: CartItem[]
  total: number
  date: string
  status: 'pending' | 'completed' | 'cancelled'
}

/**
 * User favorites/wishlist
 */
export interface Favorite {
  coffeeId: string
  addedAt: string
}

/**
 * Loyalty program
 */
export interface LoyaltyPoints {
  totalPoints: number
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  orderCount: number
}
