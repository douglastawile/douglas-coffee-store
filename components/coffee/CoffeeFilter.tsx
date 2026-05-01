'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface CoffeeFilterProps {
  selectedCategory: string
  selectedRoast: string
  onCategoryChange: (category: string) => void
  onRoastChange: (roast: string) => void
  onClear: () => void
}

/**
 * Filter component for coffee listing page
 */
export function CoffeeFilter({
  selectedCategory,
  selectedRoast,
  onCategoryChange,
  onRoastChange,
  onClear
}: CoffeeFilterProps) {
  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'single-origin', label: 'Single Origin' },
    { value: 'blend', label: 'Blends' },
    { value: 'espresso', label: 'Espresso' },
    { value: 'flavored', label: 'Flavored' }
  ]

  const roasts = [
    { value: '', label: 'All Roasts' },
    { value: 'light', label: 'Light Roast' },
    { value: 'medium', label: 'Medium Roast' },
    { value: 'dark', label: 'Dark Roast' }
  ]

  const hasActiveFilters = selectedCategory !== '' || selectedRoast !== ''

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card p-6 rounded-lg border border-border"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        {hasActiveFilters && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClear}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear All
          </motion.button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category filter */}
        <div>
          <label className="block text-sm font-semibold mb-3">Category</label>
          <div className="space-y-2">
            {categories.map(cat => (
              <motion.label
                key={cat.value}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="category"
                  value={cat.value}
                  checked={selectedCategory === cat.value}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-4 h-4 rounded cursor-pointer accent-primary"
                />
                <span className="text-sm group-hover:text-primary transition-colors">
                  {cat.label}
                </span>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Roast level filter */}
        <div>
          <label className="block text-sm font-semibold mb-3">Roast Level</label>
          <div className="space-y-2">
            {roasts.map(roast => (
              <motion.label
                key={roast.value}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="roast"
                  value={roast.value}
                  checked={selectedRoast === roast.value}
                  onChange={(e) => onRoastChange(e.target.value)}
                  className="w-4 h-4 rounded cursor-pointer accent-primary"
                />
                <span className="text-sm group-hover:text-primary transition-colors">
                  {roast.label}
                </span>
              </motion.label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
