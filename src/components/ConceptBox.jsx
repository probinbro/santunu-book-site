import { Info, Lightbulb, AlertTriangle, BookOpen, Zap } from 'lucide-react'

const variants = {
  definition: {
    icon: BookOpen,
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/[0.06]',
    iconBg: 'bg-indigo-500/15 text-indigo-400',
    titleColor: 'text-indigo-300',
    glow: 'shadow-indigo-500/5',
  },
  example: {
    icon: Lightbulb,
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/[0.06]',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    titleColor: 'text-emerald-300',
    glow: 'shadow-emerald-500/5',
  },
  warning: {
    icon: AlertTriangle,
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/[0.06]',
    iconBg: 'bg-amber-500/15 text-amber-400',
    titleColor: 'text-amber-300',
    glow: 'shadow-amber-500/5',
  },
  tip: {
    icon: Zap,
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/[0.06]',
    iconBg: 'bg-violet-500/15 text-violet-400',
    titleColor: 'text-violet-300',
    glow: 'shadow-violet-500/5',
  },
  info: {
    icon: Info,
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/[0.06]',
    iconBg: 'bg-sky-500/15 text-sky-400',
    titleColor: 'text-sky-300',
    glow: 'shadow-sky-500/5',
  },
}

export default function ConceptBox({ variant = 'definition', title, children }) {
  const v = variants[variant] || variants.definition
  const Icon = v.icon

  return (
    <div
      className={`
        rounded-2xl border ${v.border} ${v.bg} p-5 sm:p-6 my-6
        shadow-lg ${v.glow}
        transition-all duration-300 hover:shadow-xl
      `}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${v.iconBg}`}>
          <Icon className="w-4.5 h-4.5" />
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${v.titleColor}`}>
              {title}
            </h4>
          )}
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
