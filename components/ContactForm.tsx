'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const inputClass = "w-full px-4 py-3 bg-[#0f1520] border border-[rgba(0,224,255,0.15)] rounded-lg text-white placeholder-[#4a5568] focus:outline-none focus:border-[#00e0ff] focus:ring-1 focus:ring-[rgba(0,224,255,0.3)] transition-all text-sm";

export default function ContactForm() {
  const [formData, setFormData] = useState({ fullName: '', workEmail: '', companyName: '', serviceInterest: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xeorvgbj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ fullName: '', workEmail: '', companyName: '', serviceInterest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="card-container rounded-2xl p-8">
      <h2 className="heading-font text-2xl font-black text-white mb-2">Send Us a Message</h2>
      <p className="text-[#8b9bb4] text-sm mb-8">Fill in your details and we&apos;ll get back to you within 2 hours during business hours.</p>

      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-[rgba(0,224,255,0.1)] border border-[rgba(0,224,255,0.3)] flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✓</span>
          </div>
          <h3 className="heading-font text-xl font-bold text-white mb-2">Message sent!</h3>
          <p className="text-[#8b9bb4] text-sm">We&apos;ll be in touch within 2 hours during business hours.</p>
          <button onClick={() => setStatus('idle')} className="mt-6 text-[#00e0ff] text-sm hover:underline">Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-[#8b9bb4] uppercase tracking-wider mb-2">Full Name *</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Jane Smith" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#8b9bb4] uppercase tracking-wider mb-2">Email Address *</label>
              <input name="workEmail" type="email" value={formData.workEmail} onChange={handleChange} required placeholder="jane@company.com.au" className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8b9bb4] uppercase tracking-wider mb-2">Company Name</label>
            <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your company (optional)" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8b9bb4] uppercase tracking-wider mb-2">Service Interest</label>
            <select name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} className={inputClass}>
              <option value="" className="bg-[#0f1520]">Select a service...</option>
              <option value="Home Protection" className="bg-[#0f1520]">Home Protection</option>
              <option value="Business Security" className="bg-[#0f1520]">Business Security</option>
              <option value="MDR / SOC" className="bg-[#0f1520]">MDR / SOC Monitoring</option>
              <option value="Penetration Testing" className="bg-[#0f1520]">Penetration Testing</option>
              <option value="Incident Response" className="bg-[#0f1520]">Incident Response</option>
              <option value="General Enquiry" className="bg-[#0f1520]">General Enquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#8b9bb4] uppercase tracking-wider mb-2">Message *</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your security needs or concerns..." className={`${inputClass} resize-none`} />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
          )}

          <button type="submit" disabled={status === 'sending'} className="w-full cyber-button py-4 text-base disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : <><Send className="h-4 w-4" /> Send Message</>}
          </button>

          <p className="text-xs text-[#8b9bb4] text-center">
            By submitting this form you agree to our{' '}
            <a href="/privacy-policy" className="text-[#00e0ff] hover:underline">Privacy Policy</a>.
            We never share your information.
          </p>
        </form>
      )}
    </div>
  );
}
