"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

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

const allWorkHrefs = workLinks.flatMap((s) => s.items.map((i) => i.href))

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href
  const isWorkActive = allWorkHrefs.includes(pathname)

  const linkClass = (href: string) =>
    `text-sm transition-colors ${
      isActive(href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 max-md:px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          Shivani Dattani
        </Link>

        {/* Desktop nav */}
        <div className="flex items-center gap-8 max-md:hidden">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          {/* Work dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm transition-colors ${
                isWorkActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Work
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
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
                          className={`block px-2 py-1.5 rounded text-sm transition-colors ${
                            isActive(item.href)
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
          <div className="flex flex-col gap-4">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            {workLinks.map((section) => (
              <div key={section.label}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {section.label}
                </p>
                <div className="flex flex-col gap-2 pl-3">
                  {section.items.map((item) => (
                    <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/the-path" className={linkClass("/the-path")}>
              My Journey
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
