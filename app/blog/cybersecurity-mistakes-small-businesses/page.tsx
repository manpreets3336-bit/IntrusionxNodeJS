import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 5 Cybersecurity Mistakes Australian SMBs Make | IntrusionX',
  description: 'Discover the most common cybersecurity mistakes that put small Australian businesses at risk — weak passwords, unpatched software, poor remote access and more.',
  keywords: ['cybersecurity mistakes small business Australia', 'small business cyber attack Australia', 'SMB cybersecurity Australia', 'how to secure small business Australia'],
  alternates: { canonical: 'https://intrusionx.com.au/blog/cybersecurity-mistakes-small-businesses' },
  openGraph: { title: 'Top 5 Cybersecurity Mistakes Small Australian Businesses Make', type: 'article' },
};

const mistakes = [
  {
    num: '01',
    mistake: 'Relying on Passwords Alone',
    problem: 'Weak, reused, or compromised passwords are the leading cause of account breaches. A single employee reusing a password across personal and business accounts creates a direct entry point for attackers.',
    fix: 'Enable multi-factor authentication (MFA) on every business account — email, cloud storage, accounting software, remote access tools. This single step blocks over 99% of automated credential attacks.',
  },
  {
    num: '02',
    mistake: 'Treating Software Updates as Optional',
    problem: 'Unpatched software is one of the most exploited vulnerabilities in the world. Attackers actively scan for businesses running outdated versions of Windows, web browsers, plugins, and network equipment.',
    fix: 'Automate operating system and application updates. Prioritise patching internet-facing systems and remote access tools within 48 hours of a critical security update being released.',
  },
  {
    num: '03',
    mistake: 'Using Basic Antivirus as a Complete Security Strategy',
    problem: "Traditional antivirus software catches known malware signatures but misses zero-day exploits, fileless attacks, ransomware, and targeted intrusions. It provides a false sense of complete protection.",
    fix: 'Deploy endpoint detection and response (EDR) tools with behavioural analysis, and ensure 24/7 monitoring is in place to detect threats that bypass automated defences.',
  },
  {
    num: '04',
    mistake: 'Leaving Remote Access Poorly Secured',
    problem: "Since COVID-19, Remote Desktop Protocol (RDP) and VPN access have become critical business tools — and prime attack targets. Exposed RDP ports with weak passwords are actively scanned and brute-forced every day.",
    fix: 'Disable RDP unless necessary. If required, place it behind a VPN with MFA, restrict access by IP where possible, and monitor login attempts for anomalies.',
  },
  {
    num: '05',
    mistake: 'Having No Incident Response Plan',
    problem: 'When an attack occurs, the first hours are critical. Businesses without a plan waste precious time figuring out who to call, what to isolate, and how to communicate — dramatically worsening the outcome.',
    fix: 'Create a simple incident response checklist: who to notify internally and externally, how to isolate affected systems, what to document, and which cybersecurity partner to contact immediately.',
  },
];

export default function SmallBusinessBlog() {
  return (
    <div className="pt-16">
      <section className="relative py-20 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#8b9bb4] hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="pill mb-4 inline-flex">Small Business</span>
          <h1 className="heading-font text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            The Top 5 Cybersecurity Mistakes Small Australian Businesses Make
          </h1>
          <p className="text-[#8b9bb4] text-sm">5 min read · February 2025 · By IntrusionX Security Team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#8b9bb4] leading-relaxed">
          <p className="text-lg text-white">Over 60% of cyber attacks in Australia target small and medium businesses. Attackers know SMBs often have fewer defences, smaller security budgets, and limited staff to respond. These are the five mistakes that get businesses compromised most often — and exactly how to fix them.</p>

          <div className="space-y-6">
            {mistakes.map((item, i) => (
              <div key={i} className="card-container rounded-xl p-7">
                <div className="flex items-start gap-4 mb-3">
                  <span className="heading-font text-3xl font-black accent-gradient-text flex-shrink-0">{item.num}</span>
                  <h3 className="heading-font text-lg font-black text-white leading-tight">{item.mistake}</h3>
                </div>
                <p className="text-sm mb-3"><span className="text-yellow-400 font-semibold">The problem: </span>{item.problem}</p>
                <p className="text-sm"><span className="text-[#00e0ff] font-semibold">The fix: </span>{item.fix}</p>
              </div>
            ))}
          </div>

          <div className="highlight-box">
            <p className="text-white font-semibold">IntrusionX works with Australian SMBs to close these gaps fast — from MFA deployment to 24/7 endpoint monitoring and incident response support. Security is our only focus.</p>
          </div>

          <div className="border-t border-[rgba(0,224,255,0.08)] pt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="cyber-button">Book a Free Security Assessment</Link>
            <Link href="/for-business" className="cyber-button-outline">View Business Protection</Link>
          </div>

          <div className="border-t border-[rgba(0,224,255,0.08)] pt-8">
            <p className="text-sm font-semibold text-white mb-4">Continue reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'How Ransomware Attacks Work', path: '/blog/how-ransomware-attacks-work' },
                { title: 'Why Phishing Is the #1 Cyber Entry Point', path: '/blog/why-phishing-is-the-top-cyber-threat' },
              ].map((post, i) => (
                <Link key={i} href={post.path} className="card-container rounded-xl p-4 flex items-center justify-between gap-3 group">
                  <span className="text-sm text-[#8b9bb4] group-hover:text-white transition-colors">{post.title}</span>
                  <ArrowRight className="h-4 w-4 text-[#00e0ff] flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
