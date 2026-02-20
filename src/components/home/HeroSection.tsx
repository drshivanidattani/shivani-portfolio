"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-4">
          Product Management Portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          I build systems that
          <span className="text-primary"> replace chaos</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          1.5 years turning broken workflows into working products&mdash;across
          healthcare startups and enterprise systems. Now channeling that into
          Product Management.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-[var(--cinnabar-60)] transition-colors"
          >
            See my work
            <ArrowDown className="w-4 h-4" />
          </Link>
          <Link
            href="/the-path"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-colors"
          >
            Why PM?
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
