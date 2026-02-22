import type { Metadata } from "next"
import { GeistSans, GeistMono, hourglassOfShine } from "@/lib/fonts"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ClientLayout } from "@/components/layout/ClientLayout"
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
        <ClientLayout>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
}
