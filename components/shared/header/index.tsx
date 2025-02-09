'use client'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Menu from './menu'
import { useState } from 'react'
import Search from './search'
import Navbar from './navigate'
import { SearchIcon, MenuIcon, XIcon } from 'lucide-react'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='bg-[#13141E] text-white fixed top-0 left-0 w-full'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Image
              src='/icons/logo.png'
              width={30}
              height={30}
              alt={`${APP_NAME} logo`}
            />
            <span className='ml-2 text-l md:text-xl font-bold'>{APP_NAME}</span>
          </div>

          {!isSearchOpen && (
            <div>
              {/*  大屏幕: Navbar，*/}
              <nav className='hidden md:flex'>
                <Navbar />
              </nav>

              {/*  小屏幕：汉堡菜单按钮 */}
              <button
                className='md:hidden'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XIcon className='h-8 w-8' />
                ) : (
                  <MenuIcon className='h-8 w-8' />
                )}
              </button>
            </div>
          )}

          {isSearchOpen && (
            <div className='flex justify-center bg-[#13141E]  relative w-[60%]'>
              <Search />
            </div>
          )}

          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className='focus:outline-none'
          >
            <SearchIcon className='h-8 w-8 cursor-pointer' />
          </button>
          <Menu />
          {/*  小屏幕：展开的汉堡菜单 */}
          {isMenuOpen && (
            <div className='md:hidden bg-[#13141E] text-white flex flex-col items-center space-y-4 p-4 absolute top-full left-0 w-full z-40'>
              <Navbar />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
