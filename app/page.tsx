import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Zap, Eye, Users, Star, CheckCircle, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cybersecurity Services Australia | IntrusionX',
  description: 'Expert ransomware, malware & phishing protection for Australian businesses and homes. MDR, EDR, 24/7 SOC monitoring & penetration testing. Free consultation.',
  keywords: ['cybersecurity Australia', 'ransomware protection', 'malware protection Australia', 'phishing protection', 'MDR EDR XDR', 'SOC monitoring Australia', 'penetration testing', 'cybersecurity Melbourne Sydney Brisbane Perth Adelaide'],
  alternates: { canonical: 'https://intrusionx.com.au/' },
  openGraph: {
    title: 'Cybersecurity Services Australia | IntrusionX',
    description: 'Expert ransomware, malware & phishing protection for Australian businesses and homes.',
    url: 'https://intrusionx.com.au/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why does cybersecurity matter for my business?', acceptedAnswer: { '@type': 'Answer', text: 'A single cyberattack can shut down operations for days, leak customer data, and destroy years of reputation. The average cost of a data breach in Australia now exceeds $4 million.' } },
    { '@type': 'Question', name: 'What is ransomware and how does it work?', acceptedAnswer: { '@type': 'Answer', text: 'Ransomware encrypts all your files and demands payment to restore access. Attackers deliver it via phishing emails, malicious downloads, or compromised credentials.' } },
    { '@type': 'Question', name: 'Is antivirus software enough to protect my business?', acceptedAnswer: { '@type': 'Answer', text: 'No. Traditional antivirus catches known threats but misses zero-day exploits, fileless attacks, and sophisticated intrusions. Modern cybersecurity requires behavioural analysis, 24/7 monitoring, and human-led threat hunting.' } },
    { '@type': 'Question', name: 'Do small businesses really get targeted by cybercriminals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — over 60% of cyber attacks in Australia target small and medium businesses.' } },
    { '@type': 'Question', name: 'Why should cybersecurity be separate from IT management?', acceptedAnswer: { '@type': 'Answer', text: 'When the same provider manages your IT infrastructure and your cybersecurity, a conflict of interest exists. IntrusionX acts as your independent security layer.' } },
    { '@type': 'Question', name: 'How quickly can IntrusionX respond to an incident?', acceptedAnswer: { '@type': 'Answer', text: 'Our 24/7 global SOC monitors your environment continuously. Automated containment activates within seconds of detecting a threat.' } },
  ],
};

const stats = [
  { number: '99.9%', label: 'Threat Prevention Rate' },
  { number: '10+', label: 'Years of Expertise' },
  { number: '100+', label: 'Protected Clients' },
  { number: '24/7', label: 'SOC Coverage' },
];

const threats = [
  'Ransomware attacks', 'Phishing & email fraud', 'Malware & viruses',
  'Business Email Compromise', 'Cloud account breaches', 'Insider threats',
  'Zero-day exploits', 'Identity theft',
];

const services = [
  { label: 'Managed Detection & Response', sub: 'MDR' },
  { label: '24/7 Global SOC Monitoring', sub: 'SOC' },
  { label: 'Endpoint Protection & EDR', sub: 'EPP / EDR' },
  { label: 'Email & Phishing Protection', sub: 'Email Sec' },
  { label: 'Vulnerability Assessments', sub: 'VAPT' },
  { label: 'Penetration Testing', sub: 'Pen Test' },
  { label: 'Incident Response & Recovery', sub: 'IR' },
  { label: 'Cloud & Microsoft 365 Security', sub: 'Cloud' },
];

const testimonials = [
  { name: 'Sarah Chen', title: 'CISO', company: 'TechCorp Industries', text: 'IntrusionX detected and neutralised a sophisticated APT attack that our previous solution missed entirely. The human-AI combination is unmatched.', rating: 5 },
  { name: 'Michael Rodriguez', title: 'IT Director', company: 'Global Finance Ltd', text: 'The 24/7 SOC response time is incredible. They stopped a ransomware attack in under 3 minutes and delivered full forensics within hours.', rating: 5 },
  { name: 'Dr. Emily Watson', title: 'Security Manager', company: 'Healthcare Systems', text: 'HIPAA compliance, simplified. IntrusionX manages all our security requirements while providing enterprise-grade protection without disrupting operations.', rating: 5 },
];

const faqs = [
  { q: 'Why does cybersecurity matter for my business?', a: 'A single cyberattack can shut down operations for days, leak customer data, and destroy years of reputation. The average cost of a data breach in Australia now exceeds $4 million. Cybersecurity is not optional — it is as essential as locks on your doors.' },
  { q: 'What is ransomware and how does it work?', a: 'Ransomware encrypts all your files and demands payment to restore access. Attackers deliver it via phishing emails, malicious downloads, or compromised credentials. Without proper backups and endpoint protection, recovery can take weeks and cost hundreds of thousands of dollars.' },
  { q: 'Is antivirus software enough to protect my business?', a: 'No. Traditional antivirus catches known threats but misses zero-day exploits, fileless attacks, and sophisticated intrusions. Modern cybersecurity requires behavioural analysis, 24/7 monitoring, and human-led threat hunting — all of which IntrusionX provides.' },
  { q: 'Do small businesses really get targeted by cybercriminals?', a: 'Yes — in fact, small businesses are disproportionately targeted. Attackers know SMBs often have fewer defences and less staff to respond. Over 60% of cyber attacks in Australia target small and medium businesses.' },
  { q: 'Why should cybersecurity be separate from IT management?', a: 'When the same provider manages your IT infrastructure and your cybersecurity, a conflict of interest exists. Security must independently audit and challenge IT decisions — that objectivity disappears when it is the same team. IntrusionX acts as your independent security layer.' },
  { q: 'How quickly can IntrusionX respond to an incident?', a: 'Our 24/7 global SOC monitors your environment continuously. Automated containment activates within seconds of detecting a threat, and our human analysts begin investigation immediately. Most incidents are contained before they escalate.' },
];

const blogPosts = [
  { tag: 'Ransomware', title: 'How Ransomware Attacks Work — And How to Stop Them', excerpt: 'Understand the full attack lifecycle and the defences that break it before it starts.', path: '/blog/how-ransomware-attacks-work', readTime: '5 min read' },
  { tag: 'Phishing', title: 'Why Phishing Is Still the #1 Entry Point for Cybercriminals', excerpt: 'Over 90% of breaches start with a phishing email. Learn how to spot and stop them.', path: '/blog/why-phishing-is-the-top-cyber-threat', readTime: '4 min read' },
  { tag: 'IT vs Security', title: 'Why Your IT Provider Should Not Manage Your Cybersecurity', excerpt: 'One provider for both IT and security creates blind spots. Here is why it matters.', path: '/blog/why-it-provider-should-not-manage-cybersecurity', readTime: '6 min read' },
  { tag: 'Small Business', title: 'The Top 5 Cybersecurity Mistakes Small Australian Businesses Make', excerpt: 'Discover the most common gaps attackers exploit and exactly how to close them.', path: '/blog/cybersecurity-mistakes-small-businesses', readTime: '5 min read' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="pt-16">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center hero-bg hero-grid overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080d12]/30 to-[#080d12]" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="pill mb-6 inline-flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e0ff] animate-pulse" />
                  Australian Cybersecurity Specialists
                </span>
                <h1 className="heading-font text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5">
                  Cyber Threats Stop Here.
                </h1>
                <p className="text-lg md:text-xl text-[#8b9bb4] leading-relaxed mb-8">
                  Enterprise-grade ransomware, malware, virus and phishing protection for Australian businesses and families — 24/7.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="cyber-button cyber-pulse">Get a Free Consultation</Link>
                  <Link href="/for-business" className="cyber-button-outline">Our Services</Link>
                </div>
                <p className="mt-6 text-sm text-[#8b9bb4]">
                  Serving Melbourne · Sydney · Brisbane · Perth · Adelaide and businesses nationwide across Australia
                </p>
              </div>

              {/* Hero image */}
              <div className="hidden lg:block relative">
                <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,224,255,0.15)] subtle-glow">
                  <Image
                    src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80"
                    alt="Cybersecurity padlock protection"
                    width={600} height={480}
                    className="w-full h-[480px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d12]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                    <div className="bg-[rgba(8,13,18,0.85)] backdrop-blur-md border border-[rgba(0,224,255,0.2)] rounded-xl p-3">
                      <p className="heading-font text-xl font-black text-[#00e0ff]">99.9%</p>
                      <p className="text-xs text-[#8b9bb4]">Threat Prevention</p>
                    </div>
                    <div className="bg-[rgba(8,13,18,0.85)] backdrop-blur-md border border-[rgba(0,224,255,0.2)] rounded-xl p-3">
                      <p className="heading-font text-xl font-black text-[#00e0ff]">24/7</p>
                      <p className="text-xs text-[#8b9bb4]">SOC Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-[rgba(0,224,255,0.08)] bg-[#0f1520]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x divide-[rgba(0,224,255,0.1)]">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:px-6 py-2">
                  <p className="heading-font text-3xl font-black accent-gradient-text">{stat.number}</p>
                  <p className="text-xs text-[#8b9bb4] uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,224,255,0.12)] order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                  alt="Cybersecurity SOC monitoring team"
                  width={600} height={460}
                  className="w-full h-[380px] md:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d12]/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[rgba(8,13,18,0.85)] backdrop-blur-md border border-[rgba(0,224,255,0.2)] rounded-xl px-4 py-3">
                  <p className="text-xs text-[#8b9bb4] mb-0.5">Protected Clients</p>
                  <p className="heading-font text-2xl font-black text-white">100+ <span className="text-[#00e0ff]">↑</span></p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="pill mb-4 inline-flex">Why Choose Us</span>
                <h2 className="heading-font text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Cybersecurity built around<br />
                  <span className="accent-gradient-text">one goal: protecting you.</span>
                </h2>
                <p className="text-[#8b9bb4] mb-4 leading-relaxed">Most IT companies offer &ldquo;security&rdquo; as an added service. We are built differently. Cybersecurity is our only discipline — not a side feature managed between helpdesk tickets.</p>
                <p className="text-[#8b9bb4] mb-8 leading-relaxed">Our specialists combine advanced AI threat detection with human-led analysis to deliver continuous, independent protection against modern cyber attacks.</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: <Zap className="h-5 w-5" />, title: 'AI-Powered Detection', desc: 'Machine learning catches threats in real-time — before they become incidents.' },
                    { icon: <Eye className="h-5 w-5" />, title: '24/7 SOC Monitoring', desc: 'Expert analysts watching your environment around the clock, globally.' },
                    { icon: <Users className="h-5 w-5" />, title: 'Human-Led Threat Hunting', desc: 'Professionals proactively hunting advanced threats that automated tools miss.' },
                  ].map((item, i) => (
                    <div key={i} className="card-container rounded-xl p-4 flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-[rgba(0,224,255,0.08)] text-[#00e0ff] flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div>
                        <p className="heading-font text-sm font-bold text-white mb-0.5">{item.title}</p>
                        <p className="text-sm text-[#8b9bb4] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/why-intrusionx" className="mt-6 inline-flex items-center gap-2 text-[#00e0ff] text-sm font-semibold hover:gap-3 transition-all">
                  Learn more about our approach <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Threats Grid */}
        <section className="py-20 bg-[#0f1520]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-flex">Threat Landscape</span>
              <h2 className="heading-font text-4xl md:text-5xl font-black text-white mb-4">What We Protect You From</h2>
              <p className="text-[#8b9bb4] max-w-2xl mx-auto">Cybercrime in Australia continues to rise. We defend against the full spectrum of modern threats.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {threats.map((threat, i) => (
                <div key={i} className="card-container rounded-xl p-4 flex items-center gap-3">
                  <AlertTriangle className="h-4 w-4 text-[#00e0ff] flex-shrink-0" />
                  <span className="text-sm text-[#8b9bb4]">{threat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT vs Security */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="pill mb-4 inline-flex">Why Choose Independent Security</span>
                <h2 className="heading-font text-4xl font-black text-white mb-6 leading-tight">Your IT provider should not be your security provider.</h2>
                <p className="text-[#8b9bb4] mb-4 leading-relaxed">When the same company manages your IT infrastructure and your cybersecurity, a conflict of interest is created. Security requires independent oversight — auditing and challenging IT decisions.</p>
                <p className="text-[#8b9bb4] mb-8 leading-relaxed">IntrusionX acts as your independent security layer. Our only focus is protecting your business — with no divided loyalties, no gaps in accountability.</p>
                <div className="highlight-box mb-6">
                  <p className="text-white font-medium text-sm">Security requires specialisation, continuous threat intelligence, and dedicated monitoring.</p>
                  <p className="text-[#00e0ff] font-semibold text-sm mt-1">That is our primary trait.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="card-container rounded-xl p-5">
                    <p className="heading-font text-xs font-bold text-[#8b9bb4] uppercase tracking-widest mb-3">IT providers focus on</p>
                    <ul className="space-y-2">
                      {['System uptime & availability', 'Infrastructure deployment', 'Helpdesk & ticket management', 'Software updates'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[#8b9bb4]">
                          <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-container rounded-xl p-5 border-[rgba(0,224,255,0.25)]">
                    <p className="heading-font text-xs font-bold text-[#00e0ff] uppercase tracking-widest mb-3">Cybersecurity requires</p>
                    <ul className="space-y-2">
                      {['Independent threat monitoring', 'Human-led threat hunting', 'Attack simulation & red teaming', 'Compliance validation & audit', 'Incident containment & forensics'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white">
                          <CheckCircle className="h-3.5 w-3.5 text-[#00e0ff] flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,224,255,0.12)] hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                  alt="Cybersecurity threat monitoring"
                  width={600} height={500}
                  className="w-full min-h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]/60" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#0f1520]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="pill mb-4 inline-flex">What We Do</span>
                <h2 className="heading-font text-4xl md:text-5xl font-black text-white">Our Core Services</h2>
              </div>
              <Link href="/for-business" className="inline-flex items-center gap-2 text-[#00e0ff] text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((svc, i) => (
                <div key={i} className="card-container rounded-xl p-5">
                  <span className="text-xs font-bold text-[#00e0ff] uppercase tracking-widest">{svc.sub}</span>
                  <p className="text-sm font-medium text-white mt-2 leading-snug">{svc.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Protect */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-flex">Who We Serve</span>
              <h2 className="heading-font text-4xl md:text-5xl font-black text-white">Built for Every Target</h2>
              <p className="text-[#8b9bb4] mt-3 max-w-xl mx-auto">Attackers don&apos;t discriminate. Neither do we.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Shield className="h-8 w-8" />, title: 'Small & Medium Businesses', desc: 'Affordable enterprise security scaled for SMBs — no compromises.' },
                { icon: <Users className="h-8 w-8" />, title: 'Enterprise Organisations', desc: 'Full security stack with 24/7 SOC, XDR, and compliance reporting.' },
                { icon: <Zap className="h-8 w-8" />, title: 'Remote Workforces', desc: 'Endpoint and cloud protection for distributed teams across Australia.' },
                { icon: <Eye className="h-8 w-8" />, title: 'Individuals & Families', desc: 'Consumer-grade price, enterprise-grade protection for your home.' },
              ].map((item, i) => (
                <div key={i} className="card-container rounded-xl p-6">
                  <div className="text-[#00e0ff] mb-4">{item.icon}</div>
                  <h3 className="heading-font text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8b9bb4] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#0f1520]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-flex">Client Stories</span>
              <h2 className="heading-font text-4xl md:text-5xl font-black text-white">Trusted Across Australia</h2>
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

        {/* Blog */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="pill mb-4 inline-flex">Security Knowledge</span>
                <h2 className="heading-font text-4xl md:text-5xl font-black text-white">Learn. Stay Protected.</h2>
                <p className="text-[#8b9bb4] mt-3 max-w-xl">Expert guides on ransomware, phishing, malware and more — for Australian businesses and home users.</p>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#00e0ff] text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap">
                View all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {blogPosts.map((post, i) => (
                <Link key={i} href={post.path} className="card-container rounded-xl p-6 flex flex-col group block">
                  <span className="text-xs font-bold text-[#00e0ff] uppercase tracking-widest mb-3">{post.tag}</span>
                  <h3 className="heading-font text-base font-bold text-white mb-3 leading-snug group-hover:text-[#00e0ff] transition-colors">{post.title}</h3>
                  <p className="text-sm text-[#8b9bb4] leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-[#8b9bb4]">
                    <BookOpen className="h-3.5 w-3.5" />{post.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#0f1520]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="pill mb-4 inline-flex">Common Questions</span>
              <h2 className="heading-font text-4xl font-black text-white mb-3">Why Cybersecurity Matters</h2>
              <p className="text-[#8b9bb4] max-w-2xl mx-auto">Answers to the questions every Australian business and homeowner should know.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-container rounded-2xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,224,255,0.05)] to-[rgba(168,85,247,0.05)]" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h2 className="heading-font text-3xl md:text-4xl font-black text-white mb-3">Ready to stop threats before they happen?</h2>
                  <p className="text-[#8b9bb4]">Book a free consultation. Serving Melbourne, Sydney, Brisbane, Perth, Adelaide and all of Australia.</p>
                  <p className="text-sm text-[#8b9bb4] mt-3">
                    <a href="tel:+61499468971" className="text-[#00e0ff] hover:underline">+61 499 468 971</a>
                    <span className="mx-2 opacity-40">|</span>
                    <a href="mailto:contact@intrusionx.com.au" className="text-[#00e0ff] hover:underline">contact@intrusionx.com.au</a>
                  </p>
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
    </>
  );
}
