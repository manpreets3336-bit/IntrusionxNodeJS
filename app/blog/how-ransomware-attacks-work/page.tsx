import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Ransomware Attacks Work — And How to Stop Them | IntrusionX',
  description: 'Understand how ransomware infects Australian businesses and homes, encrypts your files, and demands payment — and learn the exact defences that stop it cold.',
  keywords: ['how ransomware works Australia', 'ransomware protection', 'ransomware prevention', 'ransomware attack business Australia', 'stop ransomware'],
  alternates: { canonical: 'https://intrusionx.com.au/blog/how-ransomware-attacks-work' },
  openGraph: { title: 'How Ransomware Attacks Work — And How to Stop Them', description: 'The full attack lifecycle and the defences that break it before it starts.', type: 'article' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Ransomware Attacks Work — And How to Stop Them',
  author: { '@type': 'Organization', name: 'IntrusionX' },
  publisher: { '@type': 'Organization', name: 'IntrusionX', url: 'https://intrusionx.com.au' },
  datePublished: '2025-02-01',
  description: 'Understand how ransomware infects Australian businesses and homes and learn the exact defences that stop it.',
};

export default function RansomwareBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="pt-16">
        <section className="relative py-20 hero-bg hero-grid overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#8b9bb4] hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <span className="pill mb-4 inline-flex">Ransomware</span>
            <h1 className="heading-font text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              How Ransomware Attacks Work — And How to Stop Them
            </h1>
            <p className="text-[#8b9bb4] text-sm">5 min read · February 2025 · By IntrusionX Security Team</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#8b9bb4] leading-relaxed">
            <p className="text-lg text-white">Ransomware is one of the most destructive forms of cybercrime targeting Australian businesses and households today. In 2023–24, the Australian Signals Directorate received over 94,000 cybercrime reports — and ransomware accounted for a significant share of the most financially damaging incidents.</p>

            <div>
              <h2 className="heading-font text-2xl font-black text-white mb-4">What Is Ransomware?</h2>
              <p>Ransomware is malicious software that encrypts your files — documents, databases, photos, financial records — making them completely inaccessible. The attacker then demands a ransom payment (typically in cryptocurrency) in exchange for a decryption key. Payment, however, does not guarantee recovery.</p>
            </div>

            <div>
              <h2 className="heading-font text-2xl font-black text-white mb-4">How a Ransomware Attack Unfolds</h2>
              <div className="space-y-4">
                {[
                  { step: '1. Initial Access', desc: 'Attackers gain entry through a phishing email, compromised password, exposed Remote Desktop Protocol (RDP) port, or an unpatched software vulnerability. This is often the easiest part — most organisations have at least one weak entry point.' },
                  { step: '2. Persistence & Lateral Movement', desc: 'Once inside, the attacker moves quietly through your network, escalating privileges and identifying the most valuable data. This phase can last days or weeks without detection.' },
                  { step: '3. Data Exfiltration', desc: 'Before encrypting, many attackers steal your data first. This enables double extortion — pay the ransom to decrypt your files, or they publish your confidential data publicly.' },
                  { step: '4. Encryption', desc: 'The ransomware payload deploys, encrypting files across every connected device simultaneously. Within minutes, your entire operation can be paralysed.' },
                  { step: '5. Ransom Demand', desc: 'A note appears demanding payment — typically tens of thousands to millions of dollars. Deadlines are set, pressure is applied, and a countdown timer starts.' },
                ].map((item, i) => (
                  <div key={i} className="card-container rounded-xl p-5">
                    <p className="heading-font text-sm font-bold text-[#00e0ff] mb-2">{item.step}</p>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="heading-font text-2xl font-black text-white mb-4">How to Protect Against Ransomware</h2>
              <div className="space-y-3">
                {[
                  'Deploy endpoint protection with behavioural analysis — not just signature-based antivirus',
                  'Enable multi-factor authentication (MFA) on all accounts, especially email and remote access',
                  'Maintain offline and offsite backups tested regularly for restoration',
                  'Patch operating systems and software promptly — most attacks exploit known vulnerabilities',
                  'Implement network segmentation to limit lateral movement',
                  'Train staff to recognise phishing emails — the most common delivery mechanism',
                  'Use 24/7 SOC monitoring to detect suspicious behaviour before encryption begins',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#00e0ff] flex-shrink-0 mt-0.5" />{item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-container rounded-xl p-6 border-[rgba(0,224,255,0.25)]">
              <h2 className="heading-font text-xl font-black text-white mb-3">How IntrusionX Stops Ransomware</h2>
              <p className="text-sm mb-4">Our endpoint protection combines AI-driven behavioural detection with 24/7 SOC monitoring to identify and contain ransomware before it can encrypt a single file. Automated isolation quarantines infected endpoints in seconds — stopping lateral spread immediately.</p>
              <p className="text-sm">Our ransomware rollback capability can restore affected files to their pre-attack state even when encryption does occur — minimising downtime to minutes rather than days.</p>
            </div>

            <div className="border-t border-[rgba(0,224,255,0.08)] pt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="cyber-button">Book a Free Security Assessment</Link>
              <Link href="/for-business" className="cyber-button-outline">View Business Protection</Link>
            </div>

            <div className="border-t border-[rgba(0,224,255,0.08)] pt-8">
              <p className="text-sm font-semibold text-white mb-4">Continue reading</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Why Phishing Is the #1 Entry Point', path: '/blog/why-phishing-is-the-top-cyber-threat' },
                  { title: 'Top 5 Cybersecurity Mistakes Australian SMBs Make', path: '/blog/cybersecurity-mistakes-small-businesses' },
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
    </>
  );
}
