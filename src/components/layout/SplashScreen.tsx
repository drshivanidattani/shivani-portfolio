"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedLogo } from "./AnimatedLogo"
import { useSplash } from "./SplashContext"

export function SplashScreen() {
    const [phase, setPhase] = useState<"drawing" | "collapsing" | "settled">("drawing")
    const { setSplashDone, logoRef } = useSplash()

    // Store pixel values to avoid Framer Motion snapping on mixed unit interpolation
    const [startRect, setStartRect] = useState<{ top: number, left: number, width: number } | null>(null)
    const [targetRect, setTargetRect] = useState<{ top: number, left: number, width: number } | null>(null)

    // Calculate initial centered positioning in pixels on mount
    useEffect(() => {
        const calculateStartRect = () => {
            const width = Math.min(window.innerWidth * 0.8, 500)
            const height = width / (655.71 / 113.13) // using viewbox aspect ratio
            setStartRect({
                top: (window.innerHeight - height) / 2,
                left: (window.innerWidth - width) / 2,
                width: width,
            })
        }
        calculateStartRect()
    }, [])

    const startCollapse = useCallback(() => {
        // Measure the navbar placeholder's exact rendered position (includes translate-y-[10px])
        if (logoRef.current) {
            const rect = logoRef.current.getBoundingClientRect()
            setTargetRect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
            })
        }
        setPhase("collapsing")
    }, [logoRef])

    // Wait until startRect is calculated so we don't render at top-left by default
    if (!startRect && phase === "drawing") return (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A]" />
    );

    return (
        <>
            {/* Dark overlay — fades out during collapse, removed once settled */}
            {phase !== "settled" && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-[#0A0A0A]"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: phase === "collapsing" ? 0 : 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            )}

            {/* Logo container — draws centered, collapses to navbar, stays permanently */}
            <motion.div
                className="fixed z-[101]"
                style={phase === "settled" && targetRect ? {
                    top: targetRect.top,
                    left: targetRect.left,
                    width: targetRect.width,
                } : undefined}
                initial={{
                    top: startRect?.top || 0,
                    left: startRect?.left || 0,
                    width: startRect?.width || 0,
                }}
                animate={
                    phase === "collapsing" && targetRect
                        ? {
                            top: targetRect.top,
                            left: targetRect.left,
                            width: targetRect.width,
                        }
                        : phase === "settled" && targetRect
                            ? {
                                top: targetRect.top,
                                left: targetRect.left,
                                width: targetRect.width,
                            }
                            : {
                                top: startRect?.top || 0,
                                left: startRect?.left || 0,
                                width: startRect?.width || 0,
                            }
                }
                transition={{
                    duration: phase === "settled" ? 0 : 0.7,
                    ease: [0.76, 0, 0.24, 1],
                }}
                onAnimationComplete={(definition) => {
                    // Make sure it's the layout animation completing, not a bubbled stroke animation
                    if (phase === "collapsing" && (definition as any)?.top !== undefined) {
                        setSplashDone(true)
                        setPhase("settled")
                    }
                }}
            >
                <Link href="/" aria-label="Shivani Dattani — Home" className="block">
                    <AnimatedLogo
                        className="w-full h-auto"
                        drawDuration={1.5}
                        onAnimationComplete={() => {
                            setTimeout(() => startCollapse(), 300)
                        }}
                    />
                </Link>
            </motion.div>
        </>
    )
}
