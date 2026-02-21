"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { LOGO_VIEWBOX, LOGO_PATHS } from "./logo-paths"

interface AnimatedLogoProps {
    className?: string
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
    const [isDrawn, setIsDrawn] = useState(false)

    const totalDuration = 2.5 // seconds for full signature
    const perChar = totalDuration / LOGO_PATHS.length

    useEffect(() => {
        const timer = setTimeout(() => setIsDrawn(true), (totalDuration + 0.8) * 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <svg
            viewBox={LOGO_VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
            className={className || "h-14 w-auto"}
            aria-label="Shivani Dattani"
        >
            {LOGO_PATHS.map((d, i) => (
                <motion.path
                    key={i}
                    d={d}
                    stroke="#E74011"
                    strokeWidth={1.5}
                    fill="#E74011"
                    initial={{ pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
                    animate={{
                        pathLength: 1,
                        fillOpacity: 1,
                        strokeOpacity: 0,
                    }}
                    transition={{
                        pathLength: {
                            duration: perChar,
                            delay: i * perChar,
                            ease: "easeInOut",
                        },
                        fillOpacity: {
                            duration: 0.4,
                            delay: i * perChar + perChar * 0.6,
                            ease: "easeIn",
                        },
                        strokeOpacity: {
                            duration: 0.3,
                            delay: i * perChar + perChar,
                            ease: "easeOut",
                        },
                    }}
                />
            ))}
        </svg>
    )
}
