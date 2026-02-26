import Link from 'next/link';
import { ShieldCheck, Mail, Phone, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

const solutions = [
  { label: 'For Home', path: '/for-home' },
  { label: 'For Business', path: '/for-business' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Why IntrusionX', path: '/why-intrusionx' },
  { label: 'Blog', path: '/blog' },
];

const cities = ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide'];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(0,224,255,0.08)] bg-[#080d12]">
      {/* Top CTA band */}
      <div className="border-b border-[rgba(0,224,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="heading-font text-xl font-bold text-white mb-1">Ready to protect your business or home?</p>
            <p className="text-[#8b9bb4] text-sm">Independent cybersecurity across Australia — no IT conflicts, no compromises.</p>
          </div>
          <Link href="/contact" className="cyber-button text-sm px-6 py-3 whitespace-nowrap">
            Book a Free Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <ShieldCheck className="h-7 w-7 text-[#00e0ff]" />
              <span className="heading-font text-lg font-bold text-white">
                Intrusion<span className="text-[#00e0ff]">X</span>
              </span>
            </Link>
            <p className="text-[#8b9bb4] text-sm leading-relaxed max-w-xs mb-5">
              Australia&apos;s dedicated cybersecurity specialists. We exist for one purpose — to prevent, detect
              and neutralise cyber threats before they impact your operations, finances or reputation.
            </p>
            <p className="text-xs text-[#8b9bb4] uppercase tracking-widest font-semibold mb-3">Security is our primary trait.</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/185qG65NKf/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[rgba(0,224,255,0.12)] text-[#8b9bb4] hover:text-[#00e0ff] hover:border-[rgba(0,224,255,0.4)] transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/intrusionx_?igsh=MXdmMjdkM2x6dGJpbg==" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[rgba(0,224,255,0.12)] text-[#8b9bb4] hover:text-[#00e0ff] hover:border-[rgba(0,224,255,0.4)] transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="heading-font text-xs font-bold text-white uppercase tracking-widest mb-4">Solutions</p>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-sm text-[#8b9bb4] hover:text-[#00e0ff] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="heading-font text-xs font-bold text-white uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+61499468971" className="flex items-center gap-2 text-sm text-[#8b9bb4] hover:text-[#00e0ff] transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" /> +61 499 468 971
                </a>
              </li>
              <li>
                <a href="mailto:contact@intrusionx.com.au" className="flex items-center gap-2 text-sm text-[#8b9bb4] hover:text-[#00e0ff] transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" /> contact@intrusionx.com.au
                </a>
              </li>
            </ul>
            <p className="heading-font text-xs font-bold text-white uppercase tracking-widest mt-6 mb-3">Serving</p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span key={city} className="text-xs text-[#8b9bb4] bg-[rgba(0,224,255,0.05)] border border-[rgba(0,224,255,0.1)] rounded-full px-3 py-1">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(0,224,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#8b9bb4]">© {new Date().getFullYear()} IntrusionX. All rights reserved. ABN: XX XXX XXX XXX</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-xs text-[#8b9bb4] hover:text-[#00e0ff] transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-xs text-[#8b9bb4] hover:text-[#00e0ff] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
