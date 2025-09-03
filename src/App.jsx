import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white text-black min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <section id="home" className="section scroll-mt-24">
            <Hero />
          </section>
          <section id="about" className="section border-t border-black/10 scroll-mt-24">
            <About />
          </section>
          <section id="projects" className="section border-t border-black/10 scroll-mt-24">
            <Projects />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
