import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <section id="home" className="section scroll-mt-24">
            <Hero />
          </section>
          <section id="about" className="section border-t border-black/10 dark:border-white/10 scroll-mt-24">
            <About />
          </section>
          <section id="projects" className="section border-t border-black/10 dark:border-white/10 scroll-mt-24">
            <Projects />
          </section>
          <section id="contact" className="section border-t border-black/10 dark:border-white/10 scroll-mt-24">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
