'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'

/**
 * Newsletter signup banner with email input
 */
export function NewsletterBanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Mail className="w-12 h-12 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-foreground/70 mb-8">
            Get exclusive offers, brewing tips, and new arrivals delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </motion.button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 flex items-center justify-center gap-2 text-primary"
            >
              <Check className="w-5 h-5" />
              <span className="font-medium">Thanks for subscribing!</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
