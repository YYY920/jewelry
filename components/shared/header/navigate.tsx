'use client'
import React, { useState } from 'react'
interface DropdownProps {
  label: string
  items: string[]
}
const menuItems = [
  {
    label: 'Esoteric Materials',
    items: [
      'Astrology',
      'Tarot Cards',
      'Crystals & Amulets',
      'Sigils & Grimoires',
    ],
  },
  {
    label: 'T-Shirts',
    items: ['Astrology Prints', 'Symbolic Designs', 'Custom Orders'],
  },
  {
    label: 'Jewelry',
    items: ['Mystic Talismans', 'Zodiac Necklaces', 'Rings & Bracelets'],
  },
]

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className='relative mx-4'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className='text-white text-lg py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
        {label}
      </button>
      {isOpen && (
        <div className='absolute top-full left-0 bg-white text-black flex flex-col p-2 rounded-md shadow-lg'>
          {items.map((item, index) => (
            <a key={index} href='#' className='py-1 px-4 hover:underline'>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className='flex justify-center bg-[#13141E] p-4 relative'>
      <a
        href='#'
        className='mx-4 text-white text-lg py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
      >
        Home
      </a>

      {menuItems.map((item, index) => (
        <Dropdown key={index} label={item.label} items={item.items} />
      ))}
      <a
        href='#'
        className='mx-4 text-white text-lg py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'
      >
        About us
      </a>
    </nav>
  )
}

export default Navbar
