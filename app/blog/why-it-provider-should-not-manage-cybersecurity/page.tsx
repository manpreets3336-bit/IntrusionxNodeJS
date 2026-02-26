import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Your IT Provider Should Not Manage Your Cybersecurity | IntrusionX',
  description: 'Outsourcing cybersecurity to your IT provider creates conflicts of interest and security blind spots. Learn why independent cybersecurity oversight is essential.',
  keywords: ['IT vs cybersecurity Australia', 'independent cybersecurity', 'managed security services Australia', 'why separate IT and security'],
  alternates: { canonical: 'https://intrusionx.com.au/blog/why-it-provider-should-not-manage-cybersecurity' },
  openGraph: { title: 'Why Your IT Provider Should Not Manage Your Cybersecurity', type: 'article' },
};

export default function ITvsSecurityBlog() {
  return (
    <div className="pt-16">
      <section className="relative py-20 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#8b9bb4] hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="pill mb-4 inline-flex">IT vs Security</span>
          <h1 className="heading-font text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Why Your IT Provider Should Not Manage Your Cybersecurity
          </h1>
          <p className="text-[#8b9bb4] text-sm">6 min read · February 2025 · By IntrusionX Security Team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#8b9bb4] leading-relaxed">
          <p className="text-lg text-white">Many Australian businesses outsource both their IT management and cybersecurity to the same provider. It feels efficient and cost-effective — but it creates a structural problem that significantly increases your security risk.</p>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">The Conflict of Interest Problem</h2>
            <p>IT management and cybersecurity have fundamentally different — and sometimes competing — objectives.</p>
            <p className="mt-3">An IT provider is incentivised to keep systems running, minimise disruption, and avoid adding complexity. A cybersecurity provider must independently audit those same systems, challenge configurations, and sometimes recommend changes that create short-term IT friction in order to reduce long-term risk.</p>
            <p className="mt-3">When the same company does both, the harder security questions often go unasked — and unaddressed.</p>
          </div>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">What IT Providers Are Good At</h2>
            <div className="space-y-2">
              {['Managing servers, networks and cloud infrastructure', 'Deploying and updating software', 'Helpdesk and user support', 'Backup and disaster recovery', 'Hardware procurement and lifecycle management'].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">What Cybersecurity Requires That IT Cannot Provide Objectively</h2>
            <div className="space-y-2">
              {['Independent auditing of the very systems IT manages', 'Threat hunting that questions whether current configurations are secure', 'Attack simulation that tests whether IT defences actually work', 'Incident response where objectivity and accountability are critical', 'Compliance validation without bias towards existing implementations'].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#00e0ff] flex-shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">Real-World Consequences</h2>
            <div className="space-y-4">
              {[
                { heading: 'Gaps go unchallenged', body: 'If an IT provider set up your remote access incorrectly or left a firewall rule open for convenience, they are unlikely to flag this as a security risk — it would mean acknowledging their own error.' },
                { heading: 'Incident investigations lack objectivity', body: "When a breach occurs and the same provider managed both IT and security, their investigation may unconsciously minimise findings that implicate their own configurations or decisions." },
                { heading: 'Compliance posture is overstated', body: "IT providers may tick compliance boxes without deeply understanding the security intent behind them, leading to superficial adherence that doesn't reduce actual risk." },
              ].map((item, i) => (
                <div key={i} className="card-container rounded-xl p-5">
                  <p className="heading-font text-sm font-bold text-white mb-2">{item.heading}</p>
                  <p className="text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="highlight-box">
            <p className="text-white font-semibold">IntrusionX operates as your independent security layer — separate from IT, accountable only to you, and focused exclusively on protecting your business from threats. Security is our only discipline.</p>
          </div>

          <div className="border-t border-[rgba(0,224,255,0.08)] pt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="cyber-button">Book a Free Consultation</Link>
            <Link href="/why-intrusionx" className="cyber-button-outline">Why IntrusionX</Link>
          </div>

          <div className="border-t border-[rgba(0,224,255,0.08)] pt-8">
            <p className="text-sm font-semibold text-white mb-4">Continue reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'How Ransomware Attacks Work', path: '/blog/how-ransomware-attacks-work' },
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
  );
}
