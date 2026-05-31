import ChapterHero from '../components/ChapterHero'
import ConceptBox from '../components/ConceptBox'
import DataTable from '../components/DataTable'
import FormulaBlock from '../components/FormulaBlock'
import { Clock, ArrowRightLeft, Factory } from 'lucide-react'

export default function Chapter7_Scheduling() {
  return (
    <div>
      <ChapterHero
        number={7}
        title="Operations Scheduling"
        subtitle="Assign jobs to machines and determine processing order — from simple single-machine rules (EDD, SPT) to Johnson's algorithm and heuristic methods."
        gradient="from-rose-500 to-pink-600"
      />

      <section className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-500 to-pink-500" />
          Chapter Overview
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          Operations scheduling answers three interrelated questions: <strong className="text-white">which resource</strong> handles
          each operation (loading), in <strong className="text-white">what order</strong> (sequencing), and{' '}
          <strong className="text-white">when exactly</strong> (timing). The classic formulation is the{' '}
          <em className="text-rose-300">job shop problem</em>: n jobs on m machines.
        </p>

        <ConceptBox variant="definition" title="Problem Classification: n/m/F/Objective">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">▸</span>
              <span><strong className="text-white">n:</strong> Number of jobs (pieces, orders)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">▸</span>
              <span><strong className="text-white">m:</strong> Number of machines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">▸</span>
              <span><strong className="text-white">F:</strong> Flow type — P (permutation/flow shop) or G (general/job shop)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">▸</span>
              <span><strong className="text-white">Objective:</strong> Minimize C<sub>max</sub> (makespan), L<sub>max</sub> (max lateness), or F<sub>avg</sub> (mean flow time)</span>
            </li>
          </ul>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Single Machine Rules (n/1)</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-card-hover p-5 border border-rose-500/15">
            <h4 className="text-sm font-bold text-rose-300 mb-2">EDD — Earliest Due Date</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">
              Process the most urgent job first. Minimizes <strong className="text-white">maximum lateness (L<sub>max</sub>)</strong>.
            </p>
            <p className="text-xs font-mono text-slate-500">Rule: Sort by ascending dᵢ</p>
          </div>
          <div className="glass-card-hover p-5 border border-pink-500/15">
            <h4 className="text-sm font-bold text-pink-300 mb-2">SPT — Shortest Processing Time</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">
              Process the shortest job first. Minimizes <strong className="text-white">average flow time (F<sub>avg</sub>)</strong>.
            </p>
            <p className="text-xs font-mono text-slate-500">Rule: Sort by ascending pᵢ</p>
          </div>
        </div>

        <DataTable
          caption="Example: 8 Jobs on 1 Machine"
          headers={['Job', '1', '2', '3', '4', '5', '6', '7', '8']}
          rows={[
            ['Processing (pᵢ)', '8', '3', '6', '2', '7', '9', '4', '5'],
            ['Due Date (dᵢ)', '15', '20', '21', '27', '29', '33', '39', '42'],
          ]}
        />

        <ConceptBox variant="example" title="Comparing EDD vs SPT">
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-xs text-slate-500 mb-1">EDD Sequence</p>
              <p className="text-sm text-white font-mono mb-1">1→2→3→4→5→6→7→8</p>
              <p className="text-xs text-slate-400">C<sub>max</sub> = 44 | L<sub>max</sub> = <span className="text-emerald-400 font-bold">9</span> | F<sub>avg</sub> = 24.9</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">SPT Sequence</p>
              <p className="text-sm text-white font-mono mb-1">4→2→7→8→3→5→1→6</p>
              <p className="text-xs text-slate-400">C<sub>max</sub> = 44 | L<sub>max</sub> = 30 | F<sub>avg</sub> = <span className="text-emerald-400 font-bold">19.5</span></p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            EDD is best for minimizing lateness; SPT is best for minimizing average wait time.
            Note that C<sub>max</sub> is always the same with 1 machine!
          </p>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Two-Machine Flow Shop: Johnson's Algorithm</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          When all jobs follow the same route through 2 machines, Johnson's algorithm finds the
          optimal sequence that minimizes the <strong className="text-white">makespan (C<sub>max</sub>)</strong>.
        </p>

        <ConceptBox variant="tip" title="Johnson's Algorithm Steps">
          <ol className="list-decimal list-inside space-y-1.5 text-sm">
            <li>Find the <strong className="text-white">shortest processing time</strong> among all unscheduled jobs</li>
            <li>If it's on <strong className="text-white">Machine 1</strong> → place job at the <em>front</em> of sequence</li>
            <li>If it's on <strong className="text-white">Machine 2</strong> → place job at the <em>back</em> of sequence</li>
            <li>Remove the job and repeat until all jobs are scheduled</li>
          </ol>
        </ConceptBox>

        <DataTable
          caption="Johnson's Algorithm Example: 5 Jobs, 2 Machines"
          headers={['Job', '1', '2', '3', '4', '5']}
          rows={[
            ['Machine A', '1', '7', '7', '4', '6'],
            ['Machine B', '9', '2', '11', '4', '3'],
          ]}
        />

        <ConceptBox variant="example" title="Solution">
          <p className="text-sm">
            Optimal sequence: <span className="font-mono text-white text-base">1 → 3 → 4 → 5 → 2</span>
          </p>
          <p className="text-sm mt-1">
            Makespan: <span className="font-mono text-emerald-400 font-bold">C<sub>max</sub> = 30</span>
          </p>
        </ConceptBox>

        <h3 className="text-xl font-bold text-white mt-10 mb-4">Multi-Machine Heuristics</h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          For 3+ machines, Johnson's algorithm is no longer optimal. We use heuristic methods:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-card-hover p-5 border border-rose-500/15">
            <h4 className="text-sm font-bold text-rose-300 mb-2">Palmer's Heuristic</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Computes a slope index for each job (comparing early vs. late machine times).
              Sort by non-decreasing slope index.
            </p>
          </div>
          <div className="glass-card-hover p-5 border border-pink-500/15">
            <h4 className="text-sm font-bold text-pink-300 mb-2">Gupta's Heuristic</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Uses a ratio of numerator (based on first/last machine comparison) and denominator
              (minimum sum of consecutive machine times). Sort by non-decreasing ratio.
            </p>
          </div>
        </div>

        <ConceptBox variant="warning" title="Quality Assessment">
          <p>
            Since heuristics don't guarantee optimality, we compute a <strong className="text-white">lower bound</strong> to
            assess solution quality. The bound is calculated by simplifying the problem (e.g., considering only one
            machine's workload). The closer our heuristic solution is to the bound, the better!
          </p>
        </ConceptBox>
      </section>
    </div>
  )
}
