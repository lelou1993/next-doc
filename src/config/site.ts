export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'next-doc',
  description:
    'Rich-text editor components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Docs',
      href: '/docs',
    },
    {
      title: 'Edit',
      href: '/edit',
    },
  ],
  links: {
    twitter: 'https://twitter.com/zbeyens',
    github: 'https://github.com/udecode/plate',
    docs: 'https://platejs.org',
  },
};
