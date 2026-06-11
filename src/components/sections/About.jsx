import { motion } from 'framer-motion'

const ITEMS = [
  { icon: '🏢', title: 'Multi-Tenant',       desc: 'Each company gets a fully isolated workspace with custom branding and settings.' },
  { icon: '📱', title: 'Mobile + Web',        desc: 'Drivers and field staff use the mobile app. Office staff manage everything on web.' },
  { icon: '🔐', title: 'Role-Based Access',   desc: 'Admin, Supervisor, Driver, Store Keeper — every role sees only what they need.' },
  { icon: '🇮🇳', title: 'Built for India',   desc: 'GST-ready invoicing, e-Way Bill support, and Telugu language localization.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <section className="section about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">Why FEROS</div>
        <h2 className="section-title">Everything your fleet needs, in one place</h2>
        <p className="section-sub">
          Built for transport operators, fleet managers, and logistics companies across India.
          No spreadsheets, no chaos — just clear visibility and control.
        </p>
      </motion.div>

      <div className="about-grid">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            className="about-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={i}
          >
            <div className="about-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
