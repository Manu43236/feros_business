import { motion } from 'framer-motion'
import MockDashboard from './MockDashboard'

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero({ onDemoClick }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — copy */}
        <motion.div initial="hidden" animate="visible" className="flex flex-col">

          {/* Badge */}
          <motion.div variants={item} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="text-base">🇮🇳</span>
              Built for Indian Logistics Companies
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight mb-6"
          >
            The Complete Platform<br />
            for{' '}
            <span className="text-gradient">Indian Transport</span>
            <br />Companies
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            custom={2}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
          >
            From LR creation to GST invoice, fleet servicing to driver payroll —
            FEROS brings your entire transport operation under one roof.{' '}
            <span className="text-slate-300 font-medium">No spreadsheets. No chaos.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} custom={3} className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={onDemoClick}
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Request a Free Demo →
            </button>
            <button
              onClick={() => scrollTo('features')}
              className="bg-white/8 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all duration-200"
            >
              See All Features
            </button>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={item} custom={4} className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              { icon: '✓', text: 'GST-Ready Invoicing' },
              { icon: '✓', text: 'Mobile App Included' },
              { icon: '✓', text: 'No Setup Fee' },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-1.5 text-slate-400 text-sm">
                <span className="text-green-400 font-bold">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — mock dashboard */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[500px]">
            <MockDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
