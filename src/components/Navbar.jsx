import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume.pdf', label: 'Resume' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur transition-colors duration-300">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#home" className="text-black dark:text-white uppercase tracking-widest text-xs sm:text-sm font-bold">YOUSSEF OUARAD</a>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              console.log('Button clicked! isDark:', isDark)
              toggleTheme()
            }}
            className="p-2 rounded-lg border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
        </div>

        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white uppercase tracking-widest text-xs transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

