import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu & Brewing Guide | Douglas Tawile Coffee',
  description: 'Explore our coffee menu and learn brewing techniques for the perfect cup.'
}

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Menu & Brewing Guide
            </h1>
            <p className="text-lg text-foreground/70">
              Explore brewing methods and specialty drinks to enhance your coffee experience.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {/* Specialty Drinks */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Specialty Drinks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'Espresso',
                      description: 'Rich, concentrated coffee shot. Pure excellence.',
                      price: 'GHC 75'
                    },
                    {
                      name: 'Americano',
                      description: 'Double shot of espresso with hot water for a smooth, balanced cup.',
                      price: 'GHC 85'
                    },
                    {
                      name: 'Cappuccino',
                      description: 'Perfect blend of espresso, steamed milk, and rich foam.',
                      price: 'GHC 110'
                    },
                    {
                      name: 'Latte',
                      description: 'Smooth and creamy espresso drink with velvety steamed milk.',
                      price: 'GHC 110'
                    },
                    {
                      name: 'Macchiato',
                      description: 'Espresso "marked" with a dollop of milk foam.',
                      price: 'GHC 100'
                    },
                    {
                      name: 'Mocha',
                      description: 'Espresso, steamed milk, and chocolate. A dessert in a cup.',
                      price: 'GHC 130'
                    },
                    {
                      name: 'Cortado',
                      description: 'Equal parts espresso and steamed milk for balanced richness.',
                      price: 'GHC 100'
                    },
                    {
                      name: 'Flat White',
                      description: 'Espresso with velvety microfoam for a silky, balanced taste.',
                      price: 'GHC 115'
                    },
                    {
                      name: 'Cold Brew',
                      description: 'Smooth, refreshing cold brew concentrate served over ice.',
                      price: 'GHC 95'
                    },
                    {
                      name: 'Iced Latte',
                      description: 'Cool and creamy espresso with iced milk and foam.',
                      price: 'GHC 115'
                    },
                    {
                      name: 'Affogato',
                      description: 'Vanilla ice cream drowned in a shot of hot espresso.',
                      price: 'GHC 120'
                    },
                    {
                      name: 'Irish Coffee',
                      description: 'Espresso, Irish whiskey, and whipped cream. Warm and comforting.',
                      price: 'GHC 140'
                    },
                  ].map((drink, i) => (
                    <div key={i} className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-serif font-bold text-lg">{drink.name}</h3>
                        <span className="text-primary font-semibold">{drink.price}</span>
                      </div>
                      <p className="text-foreground/70 text-sm">{drink.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brewing Methods */}
              <div id="brewing">
                <h2 className="text-3xl font-serif font-bold mb-8">Brewing Methods</h2>
                <div className="space-y-8">
                  {[
                    {
                      method: 'Pour Over',
                      ratio: '1:16',
                      time: '3-4 minutes',
                      description: 'Control pouring speed for precise extraction. Great for highlighting single-origin flavors.',
                      best: 'Single-Origin Coffees'
                    },
                    {
                      method: 'French Press',
                      ratio: '1:15',
                      time: '4 minutes',
                      description: 'Immersion brewing that extracts full body and oils. Perfect for rich, bold flavors.',
                      best: 'Dark Roasts, Blends'
                    },
                    {
                      method: 'AeroPress',
                      ratio: '1:16',
                      time: '1-2 minutes',
                      description: 'Versatile and portable. Creates clean cup with unique flavor clarity.',
                      best: 'All Coffee Types'
                    },
                    {
                      method: 'Turkish Coffee',
                      ratio: '1:8',
                      time: '5 minutes',
                      description: 'Finely ground coffee with specific brewing ritual. Rich, full-bodied result.',
                      best: 'Medium Roasts'
                    },
                    {
                      method: 'Moka Pot',
                      ratio: '1:6',
                      time: '8 minutes',
                      description: 'Stovetop brewing creating espresso-like coffee. Concentrated and intense.',
                      best: 'Dark Roasts, Blends'
                    },
                    {
                      method: 'Cold Brew',
                      ratio: '1:4',
                      time: '12-24 hours',
                      description: 'Overnight steeping produces smooth, sweet, less acidic coffee.',
                      best: 'All Coffee Types'
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-card rounded-lg border border-border">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-serif font-bold">{item.method}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {item.best}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-foreground/60">Coffee:Water</p>
                          <p className="font-semibold">{item.ratio}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60">Brew Time</p>
                          <p className="font-semibold">{item.time}</p>
                        </div>
                      </div>
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coffee Tasting Guide */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Coffee Tasting Guide</h2>
                <div className="bg-card rounded-lg border border-border p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Appearance</h3>
                      <p className="text-foreground/80">Observe the color and clarity of your brewed coffee.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Aroma</h3>
                      <p className="text-foreground/80">Take a moment to smell the coffee. Notice fruity, floral, nutty, or earthy notes.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Taste</h3>
                      <p className="text-foreground/80">Sip and let the coffee coat your tongue. Notice flavor notes, acidity, and body.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Aftertaste</h3>
                      <p className="text-foreground/80">Pay attention to lingering flavors after swallowing. This reveals the complexity.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storage & Freshness */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Storage & Freshness</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold mb-3 text-lg">Best Freshness</h3>
                    <p className="text-foreground/80 mb-4">
                      Coffee is best enjoyed within 2-4 weeks of roasting. We roast fresh to order.
                    </p>
                    <ul className="space-y-2 text-foreground/70 text-sm">
                      <li>✓ Consume within 4 weeks</li>
                      <li>✓ Keep beans in cool place</li>
                      <li>✓ Grind just before brewing</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold mb-3 text-lg">Storage Tips</h3>
                    <ul className="space-y-2 text-foreground/70 text-sm">
                      <li>✗ Avoid moisture and humidity</li>
                      <li>✗ Keep away from direct sunlight</li>
                      <li>✗ Don&apos;t store in refrigerator</li>
                      <li>✓ Airtight container at room temperature</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
