import { motion } from 'framer-motion'

const CLIENTS = [
  {
    name: 'Ashlar Building Solutions India Pvt Ltd',
    display: 'Ashlar Building Solutions India Pvt Ltd',
    location: 'Vizianagaram, Andhra Pradesh',
    logo: '/ashlar-logo.jpeg',
    since: '2025',
  },
]

export default function Clients() {
  return (
    <section className="py-20 px-6 bg-navy-900 border-y border-white/10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="section-label">Our Clients</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Trusted by India's transport leaders
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Real businesses running their entire fleet operations on FEROS.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 w-72 flex flex-col items-center gap-5"
            >
              {/* Logo box */}
              <div className="w-full h-32 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.display}
                  className="w-full h-full object-contain p-3"
                />
              </div>

              <div className="inline-block bg-orange-500/10 text-orange-400 text-xs font-medium px-2.5 py-0.5 rounded-full border border-orange-500/20">
                Client since {client.since}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
