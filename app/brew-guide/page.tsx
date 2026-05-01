import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Droplets, Clock, AlertCircle, ThumbsUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee Brewing Guide | Douglas Tawile Coffee',
  description: 'Learn the best brewing methods and techniques for perfect coffee every time.'
}

export default function BrewGuidePage() {
  const brewMethods = [
    {
      name: 'Pour Over',
      ratio: '1:16',
      time: '3-4 minutes',
      description: 'Control pouring speed for precise extraction. Great for highlighting single-origin flavors.',
      best: 'Single-Origin Coffees',
      tips: ['Use a gooseneck kettle for better control', 'Pour slowly in circular motions', 'Bloom for 30-40 seconds first']
    },
    {
      name: 'French Press',
      ratio: '1:15',
      time: '4 minutes',
      description: 'Immersion brewing that extracts full body and oils. Perfect for rich, bold flavors.',
      best: 'Dark Roasts, Blends',
      tips: ['Coarse grind essential', 'Preheat the pot with hot water', 'Stir after 30 seconds']
    },
    {
      name: 'AeroPress',
      ratio: '1:16',
      time: '1-2 minutes',
      description: 'Versatile and portable. Creates clean cup with unique flavor clarity.',
      best: 'All Coffee Types',
      tips: ['Perfect for travel', 'Medium-fine grind works best', 'Experiment with water temperature']
    },
    {
      name: 'Turkish Coffee',
      ratio: '1:8',
      time: '5 minutes',
      description: 'Finely ground coffee with specific brewing ritual. Rich, full-bodied result.',
      best: 'Medium Roasts',
      tips: ['Use the finest grind possible', 'Remove from heat when foaming', 'Pour slowly into cups']
    },
    {
      name: 'Moka Pot',
      ratio: '1:6',
      time: '8 minutes',
      description: 'Stovetop brewing creating espresso-like coffee. Concentrated and intense.',
      best: 'Dark Roasts, Blends',
      tips: ['Fill water chamber below safety valve', 'Medium heat is key', 'Listen for hissing sound']
    },
    {
      name: 'Cold Brew',
      ratio: '1:4',
      time: '12-24 hours',
      description: 'Overnight steeping produces smooth, sweet, less acidic coffee.',
      best: 'All Coffee Types',
      tips: ['Use a jar or large container', 'Store in refrigerator', 'Strain through fine mesh']
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                Coffee Brewing Guide
              </h1>
            </div>
            <p className="text-lg text-foreground/70">
              Master different brewing methods to extract the perfect cup from your favorite beans.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Brewing Methods */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Popular Brewing Methods</h2>
                <div className="space-y-8">
                  {brewMethods.map((method, i) => (
                    <div key={i} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-serif font-bold mb-2">{method.name}</h3>
                          <p className="text-foreground/70">{method.description}</p>
                        </div>
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full whitespace-nowrap ml-4">
                          {method.best}
                        </span>
                      </div>

                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
                        <div>
                          <p className="text-sm text-foreground/60 mb-1">Coffee to Water Ratio</p>
                          <p className="font-semibold">{method.ratio}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60 mb-1 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Brew Time
                          </p>
                          <p className="font-semibold">{method.time}</p>
                        </div>
                      </div>

                      {/* Tips */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4 text-primary" />
                          Pro Tips
                        </h4>
                        <ul className="space-y-2">
                          {method.tips.map((tip, j) => (
                            <li key={j} className="text-sm text-foreground/70 flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Tips */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  General Brewing Tips
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Always use fresh, filtered water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Grind your beans just before brewing for maximum freshness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Water temperature should be between 195-205°F (90-96°C)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Brew immediately after grinding for best flavor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Invest in a quality burr grinder for consistent results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
