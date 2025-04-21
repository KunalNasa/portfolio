// components/MetadataProvider.tsx
'use client';

import { useEffect } from 'react';

interface MetadataProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const MetadataProvider = ({ title, description, imageUrl, url }: MetadataProps) => {
  useEffect(() => {
    document.title = title;

    const updateMeta = (selector: string, attr: string, value: string) => {
      let tag = document.querySelector(selector) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        if (selector.includes('property')) tag.setAttribute('property', attr);
        else tag.setAttribute('name', attr);
        document.head.appendChild(tag);
      }
      tag.content = value;
    };

    // Basic metadata (good for Gmail, SEO, etc.)
    updateMeta("meta[name='description']", 'description', description);

    // Open Graph (for LinkedIn, Facebook, etc.)
    updateMeta("meta[property='og:title']", 'og:title', title);
    updateMeta("meta[property='og:description']", 'og:description', description);
    updateMeta("meta[property='og:url']", 'og:url', url);
    updateMeta("meta[property='og:image']", 'og:image', imageUrl);
    updateMeta("meta[property='og:type']", 'og:type', 'website');

    // Twitter card
    updateMeta("meta[name='twitter:card']", 'twitter:card', 'summary_large_image');
    updateMeta("meta[name='twitter:title']", 'twitter:title', title);
    updateMeta("meta[name='twitter:description']", 'twitter:description', description);
    updateMeta("meta[name='twitter:image']", 'twitter:image', imageUrl);
    updateMeta("meta[name='twitter:url']", 'twitter:url', url);

    // Favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) favicon.href = '/Images/AppLogo.ico';
  }, [title, description, imageUrl, url]);

  return null;
};

export default MetadataProvider;
