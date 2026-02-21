"use client"

import { useState, useEffect } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Sparkles } from "lucide-react"

const rotatingPhrases = ["fuel growth", "create structure", "reduce risk"]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.4 },
  },
}

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 overflow-hidden">
      {/* Background ambient glow specific to hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(231,64,17,0.08)_0%,transparent_50%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto relative z-10 pt-16"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-secondary/5 text-secondary-dark text-xs font-medium backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">Product Management Portfolio</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 leading-[1.1] mb-6"
        >
          I build systems that
          <span className="inline-block relative h-[1.15em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingPhrases[phraseIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-block text-primary drop-shadow-[0_0_20px_rgba(231,64,17,0.35)] mix-blend-plus-lighter"
              >
                {" "}{rotatingPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
        >
          1.5 years turning broken workflows into working products&mdash;across
          healthcare startups and enterprise systems. Now channeling that into
          Product Management.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#work"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(231,64,17,0.2)] hover:shadow-[0_0_30px_rgba(231,64,17,0.4)]"
          >
            See my work
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </Link>
          <Link
            href="/the-path"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/60 bg-card/30 backdrop-blur-md text-foreground font-medium transition-all hover:bg-card hover:border-border hover:scale-105 active:scale-95"
          >
            Why PM?
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
