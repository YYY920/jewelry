'use client'
import React, { useState } from 'react'

interface DropdownProps {
  label: string
  items?: { name: string; href: string }[]
}

const menuItems = [
  {
    label: 'Home',
    items: [],
  },
  {
    label: 'All Jewellery',
    items: [
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Ready To Ship', href: '#' },
      { name: 'Gift Cards', href: '#' },
    ],
  },
  {
    label: 'Rings',
    items: [
      { name: 'Diamond Rings', href: '#' },
      { name: 'Gemstone Rings', href: '#' },
      { name: 'Gold Rings', href: '#' },
      { name: 'Silver Rings', href: '#' },
    ],
  },
  {
    label: 'Necklaces',
    items: [
      { name: 'Diamond Necklaces', href: '#' },
      { name: 'Gemstone Necklaces', href: '#' },
      { name: 'Charms', href: '#' },
    ],
  },
  {
    label: 'Bracelets',
    items: [
      { name: 'Tennis Bracelets', href: '#' },
      { name: 'Diamond Bracelets', href: '#' },
      { name: 'Charm Bracelets', href: '#' },
      { name: 'Bangles', href: '#' },
    ],
  },
  {
    label: 'About',
    items: [
      { name: 'Contact Us', href: '#' },
      { name: 'Jewellery Care', href: '#' },
      { name: 'Order ＆ Shipping', href: '#' },
    ],
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
      <button className='text-white mb-2 text-lg py-2 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full'>
        {label}
      </button>
      {items && items.length > 0 && isOpen && (
        <div className='absolute top-full left-0 bg-white text-black flex flex-col gap-2 p-4 rounded-md shadow-lg w-max'>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className='py-1 px-4 hover:underline'
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className='flex justify-center bg-[#13141E] p-4 relative z-50'>
      {menuItems.map((item, index) => (
        <Dropdown key={index} label={item.label} items={item.items} />
      ))}
    </nav>
  )
}

export default Navbar
