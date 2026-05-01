'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, ChevronDown } from 'lucide-react'
import { coffeeOfTheMonth } from '@/data/coffees'
import { formatPrice } from '@/lib/utils'

/**
 * HeroSection.tsx
 * The main hero on the Home page with:
 *  - Full-bleed background image with Ken Burns zoom animation
 *  - Semi-transparent dark overlay for text readability
 *  - Parallax scroll effect on background
 *  - Staggered entrance animations for content
 *  - Floating Coffee of the Month card on the right
 *  - Animated scroll-down chevron indicator
 */
export function HeroSection() {
  // Ref to the background image wrapper for parallax scroll effect
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /**
     * Parallax effect: background moves at 40% of scroll speed
     */
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* LAYER 1 — Background image with Ken Burns zoom animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 hero-bg-zoom will-change-transform"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      {/* LAYER 2 — Warm dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40" />

      {/* LAYER 3 — Subtle noise texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* LAYER 4 — Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* LEFT SIDE: Text content and CTAs */}
        <div className="flex flex-col gap-8">
          {/* Top label */}
          <div className="hero-animate-1 flex items-center gap-2 w-fit">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
              Est. 2018 · Kumasi, Ghana
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-animate-2 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Every sip
            <br />
            tells a story.
          </h1>

          {/* Subheading */}
          <p className="hero-animate-3 text-lg md:text-xl text-white/80 leading-relaxed max-w-md">
            Douglas Tawile Coffee Shop brings you handcrafted, ethically sourced coffees roasted with love right here in the heart of Ghana. From bold espressos to silky cold brews — your perfect cup is waiting.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate-4 flex flex-col sm:flex-row gap-4">
            <Link href="/coffees" className="inline-block">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all hover:shadow-lg active:scale-95 flex items-center gap-2">
                Explore Our Coffees
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/about" className="inline-block">
              <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all active:scale-95 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Our Story
              </button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero-animate-4 grid grid-cols-3 gap-4 pt-4">
            {[
              { value: '20+', label: 'Coffee Varieties' },
              { value: '50k+', label: 'Happy Customers' },
              { value: '100%', label: 'Ethically Sourced' },
            ].map((stat, i) => (
              <div key={i} className="text-white/90">
                <p className="text-xl md:text-2xl font-serif font-bold">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Coffee of the Month floating card */}
        <div className="hero-animate-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Glow ring behind card */}
            <div className="absolute -inset-6 bg-white/10 rounded-2xl blur-2xl opacity-50" />

            {/* The card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:[animation-play-state:paused] hero-float">
              {/* Coffee image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={coffeeOfTheMonth.image}
                  alt={coffeeOfTheMonth.name}
                  fill
                  className="object-cover"
                />
                {/* Badge overlay */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-black text-xs font-bold rounded-full">
                    ☕ Coffee of the Month
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 text-white">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold">{coffeeOfTheMonth.name}</h3>
                  <p className="text-sm text-white/70 mt-1">
                    {coffeeOfTheMonth.origin} · {coffeeOfTheMonth.roastLevel} Roast
                  </p>
                </div>

                <p className="text-3xl font-serif font-bold text-white/95 mb-4">{formatPrice(coffeeOfTheMonth.price)}</p>

                <p className="text-white/80 text-sm mb-4 leading-relaxed">{coffeeOfTheMonth.description}</p>

                {/* Flavor notes pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {coffeeOfTheMonth.flavor.slice(0, 3).map((note, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">
                      {note}
                    </span>
                  ))}
                </div>

                <Link href={`/coffees/${coffeeOfTheMonth.id}`} className="inline-block w-full">
                  <button className="w-full px-4 py-2 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all active:scale-95">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LAYER 5 — Scroll indicator */}
      <button
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }}
        aria-label="Scroll down to explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-animate-6 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group cursor-pointer"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform animate-bounce" />
      </button>
    </section>
  )
}
