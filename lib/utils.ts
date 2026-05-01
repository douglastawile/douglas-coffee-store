import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price to Ghana Cedis (GHC)
 * Converts USD to GHC using a conversion factor of 1 USD = 25 GHC
 */
export function formatPrice(priceInUSD: number): string {
  const priceInGHC = priceInUSD * 25
  return `GHC ${priceInGHC.toFixed(2)}`
}
