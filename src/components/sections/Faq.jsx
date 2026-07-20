import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Is FEROS built specifically for Indian transport companies?',
    a: 'Yes. FEROS is purpose-built for the Indian logistics industry — with GST-ready invoicing, lorry receipt management with checkpost support, e-Way Bill integration, and payroll designed around Indian labour practices. It is not a generic ERP adapted for India.',
  },
  {
    q: 'Do I need technical expertise to set up FEROS?',
    a: 'Not at all. FEROS is designed for transport operators, not IT departments. Our onboarding team will help you set up your fleet, staff, and clients and train your team — typically within a single day.',
  },
  {
    q: 'Is there a mobile app for drivers and supervisors?',
    a: 'Yes. FEROS includes a dedicated mobile app for drivers, cleaners, supervisors, and store keepers. They can view their trip assignments, mark attendance, submit expenses, and view their payslips — all from their phones.',
  },
  {
    q: 'Can multiple users access FEROS at the same time?',
    a: 'Yes. FEROS supports multiple concurrent users with role-based access control. Each role — Admin, Supervisor, Driver, Store Keeper, Technician — sees only the screens and data relevant to their job. Access is fully configurable.',
  },
  {
    q: 'What happens to my data if I cancel my subscription?',
    a: 'Your data remains safe and accessible for 90 days after cancellation. You can export all your data in standard CSV and PDF formats at any time. We never lock you in or hold your data hostage.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'We offer a free personalised demo where our team walks you through the platform with your actual use case and data. This gives you a much clearer picture than a generic free trial. Request a demo and our team will reach you before your next truck hits the road.',
  },
]

function FaqItem({ q, a, isLast }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`py-5 ${!isLast ? 'border-b border-slate-100' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <span className="font-semibold text-slate-900 text-base group-hover:text-orange-600 transition-colors pr-4">
          {q}
        </span>
        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${open ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm leading-relaxed pt-4 pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Common questions
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Can't find your answer?{' '}
            <a href="tel:+919988864964" className="text-orange-500 hover:underline">Call us directly</a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200 rounded-2xl px-6 sm:px-8"
        >
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} isLast={i === FAQS.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
