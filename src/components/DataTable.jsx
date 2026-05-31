export default function DataTable({ headers, rows, highlightColumn, caption }) {
  return (
    <div className="my-6 rounded-2xl border border-white/[0.06] overflow-hidden shadow-lg bg-surface-900/60">
      {caption && (
        <div className="px-5 py-3 border-b border-white/[0.06] bg-surface-800/40">
          <p className="text-sm font-semibold text-slate-300">{caption}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-800/60">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`
                    px-4 py-3 text-left text-xs font-bold uppercase tracking-wider
                    ${i === highlightColumn ? 'text-indigo-400' : 'text-slate-400'}
                    ${i === 0 ? 'sticky left-0 bg-surface-800/80 backdrop-blur-sm z-10' : ''}
                  `}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className="hover:bg-surface-800/40 transition-colors duration-150"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`
                      px-4 py-3 whitespace-nowrap
                      ${ci === highlightColumn ? 'text-indigo-300 font-semibold' : 'text-slate-300'}
                      ${ci === 0 ? 'sticky left-0 bg-surface-900/80 backdrop-blur-sm z-10 font-medium' : ''}
                      ${ri % 2 === 0 ? '' : 'bg-surface-800/20'}
                    `}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
