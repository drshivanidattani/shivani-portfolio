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
    <Link href={href} className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl">
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative p-6 sm:p-8 rounded-xl border border-border/60 bg-gradient-to-b from-[hsl(var(--card))]/80 to-background hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="p-2 rounded-full bg-card/50 border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300 ml-4 shrink-0 overflow-hidden">
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {metrics.map((metric, i) => (
            <span
              key={i}
              className="inline-flex items-center px-3 py-1 rounded-md text-[11px] uppercase tracking-wider font-mono font-medium border border-border/50 bg-background/50 text-foreground/70"
            >
              {metric}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  )
}
