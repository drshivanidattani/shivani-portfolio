"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SectionHeader } from "./SectionHeader"

interface IndependentProjectLayoutProps {
  title: string
  tagline: string
  problem: React.ReactNode
  approach: React.ReactNode
  howItWorks: React.ReactNode
  whatILearned: React.ReactNode
  cta?: {
    label: string
    href: string
  }
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function IndependentProjectLayout({
  title,
  tagline,
  problem,
  approach,
  howItWorks,
  whatILearned,
  cta,
}: IndependentProjectLayoutProps) {
  return (
    <article>
      {/* Hero — cleaner, "product launch" feel */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(231,64,17,0.04)_0%,transparent_50%)] pointer-events-none" />

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
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1] mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            {tagline}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <Section>
          <SectionHeader title="The Problem" />
          <Prose>{problem}</Prose>
        </Section>

        <Section>
          <SectionHeader title="Approach" />
          <Prose>{approach}</Prose>
        </Section>

        <Section>
          <SectionHeader title="How It Works" />
          {howItWorks}
        </Section>

        <Section last={!cta}>
          <SectionHeader title="What I Learned" />
          <Prose>{whatILearned}</Prose>
        </Section>

        {cta && (
          <section className="py-12 md:py-16 text-center">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(231,64,17,0.2)] hover:shadow-[0_0_30px_rgba(231,64,17,0.4)]"
            >
              {cta.label}
            </a>
          </section>
        )}
      </div>
    </article>
  )
}

function Section({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <section className={`py-12 md:py-16 ${last ? "" : "border-b border-border/30"}`}>
      {children}
    </section>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
      {children}
    </div>
  )
}
