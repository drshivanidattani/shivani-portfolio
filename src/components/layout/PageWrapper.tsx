"use client"

import { motion } from "framer-motion"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-5xl mx-auto px-6 max-md:px-4 py-12 ${className}`}
    >
      {children}
    </motion.div>
  )
}
