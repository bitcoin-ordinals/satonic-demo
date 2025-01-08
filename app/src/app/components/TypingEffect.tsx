'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
}

export default function TypingEffect({ text }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [text])

  return (
    <h1 className="text-6xl font-bold text-red-500 mb-8">
      {displayText}
      <span className="animate-pulse"></span>
    </h1>
  )
}

