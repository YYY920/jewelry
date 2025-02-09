'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HomeCarousel({
  items,
}: {
  items: {
    image: string
    url: string
    title: string
    buttonCaption: string
  }[]
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      dir='ltr'
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-full mx-auto bg-[#13141E]'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <Link href={item.url}>
              <div className='flex aspect-[16/6] items-center justify-center p-6 relative -m-1'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute w-2/5 left-16 md:left-48 top-1/2 transform -translate-y-2/3'>
                  <h2 className='text-xl md:text-6xl md:leading-[1.4] font-normal mb-4  text-primary text-[#ffe4a8]'>
                    {item.title}
                  </h2>
                  <Button className='hidden md:block'>
                    {item.buttonCaption}
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0 md:left-12' />
      <CarouselNext className='right-0 md:right-12' />
    </Carousel>
  )
}
