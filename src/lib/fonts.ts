import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import localFont from "next/font/local"

export const hourglassOfShine = localFont({
  src: "../assets/fonts/HourglassOfShine.otf",
  variable: "--font-hourglass",
  display: "swap",
  preload: false, // DECISION: decorative only — don't block rendering
})

export { GeistSans, GeistMono }
