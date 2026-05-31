import { Hash } from 'lucide-react'

export default function FormulaBlock({ label, formula, description }) {
  return (
    <div className="my-6 rounded-2xl border border-indigo-500/20 bg-surface-900/80 overflow-hidden shadow-lg shadow-indigo-500/5">
      {/* Label bar */}
      {label && (
        <div className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500/[0.08] border-b border-indigo-500/15">
          <Hash className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            {label}
          </span>
        </div>
      )}

      {/* Formula */}
      <div className="px-6 py-5">
        <div className="font-mono text-lg sm:text-xl text-indigo-200 text-center leading-relaxed tracking-wide">
          {formula}
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="px-5 py-3 border-t border-white/[0.04] bg-surface-900/50">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  )
}
