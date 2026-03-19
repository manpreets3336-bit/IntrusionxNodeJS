import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://intrusionx.com.au';

  return [
    { url: baseUrl, lastModified: new Date('2025-03-01'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/for-home`, lastModified: new Date('2025-02-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/for-business`, lastModified: new Date('2025-02-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date('2025-02-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/why-intrusionx`, lastModified: new Date('2025-02-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2025-02-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2025-02-01'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-ransomware-attacks-work`, lastModified: new Date('2025-02-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/why-phishing-is-the-top-cyber-threat`, lastModified: new Date('2025-02-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/why-it-provider-should-not-manage-cybersecurity`, lastModified: new Date('2025-02-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/cybersecurity-mistakes-small-businesses`, lastModified: new Date('2025-02-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date('2025-01-01'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date('2025-01-01'), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
