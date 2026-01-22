import { siteConfig } from '@/lib/site';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Golden Dragon Restaurant',
  description: 'Visit us, call us, or send us a message. We\'re here to serve you authentic Chinese cuisine.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Contact Us</h1>
          <p className="text-subheading text-gray-600">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-subheading font-bold">Location</h3>
              </div>
              <p className="text-subheading mb-2">{siteConfig.contact.address.street}</p>
              <p className="text-subheading mb-4">
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary)] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-subheading font-bold">Hours</h3>
              </div>
              <div className="space-y-3">
                {siteConfig.contact.hoursFormatted.map((hour, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">{hour.days}</span>
                    <span className="text-[var(--primary)] font-semibold">{hour.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-subheading font-bold">Phone</h3>
              </div>
              <a
                href={siteConfig.contact.phone.href}
                className="text-subheading text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
              >
                {siteConfig.contact.phone.display}
              </a>
              <p className="text-gray-600 mt-2">Call for reservations, takeout, or delivery</p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary)] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-subheading font-bold">Email</h3>
              </div>
              <a
                href={siteConfig.contact.email.href}
                className="text-subheading text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold"
              >
                {siteConfig.contact.email.display}
              </a>
              <p className="text-gray-600 mt-2">For catering inquiries and general questions</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
