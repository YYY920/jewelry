import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'

import Search from './search'
import Navbar from './navigate'
export default function Header() {
  return (
    <header className='bg-[#13141E] text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1 '
            >
              <Image
                src='/icons/logo.png'
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME}
            </Link>
          </div>
          {/*big screen（>=md）show */}
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>
          <Menu />
        </div>
        {/*small screen（<md）show */}
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      <Navbar />
    </header>
  )
}
