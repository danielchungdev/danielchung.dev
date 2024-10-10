import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Chung | SWE',
  description: 'Daniel Chung\'s Portfolio website :)',
}

export default function RootLayout({ children,}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} background h-screen w-screen overflow-x-hidden`}>
        <div className='w-screen'>
          <div className='m-auto w-full sm:w-3/4 md:w-1/2 lg:w-2/5 2xl:2/6'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
