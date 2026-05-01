'use client'

import { coffees } from '@/data/coffees'
import { CoffeeCard } from '@/components/coffee/CoffeeCard'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Featured coffees section with staggered item animations
 */
export function FeaturedCoffees() {
  const featured = coffees.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Highlighted Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured This Week
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Handpicked selections from our premium collection. Limited availability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featured.map((coffee) => (
            <motion.div
              key={coffee.id}
              variants={itemVariants}
            >
              <CoffeeCard coffee={coffee} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link href="/coffees">
            <button className="px-8 py-3 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors flex items-center gap-2">
              View All Coffee
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
