import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

/**
 * Footer component with links, contact info, and social media
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: "All Coffee", href: "/coffees" },
      { label: "Single Origin", href: "/coffees?category=single-origin" },
      { label: "Blends", href: "/coffees?category=blend" },
      { label: "Espresso", href: "/coffees?category=espresso" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/about#process" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Blog", href: "/contact" },
    ],
    Support: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/contact#faq" },
      { label: "Brewing Guide", href: "/menu#brewing" },
      { label: "Shipping Info", href: "/contact#shipping" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">☕ Douglas</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Premium specialty coffee sourced and roasted with care.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p className="text-sm text-foreground/70">
                  Kumasi, Ashanti Region, Ghana
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <a
                  href="tel:+233242369415"
                  className="text-sm text-coffee-500 hover:underline dark:text-coffee-300"
                >
                  +233 24 236 9415
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href="mailto:douglastawile@gmail.com"
                  className="text-sm text-coffee-500 hover:underline dark:text-coffee-300"
                >
                  douglastawile@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60">
            © {currentYear} Douglas Tawile Coffee Shop. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60 mt-4 md:mt-0">
            Handcrafted with ☕ and care
          </p>
        </div>
      </div>
    </footer>
  );
}
