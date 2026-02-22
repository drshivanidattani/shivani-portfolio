"use client"

import { SplashScreen } from "./SplashScreen"

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SplashScreen />
            {children}
        </>
    )
}
