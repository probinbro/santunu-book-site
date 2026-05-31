import ChapterHero from '../components/ChapterHero'
import ConceptBox from '../components/ConceptBox'
import FormulaBlock from '../components/FormulaBlock'
import { Package, TrendingDown, BarChart3 } from 'lucide-react'

export default function Chapter4_Inventory() {
  return (
    <div>
      <ChapterHero
        number={4}
        title="Inventory Management"
        subtitle="Understand the Harris-Wilson (EOQ) model, reorder points, and safety stock — balancing holding costs against stockout risks."
        gradient="from-amber-500 to-orange-600"
      />

      <section className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-amber-500 to-orange-500" />
          Chapter Overview
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          <strong className="text-white">Stock</strong> is an unused reserve of a product with economic value. It acts
          as a buffer between production and consumption. The challenge: too much stock ties up capital,
          but too little causes <em className="text-amber-300">stockouts</em> and lost sales.
        </p>

        <ConceptBox variant="definition" title="Stock Classification">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div>
              <p className="font-bold text-white mb-2">By Purpose</p>
              <ul className="text-sm space-y-1">
                <li>• <strong className="text-amber-300">Transit:</strong> In movement between locations</li>
                <li>• <strong className="text-amber-300">Buffer:</strong> Safety against demand uncertainty</li>
                <li>• <strong className="text-amber-300">Anticipation:</strong> Built for seasonal peaks</li>
                <li>• <strong className="text-amber-300">Cycle:</strong> Result of batch ordering</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">By Nature</p>
              <ul className="text-sm space-y-1">
                <li>• Raw materials</li>
                <li>• Spare parts & supplies</li>
                <li>• Work-in-progress (WIP)</li>
                <li>• Finished goods</li>
                <li>• Packaging & containers</li>
              </ul>
            </div>
          </div>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Inventory Management Approaches</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass-card-hover p-5 border border-amber-500/15">
            <h4 className="text-sm font-bold text-amber-300 mb-2">Reorder Point (s, Q)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Order a <strong className="text-white">fixed quantity Q</strong> whenever stock drops to
              the reorder point <em>s</em>. Variable time between orders.
            </p>
          </div>
          <div className="glass-card-hover p-5 border border-orange-500/15">
            <h4 className="text-sm font-bold text-orange-300 mb-2">Periodic Review (T, S)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Review stock every <strong className="text-white">fixed period T</strong> and order up to a
              target level <em>S</em>. Variable order quantity.
            </p>
          </div>
          <div className="glass-card-hover p-5 border border-yellow-500/15">
            <h4 className="text-sm font-bold text-yellow-300 mb-2">Harris-Wilson (EOQ)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The classic model: order a <strong className="text-white">fixed quantity Q</strong> every{' '}
              <strong className="text-white">fixed period T</strong>. Optimal under ideal assumptions.
            </p>
          </div>
        </div>

        <ConceptBox variant="definition" title="Harris-Wilson Cost Components">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">▸</span>
              <span><strong className="text-white">Ordering Cost (C<sub>L</sub>):</strong> Fixed cost per order, independent of quantity [€/order]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">▸</span>
              <span><strong className="text-white">Acquisition Cost (C<sub>A</sub>):</strong> Cost per unit purchased [€/unit]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">▸</span>
              <span><strong className="text-white">Holding Cost (C<sub>S</sub>):</strong> Storage, insurance, depreciation [€/unit·period]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">▸</span>
              <span><strong className="text-white">Shortage Cost (C<sub>R</sub>):</strong> Penalty for unmet demand [€/unit·period]</span>
            </li>
          </ul>
        </ConceptBox>

        <FormulaBlock
          label="Economic Order Quantity (EOQ)"
          formula={
            <span>
              Q* = √(2 · D · C<sub>L</sub> ÷ C<sub>S</sub>)
            </span>
          }
          description="The optimal lot size that minimizes the total annual cost of ordering + holding. D is annual demand, Cₗ is ordering cost, Cₛ is holding cost per unit per year."
        />

        <FormulaBlock
          label="Total Annual Cost"
          formula={
            <span>
              K(Q) = C<sub>L</sub> · (D/Q) + C<sub>A</sub> · D + C<sub>S</sub> · (Q/2)
            </span>
          }
          description="Ordering cost × number of orders + acquisition cost × demand + holding cost × average inventory."
        />

        {/* Sawtooth placeholder */}
        <div className="my-8 rounded-2xl border border-dashed border-amber-500/30 bg-amber-500/[0.03] p-8 text-center">
          <TrendingDown className="w-12 h-12 text-amber-500/30 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-amber-300 mb-2">Interactive EOQ Sawtooth Model</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Visualize the classic "sawtooth" inventory pattern — adjust demand rate, order quantity, and lead time to see the effect on stock levels.
          </p>
          <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1.5 rounded-full">
            Coming Soon
          </span>
        </div>

        <ConceptBox variant="tip" title="Harris-Wilson Assumptions">
          <p>The EOQ model assumes: unlimited planning horizon, single product, known & constant demand, 
          known & constant lead time, no stockouts allowed, constant acquisition cost, and instantaneous replenishment. 
          Real-world modifications relax these assumptions.</p>
        </ConceptBox>
      </section>
    </div>
  )
}
