import { FlaskConical } from 'lucide-react'

export default function InteractiveExample({ title, description, children }) {
  return (
    <div className="my-8 rounded-2xl border border-violet-500/20 bg-surface-900/60 overflow-hidden shadow-xl shadow-violet-500/5">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 bg-violet-500/[0.06] border-b border-violet-500/15">
        <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
          <FlaskConical className="w-3.5 h-3.5 text-violet-400" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-violet-300">{title}</h3>
          {description && (
            <p className="text-xs text-slate-400 mt-0.5">{description}</p>
          )}
        </div>
        <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-violet-500 bg-violet-500/10 px-2.5 py-1 rounded-full">
          Interactive
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {children}
      </div>
    </div>
  )
}
