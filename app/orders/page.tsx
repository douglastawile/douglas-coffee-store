'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useOrderHistory } from '@/hooks/useOrderHistory'
import { motion } from 'framer-motion'
import { PackageCheck, Clock, Coffee, ChevronDown } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import type { Metadata } from 'next'

export default function OrdersPage() {
  const { orders } = useOrderHistory()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (orders.length === 0) {
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
              <PackageCheck className="w-20 h-20 text-foreground/30 mx-auto" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-serif font-bold mb-4"
            >
              No Orders Yet
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-8"
            >
              Start exploring our collection and place your first order.
            </motion.p>
            <motion.div
              variants={itemVariants}
            >
              <a href="/coffees">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Shop Coffees
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-serif font-bold mb-2">My Orders</h1>
            <p className="text-foreground/70 mb-8">
              {orders.length} order{orders.length !== 1 ? 's' : ''} in your history
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {orders.map((order, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Order Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                          {formatDate(order.date)}
                        </span>
                      </div>
                      <p className="text-lg font-serif font-bold">{order.id}</p>
                    </div>
                    <span className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold capitalize">
                      {order.status}
                    </span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    GHC {(order.total * 25).toFixed(2)}
                  </p>
                </div>

                {/* Order Items */}
                <div className="p-6 bg-card/50">
                  <div className="space-y-3">
                    {order.items.map((item, j) => (
                      <div key={j} className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0">
                        <div className="flex items-center gap-3">
                          <Coffee className="w-4 h-4 text-primary shrink-0" />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-foreground/60">{item.origin}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {item.quantity}x GHC {(item.price * 25).toFixed(2)}
                          </p>
                          <p className="text-sm text-foreground/60">
                            GHC {((item.quantity * item.price) * 25).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Footer */}
                <div className="px-6 py-4 bg-muted/30">
                  <a href="/coffees" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                    <Coffee className="w-4 h-4" />
                    Reorder Items
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
