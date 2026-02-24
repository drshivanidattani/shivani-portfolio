"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SectionHeader } from "./SectionHeader"

interface FromTheFieldLayoutProps {
  title: string
  company: string
  role: string
  timeline: string
  situation: React.ReactNode
  constraints: React.ReactNode
  whatIBuilt: React.ReactNode
  keyDecisions: React.ReactNode
  results: React.ReactNode
  retrospective: React.ReactNode
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function FromTheFieldLayout({
  title,
  company,
  role,
  timeline,
  situation,
  constraints,
  whatIBuilt,
  keyDecisions,
  results,
  retrospective,
}: FromTheFieldLayoutProps) {
  return (
    <article>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(231,64,17,0.06)_0%,transparent_50%)] pointer-events-none" />

        {/* Left accent border — signals "real work" */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>

          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            {title}
          </motion.h1>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs uppercase tracking-wider font-mono font-medium border border-border/50 bg-background/50 text-foreground/70">
              {company}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs uppercase tracking-wider font-mono font-medium border border-border/50 bg-background/50 text-foreground/70">
              {role}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs uppercase tracking-wider font-mono font-medium border border-border/50 bg-background/50 text-foreground/70">
              {timeline}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <Section>
          <SectionHeader title="The Situation" />
          <Prose>{situation}</Prose>
        </Section>

        <Section>
          <SectionHeader title="Constraints" />
          <Prose>{constraints}</Prose>
        </Section>

        <Section>
          <SectionHeader title="What I Built" />
          <Prose>{whatIBuilt}</Prose>
        </Section>

        <Section>
          <SectionHeader title="Key Decisions" />
          {keyDecisions}
        </Section>

        <Section>
          <SectionHeader title="Results" />
          {results}
        </Section>

        <Section last>
          <SectionHeader title="What I'd Do Differently" />
          <Prose>{retrospective}</Prose>
        </Section>
      </div>
    </article>
  )
}

// DECISION: Section wrapper handles consistent vertical spacing
function Section({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <section className={`py-12 md:py-16 ${last ? "" : "border-b border-border/30"}`}>
      {children}
    </section>
  )
}

// DECISION: Prose wrapper for text-heavy content sections
function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
      {children}
    </div>
  )
}
