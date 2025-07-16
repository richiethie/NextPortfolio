// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://richiethie.com'
  
  // All your pages including the 4 blog posts
  const pages = [
    { url: '', priority: 1 },
    { url: '/about', priority: 0.8 },
    { url: '/projects', priority: 0.8 }, 
    { url: '/contact', priority: 0.7 },
    { url: '/blog', priority: 0.9 },
    // Your actual blog posts
    { url: '/blog/building-filmshare-my-first-community-platform', priority: 0.6 },
    { url: '/blog/lessons-from-launching-my-first-saas', priority: 0.6 },
    { url: '/blog/thinking-of-my-next-big-idea', priority: 0.6 },
    { url: '/blog/why-i-switched-to-golang-for-my-backend', priority: 0.6 },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.url.startsWith('/blog/') ? 'weekly' : 'monthly' as const,
    priority: page.priority,
  }))
}