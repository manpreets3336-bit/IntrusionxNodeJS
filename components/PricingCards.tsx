'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Zap, Users, CheckCircle } from 'lucide-react';

const plans = [
  {
    id: 'essential',
    name: 'Intrusion Essential',
    monthlyPrice: 20,
    recommended: false,
    stripeLink: 'https://buy.stripe.com/dRm4gz05GeT35JBb8weEo02',
    features: [
      'Windows, macOS, Android & iOS',
      'Real-time antivirus & malware protection',
      'Multi-layer ransomware protection',
      'Network threat prevention',
      'Anti-exploit protection',
      'Scam & phishing detection',
      'Crypto mining protection',
      'Disk encryption',
      'Web attack prevention',
      'Anti-fraud & antispam',
    ],
  },
  {
    id: 'premium',
    name: 'Intrusion Premium',
    monthlyPrice: 30,
    recommended: true,
    stripeLink: 'https://buy.stripe.com/00w28rbOoaCNb3V6SgeEo03',
    features: [
      'Everything in Essential, plus:',
      '24/7 device monitoring',
      'Behavioural threat & malware detection',
      'Fileless & stealthy attack detection',
      'Automated isolation of infected devices',
      'Attack timeline visualisation',
      'Human-led support by phone & email',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Elite',
    monthlyPrice: null,
    recommended: false,
    stripeLink: null,
    features: [
      '24/7 global SOC monitoring',
      'Full XDR & MDR suite',
      'SIEM & log management',
      'Vulnerability assessment',
      'Cloud monitoring',
      'Threat detection, investigation & response',
      'Human-led threat hunting',
      'Custom onboarding & SLAs',
      'Cyber insurance support',
    ],
  },
];

const icons = {
  essential: <Shield className="h-8 w-8" />,
  premium: <Zap className="h-8 w-8" />,
  enterprise: <Users className="h-8 w-8" />,
};

function TermsDialog({ planName, stripeLink, onClose }: { planName: string; stripeLink: string; onClose: () => void }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="card-container rounded-2xl p-8 max-w-md w-full">
        <h3 className="heading-font text-xl font-bold text-white mb-2">Before you proceed</h3>
        <p className="text-sm text-[#8b9bb4] mb-6">Please confirm you have read and agree to our terms before proceeding to payment for <strong className="text-white">{planName}</strong>.</p>
        <div className="flex items-start gap-3 mb-6">
          <input
            type="checkbox"
            id="terms-agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-[rgba(0,224,255,0.3)] bg-[#0f1520] text-[#00e0ff]"
          />
          <label htmlFor="terms-agree" className="text-sm text-[#8b9bb4] cursor-pointer">
            I have read and agree to the{' '}
            <Link href="/terms-and-conditions" className="text-[#00e0ff] hover:underline" onClick={onClose}>Terms & Conditions</Link>
            {' '}and{' '}
            <Link href="/privacy-policy" className="text-[#00e0ff] hover:underline" onClick={onClose}>Privacy Policy</Link>
          </label>
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="cyber-button-outline flex-1 py-2.5 text-sm">Cancel</button>
          <a
            href={agreed ? stripeLink : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (!agreed) e.preventDefault(); else onClose(); }}
            className={`flex-1 cyber-button py-2.5 text-sm text-center ${!agreed ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            Proceed to Payment
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PricingCards() {
  const [dialogPlan, setDialogPlan] = useState<{ name: string; stripeLink: string } | null>(null);

  return (
    <>
      {dialogPlan && (
        <TermsDialog
          planName={dialogPlan.name}
          stripeLink={dialogPlan.stripeLink}
          onClose={() => setDialogPlan(null)}
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan) => (
          <div key={plan.id} className={`card-container rounded-2xl p-8 flex flex-col relative ${plan.recommended ? 'border-[rgba(0,224,255,0.4)] shadow-[0_0_40px_rgba(0,224,255,0.1)]' : ''}`}>
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#00e0ff] to-[#a855f7] text-[#080d12] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Most Popular</span>
              </div>
            )}
            <div className="text-[#00e0ff] mb-5">{icons[plan.id as keyof typeof icons]}</div>
            <p className="text-xs font-bold text-[#00e0ff] uppercase tracking-widest mb-2">{plan.id.charAt(0).toUpperCase() + plan.id.slice(1)}</p>
            <h3 className="heading-font text-2xl font-black text-white mb-1">{plan.name}</h3>

            {plan.monthlyPrice ? (
              <div className="mb-2">
                <span className="heading-font text-4xl font-black text-white">${plan.monthlyPrice}</span>
                <span className="text-[#8b9bb4] text-sm ml-1">/month</span>
              </div>
            ) : (
              <div className="mb-2">
                <p className="text-[#8b9bb4] text-sm">Custom pricing for your organisation</p>
                <p className="text-xs text-[#8b9bb4] mt-1 leading-relaxed">Based on endpoints, monitoring level, compliance requirements and cloud scope.</p>
              </div>
            )}

            {plan.monthlyPrice && (
              <p className="text-xs text-[#8b9bb4] mb-4">
                Billed annually: <span className="text-white font-semibold">${plan.monthlyPrice * 12}/year</span>
                <span className="text-[#00e0ff] ml-2">· Multi-device discounts available</span>
              </p>
            )}

            <ul className="space-y-2.5 mb-8 flex-grow mt-4">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#8b9bb4]">
                  <CheckCircle className="h-4 w-4 text-[#00e0ff] flex-shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>

            {plan.stripeLink ? (
              <button
                onClick={() => setDialogPlan({ name: plan.name, stripeLink: plan.stripeLink! })}
                className="w-full cyber-button py-3 mt-auto"
              >
                Get Started
              </button>
            ) : (
              <Link href="/contact" className="w-full cyber-button py-3 mt-auto text-center">
                Contact Us for Pricing
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
