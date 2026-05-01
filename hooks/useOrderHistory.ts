'use client'

import { useEffect, useState } from 'react'
import { Order } from '@/types'

const ORDERS_STORAGE_KEY = 'douglas-orders'

/**
 * Hook to manage order history with localStorage persistence
 */
export function useOrderHistory() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Load orders from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY)
      if (savedOrders) {
        try {
          setOrders(JSON.parse(savedOrders))
        } catch (error) {
          console.error('Failed to parse orders from localStorage:', error)
        }
      }
      setIsHydrated(true)
    }
  }, [])

  // Save orders to localStorage whenever they change
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
    }
  }, [orders, isHydrated])

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev])
  }

  const cancelOrder = (orderId: string) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: 'cancelled' } : order
      )
    )
  }

  const completeOrder = (orderId: string) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: 'completed' } : order
      )
    )
  }

  return {
    orders,
    addOrder,
    cancelOrder,
    completeOrder,
    isHydrated
  }
}
