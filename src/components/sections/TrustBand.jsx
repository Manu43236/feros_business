const cities = [
  'Visakhapatnam', 'Hyderabad', 'Vijayawada', 'Chennai',
  'Pune', 'Mumbai', 'Bengaluru', 'Kolkata',
]

export default function TrustBand() {
  return (
    <div className="bg-navy-900 border-y border-white/10 py-5 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <span className="text-slate-400 text-sm font-medium whitespace-nowrap shrink-0">
          Trusted across India
        </span>
        <div className="hidden sm:block w-px h-5 bg-white/15 shrink-0" />
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-5 gap-y-2">
          {cities.map((city) => (
            <span key={city} className="text-slate-400 text-sm hover:text-slate-200 transition-colors">
              {city}
            </span>
          ))}
          <span className="text-slate-500 text-sm">& more</span>
        </div>
      </div>
    </div>
  )
}
