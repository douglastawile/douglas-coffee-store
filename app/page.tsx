import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedCoffees } from '@/components/home/FeaturedCoffees'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { FindYourCoffeeSection } from '@/components/home/FindYourCoffeeSection'
import { NewsletterBanner } from '@/components/home/NewsletterBanner'

export const metadata: Metadata = {
  title: 'Douglas Tawile Coffee Shop | Premium Specialty Coffee',
  description: 'Discover exceptional specialty coffee from around the world. Freshly roasted single-origin and signature blends.',
  openGraph: {
    title: 'Douglas Tawile Coffee Shop',
    description: 'Exceptional specialty coffee sourced and roasted with care',
    type: 'website',
  }
}

/**
 * Home page with hero section, featured coffees, and other promotional content
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCoffees />
        <WhyChooseUs />
        <FindYourCoffeeSection />
        <Testimonials />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  )
}
