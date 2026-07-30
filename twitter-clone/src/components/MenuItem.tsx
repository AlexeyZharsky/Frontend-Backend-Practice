import Link from 'next/link'
import { IMenuItem } from './menu.data'

interface Props {
  menuItem: IMenuItem
  isActive: boolean
}

const MenuItem = ({menuItem, isActive}: Props) => {
  return (
    <Link 
    className={isActive ? 'text-white' : 'text-white/60'}
      href={menuItem.href}
    >
      {menuItem.name}
    </Link>
  )
}

export default MenuItem