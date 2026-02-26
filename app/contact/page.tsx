import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, Clock, Shield, FileCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact IntrusionX | Free Cybersecurity Consultation Australia',
  description: 'Book a free cybersecurity consultation with IntrusionX. Call +61 499 468 971 or email contact@intrusionx.com.au. Serving Melbourne, Sydney, Brisbane, Perth, Adelaide.',
  keywords: ['contact IntrusionX', 'cybersecurity consultation Australia', 'free security assessment', 'Melbourne Sydney Brisbane Perth cybersecurity'],
  alternates: { canonical: 'https://intrusionx.com.au/contact' },
};

const cities = ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide'];

export default function ContactPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative py-24 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="pill mb-5 inline-flex">Get in Touch</span>
          <h1 className="heading-font text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Talk to Australia&apos;s Dedicated<br className="hidden md:block" /> Cybersecurity Experts
          </h1>
          <p className="text-[#8b9bb4] text-lg max-w-2xl mx-auto">
            Free consultation. No obligations. Get expert advice on protecting your business or home.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-container rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[rgba(0,224,255,0.08)] text-[#00e0ff]"><Phone className="h-5 w-5" /></div>
                  <p className="heading-font text-sm font-bold text-white">Call Us</p>
                </div>
                <a href="tel:+61499468971" className="text-[#00e0ff] text-lg font-semibold hover:underline">+61 499 468 971</a>
                <p className="text-xs text-[#8b9bb4] mt-1">Available Mon–Fri 9am–6pm AEST</p>
              </div>

              <div className="card-container rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[rgba(0,224,255,0.08)] text-[#00e0ff]"><Mail className="h-5 w-5" /></div>
                  <p className="heading-font text-sm font-bold text-white">Email Us</p>
                </div>
                <a href="mailto:contact@intrusionx.com.au" className="text-[#00e0ff] font-semibold hover:underline break-all">contact@intrusionx.com.au</a>
                <p className="text-xs text-[#8b9bb4] mt-1">We respond within 2 hours during business hours</p>
              </div>

              <div className="card-container rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[rgba(0,224,255,0.08)] text-[#00e0ff]"><Clock className="h-5 w-5" /></div>
                  <p className="heading-font text-sm font-bold text-white">Emergency Response</p>
                </div>
                <p className="text-white font-semibold">24/7 Incident Response</p>
                <p className="text-xs text-[#8b9bb4] mt-1">For active cyber incidents, our SOC is available around the clock</p>
              </div>

              <div className="card-container rounded-xl p-6">
                <p className="heading-font text-xs font-bold text-white uppercase tracking-widest mb-3">Serving All of Australia</p>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span key={city} className="text-xs text-[#8b9bb4] bg-[rgba(0,224,255,0.05)] border border-[rgba(0,224,255,0.1)] rounded-full px-3 py-1">{city}</span>
                  ))}
                  <span className="text-xs text-[#8b9bb4] bg-[rgba(0,224,255,0.05)] border border-[rgba(0,224,255,0.1)] rounded-full px-3 py-1">+ Nationwide</span>
                </div>
              </div>

              <div className="card-container rounded-xl p-6 space-y-3">
                <p className="heading-font text-xs font-bold text-white uppercase tracking-widest mb-2">What to Expect</p>
                {[
                  { icon: <Shield className="h-4 w-4" />, text: 'Free security assessment of your current environment' },
                  { icon: <FileCheck className="h-4 w-4" />, text: 'Tailored recommendations — no generic sales pitch' },
                  { icon: <Clock className="h-4 w-4" />, text: 'Response within 2 business hours' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#8b9bb4]">
                    <span className="text-[#00e0ff] flex-shrink-0 mt-0.5">{item.icon}</span>{item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Form — Client Component */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
