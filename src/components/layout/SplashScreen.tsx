"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedLogo } from "./AnimatedLogo"
import { useSplash } from "./SplashContext"

export function SplashScreen() {
    const [phase, setPhase] = useState<"drawing" | "collapsing" | "done">("drawing")
    const { setSplashDone, logoRef } = useSplash()
    const showSplash = phase === "drawing" || phase === "collapsing"

    const [targetRect, setTargetRect] = useState<{
        top: number
        left: number
        width: number
        height: number
    } | null>(null)

    const startCollapse = useCallback(() => {
        // Measure the navbar logo's exact position
        if (logoRef.current) {
            const rect = logoRef.current.getBoundingClientRect()
            setTargetRect({
                top: rect.top + rect.height / 2,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            })
        }
        setPhase("collapsing")
    }, [logoRef])

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

                    {/* Logo container — collapses from center to navbar logo position */}
                    <motion.div
                        key="splash-logo"
                        className="fixed z-[101]"
                        initial={{
                            top: "50%",
                            left: "50%",
                            x: "-50%",
                            y: "-50%",
                            width: "min(80vw, 500px)",
                        }}
                        animate={
                            phase === "collapsing" && targetRect
                                ? {
                                    top: `${targetRect.top}px`,
                                    left: `${targetRect.left}px`,
                                    x: "0%",
                                    y: "-50%",
                                    width: `${targetRect.width}px`,
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
                                setTimeout(() => startCollapse(), 300)
                            }}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
