import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Zap, Network, Mail, Search, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Cybersecurity Solutions | EDR, MDR, XDR & SOC | IntrusionX',
  description: 'IntrusionX delivers independent enterprise cybersecurity for Australian businesses — EDR, MDR, XDR, 24/7 SOC, penetration testing, and compliance support.',
  keywords: ['business cybersecurity Australia', 'EDR MDR XDR', 'managed detection response', 'penetration testing Australia', 'SOC monitoring Australia', 'endpoint protection business'],
  alternates: { canonical: 'https://intrusionx.com.au/for-business' },
};

const solutions = [
  { icon: <Shield className="h-6 w-6" />, tag: 'EPP', title: 'Endpoint Protection Platform', desc: 'Real-time malware, ransomware and zero-day defence.', features: ['AI-driven detection & behavioural analysis', 'Exploit prevention & fileless attack protection', 'Ransomware rollback and backup', 'Patch & vulnerability management', 'Centralised policy enforcement'] },
  { icon: <Eye className="h-6 w-6" />, tag: 'EDR', title: 'Endpoint Detection & Response', desc: 'Behavioural analytics and threat containment.', features: ['Continuous endpoint monitoring', 'Automated attack investigation', 'Attack timeline visualisation', 'Remote remediation tools', 'SIEM & SOAR integration'] },
  { icon: <Zap className="h-6 w-6" />, tag: 'MDR', title: 'Managed Detection & Response', desc: '24/7 monitoring by expert SOC analysts.', features: ['24/7 global SOC monitoring', 'Human-led threat hunting', 'Custom incident response playbooks', 'Adversary emulation & proactive testing', 'Compliance-ready logging & dashboards'] },
  { icon: <Network className="h-6 w-6" />, tag: 'XDR', title: 'Extended Detection & Response', desc: 'Unified visibility across endpoints, cloud and email.', features: ['Correlation across endpoints, networks & cloud', 'AI-powered threat correlation', 'Automated containment & mitigation', 'Real-time alerts with expert response'] },
  { icon: <Mail className="h-6 w-6" />, tag: 'Email', title: 'Email & Phishing Security', desc: 'Stop BEC, credential theft and malicious attachments.', features: ['Anti-phishing & BEC protection', 'Attachment sandboxing', 'Outbound data leak scanning', 'Encrypted email gateway'] },
  { icon: <Search className="h-6 w-6" />, tag: 'Pen Test', title: 'Penetration Testing & VAPT', desc: 'Simulated attacks to validate your real-world risk.', features: ['External & internal penetration testing', 'Cloud security testing (AWS, Azure, GCP)', 'Red team / blue team simulations', 'PCI-DSS, ISO 27001 & GDPR compliance audits'] },
];

const industries = ['Professional Services', 'Healthcare & Medical', 'Finance & Accounting', 'Legal & Law Firms', 'Retail & eCommerce', 'Manufacturing', 'Construction & Property', 'Education & Training'];

const faqs = [
  { q: 'How is IntrusionX different from our current IT provider?', a: 'Your IT provider manages infrastructure — IntrusionX independently monitors and defends it. When the same team manages both, a conflict of interest emerges. We act as your independent security layer with zero divided loyalties.' },
  { q: 'How long does onboarding take?', a: 'Most businesses are fully protected within 48–72 hours of signing. We handle deployment, configuration and initial threat baselining — with minimal disruption to your operations.' },
  { q: 'Do you offer compliance support?', a: 'Yes. We support compliance with the Australian Essential Eight, ISO 27001, PCI-DSS, HIPAA, and GDPR. Our reporting tools generate audit-ready documentation for your team.' },
  { q: 'Can IntrusionX work alongside our existing IT team?', a: 'Absolutely. IntrusionX integrates with existing tools and workflows. We complement your IT team — providing the specialist security layer they typically cannot provide themselves.' },
];

export default function ForBusinessPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative py-28 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="pill mb-5 inline-flex">Business Security</span>
            <h1 className="heading-font text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Dedicated Cybersecurity — Built for Australian Businesses
            </h1>
            <div className="space-y-3 text-[#8b9bb4] mb-8">
              <p>Cyber attacks cost Australian businesses millions every year. SMEs are prime targets for ransomware, phishing and data breaches.</p>
              <p className="text-[#00e0ff] font-semibold">Security is our primary trait — not an IT add-on.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="cyber-button cyber-pulse">Schedule a Consultation</Link>
              <Link href="/pricing" className="cyber-button-outline">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="pill mb-4 inline-flex">Our Services</span>
            <h2 className="heading-font text-4xl font-black text-white mb-3">Complete Business Security Stack</h2>
            <p className="text-[#8b9bb4] max-w-2xl mx-auto">Every layer of your business protected — from endpoints and email to cloud and compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <div key={i} className="card-container rounded-xl p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[rgba(0,224,255,0.08)] text-[#00e0ff]">{sol.icon}</div>
                  <span className="text-xs font-bold text-[#00e0ff] uppercase tracking-widest">{sol.tag}</span>
                </div>
                <h3 className="heading-font text-lg font-bold text-white mb-2">{sol.title}</h3>
                <p className="text-sm text-[#8b9bb4] mb-5">{sol.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {sol.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#8b9bb4]">
                      <CheckCircle className="h-4 w-4 text-[#00e0ff] flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="pill mb-4 inline-flex">Industries We Protect</span>
            <h2 className="heading-font text-4xl font-black text-white">Built for Every Australian Business</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {industries.map((ind, i) => (
              <div key={i} className="card-container rounded-xl p-4 text-center">
                <p className="text-sm text-[#8b9bb4] font-medium">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential 8 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="pill mb-4 inline-flex">Australian Compliance</span>
              <h2 className="heading-font text-4xl font-black text-white mb-5">Essential Eight Aligned</h2>
              <p className="text-[#8b9bb4] mb-6 leading-relaxed">IntrusionX aligns with the Australian Signals Directorate&apos;s Essential Eight — the baseline cybersecurity strategies recommended for all Australian businesses.</p>
              <p className="text-[#8b9bb4] mb-8 leading-relaxed">We map your current security posture against the Essential Eight maturity model and close every gap — protecting you against the most common attack vectors targeting Australian organisations.</p>
              <Link href="/contact" className="cyber-button inline-flex">Get an Essential Eight Assessment</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Patch Applications', 'Patch Operating Systems', 'Multi-Factor Authentication', 'Restrict Admin Privileges', 'Application Control', 'Restrict Macros', 'User App Hardening', 'Regular Backups'].map((item, i) => (
                <div key={i} className="card-container rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-[#00e0ff] flex-shrink-0" />
                  <span className="text-xs text-[#8b9bb4] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-font text-4xl font-black text-white">Frequently Asked</h2>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-container rounded-2xl p-10 md:p-14 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,224,255,0.05)] to-[rgba(168,85,247,0.05)]" />
            <div className="relative z-10">
              <h2 className="heading-font text-3xl font-black text-white mb-3">Ready to secure your business?</h2>
              <p className="text-[#8b9bb4] mb-8">Free consultation. No lock-in contracts. Australian-based support.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="cyber-button cyber-pulse">Schedule Free Consultation</Link>
                <Link href="/pricing" className="cyber-button-outline">View Business Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
