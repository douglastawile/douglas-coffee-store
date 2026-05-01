import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

/**
 * Custom 404 page for not found routes
 */
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center py-20 px-4">
          <div className="text-8xl font-serif font-bold text-primary mb-4">
            404
          </div>
          <h1 className="text-3xl font-serif font-bold mb-4">
            Oops! Coffee Not Found
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
            It seems like the page you&apos;re looking for has brewed away. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Back to Home
              </button>
            </Link>
            <Link href="/coffees">
              <button className="px-8 py-3 bg-secondary/20 text-foreground rounded-lg font-semibold border border-border hover:bg-secondary/30 transition-colors">
                Shop Coffee
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
