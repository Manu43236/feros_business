import { Mail, Phone, MapPin } from 'lucide-react'

const LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: "Who It's For", href: '#for' },
    { label: 'How It Works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'Request Demo', href: null, action: true },
    { label: 'Privacy Policy', href: '/privacy-policy.html' },
    { label: 'Delete Account', href: '/delete-account.html' },
  ],
}

const scrollTo = (href) => {
  if (!href) return
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer({ onDemoClick }) {
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/feros_logo.png" alt="FEROS" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              The complete platform for Indian transport businesses — managing orders, fleet, tyres, staff, and invoices in one place.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a href="mailto:admin@feros.in" className="flex items-center gap-2.5 text-sm hover:text-slate-200 transition-colors">
                <Mail size={14} className="text-orange-500 shrink-0" />
                admin@feros.in
              </a>
              <a href="tel:+919988864964" className="flex items-center gap-2.5 text-sm hover:text-slate-200 transition-colors">
                <Phone size={14} className="text-orange-500 shrink-0" />
                +91-9988864964
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-snug">Visakhapatnam, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    {l.action ? (
                      <button
                        onClick={onDemoClick}
                        className="text-sm hover:text-white transition-colors text-left"
                      >
                        {l.label}
                      </button>
                    ) : l.href && l.href.startsWith('/') ? (
                      <a href={l.href} className="text-sm hover:text-white transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(l.href)}
                        className="text-sm hover:text-white transition-colors text-left"
                      >
                        {l.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} FEROS. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with ❤️ for Indian transport operators
          </p>
        </div>
      </div>
    </footer>
  )
}
