import { motion } from 'framer-motion'
import { Truck, Factory, Boxes, HardHat, Droplets } from 'lucide-react'

const SEGMENTS = [
  {
    icon: Truck,
    color: 'bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white',
    title: 'Transport Companies',
    desc: 'Managing multiple trucks, clients, and routes? FEROS centralises everything so you can scale without hiring more office staff.',
    pains: ['Order tracking', 'Client invoicing', 'Driver management'],
  },
  {
    icon: Factory,
    color: 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white',
    title: 'Fleet Operators',
    desc: 'Know the exact status, location, fuel cost, and service due date of every vehicle in real time, from anywhere.',
    pains: ['Vehicle tracking', 'Fuel monitoring', 'Service scheduling'],
  },
  {
    icon: Boxes,
    color: 'bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white',
    title: 'Logistics Providers',
    desc: 'Handle complex multi-client, multi-route operations with ease. Generate client-wise P&L and invoice on time, every time.',
    pains: ['Multi-client ops', 'Route planning', 'P&L visibility'],
  },
  {
    icon: HardHat,
    color: 'bg-yellow-500/10 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white',
    title: 'Construction & Mining',
    desc: 'Track heavy vehicle usage, site-wise assignments, fuel consumption, and maintenance on project vehicles.',
    pains: ['Site assignments', 'Heavy vehicle tracking', 'Fuel cost control'],
  },
  {
    icon: Droplets,
    color: 'bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white',
    title: 'Tanker Operators',
    desc: 'Manage tanker routes, cargo details, load/unload records, and client billing specific to liquid cargo operations.',
    pains: ['Route management', 'Cargo tracking', 'Cargo billing'],
  },
]

export default function ForSection({ onDemoClick }) {
  return (
    <section id="for" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="section-label">Who It's For</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Built for every Indian logistics business
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From small fleet owners to large transport companies — FEROS adapts to your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEGMENTS.map((seg, i) => {
            const Icon = seg.icon
            return (
              <motion.div
                key={seg.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${seg.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{seg.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{seg.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {seg.pains.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-slate-400 text-xs">
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 5 * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-navy-900 border border-navy-700 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-white font-bold text-base mb-2">Not sure if it fits?</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We work with transport businesses of all sizes. Let us show you exactly how FEROS can work for yours.
              </p>
            </div>
            <button
              onClick={onDemoClick}
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 text-left"
            >
              Talk to us →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
