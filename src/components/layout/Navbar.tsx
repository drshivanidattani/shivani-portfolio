"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Mail, Linkedin, Calendar } from "lucide-react"

const workLinks = [
  {
    label: "From the Field",
    items: [
      { name: "EMR Migration", href: "/emr-migration" },
      { name: "Lead Management System", href: "/lead-management" },
    ],
  },
  {
    label: "Independent Projects",
    items: [
      { name: "Career Assessment Tool", href: "/career-assessment" },
      { name: "SQL Analytics", href: "/sql-analytics" },
    ],
  },
]

const contactLinks = [
  { name: "Email", href: "mailto:shivani@example.com", icon: Mail, external: false },
  { name: "LinkedIn", href: "https://linkedin.com/in/shivani-dattani", icon: Linkedin, external: true },
  { name: "Book a Call", href: "https://calendly.com/shivani-dattani", icon: Calendar, external: true },
]

const allWorkHrefs = workLinks.flatMap((s) => s.items.map((i) => i.href))

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  // DECISION: separate state for mobile collapsibles vs desktop dropdowns
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false)
  const [mobileContactOpen, setMobileContactOpen] = useState(false)
  const workRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setWorkOpen(false)
      }
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setWorkOpen(false)
    setContactOpen(false)
    setMobileWorkOpen(false)
    setMobileContactOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href
  const isWorkActive = allWorkHrefs.includes(pathname)

  const linkClass = (href: string) =>
    `text-sm transition-colors ${isActive(href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 max-md:px-4 h-full flex items-center justify-between relative">
        {/* Mobile hamburger (left or right, but let's keep it right and use absolute positioning for center logo) */}

        {/* Placeholder to balance flex if needed, or simply absolute center the logo */}
        <div className="w-24 max-md:hidden"></div>

        {/* Logo - Centered absolutely */}
        <Link href="/" className="text-primary absolute left-1/2 -translate-x-1/2 flex items-center h-full">
          <p className="font-decorative text-2xl max-md:text-xl">
            Shivani Dattani
          </p>
        </Link>

        {/* Desktop nav */}
        <div className="flex items-center gap-8 max-md:hidden">
          {/* Work dropdown */}
          <div
            ref={workRef}
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              onClick={() => setWorkOpen(!workOpen)}
              className={`flex items-center gap-1 text-sm transition-colors ${isWorkActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Work
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${workOpen ? "rotate-180" : ""}`} />
            </button>

            {workOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-card border border-border rounded-lg shadow-lg p-4 min-w-[220px]">
                  {workLinks.map((section) => (
                    <div key={section.label} className="mb-3 last:mb-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 px-2">
                        {section.label}
                      </p>
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-2 py-1.5 rounded text-sm transition-colors ${isActive(item.href)
                            ? "text-primary bg-primary/5"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                            }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/the-path" className={linkClass("/the-path")}>
            My Journey
          </Link>

          {/* Contact dropdown */}
          <div
            ref={contactRef}
            className="relative"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className={`flex items-center gap-1 text-sm transition-colors text-muted-foreground hover:text-foreground`}
            >
              Contact
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${contactOpen ? "rotate-180" : ""}`} />
            </button>

            {contactOpen && (
              <div className="absolute top-full right-0 pt-2">
                <div className="bg-card border border-border rounded-lg shadow-lg p-4 min-w-[200px]">
                  {contactLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-2.5 px-2 py-1.5 rounded text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4">
          <div className="flex flex-col gap-3">
            {/* Work — collapsible */}
            <div>
              <button
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className={`flex items-center justify-between w-full text-sm transition-colors ${isWorkActive ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
              >
                Work
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileWorkOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileWorkOpen && (
                <div className="mt-2 ml-1 flex flex-col gap-3">
                  {workLinks.map((section) => (
                    <div key={section.label}>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                        {section.label}
                      </p>
                      <div className="flex flex-col gap-1.5 pl-3">
                        {section.items.map((item) => (
                          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/the-path" className={linkClass("/the-path")}>
              My Journey
            </Link>

            {/* Contact — collapsible */}
            <div>
              <button
                onClick={() => setMobileContactOpen(!mobileContactOpen)}
                className="flex items-center justify-between w-full text-sm text-muted-foreground transition-colors"
              >
                Contact
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileContactOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileContactOpen && (
                <div className="mt-2 ml-1 flex flex-col gap-1.5 pl-3">
                  {contactLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
