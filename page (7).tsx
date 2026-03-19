import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Cybersecurity Australia | Ransomware & Malware Protection',
  description: 'IntrusionX provides enterprise-grade home cybersecurity for Australian families — real-time malware detection, anti-phishing, ransomware rollback. From $20/month.',
  keywords: ['home cybersecurity Australia', 'antivirus home', 'ransomware protection home', 'malware removal Australia', 'protect home computer', 'family cybersecurity'],
  alternates: { canonical: 'https://intrusionx.com.au/for-home' },
};

const threats = [
  'Computer viruses & malware', 'Ransomware file encryption',
  'Phishing scams & email fraud', 'Identity theft',
  'Online banking fraud', 'Social media account compromise',
];

const warningSigns = [
  { sign: 'Slow system performance', detail: 'Malware often consumes resources silently in the background.' },
  { sign: 'Unexpected pop-ups', detail: 'Adware or spyware may have been installed without your knowledge.' },
  { sign: 'Files becoming inaccessible', detail: 'A key early indicator of ransomware encryption.' },
  { sign: 'Suspicious account activity', detail: 'Could signal compromised credentials or identity theft.' },
  { sign: 'Unknown programs installed', detail: 'Attackers often install backdoor software after an initial breach.' },
  { sign: 'Emails sent automatically from your account', detail: 'A common sign your email has been compromised and is being used to spread malware.' },
  { sign: 'Frequent computer crashes or freezes', detail: 'Malware can destabilise your system, causing unexpected shutdowns and corrupted files.' },
  { sign: 'Mouse Moves on Its Own or Typing Happens Without You', detail: 'A clear sign of remote access malware or a keylogger — an attacker may have live control of your device right now.' },
];

const protections = [
  'Real-time malware detection', 'Anti-phishing & scam filtering',
  'Ransomware rollback protection', 'Secure VPN access',
  'Password management tools', 'Remote expert assistance',
];

const faqs = [
  { q: 'Do I really need cybersecurity for my home computer?', a: 'Yes. Cybercriminals specifically target home users because they tend to have weaker defences than businesses. Phishing emails, fake SMS messages, and malware downloads are all common attacks on home devices in Australia.' },
  { q: 'What is the difference between antivirus and IntrusionX?', a: 'Antivirus software detects known threats. IntrusionX uses behavioural analysis, real-time SOC monitoring, ransomware rollback, and expert human response — catching threats that signature-based antivirus misses entirely.' },
  { q: 'Can IntrusionX help if my device has already been compromised?', a: 'Yes. Our remote assistance team can analyse and clean compromised devices, remove malware, recover files where possible, and harden your system to prevent re-infection.' },
  { q: 'How much does home protection cost?', a: 'Our home protection plans start from $20/month. View our full pricing page for details on what each plan includes.' },
];

export default function ForHomePage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative py-28 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="pill mb-5 inline-flex">Home Protection</span>
            <h1 className="heading-font text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Protect Your Home from Ransomware, Malware, Viruses, Phishing &amp; Online Scams
            </h1>
            <div className="space-y-3 text-[#8b9bb4] mb-8">
              <p>Cybercriminals are increasingly targeting Australian households through phishing emails, fake SMS messages, malicious apps and ransomware.</p>
              <p>IntrusionX brings enterprise-grade cybersecurity to your home — protecting your devices, identity and online accounts.</p>
              <p className="text-[#00e0ff] font-semibold">Security is our primary trait — not just antivirus software.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="cyber-button cyber-pulse">View Protection Plans</Link>
              <Link href="/contact" className="cyber-button-outline">Ask a Question</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Threats */}
      <section className="py-24 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="pill mb-4 inline-flex">Why Families Are Targeted</span>
              <h2 className="heading-font text-4xl font-black text-white mb-5 leading-tight">
                Attackers target home users because they assume weaker defences.
              </h2>
              <p className="text-[#8b9bb4] mb-8 leading-relaxed">A single successful phishing email or ransomware infection can cost thousands to recover from. We make sure it doesn&apos;t get that far.</p>
              <ul className="space-y-3">
                {threats.map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#8b9bb4]">
                    <AlertTriangle className="h-4 w-4 text-[#00e0ff] flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-container rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
                alt="Home cybersecurity protection for Australian families"
                width={600} height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="pill mb-4 inline-flex">Warning Signs</span>
            <h2 className="heading-font text-4xl font-black text-white mb-3">Has your device been hacked?</h2>
            <p className="text-[#8b9bb4] max-w-2xl mx-auto">If you notice any combination of these signs, act immediately — early detection dramatically reduces damage and recovery cost.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {warningSigns.map((item, i) => (
              <div key={i} className="card-container rounded-xl p-5">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="heading-font text-sm font-bold text-white leading-snug">{item.sign}</p>
                </div>
                <p className="text-xs text-[#8b9bb4] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Protect */}
      <section className="py-24 bg-[#0f1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="pill mb-4 inline-flex">Home Protection</span>
            <h2 className="heading-font text-4xl font-black text-white">Everything You Get</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {protections.map((p, i) => (
              <div key={i} className="card-container rounded-xl p-5 flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#00e0ff] flex-shrink-0" />
                <span className="text-sm text-white font-medium">{p}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="cyber-button inline-flex">View Full Plans & Pricing</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="pill mb-4 inline-flex">Questions Answered</span>
            <h2 className="heading-font text-4xl font-black text-white">Common Questions</h2>
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
          <div className="card-container rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,224,255,0.05)] to-[rgba(168,85,247,0.05)]" />
            <div className="relative z-10">
              <h2 className="heading-font text-3xl font-black text-white mb-3">Protect your home today</h2>
              <p className="text-[#8b9bb4] mb-8 max-w-xl mx-auto">Starting from just $20/month. No lock-in. Cancel anytime.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing" className="cyber-button cyber-pulse">View Plans from $20/mo</Link>
                <Link href="/contact" className="cyber-button-outline">Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
