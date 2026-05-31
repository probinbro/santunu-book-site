import ChapterHero from '../components/ChapterHero'
import ConceptBox from '../components/ConceptBox'
import DataTable from '../components/DataTable'
import FormulaBlock from '../components/FormulaBlock'
import { CalendarClock, Gauge, TrendingUp } from 'lucide-react'

export default function Chapter5_Planning() {
  return (
    <div>
      <ChapterHero
        number={5}
        title="Production Planning"
        subtitle="Learn to balance production capacity with fluctuating demand using constant-rate planning, variable-rate (JIT) planning, and the Bowman transportation method."
        gradient="from-emerald-500 to-teal-600"
      />

      <section className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
          Chapter Overview
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          Production planning bridges the gap between <strong className="text-white">demand forecasts</strong> and{' '}
          <strong className="text-white">production capacity</strong>. When demand fluctuates seasonally but
          capacity is limited, we must decide: produce at a constant rate (building inventory), or vary
          production to match demand (using overtime/subcontracting)?
        </p>

        <ConceptBox variant="definition" title="Key Planning Variables">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">▸</span>
              <span><strong className="text-white">D<sub>t</sub>:</strong> Demand in period t</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">▸</span>
              <span><strong className="text-white">L<sub>t</sub>:</strong> Working days in period t</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">▸</span>
              <span><strong className="text-white">r<sub>t</sub>:</strong> Production rate (units/day) in period t</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">▸</span>
              <span><strong className="text-white">s<sub>t</sub>:</strong> Stock level at end of period t</span>
            </li>
          </ul>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Planning Strategies</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-card-hover p-5 border border-emerald-500/15">
            <Gauge className="w-5 h-5 text-emerald-400 mb-3" />
            <h4 className="text-sm font-bold text-emerald-300 mb-2">Constant Rate</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Produce at a fixed daily rate. Builds excess stock in low-demand periods, may face
              shortages in high-demand periods.
            </p>
          </div>
          <div className="glass-card-hover p-5 border border-teal-500/15">
            <TrendingUp className="w-5 h-5 text-teal-400 mb-3" />
            <h4 className="text-sm font-bold text-teal-300 mb-2">Variable Rate (JIT)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Match production to demand each period. No excess stock, but requires flexible capacity
              (overtime, subcontracting).
            </p>
          </div>
          <div className="glass-card-hover p-5 border border-cyan-500/15">
            <CalendarClock className="w-5 h-5 text-cyan-400 mb-3" />
            <h4 className="text-sm font-bold text-cyan-300 mb-2">Bowman Method</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formulates planning as a transportation problem. Optimal when no stockouts are allowed.
              "Ships" production from periods to satisfy demand.
            </p>
          </div>
        </div>

        <DataTable
          caption="Example: 6-Month Demand & Capacity"
          headers={['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          rows={[
            ['Working Days', '20', '20', '22', '21', '21', '20'],
            ['Demand (units)', '500', '1000', '1500', '2100', '1800', '600'],
            ['Normal Cap. (units)', '1000', '1000', '1100', '1050', '1050', '1000'],
            ['Overtime Cap. (units)', '400', '400', '440', '420', '420', '400'],
          ]}
        />

        <ConceptBox variant="info" title="Cost Parameters">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
            <div className="text-center">
              <p className="text-xs text-slate-500">Normal Production</p>
              <p className="text-lg font-bold text-emerald-300 font-mono">200 €/unit</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Overtime</p>
              <p className="text-lg font-bold text-amber-300 font-mono">300 €/unit</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Excess Stock</p>
              <p className="text-lg font-bold text-sky-300 font-mono">30 €/unit</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Shortage</p>
              <p className="text-lg font-bold text-rose-300 font-mono">90 €/unit</p>
            </div>
          </div>
        </ConceptBox>

        <ConceptBox variant="example" title="Cost Comparison of Strategies">
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">Constant Rate (with shortages)</p>
              <p className="text-xl font-bold text-rose-300 font-mono">€1,767,100</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">Variable Rate (JIT)</p>
              <p className="text-xl font-bold text-amber-300 font-mono">€1,721,000</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">Bowman (Optimal)</p>
              <p className="text-xl font-bold text-emerald-300 font-mono">€1,752,200</p>
            </div>
          </div>
          <p className="mt-3 text-sm">
            The JIT approach has the lowest cost but requires unlimited overtime capacity. Bowman gives
            a guaranteed optimal solution when capacity is limited.
          </p>
        </ConceptBox>
      </section>
    </div>
  )
}
