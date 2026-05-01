'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CoffeeQuiz } from '@/components/features/CoffeeQuiz'
import { Sparkles } from 'lucide-react'

/**
 * Section to prompt users to take the coffee quiz
 */
export function FindYourCoffeeSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Not Sure Which Coffee Is Right for You?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Take our personalized coffee quiz and we&apos;ll help you discover your perfect match.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQuizOpen(true)}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Find Your Coffee
            </motion.button>
          </motion.div>
        </div>
      </section>

      <CoffeeQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  )
}
