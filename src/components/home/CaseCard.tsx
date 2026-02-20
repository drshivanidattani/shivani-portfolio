"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface CaseCardProps {
  title: string
  description: string
  metrics: string[]
  href: string
}

export function CaseCard({ title, description, metrics, href }: CaseCardProps) {
  return (
    <Link href={href} className="block group">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {metrics.map((metric, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground"
            >
              {metric}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  )
}
