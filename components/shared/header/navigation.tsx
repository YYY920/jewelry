import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import Link from 'next/link'
export default function Navigation() {
  return (
    <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
      <Button
        variant='ghost'
        className='dark header-button flex items-center gap-1 text-base [&_svg]:size-6'
      >
        <MenuIcon />
        All
      </Button>
      <div className='flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
        {data.headerMenus.map((menu) => (
          <Link href={menu.href} key={menu.href} className='header-button !p-2'>
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
