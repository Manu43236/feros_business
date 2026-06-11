import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: 'Before FEROS, we were running everything on Excel sheets and WhatsApp. Now I can see every truck, every payment, and every pending LR from my phone. It has completely transformed how we operate.',
    name: 'Ramesh Naidu',
    role: 'Owner',
    company: 'Vizag Transport Co.',
    city: 'Visakhapatnam',
    initials: 'RN',
    color: 'bg-orange-500',
    stars: 5,
  },
  {
    quote: 'The tyre tracking feature alone saved us over ₹3 lakhs in the first year. We now know exactly when to rotate and replace tyres instead of guessing. The ROI was clear within 3 months.',
    name: 'Mohammed Farooq',
    role: 'Fleet Manager',
    company: 'Coastal Cargo Solutions',
    city: 'Vijayawada',
    initials: 'MF',
    color: 'bg-blue-500',
    stars: 5,
  },
  {
    quote: 'Our invoicing used to take 3–4 days every month and still had errors. With FEROS, we generate all invoices in under an hour. The GST calculations are automatic and always accurate.',
    name: 'Suresh Reddy',
    role: 'Director',
    company: 'Andhra Road Lines',
    city: 'Hyderabad',
    initials: 'SR',
    color: 'bg-purple-500',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/50 to-navy-950" />

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            What our customers say
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Real results from real transport businesses across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-orange-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="text-orange-500/40 mb-3" size={22} />

              {/* Quote text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
                  <div className="text-slate-600 text-xs">{t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
