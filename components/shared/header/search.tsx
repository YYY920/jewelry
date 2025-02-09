import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'

const categories = ['Pearl Rings', 'Pearl Earrings', 'Pearl Pendants']

export default function Search() {
  return (
    <div className='relative w-full max-w-2xl shadow-md  py-6 rounded-lg'>
      <form
        action='/search'
        method='GET'
        className='flex items-center h-10 gap-2 '
      >
        <Select name='category'>
          <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-l-md'>
            <SelectValue placeholder='All' />
          </SelectTrigger>
          <SelectContent position='popper' className='z-[150]'>
            <SelectItem value='all'>All</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          className='flex-1 dark:border-gray-200 bg-gray-100 text-black text-base h-full'
          placeholder={`Search Site ${APP_NAME}`}
          name='itemSearch'
          type='search'
        />
        <button
          type='submit'
          className='bg-primary text-black rounded-md h-full px-3 py-2'
        >
          <SearchIcon className='w-6 h-6' />
        </button>
      </form>
    </div>
  )
}
