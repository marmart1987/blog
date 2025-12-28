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
export const colors = {
  "v1.6.0": "yellow",
  "v1.5.0": "purple"
}

function updateColors(input: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};

  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      result[key] = `bg-${input[key]}-200 dark:bg-${input[key]}-800`;
    }
  }

  return result;
}


export const TAG_CLASSES =  updateColors(colors);

console.log(TAG_CLASSES);