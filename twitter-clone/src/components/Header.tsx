import Image from 'next/image'
import Link from 'next/link'

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

      <nav className='flex gap-6 text-white/80'>
        <Link href='/'>Home</Link>
        <Link href='/'>Explore</Link>
        <Link href='/'>Profile</Link>
      </nav>
    </header>
  )
}

export default Header