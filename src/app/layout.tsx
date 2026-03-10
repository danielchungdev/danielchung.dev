import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Chung',
  description: "Daniel Chung's Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f0f0f0] font-mono text-sm text-neutral-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}
