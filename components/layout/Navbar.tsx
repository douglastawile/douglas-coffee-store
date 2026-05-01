'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useCart } from '@/context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ShoppingCart, Home, Coffee, BookOpen, Info, Phone, Heart, ClipboardList, Droplets } from 'lucide-react'
import { slideInLeftVariants, buttonTapVariants, pulseVariants } from '@/lib/animation-variants'

/**
 * Navigation bar component with dark mode toggle, cart badge, and mobile menu
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { getItemCount } = useCart()
  const itemCount = getItemCount()

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/coffees', label: 'Coffees', icon: Coffee },
    { href: '/menu', label: 'Menu', icon: BookOpen },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Phone },
    { href: '/brew-guide', label: 'Brew Guide', icon: Droplets },
    { href: '/favorites', label: 'Favorites', icon: Heart },
    { href: '/orders', label: 'My Orders', icon: ClipboardList },
  ]

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' }
    }),
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              ☕ Douglas
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.slice(0, 5).map(item => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <motion.button
              variants={buttonTapVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Cart link */}
            <Link href="/cart">
              <motion.button
                variants={buttonTapVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="p-2 rounded-lg hover:bg-muted transition-colors relative"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <motion.span
                    variants={pulseVariants}
                    animate="pulse"
                    className="absolute top-1 right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {itemCount > 9 ? '9+' : itemCount}
                  </motion.span>
                )}
              </motion.button>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              variants={buttonTapVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-2 px-3 py-2 rounded-lg text-foreground/80 hover:bg-muted hover:text-coffee-500 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-coffee-500 transition-colors shrink-0" />
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
