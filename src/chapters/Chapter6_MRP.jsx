import ChapterHero from '../components/ChapterHero'
import ConceptBox from '../components/ConceptBox'
import DataTable from '../components/DataTable'
import { Layers, ArrowDown, Box } from 'lucide-react'

export default function Chapter6_MRP() {
  return (
    <div>
      <ChapterHero
        number={6}
        title="Material Requirements Planning"
        subtitle="Explore MRP — the system that explodes a Bill of Materials to calculate exactly when and how much of each component to order."
        gradient="from-violet-500 to-purple-600"
      />

      <section className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-purple-500" />
          Chapter Overview
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          While EOQ treats each product independently with constant demand, <strong className="text-white">MRP</strong> recognizes
          that component demand is <em className="text-violet-300">dependent</em> — derived from the production
          schedule of finished products. MRP works backward from delivery dates to determine exactly when
          to start production or place orders.
        </p>

        <ConceptBox variant="definition" title="EOQ vs. MRP">
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-slate-400 font-semibold">Feature</th>
                  <th className="text-left py-2 text-amber-400 font-semibold">EOQ</th>
                  <th className="text-left py-2 text-violet-400 font-semibold">MRP</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5"><td className="py-2">Orientation</td><td>Individual products</td><td>Product components</td></tr>
                <tr className="border-b border-white/5"><td className="py-2">Demand type</td><td>Independent</td><td>Dependent (derived)</td></tr>
                <tr className="border-b border-white/5"><td className="py-2">Consumption</td><td>Continuous & constant</td><td>Discrete & variable</td></tr>
                <tr className="border-b border-white/5"><td className="py-2">Reorder trigger</td><td>Reorder point</td><td>When required</td></tr>
                <tr className="border-b border-white/5"><td className="py-2">Forecast basis</td><td>Historical demand</td><td>Future production</td></tr>
                <tr><td className="py-2">System type</td><td>Quantity-based</td><td>Quantity + time-based</td></tr>
              </tbody>
            </table>
          </div>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">MRP Inputs</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-card-hover p-5 border border-violet-500/15">
            <Layers className="w-5 h-5 text-violet-400 mb-3" />
            <h4 className="text-sm font-bold text-violet-300 mb-2">Bill of Materials (BoM)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hierarchical breakdown of each finished product into subassemblies, components, and raw materials.
            </p>
          </div>
          <div className="glass-card-hover p-5 border border-purple-500/15">
            <ArrowDown className="w-5 h-5 text-purple-400 mb-3" />
            <h4 className="text-sm font-bold text-purple-300 mb-2">Master Production Schedule</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Forecasted demand for finished products over the planning horizon, plus initial stock and scheduled receipts.
            </p>
          </div>
          <div className="glass-card-hover p-5 border border-fuchsia-500/15">
            <Box className="w-5 h-5 text-fuchsia-400 mb-3" />
            <h4 className="text-sm font-bold text-fuchsia-300 mb-2">Lot Sizing Rules</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              LFL (lot-for-lot), FQ (fixed quantity), MQ (minimum quantity), or Wagner-Whitin optimization.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">MRP Calculation Table</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          Each component gets a planning table (estadillo) with these rows:
        </p>

        <ConceptBox variant="info" title="MRP Table Rows">
          <ul className="list-none space-y-1.5 text-sm">
            <li><strong className="text-white">Gross Requirements:</strong> Total demand for the component</li>
            <li><strong className="text-white">On-Hand Inventory:</strong> Stock at the start of planning</li>
            <li><strong className="text-white">Scheduled Receipts:</strong> Previously placed orders arriving</li>
            <li><strong className="text-white">Projected Stock:</strong> Expected inventory at end of each period</li>
            <li><strong className="text-white">Net Requirements:</strong> How much we actually need to order</li>
            <li><strong className="text-white">Planned Order Receipt:</strong> Quantity to receive (after lot sizing)</li>
            <li><strong className="text-white">Planned Order Release:</strong> When to place the order (lead-time offset)</li>
          </ul>
        </ConceptBox>

        <DataTable
          caption="Example MRP Table — Component SR04 (LT=1, LFL, SS=0)"
          headers={['', 'Initial', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9']}
          rows={[
            ['Gross Req.', '', '15', '15', '15', '15', '12', '13', '12', '13', '10'],
            ['On Hand', '40', '', '', '', '', '', '', '', '', ''],
            ['Sched. Receipt', '', '10', '', '', '', '', '', '', '', ''],
            ['Proj. Stock', '40', '35', '20', '5', '0', '0', '0', '0', '0', '0'],
            ['Net Req.', '', '0', '0', '0', '10', '12', '13', '12', '13', '10'],
            ['Order Receipt', '', '', '', '', '10', '12', '13', '12', '13', '10'],
            ['Order Release', '', '', '', '10', '12', '13', '12', '13', '10', ''],
          ]}
        />

        <ConceptBox variant="tip" title="Key Insight">
          <p>
            MRP works <strong className="text-white">level by level</strong> through the BoM — first planning finished products,
            then using their order releases as gross requirements for the next level down. This "explosion"
            continues until all raw materials are planned.
          </p>
        </ConceptBox>
      </section>
    </div>
  )
}
