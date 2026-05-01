'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import { Sprout, Flame, Globe, Award } from 'lucide-react'

/**
 * Why Choose Us section with feature highlights
 */
export function WhyChooseUs() {
  const features = [
    {
      icon: Sprout,
      title: 'Sustainably Sourced',
      description: 'We partner directly with farms practicing regenerative agriculture and environmental stewardship.'
    },
    {
      icon: Flame,
      title: 'Freshly Roasted',
      description: 'Small-batch roasting ensures optimal flavor. Roasted to order for maximum freshness and quality.'
    },
    {
      icon: Globe,
      title: 'Single Origin Focus',
      description: 'Curated selections from the world\'s finest coffee regions, each with its unique character.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by coffee enthusiasts and professionals for exceptional quality and flavor profiles.'
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our commitment to quality, sustainability, and customer satisfaction drives everything we do.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-serif font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
