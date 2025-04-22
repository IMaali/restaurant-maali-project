'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    const isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDark);
  };
  

  if (!mounted) return null

  return (
    <button
    onClick={toggleTheme}
    className="px-4 py-2 bg-red-200 text-red-500 dark:bg-gray-800 dark:text-white"
    >
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
  
  
  )
}
