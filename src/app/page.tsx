'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Phone, Clock, CheckCircle, Star, Home, Menu, X, Mail, CircleDot, Waves, Zap, Target, Settings, Award, Users } from "lucide-react"
import Link from "next/link"
import AIConcierge from "@/components/sections/ai-concierge"
import { ServiceAreasDropdown } from "@/components/ui/service-areas-dropdown"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-charcoal text-off-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-charcoal backdrop-blur-md border-b border-brass/20">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-brass hover:text-brass/80 transition-colors">
              Backyard Funhouse
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/courts" className="hover:text-brass transition-colors text-sm lg:text-base">Courts</Link>
              <Link href="/pools" className="hover:text-brass transition-colors text-sm lg:text-base">Pools</Link>
              <Link href="/trampolines" className="hover:text-brass transition-colors text-sm lg:text-base">Trampolines</Link>
              <Link href="/playhouses" className="hover:text-brass transition-colors text-sm lg:text-base">Playhouses</Link>
              <Link href="/greens" className="hover:text-brass transition-colors text-sm lg:text-base">Putting Greens</Link>
              <Link href="/gallery" className="hover:text-brass transition-colors text-sm lg:text-base">Gallery</Link>
              <ServiceAreasDropdown />
              <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
                <Button variant="luxury" size="sm" className="text-sm">
                  Book Consultation
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brass hover:text-brass/80 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-brass/20">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/courts" className="text-off-white hover:text-brass transition-colors py-2 text-base" onClick={() => setMobileMenuOpen(false)}>Courts</Link>
                <Link href="/pools" className="text-off-white hover:text-brass transition-colors py-2 text-base" onClick={() => setMobileMenuOpen(false)}>Pools</Link>
                <Link href="/trampolines" className="text-off-white hover:text-brass transition-colors py-2 text-base" onClick={() => setMobileMenuOpen(false)}>Trampolines</Link>
                <Link href="/playhouses" className="text-off-white hover:text-brass transition-colors py-2 text-base" onClick={() => setMobileMenuOpen(false)}>Playhouses</Link>
                <Link href="/greens" className="text-off-white hover:text-brass transition-colors py-2 text-base" onClick={() => setMobileMenuOpen(false)}>Putting Greens</Link>
                <Link href="/gallery" className="text-off-white hover:text-brass transition-colors py-2 text-base" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link href="/service-areas" className="text-off-white hover:text-brass transition-colors py-2 text-base" onClick={() => setMobileMenuOpen(false)}>Service Areas</Link>
                <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer" className="pt-2">
                  <Button variant="luxury" size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    Book Consultation
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal text-off-white">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-emerald/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
            Luxury Outdoor Builds for
            <span className="text-brass block">DFW Estates</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 sm:mb-10 text-off-white/80 max-w-2xl mx-auto leading-relaxed">
            Ultra-premium custom basketball courts, pools, trampolines, playhouses, and putting greens. 
            White-glove design-build with 3D previews and lifetime quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button 
                variant="luxury" 
                size="xl" 
                className="group cursor-pointer w-full min-h-[48px] text-base sm:text-lg font-semibold"
                type="button"
              >
                Start Your Design
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/gallery" className="w-full sm:w-auto">
              <Button variant="luxury-outline" size="xl" className="w-full min-h-[48px] text-base sm:text-lg font-semibold">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4">
              Luxury Outdoor Experiences
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-charcoal/70 max-w-2xl mx-auto px-2">
              From championship courts to resort-style pools, we create extraordinary outdoor spaces 
              that elevate your property and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-brass/20 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brass/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-brass" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-serif leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full group min-h-[44px] text-sm sm:text-base font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 text-off-white">
              Serving DFW Metro
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-off-white/70 max-w-2xl mx-auto px-2">
              Proudly serving luxury homes and estates across the Dallas-Fort Worth metroplex.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {serviceAreas.map((area, index) => {
              const citySlug = area.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link key={index} href={`/service-areas/${citySlug}`}>
                  <div className="bg-off-white/5 border border-brass/20 rounded-lg p-3 sm:p-4 lg:p-6 text-center hover:bg-off-white/10 transition-colors cursor-pointer hover:border-brass/40 hover:scale-105 transform transition-all duration-200 min-h-[80px] sm:min-h-[90px] flex flex-col justify-center">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-brass mx-auto mb-1 sm:mb-2" />
                    <h3 className="font-semibold text-off-white text-xs sm:text-sm lg:text-base leading-tight">{area}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20 bg-off-white text-charcoal overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Discover why DFW homeowners trust us with their luxury outdoor builds.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {[...reviews, ...reviews].map((review, index) => (
                <Card key={index} className="min-w-[400px] border-brass/20 bg-white shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-brass text-brass" />
                      ))}
                    </div>
                    <CardDescription className="text-charcoal/80 italic text-lg">
                      "{review.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brass/10 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-brass">{review.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-charcoal/60">{review.location}</p>
                        <p className="text-sm text-brass font-medium">{review.project}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brass text-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Backyard?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your complimentary design consultation and receive a custom 3D visualization 
            of your dream outdoor space.
          </p>
          <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
              Book Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-brass/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-serif font-bold text-brass mb-4">
                Backyard Funhouse
              </div>
              <p className="text-off-white/70 mb-4">
                Ultra-premium outdoor builds for DFW luxury homes and estates.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-off-white/70">
                  <Phone className="h-4 w-4 mr-2" />
                  (214) 555-0123
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-off-white mb-4">Services</h3>
              <ul className="space-y-2 text-off-white/70">
                <li><Link href="/courts" className="hover:text-brass transition-colors">Basketball Courts</Link></li>
                <li><Link href="/pools" className="hover:text-brass transition-colors">Custom Pools</Link></li>
                <li><Link href="/trampolines" className="hover:text-brass transition-colors">Inground Trampolines</Link></li>
                <li><Link href="/playhouses" className="hover:text-brass transition-colors">Playhouses & Parks</Link></li>
                <li><Link href="/greens" className="hover:text-brass transition-colors">Putting Greens</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-off-white mb-4">Company</h3>
              <ul className="space-y-2 text-off-white/70">
                <li><Link href="/process" className="hover:text-brass transition-colors">Our Process</Link></li>
                <li><Link href="/gallery" className="hover:text-brass transition-colors">Gallery</Link></li>
                <li><Link href="/pricing" className="hover:text-brass transition-colors">Pricing Guide</Link></li>
                <li><Link href="/service-areas" className="hover:text-brass transition-colors">Service Areas</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-off-white mb-4">Contact</h3>
              <div className="space-y-2 text-off-white/70">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@backyardfunhouse.com
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Dallas-Fort Worth Metro
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-brass/20 mt-8 pt-8 text-center text-off-white/70">
            <p>&copy; 2024 Backyard Funhouse. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* AI Concierge Widget */}
      <AIConcierge />
    </main>
  )
}

const services = [
  {
    title: "Basketball Courts",
    description: "Championship-grade courts with premium surfaces, lighting, and custom logos.",
    icon: CircleDot,
    href: "/courts"
  },
  {
    title: "Custom Pools",
    description: "Resort-style pools with infinity edges, smart automation, and luxury finishes.",
    icon: Waves,
    href: "/pools"
  },
  {
    title: "Inground Trampolines",
    description: "Safety-engineered trampolines with premium drainage and turf surrounds.",
    icon: Zap,
    href: "/trampolines"
  },
  {
    title: "Playhouses & Parks",
    description: "Custom playhouses and mini-parks with safety surfacing and creative designs.",
    icon: Home,
    href: "/playhouses"
  },
  {
    title: "Putting Greens",
    description: "Professional-grade putting greens with contours and chipping zones.",
    icon: Target,
    href: "/greens"
  },
  {
    title: "Design & Build",
    description: "Complete turnkey service from 3D design to final installation.",
    icon: Settings,
    href: "/process"
  },
]

const reviews = [
  {
    quote: "The basketball court exceeded every expectation. The kids play every day and our property value increased significantly.",
    name: "Michael & Sarah Johnson",
    initials: "MJ",
    location: "Highland Park",
    project: "Championship Basketball Court"
  },
  {
    quote: "Our infinity pool is absolutely stunning. The craftsmanship and attention to detail is unmatched in DFW.",
    name: "David Williams",
    initials: "DW",
    location: "Southlake",
    project: "Resort-Style Infinity Pool"
  },
  {
    quote: "The playhouse is like a fairy tale castle. Our daughter's friends beg to come over every weekend!",
    name: "Jennifer Davis",
    initials: "JD",
    location: "Frisco",
    project: "Custom Castle Playhouse"
  },
  {
    quote: "Professional putting green that rivals any country club. My golf game has improved dramatically.",
    name: "Robert Chen",
    initials: "RC",
    location: "Plano",
    project: "Championship Putting Green"
  },
  {
    quote: "The inground trampoline is so much safer and looks amazing. Best investment we've made for the kids.",
    name: "Lisa Thompson",
    initials: "LT",
    location: "Allen",
    project: "Inground Trampoline"
  },
  {
    quote: "From design to completion, the process was flawless. True luxury service and incredible results.",
    name: "Mark Rodriguez",
    initials: "MR",
    location: "Trophy Club",
    project: "Multi-Sport Complex"
  }
]

const serviceAreas = [
  "Dallas", "Fort Worth", "Frisco", "Plano", "McKinney", "Allen", 
  "Prosper", "Southlake", "Highland Park", "University Park", 
  "Celina", "Trophy Club", "Colleyville", "Argyle", "Flower Mound"
]
