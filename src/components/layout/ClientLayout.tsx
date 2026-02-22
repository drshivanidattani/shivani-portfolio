"use client"

import { SplashProvider } from "./SplashContext"
import { SplashScreen } from "./SplashScreen"

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <SplashProvider>
            <SplashScreen />
            {children}
        </SplashProvider>
    )
}
