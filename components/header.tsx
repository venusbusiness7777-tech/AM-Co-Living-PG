"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home", activeMatch: (path) => path === "/" },
    { href: "/about", label: "About Us", activeMatch: (path) => path === "/about" },
    { href: "/house-rules", label: "House Rules", activeMatch: (path) => path === "/house-rules" },
  ]

  const isActive = (link) => link.activeMatch(pathname)

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02]" : "bg-white/[0.02]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-16" style={{ fontFamily: '"Geist", sans-serif' }}>
          {/* Logo - Left Aligned */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className={cn(
                "text-base md:text-lg lg:text-xl font-semibold tracking-tight transition-colors",
                isScrolled ? "text-neutral-900 hover:text-neutral-700" : "text-white hover:text-white/80",
              )}
              aria-label="AM Co-Living PG Home"
            >
              AM Co-Living PG
            </Link>
          </motion.div>

          {/* Desktop Navigation Links - Right Aligned */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isActive(link)
                    ? isScrolled
                      ? "text-neutral-900 border-b-2 border-neutral-900"
                      : "text-white border-b-2 border-white"
                    : isScrolled
                      ? "text-neutral-600 hover:text-neutral-900"
                      : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={cn(
                "w-6 h-6 transition-colors",
                isScrolled ? "text-neutral-900" : "text-white",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/[0.02]"
            >
              <div className="flex flex-col gap-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors px-4 py-2 rounded-lg",
                      isActive(link)
                        ? isScrolled
                          ? "text-neutral-900 bg-neutral-100"
                          : "text-white bg-white/10"
                        : isScrolled
                          ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                          : "text-white/70 hover:text-white hover:bg-white/10",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
