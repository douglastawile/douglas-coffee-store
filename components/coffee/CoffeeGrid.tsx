'use client'

import { Coffee } from '@/types'
import { CoffeeCard } from '@/components/coffee/CoffeeCard'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

interface CoffeeGridProps {
  coffees: Coffee[]
}

/**
 * Grid display of coffee cards with add to cart functionality
 */
export function CoffeeGrid({ coffees }: CoffeeGridProps) {
  const { addItem } = useCart()

  const handleAddToCart = (coffee: Coffee) => {
    addItem(coffee, 1)
    toast.success(`${coffee.name} added to cart!`)
  }

  if (coffees.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-foreground/70">No coffees found. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {coffees.map((coffee) => (
        <motion.div
          key={coffee.id}
          variants={itemVariants}
        >
          <CoffeeCard
            coffee={coffee}
            onAddToCart={() => handleAddToCart(coffee)}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
