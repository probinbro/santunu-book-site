export default function ChapterHero({ number, title, subtitle, gradient = 'from-indigo-500 to-violet-600' }) {
  return (
    <div className="relative mb-10 sm:mb-14">
      {/* Background glow */}
      <div className="hero-gradient absolute inset-0 rounded-3xl -z-10" />

      <div className="rounded-3xl border border-white/[0.06] bg-surface-900/40 backdrop-blur-sm p-6 sm:p-10 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-violet-400" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
          </svg>
        </div>

        {/* Chapter badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`
            inline-flex items-center justify-center w-10 h-10 rounded-xl
            bg-gradient-to-br ${gradient} text-white text-sm font-bold
            shadow-lg
          `}>
            {number}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Chapter {number}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
