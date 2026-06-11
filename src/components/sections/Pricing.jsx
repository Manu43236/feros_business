import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '₹2,499',
    period: '/month',
    desc: 'Perfect for small fleets just getting started.',
    highlight: false,
    features: [
      'Up to 10 vehicles',
      'Operations & LR Management',
      'Finance & Invoicing',
      'HR & Attendance',
      '3 user accounts',
      'Email support',
      'Mobile app access',
    ],
    cta: 'Request Demo',
  },
  {
    name: 'Growth',
    price: '₹5,999',
    period: '/month',
    desc: 'For growing transport companies with full needs.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Up to 50 vehicles',
      'All 6 modules included',
      'Tyre & Inventory management',
      'GPS vehicle tracking',
      '15 user accounts',
      'Priority phone support',
      'Mobile app for all roles',
      'Custom reports',
    ],
    cta: 'Request Demo',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    desc: 'For large fleets that need power and flexibility.',
    highlight: false,
    features: [
      'Unlimited vehicles',
      'All modules + API access',
      'Unlimited user accounts',
      'White-label option',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
      'On-site training',
    ],
    cta: 'Contact Us',
  },
]

export default function Pricing({ onDemoClick }) {
  return (
    <section id="pricing" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="section-label">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No long-term contracts. Scale up or down as your fleet grows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-navy-900 border-2 border-orange-500 shadow-2xl shadow-orange-500/10 ring-1 ring-orange-500/20'
                  : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30">
                    <Zap size={10} />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-orange-400' : 'text-orange-500'}`}>
                  {plan.name}
                </div>
                <div className={`flex items-baseline gap-1 mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.highlight ? 'bg-white/10' : 'bg-slate-100'}`} />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-orange-400' : 'text-green-500'}`} size={15} />
                    <span className={`text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={onDemoClick}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-orange-500 hover:bg-orange-400 text-white hover:shadow-lg hover:shadow-orange-500/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {plan.cta} →
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          All plans include a free onboarding session. Questions?{' '}
          <a href="tel:+919988864964" className="text-orange-500 hover:underline">Call us: +91-9988864964</a>
        </p>
      </div>
    </section>
  )
}
