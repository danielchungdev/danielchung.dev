'use client'

import { useState, useEffect } from 'react'

const FULL_NAME = 'daniel chung'
const TYPING_SPEED = 80

export default function TypingName() {
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (displayed.length >= FULL_NAME.length) return
    const timeout = setTimeout(() => {
      setDisplayed(FULL_NAME.slice(0, displayed.length + 1))
    }, TYPING_SPEED)
    return () => clearTimeout(timeout)
  }, [displayed])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {displayed}
      <span
        className="inline-block w-[0.55em] h-[1em] bg-blue-600 ml-1 align-middle"
        style={{ visibility: cursorVisible ? 'visible' : 'hidden' }}
      />
    </span>
  )
}
