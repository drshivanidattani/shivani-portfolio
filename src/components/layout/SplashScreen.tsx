"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedLogo } from "./AnimatedLogo"

export function SplashScreen() {
    const [phase, setPhase] = useState<"drawing" | "sliding" | "done">("drawing")
    const showSplash = phase === "drawing" || phase === "sliding"

    if (!showSplash) return null

    return (
        <AnimatePresence>
            {showSplash && (
                <motion.div
                    key="splash"
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
                    initial={{ y: "0%" }}
                    animate={phase === "sliding" ? { y: "-100%" } : { y: "0%" }}
                    transition={
                        phase === "sliding"
                            ? { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
                            : undefined
                    }
                    onAnimationComplete={() => {
                        if (phase === "sliding") setPhase("done")
                    }}
                >
                    <AnimatedLogo
                        className="w-[min(80vw,500px)] h-auto"
                        drawDuration={1.5}
                        onAnimationComplete={() => {
                            // Small pause after fill, then slide up
                            setTimeout(() => setPhase("sliding"), 400)
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
