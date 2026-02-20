import type { Metadata } from "next"
import { GeistSans, GeistMono, hourglassOfShine } from "@/lib/fonts"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Shivani Dattani",
  description: "PM Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${hourglassOfShine.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
