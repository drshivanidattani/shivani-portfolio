import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/#work" },
  { name: "My Journey", href: "/the-path" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 max-md:px-4 py-16 max-md:py-10">
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-12">

          {/* Custom SVG Logo (Left Aligned, Vertically Centered) */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo.svg"
              alt="Shivani Dattani"
              width={360}
              height={120}
              className="h-32 max-md:h-24 w-auto transform -translate-y-2"
              priority
            />
          </Link>

          {/* Right side container for links matching the image layout */}
          <div className="flex gap-16 max-md:gap-8 text-sm text-muted-foreground lg:pr-12 items-start">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>

            <div className="flex flex-col gap-6">
              <Link href="/#work" className="hover:text-foreground transition-colors">
                Work
              </Link>
              {/* Social links directly under Work */}
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <Link href="/the-path" className="hover:text-foreground transition-colors">
              My Journey
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <p className="text-xs text-muted-foreground mt-12 max-md:mt-8">
          Built with intention. &copy; 2026
        </p>
      </div>
    </footer>
  )
}
