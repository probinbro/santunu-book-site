import { useState, useMemo } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ReferenceLine,
  Area,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="bg-surface-900/95 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-2xl">
      <p className="text-xs font-bold text-slate-400 mb-1.5">{label} units</p>
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-slate-300">{entry.name}:</span>
          <span className="font-semibold text-white">
            €{Number(entry.value).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function BreakEvenChart() {
  const [fixedCost, setFixedCost] = useState(900)
  const [variableCost, setVariableCost] = useState(4.5)
  const [price, setPrice] = useState(5.5)

  const breakEvenQty = useMemo(() => {
    const margin = price - variableCost
    if (margin <= 0) return Infinity
    return Math.ceil(fixedCost / margin)
  }, [fixedCost, variableCost, price])

  const data = useMemo(() => {
    const maxQ = Math.min(Math.max(breakEvenQty * 2.2, 500), 5000)
    const step = Math.max(1, Math.round(maxQ / 50))
    const points = []

    for (let q = 0; q <= maxQ; q += step) {
      const revenue = price * q
      const cost = fixedCost + variableCost * q
      const profit = revenue - cost
      points.push({
        quantity: q,
        Revenue: Math.round(revenue),
        'Total Cost': Math.round(cost),
        Profit: Math.round(profit),
      })
    }

    return points
  }, [fixedCost, variableCost, price])

  const breakEvenRevenue = price * breakEvenQty

  return (
    <div className="space-y-6">
      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SliderControl
          label="Fixed Cost (CF)"
          value={fixedCost}
          onChange={setFixedCost}
          min={100}
          max={5000}
          step={50}
          unit="€"
          color="rose"
        />
        <SliderControl
          label="Variable Cost (CV)"
          value={variableCost}
          onChange={setVariableCost}
          min={0.5}
          max={20}
          step={0.5}
          unit="€/unit"
          color="amber"
        />
        <SliderControl
          label="Selling Price (P)"
          value={price}
          onChange={setPrice}
          min={1}
          max={25}
          step={0.5}
          unit="€/unit"
          color="emerald"
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KPICard
          label="Break-Even Point"
          value={breakEvenQty === Infinity ? '∞' : `${breakEvenQty.toLocaleString()}`}
          unit="units"
          color="indigo"
        />
        <KPICard
          label="Break-Even Revenue"
          value={breakEvenQty === Infinity ? '—' : `€${Math.round(breakEvenRevenue).toLocaleString()}`}
          color="violet"
        />
        <KPICard
          label="Unit Margin"
          value={`€${(price - variableCost).toFixed(2)}`}
          color={price - variableCost > 0 ? 'emerald' : 'rose'}
        />
        <KPICard
          label="Margin %"
          value={price > 0 ? `${(((price - variableCost) / price) * 100).toFixed(1)}%` : '—'}
          color={price - variableCost > 0 ? 'teal' : 'rose'}
        />
      </div>

      {/* Chart */}
      <div className="rounded-xl bg-surface-800/40 border border-white/[0.04] p-2 sm:p-4">
        <ResponsiveContainer width="100%" height={380}>
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <defs>
              <linearGradient id="profitGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lossRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity={0} />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

            <XAxis
              dataKey="quantity"
              stroke="rgba(255,255,255,0.15)"
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickFormatter={(v) => v.toLocaleString()}
              label={{ value: 'Quantity (units)', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 11 }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.15)"
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickFormatter={(v) => `€${(v / 1000).toFixed(1)}k`}
              label={{ value: 'Amount (€)', angle: -90, position: 'insideLeft', offset: 15, fill: '#64748b', fontSize: 11 }}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Revenue line */}
            <Line
              type="monotone"
              dataKey="Revenue"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, fill: '#10b981', stroke: '#064e3b', strokeWidth: 2 }}
            />

            {/* Cost line */}
            <Line
              type="monotone"
              dataKey="Total Cost"
              stroke="#f43f5e"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, fill: '#f43f5e', stroke: '#4c0519', strokeWidth: 2 }}
            />

            {/* Break-even point */}
            {breakEvenQty !== Infinity && (
              <>
                <ReferenceLine
                  x={breakEvenQty}
                  stroke="rgba(99, 102, 241, 0.4)"
                  strokeDasharray="6 4"
                  strokeWidth={1.5}
                />
                <ReferenceDot
                  x={breakEvenQty}
                  y={Math.round(breakEvenRevenue)}
                  r={7}
                  fill="#6366f1"
                  stroke="#312e81"
                  strokeWidth={3}
                />
              </>
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded bg-emerald-500" />
          <span>Revenue (P × Q)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded bg-rose-500" />
          <span>Total Cost (CF + CV × Q)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-900" />
          <span>Break-Even Point</span>
        </div>
      </div>
    </div>
  )
}

function SliderControl({ label, value, onChange, min, max, step, unit, color }) {
  const colors = {
    rose: 'accent-rose-500 text-rose-400',
    amber: 'accent-amber-500 text-amber-400',
    emerald: 'accent-emerald-500 text-emerald-400',
    indigo: 'accent-indigo-500 text-indigo-400',
  }

  const c = colors[color] || colors.indigo
  const percent = ((value - min) / (max - min)) * 100

  return (
    <div className="bg-surface-800/40 rounded-xl p-4 border border-white/[0.04]">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-semibold text-slate-400">{label}</span>
        <span className={`text-sm font-bold font-mono ${c.split(' ')[1]}`}>
          {typeof value === 'number' && value % 1 !== 0 ? value.toFixed(1) : value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-1.5 rounded-full appearance-none cursor-pointer bg-surface-700 ${c.split(' ')[0]}`}
        style={{
          background: `linear-gradient(to right, currentColor ${percent}%, rgb(51 65 85) ${percent}%)`,
        }}
      />
    </div>
  )
}

function KPICard({ label, value, unit, color }) {
  const bgColors = {
    indigo: 'border-indigo-500/20 bg-indigo-500/[0.05]',
    violet: 'border-violet-500/20 bg-violet-500/[0.05]',
    emerald: 'border-emerald-500/20 bg-emerald-500/[0.05]',
    teal: 'border-teal-500/20 bg-teal-500/[0.05]',
    rose: 'border-rose-500/20 bg-rose-500/[0.05]',
  }

  const textColors = {
    indigo: 'text-indigo-300',
    violet: 'text-violet-300',
    emerald: 'text-emerald-300',
    teal: 'text-teal-300',
    rose: 'text-rose-300',
  }

  return (
    <div className={`rounded-xl border p-3 ${bgColors[color] || bgColors.indigo}`}>
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">{label}</p>
      <p className={`text-lg font-bold font-mono ${textColors[color] || textColors.indigo}`}>
        {value}
        {unit && <span className="text-xs font-normal text-slate-500 ml-1">{unit}</span>}
      </p>
    </div>
  )
}
