'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CoffeeFilter } from '@/components/coffee/CoffeeFilter'
import { CoffeeGrid } from '@/components/coffee/CoffeeGrid'
import { coffees, searchCoffees } from '@/data/coffees'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

/**
 * Coffee listing page with filters and search
 */
export default function CoffeesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedRoast, setSelectedRoast] = useState('')

  const filteredCoffees = useMemo(() => {
    let results = searchQuery ? searchCoffees(searchQuery) : coffees

    if (selectedCategory) {
      results = results.filter(coffee => coffee.category === selectedCategory)
    }

    if (selectedRoast) {
      results = results.filter(coffee => coffee.roastLevel === selectedRoast)
    }

    return results
  }, [searchQuery, selectedCategory, selectedRoast])

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setSelectedRoast('')
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Our Coffee Collection
              </h1>
              <p className="text-lg text-foreground/70">
                Browse our curated selection of premium specialty coffees from around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search coffees by name or flavor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </motion.div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar filters */}
              <aside className="lg:col-span-1">
                <CoffeeFilter
                  selectedCategory={selectedCategory}
                  selectedRoast={selectedRoast}
                  onCategoryChange={setSelectedCategory}
                  onRoastChange={setSelectedRoast}
                  onClear={handleClearFilters}
                />
              </aside>

              {/* Coffee grid */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6"
                >
                  <p className="text-foreground/70">
                    Showing <span className="font-semibold">{filteredCoffees.length}</span> coffee
                    {filteredCoffees.length !== 1 ? 's' : ''}
                  </p>
                </motion.div>

                <CoffeeGrid coffees={filteredCoffees} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
