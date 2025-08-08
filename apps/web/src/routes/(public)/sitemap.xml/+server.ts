import { PUBLIC_ORIGIN } from '$env/static/public';
import { pages } from '../../../configs/sitemap';

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    ${pages
      .map(
        page => `
    <url>
      <loc>${PUBLIC_ORIGIN}/${page.slug}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
    `
      )
      .join('')}
  </urlset>`;

  const response = new Response(body);
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/xml');

  return response;
}
