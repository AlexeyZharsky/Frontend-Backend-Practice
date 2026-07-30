import { PAGES } from '@/src/config/pages.config'

export interface IMenuItem {
  href: string
  name: string
}

export const MENU: IMenuItem[] = [
  {
    href: PAGES.HOME,
    name: 'Home'
  },
  {
    href: PAGES.EXPLORE,
    name: 'Explore'
  },
  {
    href: PAGES.PROFILE_FAKE,
    name: 'Profile'
  },
]