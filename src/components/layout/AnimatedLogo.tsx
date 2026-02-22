"use client"

import { motion } from "framer-motion"
import { LOGO_VIEWBOX, LOGO_PATHS } from "./logo-paths"

interface AnimatedLogoProps {
    className?: string
    /** Duration of the full stroke animation in seconds */
    drawDuration?: number
    /** Called when the entire animation (stroke + fill) is complete */
    onAnimationComplete?: () => void
}

export function AnimatedLogo({
    className,
    drawDuration = 2.5,
    onAnimationComplete,
}: AnimatedLogoProps) {
    const perChar = drawDuration / LOGO_PATHS.length
    const fillDelay = drawDuration + 0.1
    const fillDuration = 0.4

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
                    fill="#E74011"
                    stroke="#E74011"
                    strokeWidth={1.5}
                    initial={{ pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
                    animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}
                    transition={{
                        pathLength: {
                            duration: perChar,
                            delay: i * perChar,
                            ease: "easeInOut",
                        },
                        fillOpacity: {
                            duration: fillDuration,
                            delay: fillDelay,
                            ease: "easeIn",
                        },
                        strokeOpacity: {
                            duration: 0.3,
                            delay: fillDelay,
                            ease: "easeOut",
                        },
                    }}
                    onAnimationComplete={
                        i === LOGO_PATHS.length - 1 ? onAnimationComplete : undefined
                    }
                />
            ))}
        </svg>
    )
}
