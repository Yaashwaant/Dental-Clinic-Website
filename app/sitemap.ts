import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shreedentalcare.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // We can add more URLs here if they add distinct pages in the future.
    // For now, it's a single page application, so the root is the main priority.
  ];
}
