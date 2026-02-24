"use client"

import { motion } from "framer-motion"

interface MetricCardProps {
  value: string
  label: string
  context?: string
}

export function MetricCard({ value, label, context }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-card border border-border rounded-lg p-6 text-center"
    >
      <p className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {value}
      </p>
      <p className="text-lg font-medium text-foreground">{label}</p>
      {context && (
        <p className="text-sm text-muted-foreground mt-1">{context}</p>
      )}
    </motion.div>
  )
}
