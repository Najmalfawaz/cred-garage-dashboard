'use client'

import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'

const balanceData = [
  { month: 'Jan', balance: 20000 },
  { month: 'Feb', balance: 30000 },
  { month: 'Mar', balance: 25000 },
  { month: 'Apr', balance: 40000 },
]

const savingsData = [
  { name: 'Saved', value: 2500 },
  { name: 'Spent', value: 7500 },
]

const creditTrendData = [
  { month: 'Jan', score: 750 },
  { month: 'Feb', score: 760 },
  { month: 'Mar', score: 765 },
  { month: 'Apr', score: 770 },
]

const COLORS = ['#4ade80', '#f87171']

export const StatsSection = () => {
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Monthly Balance Chart */}
      <StatCard title="Monthly Balance">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={balanceData}>
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Bar dataKey="balance" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </StatCard>

      {/* Savings Pie Chart */}
      <StatCard title="Savings Overview" delay={0.1}>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={savingsData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {savingsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </StatCard>

      {/* Credit Score Line Chart */}
      <StatCard title="Credit Score Trend" fullWidth delay={0.2}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={creditTrendData}>
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis domain={[740, 780]} stroke="#9ca3af" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </StatCard>
    </motion.section>
  )
}

// Reusable Card Component
const StatCard = ({
  title,
  children,
  delay = 0,
  fullWidth = false,
}: {
  title: string
  children: React.ReactNode
  delay?: number
  fullWidth?: boolean
}) => (
  <motion.div
    className={`bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-shadow hover:shadow-md ${
      fullWidth ? 'col-span-1 md:col-span-2' : ''
    }`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-xl font-medium mb-4 text-zinc-800 dark:text-zinc-100">
      {title}
    </h3>
    {children}
  </motion.div>
)
