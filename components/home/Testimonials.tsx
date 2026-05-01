"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { Star } from "lucide-react";

/**
 * Testimonials section with customer reviews
 */
export function Testimonials() {
  const testimonials = [
    {
      name: "Akosua Owusu",
      title: "Coffee Enthusiast",
      content:
        "The quality of Douglas coffee is unmatched. Every cup is like a journey to the origin. Highly recommended!",
      rating: 5,
    },
    {
      name: "Kofi Mensah",
      title: "Home Barista",
      content:
        "Best specialty coffee I've found. The freshness and flavor consistency are incredible. I'm a customer for life.",
      rating: 5,
    },
    {
      name: "Ama Adomako",
      title: "Coffee Shop Owner",
      content:
        "We serve Douglas coffee at our cafe. Our customers consistently praise the taste and quality. Perfect for our business.",
      rating: 5,
    },
    {
      name: "Kwame Osei",
      title: "Coffee Connoisseur",
      content:
        "Finally found a roaster that truly understands single-origin coffee. The flavor profiles are distinct and memorable.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Love from Our Customers
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What People Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Thousands of coffee lovers trust Douglas for their daily brew.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-card rounded-lg border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
