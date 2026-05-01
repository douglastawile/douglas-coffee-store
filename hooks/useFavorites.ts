'use client'

import { useEffect, useState } from 'react'
import { Favorite } from '@/types'

const FAVORITES_STORAGE_KEY = 'douglas-favorites'

/**
 * Hook to manage favorite coffees with localStorage persistence
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (savedFavorites) {
        try {
          setFavorites(JSON.parse(savedFavorites))
        } catch (error) {
          console.error('Failed to parse favorites from localStorage:', error)
        }
      }
      setIsHydrated(true)
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
    }
  }, [favorites, isHydrated])

  const isFavorite = (coffeeId: string): boolean => {
    return favorites.some(fav => fav.coffeeId === coffeeId)
  }

  const addFavorite = (coffeeId: string) => {
    if (!isFavorite(coffeeId)) {
      setFavorites(prev => [
        ...prev,
        { coffeeId, addedAt: new Date().toISOString() }
      ])
    }
  }

  const removeFavorite = (coffeeId: string) => {
    setFavorites(prev => prev.filter(fav => fav.coffeeId !== coffeeId))
  }

  const toggleFavorite = (coffeeId: string) => {
    if (isFavorite(coffeeId)) {
      removeFavorite(coffeeId)
    } else {
      addFavorite(coffeeId)
    }
  }

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isHydrated
  }
}
