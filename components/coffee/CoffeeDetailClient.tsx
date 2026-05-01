'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, ArrowLeft, Flame, MapPin, Tag, AlertCircle } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/hooks/useFavorites'
import { Coffee } from '@/types'
import { toast } from 'sonner'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const buttonTapVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

interface CoffeeDetailClientProps {
  coffee: Coffee
}

export function CoffeeDetailClient({ coffee }: CoffeeDetailClientProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [isLoading, setIsLoading] = useState(false)

  const isItemFavorite = isFavorite(coffee.id)

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      addItem(coffee, quantity)
      toast.success(`Added ${quantity} x ${coffee.name} to cart`)
      setQuantity(1)
    } catch (error) {
      toast.error('Failed to add to cart')
    } finally {
      setIsLoading(false)
    }
  }

  const handleToggleFavorite = () => {
    toggleFavorite(coffee.id)
    toast.success(isItemFavorite ? 'Removed from favorites' : 'Added to favorites')
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 flex items-center gap-2"
      >
        <Link
          href="/coffees"
          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          Back to Coffees
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Image */}
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-card border border-border">
            <Image
              src={coffee.image}
              alt={coffee.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Details */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Category */}
          <motion.span
            variants={itemVariants}
            className="inline-block w-fit px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold flex items-center gap-2"
          >
            <Tag className="w-4 h-4" />
            {coffee.category.replace('-', ' ').charAt(0).toUpperCase() + coffee.category.replace('-', ' ').slice(1)}
          </motion.span>

          {/* Name */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{coffee.name}</h1>
            <p className="text-lg text-foreground/70">{coffee.description}</p>
          </div>

          {/* Rating */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(coffee.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{coffee.rating.toFixed(1)}</span>
              <span className="text-foreground/60">({coffee.reviews} reviews)</span>
            </div>
          </motion.div>

          {/* Origin & Roast */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-sm font-semibold text-foreground/70">Origin</p>
              </div>
              <p className="font-semibold">{coffee.origin}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-primary" />
                <p className="text-sm font-semibold text-foreground/70">Roast Level</p>
              </div>
              <p className="font-semibold capitalize">{coffee.roastLevel}</p>
            </div>
          </motion.div>

          {/* Flavor Profile */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-3">Flavor Profile</h3>
            <div className="flex flex-wrap gap-2">
              {coffee.flavor.map((flavor) => (
                <span
                  key={flavor}
                  className="px-3 py-1 bg-secondary/20 text-foreground rounded-full text-sm"
                >
                  {flavor.charAt(0).toUpperCase() + flavor.slice(1)}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stock Status */}
          <motion.div variants={itemVariants}>
            {!coffee.inStock && (
              <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">Currently out of stock</span>
              </div>
            )}
          </motion.div>

          {/* Price & Actions */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-border space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-serif font-bold text-primary">
                GHC {(coffee.price * 23.5).toFixed(2)}
              </span>
              <span className="text-sm text-foreground/60">Ghana Cedis</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center gap-3 border border-border rounded-lg px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-xl hover:text-primary transition-colors"
                  disabled={!coffee.inStock}
                >
                  −
                </button>
                <span className="font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-xl hover:text-primary transition-colors"
                  disabled={!coffee.inStock}
                >
                  +
                </button>
              </div>

              {/* Favorite Button */}
              <motion.button
                variants={buttonTapVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={handleToggleFavorite}
                className="p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label={isItemFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart
                  className={`w-6 h-6 ${
                    isItemFavorite ? 'fill-red-500 text-red-500' : 'text-foreground'
                  }`}
                />
              </motion.button>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              variants={buttonTapVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={handleAddToCart}
              disabled={!coffee.inStock || isLoading}
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-5 h-5" />
              {isLoading ? 'Adding...' : 'Add to Cart'}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
