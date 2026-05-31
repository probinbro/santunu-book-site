import ChapterHero from '../components/ChapterHero'
import ConceptBox from '../components/ConceptBox'
import DataTable from '../components/DataTable'
import { GitBranch, Clock, BarChart3, Network } from 'lucide-react'

export default function Chapter2_Projects() {
  return (
    <div>
      <ChapterHero
        number={2}
        title="Project Management"
        subtitle="Master the tools for planning and controlling complex projects — from Roy & PERT network diagrams to Gantt charts and critical path analysis."
        gradient="from-sky-500 to-indigo-600"
      />

      <section className="mb-16 animate-slide-up">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-sky-500 to-indigo-500" />
          Chapter Overview
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          Project management in production focuses on planning activities with <strong className="text-white">precedence constraints</strong> — 
          some tasks can only start after others finish. The goal is to determine the{' '}
          <strong className="text-white">minimum project duration</strong> and identify which activities are
          critical (have no slack time).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <TopicCard
            icon={<Network className="w-5 h-5" />}
            title="Roy Diagram (PDM)"
            description="Nodes represent activities; arrows show precedence relationships and durations. Calculate earliest/latest start times."
            color="sky"
          />
          <TopicCard
            icon={<GitBranch className="w-5 h-5" />}
            title="PERT Diagram (ADM)"
            description="Arrows represent activities; nodes represent project states. Used for estimating durations with uncertainty."
            color="indigo"
          />
          <TopicCard
            icon={<BarChart3 className="w-5 h-5" />}
            title="Gantt Chart"
            description="Horizontal bar chart showing activity timelines. Visualize scheduling and resource allocation."
            color="violet"
          />
          <TopicCard
            icon={<Clock className="w-5 h-5" />}
            title="Critical Path"
            description="The longest path through the network — activities with zero slack that determine project duration."
            color="purple"
          />
        </div>

        <ConceptBox variant="definition" title="Types of Constraints">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Potential (Precedence):</strong> Activity B can only start after A finishes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Disjunctive:</strong> Two activities cannot run simultaneously (shared resource)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▸</span>
              <span><strong className="text-white">Cumulative:</strong> Limited resources must be allocated across multiple activities</span>
            </li>
          </ul>
        </ConceptBox>

        {/* Example data from PDF */}
        <DataTable
          caption="Sample Project Activities"
          headers={['Activity', 'Duration', 'Predecessors', 'Resource X', 'Resource Y']}
          rows={[
            ['A', '4', '—', '1', '1'],
            ['B', '3', 'A', '2', '3'],
            ['C', '2', 'B', '4', '—'],
            ['D', '7', 'C', '2', '4'],
            ['E', '2', 'C', '1', '1'],
            ['F', '10', 'C', '2', '4'],
            ['G', '5', 'C', '1', '3'],
            ['H', '15', 'C', '1', '2'],
          ]}
        />

        {/* Placeholder for network diagram */}
        <div className="my-8 rounded-2xl border border-dashed border-sky-500/30 bg-sky-500/[0.03] p-8 text-center">
          <Network className="w-12 h-12 text-sky-500/30 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-sky-300 mb-2">Interactive Network Diagram</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            An interactive Roy/PERT network diagram with critical path highlighting will be available in Phase 2.
          </p>
          <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-500/10 px-3 py-1.5 rounded-full">
            Coming Soon
          </span>
        </div>

        <ConceptBox variant="tip" title="Critical Path Method (CPM)">
          <p>
            <strong className="text-white">Forward pass:</strong> Calculate the earliest start time for each activity (left to right).<br />
            <strong className="text-white">Backward pass:</strong> Calculate the latest start time (right to left).<br />
            <strong className="text-white">Slack = Latest Start − Earliest Start.</strong> Activities with zero slack form the critical path.
          </p>
        </ConceptBox>
      </section>
    </div>
  )
}

function TopicCard({ icon, title, description, color }) {
  const colors = {
    sky: 'border-sky-500/20 bg-sky-500/[0.04] text-sky-400',
    indigo: 'border-indigo-500/20 bg-indigo-500/[0.04] text-indigo-400',
    violet: 'border-violet-500/20 bg-violet-500/[0.04] text-violet-400',
    purple: 'border-purple-500/20 bg-purple-500/[0.04] text-purple-400',
  }

  return (
    <div className={`glass-card-hover p-5 border ${colors[color]}`}>
      <div className={`w-10 h-10 rounded-xl bg-${color}-500/15 flex items-center justify-center mb-3 ${colors[color]}`}>
        {icon}
      </div>
      <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}
