import type { Metadata } from 'next'
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import './globals.css'

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={playfair.variable}>
      <body>{children}</body>
    </html>
  )
}
