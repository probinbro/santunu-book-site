import ChapterHero from '../components/ChapterHero'
import ConceptBox from '../components/ConceptBox'
import FormulaBlock from '../components/FormulaBlock'
import DataTable from '../components/DataTable'
import { MapPin, Ruler, Grid3X3 } from 'lucide-react'

export default function Chapter3_Localization() {
  return (
    <div>
      <ChapterHero
        number={3}
        title="Facility Localization"
        subtitle="Find the optimal location for factories, warehouses, or service centers by minimizing transportation costs using mathematical distance models."
        gradient="from-teal-500 to-emerald-600"
      />

      <section className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-teal-500 to-emerald-500" />
          Chapter Overview
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          Where should you build a new factory or warehouse? This strategic decision involves
          minimizing the <strong className="text-white">total weighted distance</strong> to all clients
          or supply points. The answer depends on which <em className="text-indigo-300">distance metric</em> you use.
        </p>

        <ConceptBox variant="definition" title="Distance Metrics">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-white mb-1">Euclidean Distance</p>
              <p className="text-sm">Straight-line distance — "as the crow flies." Used for open terrain.</p>
              <p className="font-mono text-indigo-300 text-sm mt-1">d = √[(x₁−x₂)² + (y₁−y₂)²]</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">Manhattan (Rectangular) Distance</p>
              <p className="text-sm">Grid-based movement — like city blocks or warehouse aisles.</p>
              <p className="font-mono text-indigo-300 text-sm mt-1">d = |x₁−x₂| + |y₁−y₂|</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">Quadratic Distance</p>
              <p className="text-sm">Amplifies large distances — used for emergency services (fire stations, hospitals) to penalize far-away points.</p>
              <p className="font-mono text-indigo-300 text-sm mt-1">d = (x₁−x₂)² + (y₁−y₂)²</p>
            </div>
          </div>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">1D Localization Example</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          Clients are located along a straight road. Find the optimal location minimizing weighted distance:
        </p>

        <DataTable
          caption="Client Locations Along a Road"
          headers={['Point', '1', '2', '3', '4', '5', '6', '7', '8']}
          rows={[
            ['Position (km)', '2', '4', '9', '10', '12', '17', '19', '25'],
            ['Weight', '2', '4', '3', '5', '3', '1', '4', '7'],
          ]}
        />

        <ConceptBox variant="tip" title="Solving 1D Problems">
          <p>
            <strong className="text-white">Quadratic distance:</strong> Use the weighted average (center of gravity):{' '}
            <span className="font-mono text-indigo-300">x* = Σ(wᵢ·xᵢ) / Σwᵢ</span>
          </p>
          <p className="mt-2">
            <strong className="text-white">Euclidean/Manhattan distance:</strong> Use the weighted median — find the point 
            where half the total weight is on each side.
          </p>
        </ConceptBox>

        <FormulaBlock
          label="Center of Gravity (Quadratic)"
          formula={
            <span>
              x* = Σ(wᵢ · xᵢ) ÷ Σwᵢ = 13.83 km
            </span>
          }
          description="For the example above, the optimal location under quadratic distance is at km 13.83."
        />

        <h3 className="text-xl font-bold text-white mt-10 mb-4">2D Localization</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          In two dimensions, the approach depends on the distance metric:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-card p-5">
            <Ruler className="w-5 h-5 text-teal-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-2">Quadratic & Manhattan</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Can be decomposed into two independent 1D problems — solve for x* and y* separately.
            </p>
          </div>
          <div className="glass-card p-5">
            <Grid3X3 className="w-5 h-5 text-emerald-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-2">Euclidean (Fermat-Weber)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cannot be solved analytically — requires an iterative numerical method (Weiszfeld algorithm).
            </p>
          </div>
        </div>

        {/* Placeholder */}
        <div className="my-8 rounded-2xl border border-dashed border-teal-500/30 bg-teal-500/[0.03] p-8 text-center">
          <MapPin className="w-12 h-12 text-teal-500/30 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-teal-300 mb-2">Interactive 2D Location Optimizer</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Drag clients on a 2D grid and see the optimal facility location update in real time — coming in Phase 2.
          </p>
          <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-500/10 px-3 py-1.5 rounded-full">
            Coming Soon
          </span>
        </div>
      </section>
    </div>
  )
}
