import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid rgba(139, 92, 246, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#8b5cf6',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm bg-secondary/30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Roshan Ali. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Built with React, Tailwind & Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}

export default App
