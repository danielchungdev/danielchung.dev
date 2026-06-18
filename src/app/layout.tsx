import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Chung | Freelance Web Developer in Panama',
  description:
    'Daniel Chung is a freelance full-stack web developer based in Panama City, Panama. Specializing in React, Next.js, TypeScript, and AI tools. Available for freelance projects worldwide.',
  keywords: [
    'freelance web developer Panama',
    'desarrollador web freelance Panama',
    'développeur web freelance Panama',
    'web developer Panama City',
    'best web developer Panama',
    'mejor desarrollador web Panama',
    'React developer Panama',
    'Next.js developer Panama',
    'full-stack developer Panama',
    'AI tools developer',
    'Daniel Chung developer',
    'software engineer Panama',
    'ingeniero de software Panama',
  ],
  authors: [{ name: 'Daniel Chung', url: 'https://danielchung.dev' }],
  creator: 'Daniel Chung',
  metadataBase: new URL('https://danielchung.dev'),
  alternates: {
    canonical: 'https://danielchung.dev',
  },
  openGraph: {
    title: 'Daniel Chung | Freelance Web Developer in Panama',
    description:
      'Daniel Chung is a freelance full-stack web developer based in Panama City, Panama. Specializing in React, Next.js, TypeScript, and AI tools.',
    url: 'https://danielchung.dev',
    siteName: 'Daniel Chung',
    type: 'profile',
    locale: 'en_US',
    images: [
      {
        url: '/images/background.jpg',
        width: 1919,
        height: 946,
        alt: 'Daniel Chung — Freelance Web Developer in Panama',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Chung | Freelance Web Developer in Panama',
    description:
      'Freelance full-stack web developer in Panama City, Panama. React, Next.js, TypeScript, AI tools.',
    images: ['/images/background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
