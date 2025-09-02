import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    // Update document class and save preference
    console.log('useEffect triggered, isDark:', isDark)
    console.log('document.documentElement.classList before:', document.documentElement.classList.toString())
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      console.log('Added dark class')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      console.log('Removed dark class')
    }
    console.log('document.documentElement.classList after:', document.documentElement.classList.toString())
  }, [isDark])

  const toggleTheme = () => {
    console.log('toggleTheme called, current isDark:', isDark)
    setIsDark(!isDark)
    console.log('toggleTheme after setState, new value should be:', !isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}