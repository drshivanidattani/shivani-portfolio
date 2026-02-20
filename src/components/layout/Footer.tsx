import Link from "next/link"
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
        {/* Decorative name */}
        <p className="font-decorative text-5xl max-md:text-3xl text-primary mb-8">
          Shivani Dattani
        </p>

        <div className="flex items-start justify-between max-md:flex-col max-md:gap-8">
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

        {/* Bottom line */}
        <p className="text-xs text-muted-foreground mt-12 max-md:mt-8">
          Built with intention. &copy; 2026
        </p>
      </div>
    </footer>
  )
}
