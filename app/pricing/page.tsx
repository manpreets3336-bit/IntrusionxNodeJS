import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import PricingCards from '@/components/PricingCards';

export const metadata: Metadata = {
  title: 'Cybersecurity Pricing Australia | Plans from $20/mo | IntrusionX',
  description: 'Affordable cybersecurity plans for Australian homes and businesses. Essential from $20/month, Premium from $30/month. Enterprise custom pricing. No lock-in.',
  keywords: ['cybersecurity pricing Australia', 'antivirus subscription Australia', 'endpoint protection cost', 'cybersecurity plans home business', 'IntrusionX pricing'],
  alternates: { canonical: 'https://intrusionx.com.au/pricing' },
};

const faqs = [
  { q: 'Are there any lock-in contracts?', a: 'No. All plans are month-to-month and can be cancelled at any time. Annual billing is available at a discount.' },
  { q: 'How many devices does each plan cover?', a: 'Each plan covers one primary device. Multi-device discounts are available — contact us for a custom quote.' },
  { q: 'What happens when I sign up?', a: 'After payment, you will receive onboarding instructions within 2 hours. Our team will guide you through installation and initial setup. Business plans include a dedicated onboarding call.' },
  { q: 'Is there a free trial?', a: 'We offer a free consultation and security assessment. Contact us to discuss your needs before committing to any plan.' },
  { q: 'Do you offer discounts for multiple devices or users?', a: 'Yes — multi-device and business volume discounts are available. Contact us for a custom quote based on your specific requirements.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards via Stripe. Business invoicing available for Enterprise plans.' },
];

export default function PricingPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative py-24 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="pill mb-5 inline-flex">Simple, Transparent Pricing</span>
          <h1 className="heading-font text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Protection for Every Budget
          </h1>
          <p className="text-[#8b9bb4] text-lg max-w-2xl mx-auto">
            Enterprise-grade cybersecurity made affordable for Australian homes and businesses. No hidden fees, no lock-in contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards — Client Component for Stripe interaction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards />
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-[#0f1520]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-font text-3xl font-black text-white">What&apos;s the difference?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-container rounded-xl p-6">
              <div className="text-[#00e0ff] mb-3"><Shield className="h-7 w-7" /></div>
              <h3 className="heading-font text-lg font-bold text-white mb-2">Essential</h3>
              <p className="text-sm text-[#8b9bb4] leading-relaxed">Perfect for individuals and families. Covers all core protection — antivirus, ransomware, phishing, and web attack prevention.</p>
            </div>
            <div className="card-container rounded-xl p-6 border-[rgba(0,224,255,0.3)]">
              <div className="text-[#00e0ff] mb-3"><Zap className="h-7 w-7" /></div>
              <h3 className="heading-font text-lg font-bold text-white mb-2">Premium</h3>
              <p className="text-sm text-[#8b9bb4] leading-relaxed">For users who need deeper protection — 24/7 monitoring, behavioural threat detection, and automated incident response.</p>
            </div>
            <div className="card-container rounded-xl p-6">
              <div className="text-[#00e0ff] mb-3"><Users className="h-7 w-7" /></div>
              <h3 className="heading-font text-lg font-bold text-white mb-2">Enterprise</h3>
              <p className="text-sm text-[#8b9bb4] leading-relaxed">For businesses needing full SOC coverage, XDR, compliance support, SLAs and dedicated account management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-font text-4xl font-black text-white">Pricing Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="card-container rounded-xl p-6">
                <h3 className="heading-font text-base font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-[#8b9bb4] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-font text-3xl font-black text-white mb-3">Not sure which plan is right for you?</h2>
          <p className="text-[#8b9bb4] mb-8">Book a free consultation and we&apos;ll recommend the right solution for your specific needs.</p>
          <Link href="/contact" className="cyber-button cyber-pulse inline-flex">Book Free Consultation</Link>
        </div>
      </section>

    </div>
  );
}
