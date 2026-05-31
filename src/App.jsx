import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Chapter1_Costs from './chapters/Chapter1_Costs'
import Chapter2_Projects from './chapters/Chapter2_Projects'
import Chapter3_Localization from './chapters/Chapter3_Localization'
import Chapter4_Inventory from './chapters/Chapter4_Inventory'
import Chapter5_Planning from './chapters/Chapter5_Planning'
import Chapter6_MRP from './chapters/Chapter6_MRP'
import Chapter7_Scheduling from './chapters/Chapter7_Scheduling'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/costs" replace />} />
        <Route path="/costs" element={<Chapter1_Costs />} />
        <Route path="/projects" element={<Chapter2_Projects />} />
        <Route path="/localization" element={<Chapter3_Localization />} />
        <Route path="/inventory" element={<Chapter4_Inventory />} />
        <Route path="/planning" element={<Chapter5_Planning />} />
        <Route path="/mrp" element={<Chapter6_MRP />} />
        <Route path="/scheduling" element={<Chapter7_Scheduling />} />
      </Routes>
    </Layout>
  )
}
