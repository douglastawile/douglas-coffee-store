'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'
import type { Metadata } from 'next'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Our Location',
      value: 'Kumasi, Ashanti Region, Ghana',
      subValue: 'Visit us at our flagship roastery'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 24 236 9415',
      subValue: 'Mon–Sat, 7am – 7pm GMT',
      href: 'tel:+233242369415'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'douglastawile@gmail.com',
      subValue: 'We reply within 24 hours',
      href: 'mailto:douglastawile@gmail.com'
    },
    {
      icon: Clock,
      label: 'Opening Hours',
      value: 'Mon–Fri: 7:00am – 8:00pm',
      subValue: 'Sat–Sun: 8:00am – 6:00pm'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/70">
              We'd love to hear from you. Send us a message anytime.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Message subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info: any, i) => {
                    const Icon = info.icon
                    const isLink = info.href && (info.href.startsWith('tel:') || info.href.startsWith('mailto:'))
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ x: 8 }}
                        className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                      >
                        <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.label}</h3>
                          {isLink ? (
                            <a href={info.href} className="text-coffee-500 hover:underline dark:text-coffee-300 font-medium">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground/70 font-medium">{info.value}</p>
                          )}
                          {info.subValue && (
                            <p className="text-foreground/60 text-sm">{info.subValue}</p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* FAQ section */}
                <div id="faq" className="mt-12">
                  <h3 className="text-xl font-serif font-bold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        q: 'How long does shipping take?',
                        a: 'Most orders ship within 1-2 business days. Standard shipping takes 3-5 business days.'
                      },
                      {
                        q: 'Do you offer international shipping?',
                        a: 'Yes! We ship to most countries worldwide. International shipping times vary by location.'
                      },
                      {
                        q: 'What\'s your return policy?',
                        a: 'We offer 30-day returns on unopened coffee. We want you to be completely satisfied.'
                      }
                    ].map((faq, i) => (
                      <div key={i} className="p-4 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold mb-2">{faq.q}</h4>
                        <p className="text-foreground/70 text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
