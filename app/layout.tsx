import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Top Bar - Red */}
        <div className="py-2 px-4 text-small" style={{ backgroundColor: 'var(--topbar-bg)', color: 'var(--topbar-text)' }}>
          <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex gap-6 items-center flex-wrap">
              <a 
                href={siteConfig.contact.phone.href}
                className="flex items-center gap-2 hover:opacity-80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone.display}
              </a>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 hover:opacity-80 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Open Daily 11 AM - 10 PM</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
          <nav className="container mx-auto px-6 py-5">
            <div className="flex justify-between items-center gap-8">
              <Link href="/" className="flex items-center gap-3">
                <span className="text-3xl">🐉</span>
                <div>
                  <div className="text-subheading font-bold text-[var(--primary)]">
                    {siteConfig.brand.name}
                  </div>
                  <div className="text-small text-gray-600">Authentic Chinese Cuisine</div>
                </div>
              </Link>
              
              <div className="hidden lg:flex gap-6 items-center">
                {siteConfig.navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Link
                  href="/order"
                  className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-lg hover:bg-[var(--primary-dark)] text-small font-semibold transition-colors shadow-sm"
                >
                  Order Online
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="mt-16 border-t bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🐉</span>
                <h3 className="font-bold text-subheading">{siteConfig.brand.name}</h3>
              </div>
              <p className="text-small text-[var(--secondary)] italic mb-2">
                Where Tradition Meets Excellence
              </p>
              <p className="text-gray-300 text-small">{siteConfig.brand.tagline}</p>
            </div>
              
              <div>
                <h4 className="font-bold mb-4">Popular Dishes</h4>
                <ul className="space-y-2">
                  {siteConfig.navigation.footer.menu.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {siteConfig.navigation.footer.quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <div className="space-y-3 text-small">
                  <p className="text-gray-300">{siteConfig.contact.address.street}</p>
                  <p className="text-gray-300">{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</p>
                  <a href={siteConfig.contact.phone.href} className="text-gray-300 flex items-center gap-2 hover:text-white">
                    <Phone className="w-4 h-4" />
                    {siteConfig.contact.phone.display}
                  </a>
                  <div className="pt-3">
                    <h5 className="font-semibold mb-2">Hours</h5>
                    {siteConfig.contact.hoursFormatted.map((hour, i) => (
                      <p key={i} className="text-gray-300 text-small">
                        {hour.days}: {hour.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center text-small">
              <p className="text-gray-300">
                &copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
