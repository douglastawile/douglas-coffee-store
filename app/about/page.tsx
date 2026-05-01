import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Leaf, Users, Coffee, Clock, Globe, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Douglas Tawile Coffee | Our Story",
  description:
    "Learn about our journey, values, and commitment to premium specialty coffee.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Story
            </h1>
            <p className="text-lg text-foreground/70">
              A passion for exceptional coffee and sustainable sourcing.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[360px_1fr] items-center">
              <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-sm">
                <Image
                  src="/code.jpg"
                  alt="Douglas Tawile"
                  width={720}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Founder & Roaster
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold">
                  Meet Douglas Tawile
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Douglas Tawile is the heart behind the brand. Born and raised
                  in Ghana, he brings a deep love for coffee and community to
                  every roast. His mission is to share authentic coffee
                  experiences while honoring the people and places behind each
                  bean.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  With years of experience working directly with farmers and
                  mastering small-batch roasting, Douglas has built the shop
                  around quality, sustainability, and a warm, welcoming coffee
                  culture. Every blend and single origin is chosen with care to
                  deliver a cup that feels personal and memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Our Mission */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Douglas Tawile Coffee Shop was founded with a simple mission:
                  to bring the world's finest specialty coffee to coffee lovers
                  everywhere. We believe that great coffee starts with great
                  relationships—with our farmers, our roasters, and our
                  customers.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Every bean we select is chosen for its exceptional quality,
                  unique flavor profile, and the story it tells about its
                  origin.
                </p>
              </div>

              {/* Our Values */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3 mb-3">
                      <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-primary">
                        Quality First
                      </h3>
                    </div>
                    <p className="text-foreground/80">
                      We never compromise on quality. Every coffee is
                      meticulously sourced, carefully roasted, and
                      quality-tested.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3 mb-3">
                      <Leaf className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-primary">
                        Sustainability
                      </h3>
                    </div>
                    <p className="text-foreground/80">
                      We partner with farms practicing sustainable and
                      regenerative agriculture to protect our planet.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3 mb-3">
                      <Globe className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-primary">
                        Transparency
                      </h3>
                    </div>
                    <p className="text-foreground/80">
                      We believe in complete transparency about our sourcing,
                      pricing, and practices.
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3 mb-3">
                      <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-primary">
                        Community
                      </h3>
                    </div>
                    <p className="text-foreground/80">
                      We support fair wages, better working conditions, and
                      sustainable livelihoods for coffee farmers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div id="process">
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Sourcing",
                      description:
                        "Direct relationships with specialty coffee farms around the world.",
                      icon: Globe,
                    },
                    {
                      title: "Selection",
                      description:
                        "Rigorous cupping and quality assessment of each batch.",
                      icon: Award,
                    },
                    {
                      title: "Roasting",
                      description:
                        "Small-batch roasting to ensure optimal flavor development.",
                      icon: Coffee,
                    },
                    {
                      title: "Packaging",
                      description:
                        "Freshly roasted and packaged to preserve peak flavor.",
                      icon: Clock,
                    },
                  ].map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={i}
                        className="border-l-4 border-primary pl-6 py-2 flex gap-4"
                      >
                        <Icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-foreground/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sustainability */}
              <div id="sustainability">
                <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-primary" />
                  Sustainability
                </h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Coffee farming has significant environmental and social
                  impacts. We're committed to supporting practices that protect
                  our planet and provide fair treatment for farmers.
                </p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>
                      Partnerships with regenerative agriculture farms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Fair trade and direct trade certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Recyclable and compostable packaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Carbon-neutral shipping options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
