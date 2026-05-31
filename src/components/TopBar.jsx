import { Menu, BookOpen } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/costs': 'Costs & Investments',
  '/projects': 'Project Management',
  '/localization': 'Facility Localization',
  '/inventory': 'Inventory Management',
  '/planning': 'Production Planning',
  '/mrp': 'MRP',
  '/scheduling': 'Scheduling',
}

export default function TopBar({ onMenuClick }) {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Production Organization'

  return (
    <header className="sticky top-0 z-30 lg:hidden">
      <div className="bg-surface-950/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={onMenuClick}
            className="p-2 -ml-2 rounded-lg hover:bg-surface-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-slate-200 truncate max-w-[200px]">
              {title}
            </span>
          </div>

          <div className="w-9" /> {/* Spacer for centering */}
        </div>
      </div>
    </header>
  )
}
