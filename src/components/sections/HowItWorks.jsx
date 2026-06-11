import { motion } from 'framer-motion'
import { UserPlus, LayoutDashboard, TrendingUp } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: UserPlus,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    title: 'Set Up in Minutes',
    desc: 'Add your fleet, staff, and clients. FEROS is designed for transport operators — not IT departments. Our team helps you get started within a day.',
    points: ['Add vehicles & staff profiles', 'Import existing client data', 'Configure roles & access'],
  },
  {
    num: '02',
    icon: LayoutDashboard,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    title: 'Manage From One Dashboard',
    desc: 'Create orders, generate LRs, track vehicles, record attendance, and manage inventory — all from a single, clear interface on web or mobile.',
    points: ['Real-time fleet visibility', 'One-click LR generation', 'Automated payroll calculations'],
  },
  {
    num: '03',
    icon: TrendingUp,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    title: 'Grow With Confidence',
    desc: 'Use built-in reports to track revenue, monitor fleet performance, identify cost leaks, and make decisions backed by real data.',
    points: ['Route-wise profitability', 'Fleet utilisation reports', 'Outstanding invoice tracking'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Up and running in 3 steps
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            No complex implementation. No months of configuration. Just results.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 1
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 py-12 ${i < STEPS.length - 1 ? 'border-b border-slate-100' : ''}`}
              >
                {/* Icon block */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center`}>
                    <Icon className={step.color} size={28} />
                  </div>
                  <span className="text-5xl font-black text-slate-100 leading-none select-none">{step.num}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:text-right' : ''}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-5 max-w-lg">{step.desc}</p>
                  <div className={`flex flex-col gap-2 ${isEven ? 'lg:items-end' : ''}`}>
                    {step.points.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-slate-600 text-sm">
                        <span className={`text-xs font-bold ${step.color}`}>→</span>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
