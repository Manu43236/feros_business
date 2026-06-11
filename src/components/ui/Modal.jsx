import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Loader2 } from 'lucide-react'
import { demoRequestsApi } from '../../api'

const INITIAL = { name: '', phone: '', company: '', email: '', fleetSize: '', city: '' }

const inputBase =
  'w-full px-3.5 py-2.5 border rounded-xl text-sm font-medium text-slate-900 bg-white outline-none transition-all duration-150 placeholder:text-slate-400'
const inputNormal = 'border-slate-200 focus:border-navy-600 focus:ring-2 focus:ring-navy-600/10'
const inputError = 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'

export default function Modal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: false }))
    setApiError('')
  }

  const handleSubmit = async () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = true
    const phoneClean = form.phone.replace(/\s+/g, '')
    if (!phoneClean || !/^[6-9]\d{9}$/.test(phoneClean)) newErrors.phone = true
    if (!form.company.trim()) newErrors.company = true
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setLoading(true)
    setApiError('')
    try {
      await demoRequestsApi.submit({
        name: form.name.trim(),
        phone: phoneClean,
        company: form.company.trim(),
        email: form.email.trim() || null,
        fleetSize: form.fleetSize || null,
        city: form.city.trim() || null,
      })
      setSubmitted(true)
      setTimeout(onClose, 2600)
    } catch {
      setApiError('Something went wrong. Please call us at +91-9988864964.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => { setForm(INITIAL); setErrors({}); setSubmitted(false) }, 300)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-[460px] relative overflow-hidden"
          >
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 w-full" />

            <div className="p-7">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-lg hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-xl font-black text-slate-900 mb-1">Request a Free Demo</h2>
                    <p className="text-slate-500 text-sm mb-6">
                      Fill in your details and we'll get back to you within 24 hours.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                          value={form.name}
                          onChange={set('name')}
                          placeholder="Ramesh Kumar"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                          value={form.phone}
                          onChange={set('phone')}
                          placeholder="98765 43210"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        className={`${inputBase} ${errors.company ? inputError : inputNormal}`}
                        value={form.company}
                        onChange={set('company')}
                        placeholder="Your Transport Company"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Fleet Size</label>
                        <select
                          value={form.fleetSize}
                          onChange={set('fleetSize')}
                          className={`${inputBase} ${inputNormal} cursor-pointer`}
                        >
                          <option value="">Select</option>
                          <option>1 – 10 vehicles</option>
                          <option>11 – 50 vehicles</option>
                          <option>51 – 150 vehicles</option>
                          <option>150+ vehicles</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">City</label>
                        <input
                          type="text"
                          className={`${inputBase} ${inputNormal}`}
                          value={form.city}
                          onChange={set('city')}
                          placeholder="Hyderabad"
                        />
                      </div>
                    </div>

                    {apiError && (
                      <p className="text-red-500 text-xs mb-3 text-center">{apiError}</p>
                    )}
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                    >
                      {loading ? <><Loader2 size={16} className="animate-spin" /> Submitting…</> : 'Submit Request →'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                    className="text-center py-8"
                  >
                    <CheckCircle2 className="text-green-500 mx-auto mb-4" size={52} strokeWidth={1.5} />
                    <h3 className="text-xl font-black text-slate-900 mb-2">Request Received!</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      We've received your demo request.<br />
                      Our team will contact you within <strong className="text-slate-700">24 hours</strong>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
