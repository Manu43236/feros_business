import { motion } from 'framer-motion'
import {
  LayoutDashboard, ChevronRight, Package, Wallet, Truck,
  Users, Boxes, BarChart2, Settings, Layers, Bell, LogOut, AlertTriangle,
} from 'lucide-react'

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Package,         label: 'Operations',  arrow: true },
  { icon: Wallet,          label: 'Finance',      arrow: true },
  { icon: Truck,           label: 'Fleet',        arrow: true },
  { icon: Users,           label: 'HR',           arrow: true },
  { icon: Boxes,           label: 'Inventory',    arrow: true },
  { icon: BarChart2,       label: 'Reports',      arrow: true },
  { icon: Settings,        label: 'Masters',      arrow: true },
  { icon: Layers,          label: 'Subscription' },
]

const KPI = [
  { label: 'Active Orders',       value: '5',       sub: '0 in transit · 0 pending',   iconBg: 'bg-blue-50',   iconColor: 'text-blue-500' },
  { label: 'Fleet Size',          value: '9',       sub: '0 on trip · 9 available',    iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
  { label: 'Outstanding',         value: '₹61,950', sub: '0 overdue invoices',         iconBg: 'bg-red-50',    iconColor: 'text-red-500' },
  { label: "Today's Attendance",  value: '0',       sub: 'of 0 staff · 0 absent',      iconBg: 'bg-green-50',  iconColor: 'text-green-500' },
]

const ORDER_STATUS = [
  { label: 'Pending',    value: '0',  color: 'text-slate-700',  bg: 'bg-white' },
  { label: 'Assigned',   value: '0',  color: 'text-blue-600',   bg: 'bg-blue-50' },
  { label: 'In Transit', value: '0',  color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Part. Del.', value: '1',  color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Delivered',  value: '3',  color: 'text-green-600',  bg: 'bg-green-50' },
  { label: 'Cancelled',  value: '1',  color: 'text-red-500',    bg: 'bg-red-50' },
]

const INVOICE_STATUS = [
  { label: 'Draft',      value: '2', color: 'text-slate-700' },
  { label: 'Sent',       value: '0', color: 'text-blue-600' },
  { label: 'Part. Paid', value: '0', color: 'text-orange-500' },
  { label: 'Overdue',    value: '0', color: 'text-red-500' },
  { label: 'Paid',       value: '1', color: 'text-green-600' },
]

export default function MockDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative animate-float"
    >
      {/* Outer glow */}
      <div className="absolute -inset-3 bg-blue-500/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* Browser chrome */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10" style={{ width: '100%', maxWidth: 560 }}>

        {/* Browser top bar */}
        <div className="bg-slate-800 px-3 py-2 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-2 bg-slate-700 rounded text-slate-400 text-xs px-3 py-0.5 text-center">
            app.feros.in/dashboard
          </div>
        </div>

        {/* App shell */}
        <div className="flex" style={{ height: 400, background: '#f1f5f9' }}>

          {/* Sidebar */}
          <div className="flex flex-col shrink-0" style={{ width: 160, background: '#0f1f3d' }}>
            {/* Logo */}
            <div className="px-3 py-3 border-b border-white/10">
              <img src="/feros_logo.png" alt="FEROS" className="h-7 w-auto object-contain" />
            </div>

            {/* Nav */}
            <div className="flex-1 py-2 overflow-hidden">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-3 py-1.5 mx-1.5 rounded-lg mb-0.5 ${
                      item.active
                        ? 'bg-orange-500 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={12} />
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                    {item.arrow && <ChevronRight size={10} className="opacity-50" />}
                  </div>
                )
              })}
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 py-2">
              {[{ icon: Bell, label: 'Notifications', badge: '1' }, { icon: LogOut, label: 'Sign Out' }].map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.label} className="flex items-center justify-between px-3 py-1.5 mx-1.5 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Icon size={12} />
                      <span className="text-xs">{b.label}</span>
                    </div>
                    {b.badge && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold" style={{ fontSize: 9 }}>
                        {b.badge}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden flex flex-col">

            {/* Top bar */}
            <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between shrink-0">
              <div>
                <div className="text-slate-900 font-bold text-sm">Dashboard</div>
                <div className="text-slate-400 text-xs">Thursday, 11 June 2026</div>
              </div>
              <div className="flex items-center gap-1 text-orange-500 text-xs font-semibold">
                <AlertTriangle size={12} />
                4 expiry alerts
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-hidden p-3 flex flex-col gap-3">

              {/* KPI row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="grid grid-cols-4 gap-2"
              >
                {KPI.map((k) => (
                  <div key={k.label} className="bg-white rounded-xl p-2.5 border border-slate-100">
                    <div className="text-slate-500 text-xs leading-tight mb-1" style={{ fontSize: 9 }}>{k.label}</div>
                    <div className="text-slate-900 font-black text-base leading-none mb-1">{k.value}</div>
                    <div className="text-slate-400 leading-tight" style={{ fontSize: 8 }}>{k.sub}</div>
                  </div>
                ))}
              </motion.div>

              {/* Order Status */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="bg-white rounded-xl p-3 border border-slate-100"
              >
                <div className="text-slate-800 font-semibold mb-2" style={{ fontSize: 10 }}>Order Status Breakdown</div>
                <div className="grid grid-cols-6 gap-1.5">
                  {ORDER_STATUS.map((s) => (
                    <div key={s.label} className={`${s.bg} rounded-lg p-2 text-center`}>
                      <div className={`font-black ${s.color} text-sm leading-none mb-0.5`}>{s.value}</div>
                      <div className="text-slate-500 leading-tight" style={{ fontSize: 8 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Invoice Summary */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="bg-white rounded-xl p-3 border border-slate-100"
              >
                <div className="text-slate-800 font-semibold mb-2" style={{ fontSize: 10 }}>Invoice Summary</div>
                <div className="grid grid-cols-5 gap-1.5">
                  {INVOICE_STATUS.map((s) => (
                    <div key={s.label} className="bg-slate-50 rounded-lg p-2 text-center border border-slate-100">
                      <div className={`font-black ${s.color} text-sm leading-none mb-0.5`}>{s.value}</div>
                      <div className="text-slate-400 leading-tight" style={{ fontSize: 8 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.4, type: 'spring' }}
        className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/30 flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        Live Platform
      </motion.div>
    </motion.div>
  )
}
