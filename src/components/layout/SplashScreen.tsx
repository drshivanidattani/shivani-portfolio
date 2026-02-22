"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedLogo } from "./AnimatedLogo"
import { useSplash } from "./SplashContext"

export function SplashScreen() {
    const [phase, setPhase] = useState<"drawing" | "collapsing" | "done">("drawing")
    const { setSplashDone } = useSplash()
    const showSplash = phase === "drawing" || phase === "collapsing"

    if (!showSplash) return null

    return (
        <AnimatePresence>
            {showSplash && (
                <>
                    {/* Dark overlay — fades out during collapse */}
                    <motion.div
                        key="splash-bg"
                        className="fixed inset-0 z-[100] bg-[#0A0A0A]"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: phase === "collapsing" ? 0 : 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />

                    {/* Logo container — collapses from center to navbar position */}
                    <motion.div
                        key="splash-logo"
                        className="fixed z-[101] flex items-center justify-center"
                        initial={{
                            top: "50%",
                            left: "50%",
                            x: "-50%",
                            y: "-50%",
                            width: "min(80vw, 500px)",
                        }}
                        animate={
                            phase === "collapsing"
                                ? {
                                    top: "32px",
                                    left: "24px",
                                    x: "0%",
                                    y: "-50%",
                                    width: "120px",
                                }
                                : {
                                    top: "50%",
                                    left: "50%",
                                    x: "-50%",
                                    y: "-50%",
                                    width: "min(80vw, 500px)",
                                }
                        }
                        transition={{
                            duration: 0.7,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        onAnimationComplete={() => {
                            if (phase === "collapsing") {
                                setSplashDone(true)
                                setPhase("done")
                            }
                        }}
                    >
                        <AnimatedLogo
                            className="w-full h-auto"
                            drawDuration={1.5}
                            onAnimationComplete={() => {
                                setTimeout(() => setPhase("collapsing"), 300)
                            }}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
