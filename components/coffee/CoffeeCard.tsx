'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Coffee } from '@/types'
import { motion } from 'framer-motion'
import { cardHoverVariants } from '@/lib/animation-variants'
import { Heart, Star, MapPin, Flame, ShoppingCart, Eye } from 'lucide-react'
import { useFavorites } from '@/hooks/useFavorites'

interface CoffeeCardProps {
  coffee: Coffee
  onAddToCart?: () => void
}

/**
 * Coffee card component with hover animations and favorite toggle
 */
export function CoffeeCard({ coffee, onAddToCart }: CoffeeCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(coffee.id)

  return (
    <Link href={`/coffees/${coffee.id}`}>
      <motion.div
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        className="group cursor-pointer h-full"
      >
        <div className="bg-card rounded-lg overflow-hidden border border-border transition-all duration-300">
          {/* Image container */}
          <div className="relative h-64 bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
            </div>
            <Image
              src={coffee.image}
              alt={coffee.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Badge */}
            <div className="absolute top-3 right-3">
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  toggleFavorite(coffee.id)
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-background/80 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart
                  className={`w-5 h-5 ${favorite ? 'fill-current text-primary' : ''}`}
                />
              </motion.button>
            </div>

            {/* Stock indicator */}
            {!coffee.inStock && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-semibold">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Category badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded capitalize">
                {coffee.category.replace('-', ' ')}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-foreground/60">
                <Flame className="w-3 h-3" />
                {coffee.roastLevel.charAt(0).toUpperCase() + coffee.roastLevel.slice(1)} Roast
              </span>
            </div>

            {/* Name */}
            <h3 className="font-serif font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
              {coffee.name}
            </h3>

            {/* Origin */}
            <p className="flex items-center gap-1 text-sm text-foreground/60 mb-2">
              <MapPin className="w-3 h-3 shrink-0" />
              {coffee.origin}
            </p>

            {/* Flavor tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {coffee.flavor.slice(0, 2).map((flavor) => (
                <span
                  key={flavor}
                  className="text-xs px-2 py-1 bg-secondary/30 text-foreground/70 rounded"
                >
                  {flavor}
                </span>
              ))}
              {coffee.flavor.length > 2 && (
                <span className="text-xs px-2 py-1 text-foreground/60">
                  +{coffee.flavor.length - 2}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(coffee.rating)
                        ? 'fill-primary text-primary'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{coffee.rating.toFixed(1)}</span>
              <span className="text-sm text-foreground/60">({coffee.reviews} reviews)</span>
            </div>

            {/* Price and button */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-serif font-bold text-primary">
                GHC {(coffee.price * 25).toFixed(2)}
              </span>
              <motion.button
                onClick={(e) => {
                  e.preventDefault()
                  onAddToCart?.()
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!coffee.inStock}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
