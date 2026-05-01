'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useFavorites } from '@/hooks/useFavorites'
import { coffees } from '@/data/coffees'
import { CoffeeCard } from '@/components/coffee/CoffeeCard'
import { useCart } from '@/context/CartContext'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import { toast } from 'sonner'

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites()
  const { addItem } = useCart()
  
  const favoriteCoffees = coffees.filter(coffee => favoriteIds && favoriteIds.includes(coffee.id))

  const handleAddToCart = (coffee: any) => {
    addItem(coffee, 1)
    toast.success(`${coffee.name} added to cart!`)
  }

  if (favoriteCoffees.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center py-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <Heart className="w-20 h-20 text-foreground/30 mx-auto" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-serif font-bold mb-4"
            >
              No Favorites Yet
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-8"
            >
              Add your favorite coffees to easily find them later.
            </motion.p>
            <motion.div
              variants={itemVariants}
            >
              <a href="/coffees">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Explore Coffees
                </button>
              </a>
            </motion.div>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-primary fill-current" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                My Favorites
              </h1>
            </div>
            <p className="text-lg text-foreground/70">
              {favoriteCoffees.length} coffee{favoriteCoffees.length !== 1 ? 's' : ''} saved
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {favoriteCoffees.map((coffee) => (
                <motion.div key={coffee.id} variants={itemVariants}>
                  <CoffeeCard
                    coffee={coffee}
                    onAddToCart={() => handleAddToCart(coffee)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
