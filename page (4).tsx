import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | IntrusionX Cybersecurity Australia',
  description: 'Read IntrusionX terms and conditions to understand your rights and obligations when using our cybersecurity services.',
  keywords: ['IntrusionX terms conditions', 'cybersecurity service terms Australia'],
  alternates: { canonical: 'https://intrusionx.com.au/terms-and-conditions' },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-16 pb-20">
      <section className="relative py-20 hero-bg hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080d12]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-font text-4xl md:text-5xl font-black text-white mb-3">Terms and Conditions</h1>
          <p className="text-[#8b9bb4] text-sm">Last updated: February 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#8b9bb4] leading-relaxed">
          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using IntrusionX services (&ldquo;Services&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree, do not use our Services. These terms constitute a legally binding agreement between you and IntrusionX (ABN: XX XXX XXX XXX).</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">2. Services</h2>
            <p>IntrusionX provides cybersecurity services including but not limited to endpoint protection, managed detection and response, security monitoring, penetration testing, and cybersecurity consulting. The specific services you receive are defined in your subscription plan or service agreement.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">3. Subscriptions and Billing</h2>
            <p className="mb-3">Subscription plans are billed monthly in advance. By providing payment information, you authorise IntrusionX to charge the applicable fees. All prices are in Australian Dollars (AUD) and inclusive of GST where applicable.</p>
            <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial billing periods.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">4. Your Obligations</h2>
            <p className="mb-3">You agree to:</p>
            <ul className="space-y-2 text-sm">
              {['Provide accurate and complete information when registering', 'Use our Services only for lawful purposes', 'Not attempt to circumvent, disable or interfere with our security features', 'Promptly notify us of any security incidents you become aware of', 'Maintain the confidentiality of your account credentials'].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-[#00e0ff] flex-shrink-0 mt-1">—</span>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by Australian law, IntrusionX shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues. Our total liability to you shall not exceed the fees paid by you in the twelve months preceding the claim.</p>
            <p className="mt-3">Cybersecurity services reduce risk but cannot guarantee complete prevention of all security incidents. We do not warrant that our Services will be uninterrupted or error-free.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">6. Intellectual Property</h2>
            <p>All content, trademarks, software and technology used in providing the Services remain the intellectual property of IntrusionX or its licensors. You may not reproduce, distribute or create derivative works without our express written consent.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">7. Termination</h2>
            <p>IntrusionX may suspend or terminate your access to Services immediately if you breach these Terms, fail to pay fees, or engage in conduct we determine to be harmful to other users or our systems.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">8. Governing Law</h2>
            <p>These Terms are governed by the laws of Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Victoria.</p>
          </div>

          <div>
            <h2 className="heading-font text-xl font-black text-white mb-3">9. Contact</h2>
            <p>For questions about these Terms: <a href="mailto:contact@intrusionx.com.au" className="text-[#00e0ff] hover:underline">contact@intrusionx.com.au</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
