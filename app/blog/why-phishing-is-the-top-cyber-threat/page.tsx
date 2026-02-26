import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Phishing Is the #1 Cyber Entry Point | IntrusionX',
  description: 'Over 90% of breaches start with a phishing email. Learn how attackers target Australians, what to look for, and how to protect your business.',
  keywords: ['phishing attacks Australia', 'how to spot phishing', 'phishing protection business', 'email security Australia', 'BEC protection'],
  alternates: { canonical: 'https://intrusionx.com.au/blog/why-phishing-is-the-top-cyber-threat' },
  openGraph: { title: 'Why Phishing Is Still the #1 Entry Point for Cybercriminals', type: 'article' },
};

export default function PhishingBlog() {
  return (
    <div className="pt-16">
      <section className="relative py-20 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#8b9bb4] hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="pill mb-4 inline-flex">Phishing</span>
          <h1 className="heading-font text-4xl md:text-5xl font-black text-white leading-tight mb-4">Why Phishing Is Still the #1 Entry Point for Cybercriminals</h1>
          <p className="text-[#8b9bb4] text-sm">4 min read · February 2025 · By IntrusionX Security Team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#8b9bb4] leading-relaxed">
          <p className="text-lg text-white">More than 90% of successful cyberattacks begin with a phishing email. Despite decades of awareness campaigns, phishing remains devastatingly effective — and attackers are getting better at it every year, using AI to craft personalised, convincing messages at scale.</p>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">What Is Phishing?</h2>
            <p>Phishing is a social engineering attack where criminals impersonate trusted organisations — banks, the ATO, Australia Post, Microsoft, or even your own colleagues — to trick you into revealing passwords, clicking malicious links, or transferring money.</p>
          </div>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">Common Phishing Tactics Used Against Australians</h2>
            <div className="space-y-3">
              {[
                { tactic: 'Fake ATO or myGov Notices', desc: 'Emails claiming you owe a tax debt or that your account needs verification — linking to convincing fake login pages.' },
                { tactic: 'Australia Post / Courier Scams', desc: 'SMS and email messages claiming a parcel is held, requiring you to pay a small fee or enter delivery details.' },
                { tactic: 'Business Email Compromise (BEC)', desc: 'Attackers impersonate a CEO or finance manager to instruct staff to transfer funds urgently or update bank account details.' },
                { tactic: 'Microsoft / Google Account Alerts', desc: 'Fake security alerts claiming your account has been compromised, directing you to enter credentials on a spoofed login page.' },
                { tactic: 'Invoice Fraud', desc: 'Legitimate-looking invoices from impersonated suppliers with modified bank account details to redirect payments.' },
              ].map((item, i) => (
                <div key={i} className="card-container rounded-xl p-5">
                  <p className="heading-font text-sm font-bold text-[#00e0ff] mb-1">{item.tactic}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">How to Spot a Phishing Email</h2>
            <div className="space-y-3">
              {[
                "The sender's email address doesn't match the organisation it claims to be from",
                'Urgent or threatening language demanding immediate action',
                "Links that don't match the claimed destination (hover before clicking)",
                'Poor spelling, grammar or unusual formatting',
                'Requests for passwords, banking details or Tax File Numbers via email',
                'Unexpected attachments — especially .zip, .exe, .docm files',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-font text-2xl font-black text-white mb-4">How to Protect Against Phishing</h2>
            <div className="space-y-3">
              {[
                'Deploy email filtering with anti-phishing and sandboxing technology',
                'Enable multi-factor authentication (MFA) — so stolen passwords alone aren\'t enough',
                'Conduct regular staff phishing simulation training',
                'Implement DMARC, DKIM and SPF email authentication records',
                'Use endpoint protection that blocks known malicious URLs in real time',
                'Establish a clear process for verifying bank account changes and payment requests verbally',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#00e0ff] flex-shrink-0 mt-0.5" />{item}
                </div>
              ))}
            </div>
          </div>

          <div className="highlight-box">
            <p className="text-white font-semibold">IntrusionX Email &amp; Phishing Security includes anti-phishing filters, attachment sandboxing, BEC protection and real-time URL blocking — stopping phishing attacks before they reach your inbox.</p>
          </div>

          <div className="border-t border-[rgba(0,224,255,0.08)] pt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="cyber-button">Book a Free Consultation</Link>
            <Link href="/for-business" className="cyber-button-outline">View Business Solutions</Link>
          </div>

          <div className="border-t border-[rgba(0,224,255,0.08)] pt-8">
            <p className="text-sm font-semibold text-white mb-4">Continue reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'How Ransomware Attacks Work', path: '/blog/how-ransomware-attacks-work' },
                { title: 'Why Your IT Provider Should Not Manage Security', path: '/blog/why-it-provider-should-not-manage-cybersecurity' },
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
