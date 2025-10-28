import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = typeof window !== 'undefined' && localStorage.getItem('theme')
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    }
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md border border-gray-200 dark:border-gray-700">
      {theme === 'dark' ? '🌙' : '🌞'}
    </button>
  )
}
