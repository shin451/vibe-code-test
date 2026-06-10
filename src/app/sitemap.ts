import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { globalContent } from '@/content/global';

export default function sitemap(): MetadataRoute.Sitemap {
  return globalContent.navItems.map((item) => ({
    url: `${SITE_URL}${item.href === '/' ? '' : item.href}`,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.7,
  }));
}
