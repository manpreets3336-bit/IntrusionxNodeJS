import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[rgba(0,224,255,0.08)] border border-[rgba(0,224,255,0.2)] mb-6">
          <Shield className="h-10 w-10 text-[#00e0ff]" />
        </div>
        <h1 className="heading-font text-8xl font-black text-white mb-4">404</h1>
        <p className="heading-font text-2xl font-black text-white mb-3">Page Not Found</p>
        <p className="text-[#8b9bb4] mb-8 max-w-md mx-auto">This page doesn&apos;t exist or has been moved. Let&apos;s get you back to safety.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="cyber-button">Back to Home</Link>
          <Link href="/contact" className="cyber-button-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
