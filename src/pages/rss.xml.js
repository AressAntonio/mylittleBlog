import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'AressAntonio | Blog',
    description: 'Mi viaje en el mundo de la programacion',
    site: 'https://aressantonio-littleblog.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-es</language>`,
  });
}