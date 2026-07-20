import { motion } from 'framer-motion'
import { Truck, FileText, Smartphone, Zap } from 'lucide-react'

const PILLARS = [
  { icon: Truck,       label: 'Built for Indian Transport', desc: 'Trucks, tankers & heavy vehicles' },
  { icon: FileText,    label: 'GST-Compliant Billing',      desc: 'Auto-calculated, every time' },
  { icon: Smartphone,  label: 'Web + Android App',          desc: 'Manage your fleet from anywhere' },
  { icon: Zap,         label: 'Up & Running in a Day',      desc: 'Free onboarding included' },
]

export default function Stats() {
  return (
    <section className="bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-4 py-2 border-r border-white/10 last:border-r-0 even:border-r-0 lg:even:border-r lg:last:border-r-0"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3">
                <p.icon size={20} className="text-orange-400" />
              </div>
              <div className="text-white font-bold text-sm mb-1 leading-snug">{p.label}</div>
              <div className="text-slate-500 text-xs leading-snug">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
