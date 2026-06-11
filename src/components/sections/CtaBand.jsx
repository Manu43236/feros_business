import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'

export default function CtaBand({ onDemoClick }) {
  return (
    <section id="contact" className="relative py-24 px-6 bg-navy-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Get Started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
            Ready to run your fleet<br />
            <span className="text-gradient">without the chaos?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 50+ transport companies using FEROS to manage their operations smarter.
            Get a free personalised demo — we'll walk you through with your own use case.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onDemoClick}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Request a Free Demo
              <ArrowRight size={18} />
            </button>
            <a
              href="tel:+919988864964"
              className="flex items-center gap-2 bg-white/8 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
            >
              <Phone size={16} />
              +91-9988864964
            </a>
          </div>

          <p className="text-slate-600 text-sm mt-8">
            No credit card required · Free onboarding session · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
