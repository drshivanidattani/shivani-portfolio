"use client"

import { createContext, useContext, useState, useRef, MutableRefObject } from "react"

interface SplashContextType {
    splashDone: boolean
    setSplashDone: (v: boolean) => void
    logoRef: MutableRefObject<HTMLDivElement | null>
}

const SplashContext = createContext<SplashContextType>({
    splashDone: false,
    setSplashDone: () => { },
    logoRef: { current: null },
})

export function useSplash() {
    return useContext(SplashContext)
}

export function SplashProvider({ children }: { children: React.ReactNode }) {
    const [splashDone, setSplashDone] = useState(false)
    const logoRef = useRef<HTMLDivElement | null>(null)
    return (
        <SplashContext.Provider value={{ splashDone, setSplashDone, logoRef }}>
            {children}
        </SplashContext.Provider>
    )
}
