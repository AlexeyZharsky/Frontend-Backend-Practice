import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

const Header = () => {
  return(
    <header className='border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black'>
      <Link
        href='/'
        className='flex items-center gap-3'  
      >
        <Image 
          src='/x-logo.svg'
          alt='X Logo'
          width={68}
          height={68}
          priority
        />
      </Link>

      <Menu />
    </header>
  )
}

export default Header