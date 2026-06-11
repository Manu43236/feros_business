import { motion } from 'framer-motion'
import {
  ClipboardList, Truck, Users, Package, CircleDot, ReceiptText,
  CheckCircle2,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ClipboardList,
    color: 'bg-blue-500/15 text-blue-400',
    title: 'Operations & LR Management',
    desc: 'Manage the complete order lifecycle — from booking to delivery. Create lorry receipts with checkpost entries, weight details, and GST charges in minutes.',
    tags: ['Orders', 'Lorry Receipts', 'Checkposts', 'Trip Expenses'],
  },
  {
    icon: Truck,
    color: 'bg-orange-500/15 text-orange-400',
    title: 'Fleet Management',
    desc: 'Track every vehicle\'s RC, insurance, fitness, permits, and PUC in one place. Monitor fuel efficiency, service history, and GPS location in real time.',
    tags: ['Vehicle Profiles', 'Fuel Logs', 'Service Records', 'GPS Tracking'],
  },
  {
    icon: Users,
    color: 'bg-purple-500/15 text-purple-400',
    title: 'HR & Payroll',
    desc: 'Manage drivers, cleaners, supervisors, and office staff end-to-end. Record daily attendance, process monthly payroll, and handle salary advances.',
    tags: ['Staff Profiles', 'Attendance', 'Payroll Processing', 'Advances'],
  },
  {
    icon: Package,
    color: 'bg-cyan-500/15 text-cyan-400',
    title: 'Inventory Management',
    desc: 'Maintain a complete spare parts catalog with real-time stock levels. Track all movements — purchases, service consumption, transfers, and damage.',
    tags: ['Spare Parts', 'Live Stock', 'Movement Log', 'Low Stock Alerts'],
  },
  {
    icon: CircleDot,
    color: 'bg-yellow-500/15 text-yellow-400',
    title: 'Tyre Management',
    desc: 'Track every tyre across your entire fleet — position, fitting history, km driven, rotation records, and replacement projections to cut tyre costs.',
    tags: ['Tyre Profiles', 'Fitting & Rotation', 'KM Tracking', 'Replacement Alerts'],
  },
  {
    icon: ReceiptText,
    color: 'bg-green-500/15 text-green-400',
    title: 'Finance & Invoicing',
    desc: 'Generate GST-compliant invoices directly from lorry receipts. Track payments, issue credit notes, and get clear visibility on outstanding receivables.',
    tags: ['GST Invoices', 'Payment Tracking', 'Credit Notes', 'Receivables'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="section-label">Features</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Everything under one roof
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Six powerful modules that cover every aspect of your transport and fleet operation — seamlessly connected.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
                className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-slate-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${feat.color} flex items-center justify-center mb-5`}>
                  <Icon size={20} />
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-2.5">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{feat.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Included check */}
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-semibold">
                  <CheckCircle2 size={13} />
                  Included in all plans
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
