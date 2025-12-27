import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'unnervingcircles',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://astro-erudite.vercel.app',
  author: 'jktrn',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
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

// export const TAG_CLASSES: Record<string, string> = {
  // uoft:
  //   'bg-blue-300 text-primary dark:bg-blue-800 dark:text-white flex items-center gap-x-1 text-xs',
//   'v1.6.0': `bg-${stringToTailwindColor("HELLO", {
//     colors: ['red', 'green', 'blue', 'yellow', 'purple', 'pink'],
//     shades: [300, 400, 500, 600, 700],
// })}`

/*`bg-purple-200 text-secondary-foreground dark:bg-purple-900 dark:text-white flex items-center gap-x-1 text-xs',
  // advice: 'bg-lime-200 text-secondary-foreground dark:bg-lime-900 dark:text-white flex items-center gap-x-1 text-xs',
  // project:
  //   'bg-purple-500 text-white hover:bg-purple-600 flex items-center gap-x-1 text-xs',
  // 'blog-challenge':
  //   'bg-slate-300 text-secondary-foreground dark:bg-slate-700/80 flex items-center gap-x-1 text-xs',
  // 'blaugust-2025':
  //   'bg-slate-300/60 text-secondary-foreground dark:bg-slate-800 flex items-center gap-x-1 text-xs',
  // 'blaugust':
  //   'bg-slate-300/60 text-secondary-foreground dark:bg-slate-800 flex items-center gap-x-1 text-xs',
  // tutorial:
  //   'bg-amber-200 text-secondary-foreground dark:bg-amber-900 dark:text-white flex items-center gap-x-1 text-xs',
  // analysis:
    'bg-indigo-500 text-white hover:bg-indigo-600 flex items-center gap-x-1 text-xs',
    */
// }