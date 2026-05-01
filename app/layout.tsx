import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/context/CartContext";
import { BackToTopButton } from "@/components/shared/BackToTopButton";
import { Toaster } from "sonner";
import "./globals.css";

// Premium serif font for headings
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Clean sans-serif font for body
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Douglas Tawile Coffee Shop | Premium Specialty Coffee",
  description:
    "Discover exceptional specialty coffee from around the world. Freshly roasted single-origin and signature blends.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Douglas Tawile Coffee Shop",
    description: "Exceptional specialty coffee sourced and roasted with care",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            {children}
            <BackToTopButton />
            <Toaster position="bottom-right" theme="system" />
            {process.env.NODE_ENV === "production" && <Analytics />}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
