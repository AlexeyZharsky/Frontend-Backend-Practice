import type { PropsWithChildren } from 'react'
import Header from '@/src/components/Header'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className='min-h-screen'>
      <Header />
        <div className='w-full max-w-xl flex jestify-center px-4 py-8'>
        { children }
      </div>
    </div>
  )
}

export default Layout