'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TypingName from './TypingName'
import AnimatedContent from './AnimatedContent'

export default function ThemeWrapper() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    setMounted(true)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-[#f0f0f0] dark:bg-[#111111] text-neutral-900 dark:text-neutral-200 transition-colors duration-300 min-h-screen">
        <main className="max-w-2xl mx-auto px-6 py-16">

          <div className="flex justify-between items-start mb-24">
            <h1 className="font-bold text-2xl"><TypingName /></h1>
            {mounted && (
              <motion.button
                onClick={toggle}
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors duration-150 mt-1 cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? '[light]' : '[dark]'}
              </motion.button>
            )}
          </div>

          <hr className="border-neutral-700 dark:border-neutral-600 mb-12 -ml-[calc(50vw-50%)] w-[50vw]" />

          <AnimatedContent isDark={isDark} />

        </main>
      </div>
    </div>
  )
}
