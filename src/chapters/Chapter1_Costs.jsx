import ChapterHero from '../components/ChapterHero'
import ConceptBox from '../components/ConceptBox'
import FormulaBlock from '../components/FormulaBlock'
import DataTable from '../components/DataTable'
import InteractiveExample from '../components/InteractiveExample'
import BreakEvenChart from '../charts/BreakEvenChart'
import { TrendingUp, ArrowRight } from 'lucide-react'

export default function Chapter1_Costs() {
  return (
    <div>
      <ChapterHero
        number={1}
        title="Costs & Investments"
        subtitle="Learn how organizations classify costs, find their break-even point, and compare investment alternatives using NPV, IRR, and payback analysis."
        gradient="from-indigo-500 to-violet-600"
      />

      {/* ===== Section 1: Introduction ===== */}
      <section className="mb-16 animate-slide-up">
        <SectionTitle id="intro">Introduction to Costs</SectionTitle>

        <p className="text-slate-300 leading-relaxed mb-6">
          A <strong className="text-white">cost</strong> is the value of resources needed to obtain, produce,
          or operate something — essentially, the monetary price of carrying out an economic activity.
          Every organization aims to <em className="text-indigo-300">maximize profits</em>, and since:
        </p>

        <FormulaBlock
          label="Profit Equation"
          formula="Profit = Revenue − Costs"
          description="When revenue is outside our control (determined by market & pricing), maximizing profit is equivalent to minimizing costs."
        />

        <p className="text-slate-300 leading-relaxed mb-6">
          In production organization, we focus on improving system efficiency, reducing unnecessary
          inventory, and optimizing operations — all of which reduce costs.
        </p>

        <ConceptBox variant="definition" title="Types of Costs">
          <p>Costs can be classified along <strong className="text-white">two dimensions</strong>:</p>
          <ul className="list-none space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">▸</span>
              <span><strong className="text-white">By production volume:</strong> Fixed (don't change with output) vs. Variable (scale with output)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">▸</span>
              <span><strong className="text-white">By traceability:</strong> Direct (easily tied to a product unit) vs. Indirect (shared across products)</span>
            </li>
          </ul>
        </ConceptBox>

        <DataTable
          caption="Cost Classification Matrix"
          headers={['', 'Direct', 'Indirect']}
          rows={[
            ['Fixed', 'Operator salary on assembly line', 'Facility rent'],
            ['Variable', 'Raw materials cost', 'Water & electricity usage'],
          ]}
        />

        <ConceptBox variant="tip" title="Ideal Cost Structure">
          <p>
            Organizations always prefer costs that are <strong className="text-white">variable</strong> and{' '}
            <strong className="text-white">direct</strong> — these are the easiest to control, predict,
            and optimize. Fixed indirect costs are the hardest to manage.
          </p>
        </ConceptBox>
      </section>

      {/* ===== Section 2: Break-Even Analysis ===== */}
      <div className="section-divider" />

      <section className="mb-16 animate-slide-up animation-delay-100">
        <SectionTitle id="break-even">Break-Even Analysis</SectionTitle>

        <p className="text-slate-300 leading-relaxed mb-6">
          The <strong className="text-white">break-even point</strong> (punto de equilibrio) is the number
          of units you need to produce and sell to cover all your costs — achieving zero profit/loss.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <VariableCard symbol="CF" name="Fixed Cost" unit="€ / period" color="rose" />
          <VariableCard symbol="CV" name="Variable Cost" unit="€ / unit" color="amber" />
          <VariableCard symbol="P" name="Selling Price" unit="€ / unit" color="emerald" />
        </div>

        <FormulaBlock
          label="Break-Even Formula"
          formula={
            <span>
              q<sub>0</sub> = CF ÷ (P − CV)
            </span>
          }
          description="Where (P − CV) is the unit margin. The break-even quantity is the fixed cost divided by the profit you make per unit."
        />

        <ConceptBox variant="example" title="Worked Example">
          <p>
            A product has <strong className="text-white">CF = €900</strong>, <strong className="text-white">CV = €4.50/unit</strong>,
            and <strong className="text-white">P = €5.50/unit</strong>.
          </p>
          <ul className="list-none space-y-2 mt-3">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">a.</span>
              <span>Break-even point: 900 ÷ (5.5 − 4.5) = <strong className="text-emerald-300">900 units</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">b.</span>
              <span>For €500 profit: (500 + 900) ÷ (5.5 − 4.5) = <strong className="text-emerald-300">1,400 units</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">c.</span>
              <span>Outsource at €5.20/unit? 900 ÷ (5.2 − 4.5) = 1,285.7 → Outsource below 1,286 units; manufacture above</span>
            </li>
          </ul>
        </ConceptBox>

        <InteractiveExample
          title="Break-Even Analysis Simulator"
          description="Adjust the sliders to see how costs and pricing affect the break-even point in real time."
        >
          <BreakEvenChart />
        </InteractiveExample>
      </section>

      {/* ===== Section 3: Investment Management ===== */}
      <div className="section-divider" />

      <section className="mb-16 animate-slide-up animation-delay-200">
        <SectionTitle id="investments">Investment Management</SectionTitle>

        <p className="text-slate-300 leading-relaxed mb-6">
          An <strong className="text-white">investment</strong> means giving up immediate benefits in
          exchange for the hope of future returns. We evaluate investments by analyzing their{' '}
          <em className="text-indigo-300">cash flows</em> over a planning horizon.
        </p>

        <ConceptBox variant="definition" title="Key Terminology">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Horizon (T):</strong> Total time period for analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Period (tᵢ):</strong> Equal time divisions within the horizon</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Payment (P):</strong> Money going out</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Collection (C):</strong> Money coming in</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Cash Flow:</strong> Collections − Payments for each period</span>
            </li>
          </ul>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Investment Example: Three Options</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          Consider a product with a selling price of <strong className="text-white">10 €/unit</strong>
          and growing demand over 5 years. You have three manufacturing options:
        </p>

        <DataTable
          caption="Investment Options Comparison"
          headers={['Parameter', 'M (Manual)', 'A (Semi-Auto)', 'G (Full-Auto)']}
          rows={[
            ['Capacity (units/year)', '120', '100', '180'],
            ['Fixed Cost (€/year)', '50', '150', '250'],
            ['Variable Cost (€/unit)', '9', '7', '6'],
            ['Investment (€)', '130', '400', '450'],
          ]}
        />

        <DataTable
          caption="Annual Demand Forecast"
          headers={['Year', '1', '2', '3', '4', '5']}
          rows={[['Demand (units)', '60', '90', '100', '110', '120']]}
        />
      </section>

      {/* ===== Section 4: Comparing Investments ===== */}
      <div className="section-divider" />

      <section className="mb-16 animate-slide-up animation-delay-300">
        <SectionTitle id="comparing">Comparing Investments</SectionTitle>

        <p className="text-slate-300 leading-relaxed mb-6">
          Three criteria help us rank investments:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <CriterionCard
            title="Profitability"
            description="Is the return on investment positive?"
            icon="📈"
          />
          <CriterionCard
            title="Security"
            description="How likely are the projected cash flows?"
            icon="🛡️"
          />
          <CriterionCard
            title="Liquidity"
            description="How quickly can we recover our money?"
            icon="💧"
          />
        </div>

        {/* DIM & Payback */}
        <h3 className="text-xl font-bold text-white mt-10 mb-4">Dimension (DIM) & Payback Period (PR)</h3>

        <ConceptBox variant="definition" title="Liquidity Metrics">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Dimension (DIM):</strong> Maximum accumulated negative cash flow — how "deep in the hole" you get</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Payback Period (PR):</strong> Time until accumulated cash flow turns positive</span>
            </li>
          </ul>
        </ConceptBox>

        <DataTable
          caption="Cash Flow & Payback Analysis"
          headers={['Metric', 'Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'DIM', 'PR']}
          rows={[
            ['M — Cash Flow', '−130', '10', '40', '50', '60', '70', '', ''],
            ['M — Cumulative', '−130', '−120', '−80', '−30', '30', '100', '−130', '3.50 yr'],
            ['A — Cash Flow', '−400', '30', '120', '150', '150', '150', '', ''],
            ['A — Cumulative', '−400', '−370', '−250', '−100', '50', '200', '−400', '3.67 yr'],
            ['G — Cash Flow', '−450', '−10', '110', '150', '190', '230', '', ''],
            ['G — Cumulative', '−450', '−460', '−350', '−200', '−10', '220', '−460', '4.04 yr'],
          ]}
          highlightColumn={8}
        />

        {/* NPV */}
        <h3 className="text-xl font-bold text-white mt-12 mb-4">Net Present Value (NPV)</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          NPV discounts all future cash flows back to today using a cost-of-capital rate <em className="text-indigo-300">i</em>.
          It tells us the <strong className="text-white">total profitability</strong> of an investment in today's money.
        </p>

        <FormulaBlock
          label="Net Present Value"
          formula={
            <span>
              NPV = Σ S<sub>t</sub> ÷ (1 + i)<sup>t</sup> , for t = 0 to T
            </span>
          }
          description="Where Sₜ is the cash flow in period t, i is the interest rate, and T is the horizon."
        />

        <ConceptBox variant="example" title="NPV at i = 10%">
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">NPV (M)</p>
              <p className="text-xl font-bold text-emerald-400 font-mono">€34.16</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">NPV (A)</p>
              <p className="text-xl font-bold text-emerald-400 font-mono">€34.73</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-1">NPV (G)</p>
              <p className="text-xl font-bold text-emerald-400 font-mono">€17.10</p>
            </div>
          </div>
          <p className="mt-3 text-sm">
            Option <strong className="text-white">A</strong> has the highest NPV, making it the most profitable at 10% interest.
          </p>
        </ConceptBox>

        {/* IRR */}
        <h3 className="text-xl font-bold text-white mt-12 mb-4">Internal Rate of Return (IRR)</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          The IRR is the interest rate at which NPV equals zero. It represents the{' '}
          <strong className="text-white">maximum interest rate</strong> you could pay for financing
          without losing money.
        </p>

        <FormulaBlock
          label="IRR Definition"
          formula={
            <span>
              NPV(IRR) = 0 → Σ S<sub>t</sub> ÷ (1 + IRR)<sup>t</sup> = 0
            </span>
          }
          description="Solved iteratively or by linear interpolation. Only invest if IRR ≥ cost of capital."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <IRRCard option="M" irr="17.8%" rank={1} />
          <IRRCard option="A" irr="12.8%" rank={2} />
          <IRRCard option="G" irr="11.1%" rank={3} />
        </div>

        <ConceptBox variant="tip" title="Decision Summary">
          <p>
            By <strong className="text-white">liquidity</strong> (payback): M &gt; A &gt; G<br />
            By <strong className="text-white">profitability</strong> (NPV at 10%): A &gt; M &gt; G<br />
            By <strong className="text-white">relative profitability</strong> (IRR): M &gt; A &gt; G
          </p>
          <p className="mt-2">
            The best choice depends on your priorities and risk tolerance!
          </p>
        </ConceptBox>
      </section>
    </div>
  )
}

/* ===== Helper Components ===== */

function SectionTitle({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 scroll-mt-20"
    >
      <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
      {children}
    </h2>
  )
}

function VariableCard({ symbol, name, unit, color }) {
  const bg = {
    rose: 'bg-rose-500/[0.06] border-rose-500/20',
    amber: 'bg-amber-500/[0.06] border-amber-500/20',
    emerald: 'bg-emerald-500/[0.06] border-emerald-500/20',
  }
  const text = {
    rose: 'text-rose-400',
    amber: 'text-amber-400',
    emerald: 'text-emerald-400',
  }

  return (
    <div className={`rounded-xl border p-4 ${bg[color]}`}>
      <span className={`text-2xl font-bold font-mono ${text[color]}`}>{symbol}</span>
      <p className="text-sm text-slate-300 mt-1">{name}</p>
      <p className="text-xs text-slate-500 mt-0.5">{unit}</p>
    </div>
  )
}

function CriterionCard({ title, description, icon }) {
  return (
    <div className="glass-card-hover p-5 text-center">
      <span className="text-3xl mb-3 block">{icon}</span>
      <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
  )
}

function IRRCard({ option, irr, rank }) {
  const colors = ['from-amber-400 to-yellow-400', 'from-slate-300 to-slate-400', 'from-amber-700 to-amber-800']
  const medals = ['🥇', '🥈', '🥉']

  return (
    <div className="glass-card p-5 text-center">
      <span className="text-2xl">{medals[rank - 1]}</span>
      <h4 className="text-lg font-bold text-white mt-2">Option {option}</h4>
      <p className="text-2xl font-bold font-mono text-indigo-300 mt-1">{irr}</p>
      <p className="text-xs text-slate-500 mt-1">Internal Rate of Return</p>
    </div>
  )
}
