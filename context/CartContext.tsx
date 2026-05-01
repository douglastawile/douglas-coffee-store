'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { CartItem, Coffee } from '@/types'

interface CartContextType {
  items: CartItem[]
  addItem: (coffee: Coffee, quantity: number) => void
  removeItem: (coffeeId: string) => void
  updateQuantity: (coffeeId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'douglas-cart'

/**
 * CartProvider component that wraps the application
 * Manages cart state with localStorage persistence
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        try {
          setItems(JSON.parse(savedCart))
        } catch (error) {
          console.error('Failed to parse cart from localStorage:', error)
        }
      }
      setIsHydrated(true)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, isHydrated])

  const addItem = (coffee: Coffee, quantity: number) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === coffee.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevItems, { ...coffee, quantity }]
    })
  }

  const removeItem = (coffeeId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== coffeeId))
  }

  const updateQuantity = (coffeeId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(coffeeId)
      return
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === coffeeId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0)
  }

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

/**
 * Hook to use the cart context
 */
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
