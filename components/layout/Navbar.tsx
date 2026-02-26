'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'For Home', path: '/for-home' },
  { name: 'For Business', path: '/for-business' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Why Us', path: '/why-intrusionx' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#080d12]/95 backdrop-blur-xl border-b border-[rgba(0,224,255,0.1)] shadow-lg shadow-black/30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <ShieldCheck className="h-7 w-7 text-[#00e0ff] transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 blur-sm bg-[#00e0ff] opacity-20 rounded-full group-hover:opacity-40 transition-opacity" />
            </div>
            <span className="heading-font text-lg font-bold text-white tracking-tight">
              Intrusion<span className="text-[#00e0ff]">X</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === item.path ? 'text-[#00e0ff]' : 'text-[#8b9bb4] hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-[#00e0ff] transition-all duration-300 ${
                  pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link href="/contact" className="cyber-button text-sm px-5 py-2 cyber-pulse">
              Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#8b9bb4] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#080d12]/98 backdrop-blur-xl border-b border-[rgba(0,224,255,0.1)]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? 'text-[#00e0ff] bg-[rgba(0,224,255,0.08)]'
                    : 'text-[#8b9bb4] hover:text-white hover:bg-[rgba(255,255,255,0.04)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="cyber-button text-sm px-5 py-3 mt-2 w-full text-center">
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
