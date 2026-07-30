'use client'

import { PAGES } from '@/src/config/pages.config'
import { MENU } from './menu.data'
import MenuItem from './MenuItem'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

const Menu = () => {
  const pathname = usePathname()

  return (
    <nav className='flex gap-6'>
      {MENU.map(item =>
        <MenuItem 
          key={item.name} 
          menuItem={item} 
          isActive={!!match(item.href)(pathname)}
        />
      )}
    </nav>
  )
}

export default Menu