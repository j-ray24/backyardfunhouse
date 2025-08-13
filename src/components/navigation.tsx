'use client'

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationLinks = [
    { href: "/courts", label: "Basketball Courts" },
    { href: "/pools", label: "Custom Pools" },
    { href: "/trampolines", label: "Trampolines" },
    { href: "/playhouses", label: "Playhouses" },
    { href: "/greens", label: "Putting Greens" },
    { href: "/gallery", label: "Gallery" },
    { href: "/service-areas", label: "Service Areas" },
  ]

  return (
    <nav className="bg-charcoal/95 backdrop-blur-sm border-b border-brass/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-brass hover:text-brass/80 transition-colors">
            Backyard Funhouse
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-off-white hover:text-brass transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="https://calendly.com/backyardfunhouse/consultation?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="luxury" size="sm" className="min-h-[40px]">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brass hover:text-brass/80 hover:bg-brass/10"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brass/20 bg-charcoal/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-off-white hover:text-brass hover:bg-brass/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="https://calendly.com/backyardfunhouse/consultation?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
                  <Button variant="luxury" className="w-full min-h-[44px]" onClick={() => setMobileMenuOpen(false)}>
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
