import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Chung',
  description: "Daniel Chung's Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-mono text-sm min-h-screen bg-[#f0f0f0] dark:bg-[#111111] text-neutral-900 dark:text-neutral-200 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
