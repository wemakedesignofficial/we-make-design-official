import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/work/handmade-haven/`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work/architecture-studio/`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work/cherry-celebrations/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/work/digital-wedding-invitation/`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work/poster-design/`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
