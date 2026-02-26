import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cybersecurity Blog Australia | Security Guides | IntrusionX',
  description: 'Expert cybersecurity guides for Australian businesses and homes — ransomware prevention, phishing awareness, malware protection tips from IntrusionX.',
  keywords: ['cybersecurity blog Australia', 'ransomware guide', 'phishing protection Australia', 'malware prevention', 'cybersecurity tips small business Australia'],
  alternates: { canonical: 'https://intrusionx.com.au/blog' },
};

const posts = [
  { tag: 'Ransomware', title: 'How Ransomware Attacks Work — And How to Stop Them', excerpt: 'Ransomware encrypts your files and demands payment to restore access. Understand the full attack lifecycle — from initial delivery to encryption — and the defences that stop it before it starts.', path: '/blog/how-ransomware-attacks-work', readTime: '5 min read', date: 'February 2025' },
  { tag: 'Phishing', title: 'Why Phishing Is Still the #1 Entry Point for Cybercriminals', excerpt: 'Over 90% of breaches begin with a phishing email. Learn how attackers craft convincing messages, what to look for, and how to train your team to spot them before any damage is done.', path: '/blog/why-phishing-is-the-top-cyber-threat', readTime: '4 min read', date: 'February 2025' },
  { tag: 'IT vs Security', title: 'Why Your IT Provider Should Not Manage Your Cybersecurity', excerpt: 'Outsourcing both IT and security to a single provider creates blind spots and conflicts of interest. Here is why independent security oversight is the smarter, safer approach.', path: '/blog/why-it-provider-should-not-manage-cybersecurity', readTime: '6 min read', date: 'February 2025' },
  { tag: 'Small Business', title: 'The Top 5 Cybersecurity Mistakes Small Australian Businesses Make', excerpt: 'From weak passwords to unpatched software and unmanaged remote access — discover the most common security gaps attackers exploit and exactly how to close them for good.', path: '/blog/cybersecurity-mistakes-small-businesses', readTime: '5 min read', date: 'February 2025' },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="relative py-24 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="pill mb-5 inline-flex">Security Knowledge</span>
          <h1 className="heading-font text-5xl md:text-6xl font-black text-white leading-tight mb-5">Cybersecurity Guides for Australia</h1>
          <p className="text-[#8b9bb4] text-lg max-w-2xl">Expert articles on ransomware, phishing, malware and more — written for Australian businesses and home users.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <Link key={i} href={post.path} className="card-container rounded-xl p-8 flex flex-col group block">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#00e0ff] uppercase tracking-widest">{post.tag}</span>
                  <span className="text-xs text-[#8b9bb4]">{post.date}</span>
                </div>
                <h2 className="heading-font text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#00e0ff] transition-colors">{post.title}</h2>
                <p className="text-sm text-[#8b9bb4] leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#8b9bb4]">
                    <BookOpen className="h-3.5 w-3.5" />{post.readTime}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[#00e0ff] text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-font text-3xl font-black text-white mb-3">Want personalised security advice?</h2>
          <p className="text-[#8b9bb4] mb-8">Book a free consultation with our Australian cybersecurity specialists.</p>
          <Link href="/contact" className="cyber-button cyber-pulse inline-flex">Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
