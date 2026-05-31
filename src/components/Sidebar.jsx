import { NavLink, useLocation } from 'react-router-dom'
import {
  DollarSign,
  GitBranch,
  MapPin,
  Package,
  CalendarClock,
  Layers,
  Clock,
  BookOpen,
  X,
  GraduationCap,
} from 'lucide-react'

const chapters = [
  {
    group: 'Strategic Decisions',
    color: 'from-indigo-500 to-violet-500',
    dotColor: 'bg-indigo-400',
    items: [
      { path: '/costs', label: 'Costs & Investments', icon: DollarSign, num: 1 },
      { path: '/projects', label: 'Project Management', icon: GitBranch, num: 2 },
      { path: '/localization', label: 'Facility Localization', icon: MapPin, num: 3 },
    ],
  },
  {
    group: 'Tactical Decisions',
    color: 'from-emerald-500 to-teal-500',
    dotColor: 'bg-emerald-400',
    items: [
      { path: '/inventory', label: 'Inventory Management', icon: Package, num: 4 },
      { path: '/planning', label: 'Production Planning', icon: CalendarClock, num: 5 },
    ],
  },
  {
    group: 'Operative Decisions',
    color: 'from-amber-500 to-orange-500',
    dotColor: 'bg-amber-400',
    items: [
      { path: '/mrp', label: 'MRP', icon: Layers, num: 6 },
      { path: '/scheduling', label: 'Scheduling', icon: Clock, num: 7 },
    ],
  },
]

export default function Sidebar({ onClose }) {
  const location = useLocation()

  return (
    <div className="h-full flex flex-col bg-surface-950/95 backdrop-blur-2xl border-r border-white/[0.06]">
      {/* Logo / Title */}
      <div className="p-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight">Production</h1>
            <p className="text-xs text-slate-400 font-medium">Organization</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-surface-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-6 space-y-6">
        {chapters.map((section) => (
          <div key={section.group}>
            <div className="flex items-center gap-2 px-3 mb-2">
              <div className={`w-1.5 h-1.5 rounded-full ${section.dotColor}`} />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                {section.group}
              </span>
            </div>

            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = location.pathname === item.path
                const Icon = item.icon

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`
                      group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${
                        isActive
                          ? 'bg-indigo-500/10 text-indigo-300 shadow-sm border border-indigo-500/20'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-surface-800/60'
                      }
                    `}
                  >
                    <div
                      className={`
                        w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                        transition-all duration-200
                        ${
                          isActive
                            ? 'bg-indigo-500/20 text-indigo-400'
                            : 'bg-surface-800 text-slate-500 group-hover:text-slate-400 group-hover:bg-surface-700'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="truncate block">{item.label}</span>
                    </div>
                    <span
                      className={`
                        text-xs font-mono px-1.5 py-0.5 rounded
                        ${isActive ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-600'}
                      `}
                    >
                      {item.num}
                    </span>
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/[0.04]">
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-surface-900/50">
          <BookOpen className="w-4 h-4 text-slate-500" />
          <span className="text-xs text-slate-500">
            Based on <span className="text-slate-400">Organización de la Producción</span>
          </span>
        </div>
      </div>
    </div>
  )
}
