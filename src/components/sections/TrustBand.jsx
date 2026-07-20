function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function PlayStoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M3.18 23.76c.29.16.62.2.95.1l11.4-6.58-2.55-2.56L3.18 23.76z" fill="#EA4335"/>
      <path d="M22.16 10.27 19.1 8.5l-2.87 2.87 2.87 2.87 3.07-1.77a1.57 1.57 0 0 0 0-2.2z" fill="#FBBC04"/>
      <path d="M3.18.24a1.57 1.57 0 0 0-.68 1.3v20.92c0 .53.25 1 .68 1.3l.1.09 11.71-11.72v-.27L3.28.15l-.1.09z" fill="#4285F4"/>
      <path d="M15 14.82l-2.77-2.77v-.27L15 9.01l.1.06 3.64 2.07a1.57 1.57 0 0 1 0 2.62L15 15.82l-.1-.06-.9-.94z" fill="#34A853"/>
    </svg>
  )
}

const LINKS = [
  { Icon: GlobeIcon,   color: 'text-sky-400',   label: 'Web App',     value: 'console.feros.in',          href: 'https://console.feros.in' },
  { Icon: PlayStoreIcon, color: '',              label: 'Android App', value: 'Available on Play Store',   href: 'https://play.google.com/store/apps/details?id=com.feros.mobile' },
]

export default function TrustBand() {
  return (
    <div className="bg-navy-900 border-y border-white/10 py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <span className="text-slate-400 text-sm font-medium whitespace-nowrap shrink-0">
          Available now on
        </span>
        <div className="hidden sm:block w-px h-5 bg-white/15 shrink-0" />
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-3">
          {LINKS.map(({ Icon, color, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <span className={`${color} shrink-0`}><Icon /></span>
              <span className="text-sm">
                <span className="text-slate-500 text-xs mr-1">{label}:</span>
                <span className="group-hover:text-orange-400 transition-colors">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
