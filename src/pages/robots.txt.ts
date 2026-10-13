import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: string) => `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${sitemapURL}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site ?? 'https://sergisalgueiro.pages.dev').href;
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
