import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'unnervingCircles',
  description:
    'TODO',
  href: 'https://astro-erudite.vercel.app',
  author: 'Martin Thomas',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/tags',
    label: 'tags',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  // {
  //   href: 'https://github.com/jktrn',
  //   label: 'GitHub',
  // },
  // {
  //   href: 'https://twitter.com/enscry',
  //   label: 'Twitter',
  // },
  // {
  //   href: 'mailto:jason@enscribe.dev',
  //   label: 'Email',
  // },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export const TAG_CLASSES: Record<string,string> =  {
  "other": "bg-yellow-300 dark:bg-yellow-800",
  // "v1.5.0": "bg-purple-300 dark:bg-purple-800",
  // "v1.3.0": "bg-slate-300 dark:bg-slate-800",
  // "v1.0.0": "bg-cyan-300 dark:bg-cyan-800", 
}