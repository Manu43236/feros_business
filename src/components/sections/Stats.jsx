import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 500, suffix: '+', label: 'Vehicles Managed', desc: 'Trucks, tankers & heavy vehicles' },
  { value: 50, suffix: '+', label: 'Transport Companies', desc: 'Across AP, Telangana & beyond' },
  { prefix: '₹', value: 10, suffix: 'Cr+', label: 'Invoiced Through FEROS', desc: 'GST-compliant, on time' },
  { value: 4.8, suffix: '★', label: 'Average Rating', desc: 'From active customers' },
]

function Counter({ end, suffix = '', prefix = '', inView }) {
  const [count, setCount] = useState(0)
  const isFloat = end % 1 !== 0

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const duration = 1800
    const animate = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(isFloat ? parseFloat((eased * end).toFixed(1)) : Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, isFloat])

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-4 py-2 border-r border-white/10 last:border-r-0 even:border-r-0 lg:even:border-r lg:last:border-r-0"
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ''}
                  inView={inView}
                />
              </div>
              <div className="text-orange-400 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs leading-snug">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
