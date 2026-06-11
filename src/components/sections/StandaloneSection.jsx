import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const OTHERS = [
  'Forces your workflow into a generic template',
  'Same modules, same screens for every business',
  'Built for "logistics" broadly — not your industry',
  'Roles that don\'t match how your team actually works',
  'You adapt to the software',
]

const FEROS = [
  'Configures to match how your business operates',
  'Roles and access built around your team structure',
  'Designed specifically for Indian road transport',
  'From tankers to container trucks — each gets its own flow',
  'The software adapts to you',
]

export default function StandaloneSection() {
  return (
    <section className="relative py-24 px-6 bg-navy-950 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/80 to-navy-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-orange-500/6 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label">Our Difference</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            We are not a common solution<br />
            <span className="text-gradient">built for all transports.</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Every transport business operates differently —
            different cargo, different clients, different teams, different billing.
            FEROS is a{' '}
            <span className="text-white font-semibold">standalone platform built around each business</span>,
            not a generic mold you're forced to fit into.
          </p>
        </motion.div>

        {/* Comparison table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/4 border border-white/10 rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                <X size={15} className="text-red-400" />
              </div>
              <span className="text-slate-300 font-semibold text-base">Generic Platforms</span>
            </div>
            <ul className="space-y-4">
              {OTHERS.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <X size={14} className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-slate-400 text-sm leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FEROS */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/30 rounded-2xl p-7 relative overflow-hidden"
          >
            <div className="absolute top-3 right-3">
              <span className="text-xs font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-2.5 py-1 rounded-full">FEROS</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Check size={15} className="text-orange-400" />
              </div>
              <span className="text-white font-semibold text-base">FEROS — Built for Yours</span>
            </div>
            <ul className="space-y-4">
              {FEROS.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check size={14} className="text-orange-400 mt-0.5 shrink-0" />
                  <span className="text-slate-200 text-sm leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Strong callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-block bg-white/5 border border-white/15 rounded-2xl px-8 py-6">
            <p className="text-white text-lg font-semibold leading-relaxed">
              "A tanker operator in Vizag doesn't run like a container fleet in Pune.
              <span className="text-orange-400"> FEROS knows that — and it works that way."</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
