"use client"

import { createContext, useContext, useState } from "react"

const SplashContext = createContext({ splashDone: false, setSplashDone: (_: boolean) => { } })

export function useSplash() {
    return useContext(SplashContext)
}

export function SplashProvider({ children }: { children: React.ReactNode }) {
    const [splashDone, setSplashDone] = useState(false)
    return (
        <SplashContext.Provider value={{ splashDone, setSplashDone }}>
            {children}
        </SplashContext.Provider>
    )
}
