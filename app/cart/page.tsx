'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useCart } from '@/context/CartContext'
import { useOrderHistory } from '@/hooks/useOrderHistory'
import { motion, AnimatePresence } from 'framer-motion'
import { containerVariants, itemVariants, buttonTapVariants, listItemVariants } from '@/lib/animation-variants'
import { Trash2, ArrowLeft, ShoppingCart, Check, Plus, Minus, ArrowRight, PackageCheck } from 'lucide-react'
import { toast } from 'sonner'

/**
 * Shopping cart page with items, totals, and checkout
 */
export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCart()
  const { addOrder } = useOrderHistory()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = getTotal()
  const tax = subtotal * 0.08
  const shipping = subtotal > 50 ? 0 : 10
  const total = subtotal + tax + shipping

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Cart is empty')
      return
    }

    setIsCheckingOut(true)

    // Simulate checkout delay
    setTimeout(() => {
      const order = {
        id: `ORD-${Date.now()}`,
        items: [...items],
        total,
        date: new Date().toISOString(),
        status: 'completed' as const,
      }

      addOrder(order)
      clearCart()
      setIsCheckingOut(false)

      toast.success('Order placed successfully!')

      // Show confirmation modal
      setTimeout(() => {
        // You could show a modal here or redirect
        window.location.hash = '#thank-you'
      }, 500)
    }, 1500)
  }

  if (items.length === 0) {
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
              <ShoppingCart className="w-20 h-20 text-foreground/30 mx-auto" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-serif font-bold mb-4"
            >
              Your cart is empty
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-8"
            >
              Explore our collection and add your favorite coffees.
            </motion.p>
            <motion.div
              variants={itemVariants}
            >
              <Link href="/coffees">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  Continue Shopping
                </button>
              </Link>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-serif font-bold mb-2">Shopping Cart</h1>
            <p className="text-foreground/70 mb-8">
              {items.length} item{items.length !== 1 ? 's' : ''} in your cart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={listItemVariants}
                      layout
                      className="bg-card rounded-lg border border-border p-6 flex gap-6"
                    >
                      {/* Product image */}
                      <div className="flex-shrink-0 w-24 h-24 bg-muted rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product info */}
                      <div className="flex-1 min-w-0">
                        <Link href={`/coffees/${item.id}`}>
                          <h3 className="font-serif font-bold text-lg hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-foreground/60">{item.origin}</p>
                        <p className="text-primary font-semibold mt-2">
                          GHC {(item.price * 25).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 border border-border rounded-lg px-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="py-2 hover:text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold min-w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="py-2 hover:text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Subtotal & Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            removeItem(item.id)
                            toast.success('Item removed from cart')
                          }}
                          className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                        <span className="font-semibold">
                          GHC {((item.price * item.quantity) * 25).toFixed(2)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Order summary */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="bg-card rounded-lg border border-border p-6 h-fit sticky top-20"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <motion.div
                  variants={itemVariants}
                  className="flex justify-between"
                >
                  <span className="text-foreground/70">Subtotal</span>
                  <span>GHC {(subtotal * 25).toFixed(2)}</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex justify-between"
                >
                  <span className="text-foreground/70">Tax (8%)</span>
                  <span>GHC {(tax * 25).toFixed(2)}</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex justify-between"
                >
                  <span className="text-foreground/70">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-primary font-semibold">FREE</span>
                  ) : (
                    <span>GHC {(shipping * 25).toFixed(2)}</span>
                  )}
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex justify-between mb-6 pb-6 border-b border-border"
              >
                <span className="font-semibold">Total</span>
                <span className="text-3xl font-serif font-bold text-primary">
                  GHC {(total * 25).toFixed(2)}
                </span>
              </motion.div>

              {subtotal < 50 && (
                <motion.p
                  variants={itemVariants}
                  className="text-sm text-foreground/60 mb-6"
                >
                  Free shipping on orders over GHC 1,250
                </motion.p>
              )}

              <motion.button
                variants={buttonTapVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    <PackageCheck className="w-5 h-5" />
                    Place Order
                  </>
                )}
              </motion.button>

              <Link href="/coffees">
                <button className="w-full mt-3 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Continue Shopping
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
