import type { Metadata } from 'next';
import { Roboto, Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://intrusionx.com.au'),
  title: {
    default: 'Cybersecurity Services Australia | IntrusionX',
    template: '%s | IntrusionX',
  },
  description: 'Expert ransomware, malware & phishing protection for Australian businesses and homes. MDR, EDR, 24/7 SOC monitoring & penetration testing. Free consultation.',
  keywords: ['cybersecurity Australia', 'ransomware protection', 'malware protection Australia', 'phishing protection', 'MDR EDR XDR', 'SOC monitoring Australia', 'penetration testing', 'cybersecurity Melbourne Sydney Brisbane Perth Adelaide'],
  authors: [{ name: 'IntrusionX' }],
  creator: 'IntrusionX',
  publisher: 'IntrusionX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://intrusionx.com.au',
    siteName: 'IntrusionX',
    title: 'Cybersecurity Services Australia | IntrusionX',
    description: 'Expert ransomware, malware & phishing protection for Australian businesses and homes.',
    images: [{ url: '/images/social-preview.jpg', width: 1200, height: 630, alt: 'IntrusionX Cybersecurity Australia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Services Australia | IntrusionX',
    description: 'Expert ransomware, malware & phishing protection for Australian businesses and homes.',
    images: ['/images/social-preview.jpg'],
  },
  verification: {
    google: '',
  },
  alternates: {
    canonical: 'https://intrusionx.com.au',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://intrusionx.com.au/#organization',
      name: 'IntrusionX',
      url: 'https://intrusionx.com.au',
      logo: 'https://intrusionx.com.au/favicon.png',
      telephone: '+61499468971',
      email: 'contact@intrusionx.com.au',
      address: { '@type': 'PostalAddress', addressCountry: 'AU' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      sameAs: ['https://www.facebook.com/share/185qG65NKf/', 'https://www.instagram.com/intrusionx_'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://intrusionx.com.au/#website',
      name: 'IntrusionX',
      url: 'https://intrusionx.com.au',
      publisher: { '@id': 'https://intrusionx.com.au/#organization' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${roboto.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.placename" content="Australia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HZRL1GLGEX" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HZRL1GLGEX');`
        }} />
      </head>
      <body className="bg-[#080d12] text-[#c8d6e8]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
