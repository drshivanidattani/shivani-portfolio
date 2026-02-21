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
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-8">

          {/* Custom SVG Logo (Left Aligned, Increased Size) */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Shivani Dattani"
              width={320}
              height={96}
              className="h-24 max-md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Right side container for links */}
          <div className="flex items-center gap-12 max-md:flex-col max-md:items-start max-md:gap-8">
            {/* Nav links */}
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
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
