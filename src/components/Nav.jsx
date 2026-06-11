import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Who It\'s For', href: '#for' },
  { label: 'How It Works', href: '#how' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Nav({ onDemoClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <img src="/feros_logo.png" alt="FEROS" className="h-9 w-auto object-contain" />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onDemoClick}
            className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-lg hover:shadow-orange-500/30"
          >
            Request Demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex flex-col gap-3 md:hidden"
          >
            {LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-slate-200 hover:text-white text-base font-medium py-2 text-left transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onDemoClick() }}
              className="mt-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-5 rounded-lg transition-colors"
            >
              Request Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
