import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | IntrusionX Cybersecurity Australia',
  description: 'IntrusionX privacy policy explains how we collect, use, and protect your information with advanced cybersecurity standards.',
  keywords: ['IntrusionX privacy policy', 'cybersecurity company privacy Australia'],
  alternates: { canonical: 'https://intrusionx.com.au/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 pb-20">
      <section className="relative py-20 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-font text-4xl md:text-5xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-[#8b9bb4] text-sm">Last updated: February 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#8b9bb4] leading-relaxed">
          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">1. Introduction</h2>
            <p>IntrusionX (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles. This Privacy Policy explains how we collect, use, store and disclose your personal information.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of personal information:</p>
            <ul className="space-y-2 text-sm">
              {['Name, email address, phone number and company name when you contact us or sign up for services', 'Billing and payment information processed securely through Stripe', 'Device and system information collected as part of providing cybersecurity services', 'Website usage data including IP address, browser type and pages visited via analytics tools', 'Communications you send us via email, phone or contact forms'].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#00e0ff] flex-shrink-0 mt-1">—</span>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use your personal information to:</p>
            <ul className="space-y-2 text-sm">
              {['Provide, operate and improve our cybersecurity services', 'Process payments and manage your account', 'Respond to enquiries and provide customer support', 'Send service-related communications and security alerts', 'Comply with legal obligations and enforce our terms', 'Improve our website and services through analytics'].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#00e0ff] flex-shrink-0 mt-1">—</span>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">4. Data Security</h2>
            <p>As a cybersecurity company, we apply the highest standards to protecting your data. We use encryption in transit and at rest, access controls, and continuous monitoring of our own systems. We never sell your personal information to third parties.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services which may process your data under their own privacy policies: Stripe (payment processing), Formspree (contact form submissions), and Google Analytics (website analytics). Each of these services maintains their own privacy policies and data handling practices.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">6. Your Rights</h2>
            <p>Under Australian privacy law, you have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at <a href="mailto:contact@intrusionx.com.au" className="text-[#00e0ff] hover:underline">contact@intrusionx.com.au</a>.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">7. Cookies</h2>
            <p>Our website uses cookies for analytics purposes. You can disable cookies in your browser settings, though this may affect website functionality.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">8. Contact Us</h2>
            <p>For privacy-related enquiries: <a href="mailto:contact@intrusionx.com.au" className="text-[#00e0ff] hover:underline">contact@intrusionx.com.au</a> | <a href="tel:+61499468971" className="text-[#00e0ff] hover:underline">+61 499 468 971</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
