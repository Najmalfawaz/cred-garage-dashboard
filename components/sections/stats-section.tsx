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
  Legend
} from 'recharts'

// Sample chart data
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
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Balance Bar Chart */}
      <motion.div
        className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-md"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-zinc-700 dark:text-zinc-100">Monthly Balance</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={balanceData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="balance" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Savings Pie Chart */}
      <motion.div
        className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-md"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-zinc-700 dark:text-zinc-100">Savings Overview</h3>
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
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Credit Score Line Chart */}
      <motion.div
        className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-md col-span-1 md:col-span-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-zinc-700 dark:text-zinc-100">Credit Score Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={creditTrendData}>
            <XAxis dataKey="month" />
            <YAxis domain={[740, 780]} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.section>
  )
}
