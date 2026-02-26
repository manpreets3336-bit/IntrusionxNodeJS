import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Zap, Users, Database, Globe, Shield, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose IntrusionX | Security Is Our Primary Trait | Australia',
  description: 'IntrusionX was built for one mission: cybersecurity excellence. Dedicated specialists, independent oversight, AI + human intelligence — protecting Australian businesses and homes.',
  keywords: ['why choose IntrusionX', 'independent cybersecurity Australia', 'dedicated security company', 'cybersecurity specialists Australia'],
  alternates: { canonical: 'https://intrusionx.com.au/why-intrusionx' },
};

const capabilities = [
  { icon: <Brain className="h-6 w-6" />, title: 'AI-Powered Threat Detection', desc: 'Machine learning analyses billions of data points in real-time, identifying patterns and anomalies that traditional security solutions miss entirely.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Automated Response & SOAR', desc: 'Security Orchestration, Automation and Response enables instant containment and mitigation of threats without delay or manual intervention.' },
  { icon: <Users className="h-6 w-6" />, title: 'Human-Led Threat Hunting', desc: 'Our analysts proactively hunt for advanced persistent threats and sophisticated attacks that automated tools overlook.' },
  { icon: <Database className="h-6 w-6" />, title: 'Unified Data Lake', desc: 'Complete visibility by correlating data from endpoints, cloud environments, networks and email — all in one place.' },
  { icon: <Globe className="h-6 w-6" />, title: '24/7 Global SOC', desc: 'Round-the-clock monitoring and incident response from strategically located Security Operations Centres around the world.' },
  { icon: <Shield className="h-6 w-6" />, title: 'Proprietary Threat Intelligence', desc: 'Real-time insights into emerging threats and attack vectors, fed by our global intelligence network.' },
];

const stats = [
  { number: '99.9%', label: 'Threat Prevention Rate', detail: 'Industry-leading protection against known and unknown threats' },
  { number: '10+', label: 'Years of Expertise', detail: 'A decade dedicated exclusively to cybersecurity' },
  { number: '100+', label: 'Protected Clients', detail: 'Organisations across Australia that trust our services' },
  { number: '24/7', label: 'Global SOC', detail: 'Continuous monitoring and response, around the clock' },
];

const testimonials = [
  { name: 'Sarah Chen', title: 'CISO', company: 'TechCorp Industries', text: 'IntrusionX detected and neutralised a sophisticated APT attack that our previous solution missed entirely. Their human-AI combination is unmatched.', rating: 5 },
  { name: 'Michael Rodriguez', title: 'IT Director', company: 'Global Finance Ltd', text: 'The 24/7 SOC response time is incredible. They stopped a ransomware attack in under 3 minutes and delivered full forensics within hours.', rating: 5 },
  { name: 'Dr. Emily Watson', title: 'Security Manager', company: 'Healthcare Systems', text: 'HIPAA compliance, simplified. IntrusionX handles all our security requirements while providing enterprise-grade protection without disrupting operations.', rating: 5 },
];

export default function WhyIntrusionXPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative py-28 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="pill mb-5 inline-flex">Our Mission</span>
            <h1 className="heading-font text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Security Is Our Primary Trait
            </h1>
            <div className="space-y-3 text-[#8b9bb4] mb-8">
              <p>IntrusionX was built with one mission: cybersecurity excellence.</p>
              <p>Unlike traditional IT providers, we don&apos;t divide our focus between helpdesk tickets and threat detection. Cybersecurity is our only discipline.</p>
              <p className="text-[#00e0ff] font-semibold">We are security specialists — full stop.</p>
            </div>
            <Link href="/contact" className="cyber-button cyber-pulse inline-flex">Experience the Difference</Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="pill mb-4 inline-flex">What Makes Us Different</span>
            <h2 className="heading-font text-4xl font-black text-white">Three things that set us apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Independence', desc: 'We are not your IT provider. We act as your independent security layer — auditing and challenging decisions without divided loyalties. No conflicts of interest, no blind spots.' },
              { title: 'Specialisation', desc: 'Every person on our team is a cybersecurity specialist. Not a generalist IT technician who also "does security". This depth of focus translates directly into better protection.' },
              { title: 'Proactive Defence', desc: 'We do not wait for threats to appear. We actively hunt for indicators of compromise, simulate attacks on your environment, and close vulnerabilities before attackers find them.' },
            ].map((item, i) => (
              <div key={i} className="card-container rounded-xl p-8">
                <div className="w-8 h-8 rounded-full bg-[rgba(0,224,255,0.1)] border border-[rgba(0,224,255,0.25)] flex items-center justify-center text-[#00e0ff] heading-font text-sm font-black mb-5">{i + 1}</div>
                <h3 className="heading-font text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#8b9bb4] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="pill mb-4 inline-flex">Technology & Expertise</span>
            <h2 className="heading-font text-4xl font-black text-white">Enterprise Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <div key={i} className="card-container rounded-xl p-7">
                <div className="p-2.5 rounded-lg bg-[rgba(0,224,255,0.08)] text-[#00e0ff] w-fit mb-4">{cap.icon}</div>
                <h3 className="heading-font text-base font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-sm text-[#8b9bb4] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="card-container rounded-xl p-6 text-center">
                <p className="heading-font text-4xl font-black accent-gradient-text mb-1">{stat.number}</p>
                <p className="text-white text-sm font-semibold mb-2">{stat.label}</p>
                <p className="text-xs text-[#8b9bb4]">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="pill mb-4 inline-flex">Client Stories</span>
            <h2 className="heading-font text-4xl font-black text-white">Trusted Across Australia</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-container rounded-xl p-7 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-[#8b9bb4] text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.text}&rdquo;</blockquote>
                <div className="border-t border-[rgba(0,224,255,0.08)] pt-4">
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-[#00e0ff] text-xs">{t.title} · {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-container rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,224,255,0.05)] to-[rgba(168,85,247,0.05)]" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="heading-font text-3xl font-black text-white mb-2">Ready to experience the IntrusionX difference?</h2>
                <p className="text-[#8b9bb4]">Free consultation. No obligations. Australian-based specialists.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link href="/contact" className="cyber-button cyber-pulse">Book Free Consultation</Link>
                <Link href="/pricing" className="cyber-button-outline">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
