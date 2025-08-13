'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Filter, MapPin, Calendar, Star } from "lucide-react"
import Link from "next/link"
import AIConcierge from "@/components/sections/ai-concierge"
import { useState } from "react"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter projects based on active filter
  const filteredProjects = featuredProjects.filter(project => {
    if (activeFilter === 'all') return true
    
    const categoryMap: Record<string, string[]> = {
      'courts': ['Basketball Court'],
      'pools': ['Custom Pool'],
      'trampolines': ['Trampoline'],
      'playhouses': ['Playhouse'],
      'greens': ['Putting Green']
    }
    
    return categoryMap[activeFilter]?.includes(project.type)
  })
  return (
    <main className="min-h-screen bg-charcoal text-off-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-charcoal/95 backdrop-blur-md border-b border-brass/20">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-brass">
              Backyard Funhouse
            </Link>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/courts" className="hover:text-brass transition-colors">Courts</Link>
              <Link href="/pools" className="hover:text-brass transition-colors">Pools</Link>
              <Link href="/trampolines" className="hover:text-brass transition-colors">Trampolines</Link>
              <Link href="/playhouses" className="hover:text-brass transition-colors">Playhouses</Link>
              <Link href="/greens" className="hover:text-brass transition-colors">Putting Greens</Link>
              <Link href="/gallery" className="text-brass border-b border-brass">Gallery</Link>
              <Link href="/service-areas" className="hover:text-brass transition-colors">Service Areas</Link>
              <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
                <Button variant="luxury" size="lg">
                  Book Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-emerald/10 to-charcoal/90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
            Project
            <span className="text-brass block">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-off-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of luxury outdoor builds across the DFW metroplex. 
            From championship courts to resort-style pools, see the Backyard Funhouse difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button variant="luxury" size="xl" className="group w-full sm:w-auto min-h-[48px] text-base sm:text-lg font-semibold">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="luxury-outline" size="xl" className="w-full sm:w-auto min-h-[48px] text-base sm:text-lg font-semibold">
              Filter by Service
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-off-white text-charcoal border-b border-brass/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            <Button 
              variant={activeFilter === 'all' ? 'luxury' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter('all')}
              className={`min-h-[40px] text-xs sm:text-sm font-medium px-3 sm:px-4 ${activeFilter === 'all' ? 'bg-brass text-charcoal' : 'border-brass text-brass hover:bg-brass hover:text-charcoal'}`}
            >
              All Projects
            </Button>
            <Button 
              variant={activeFilter === 'courts' ? 'luxury' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter('courts')}
              className={`min-h-[40px] text-xs sm:text-sm font-medium px-3 sm:px-4 ${activeFilter === 'courts' ? 'bg-brass text-charcoal' : 'border-brass text-brass hover:bg-brass hover:text-charcoal'}`}
            >
              Basketball Courts
            </Button>
            <Button 
              variant={activeFilter === 'pools' ? 'luxury' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter('pools')}
              className={`min-h-[40px] text-xs sm:text-sm font-medium px-3 sm:px-4 ${activeFilter === 'pools' ? 'bg-brass text-charcoal' : 'border-brass text-brass hover:bg-brass hover:text-charcoal'}`}
            >
              Custom Pools
            </Button>
            <Button 
              variant={activeFilter === 'trampolines' ? 'luxury' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter('trampolines')}
              className={`min-h-[40px] text-xs sm:text-sm font-medium px-3 sm:px-4 ${activeFilter === 'trampolines' ? 'bg-brass text-charcoal' : 'border-brass text-brass hover:bg-brass hover:text-charcoal'}`}
            >
              Trampolines
            </Button>
            <Button 
              variant={activeFilter === 'playhouses' ? 'luxury' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter('playhouses')}
              className={`min-h-[40px] text-xs sm:text-sm font-medium px-3 sm:px-4 ${activeFilter === 'playhouses' ? 'bg-brass text-charcoal' : 'border-brass text-brass hover:bg-brass hover:text-charcoal'}`}
            >
              Playhouses
            </Button>
            <Button 
              variant={activeFilter === 'greens' ? 'luxury' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter('greens')}
              className={`min-h-[40px] text-xs sm:text-sm font-medium px-3 sm:px-4 ${activeFilter === 'greens' ? 'bg-brass text-charcoal' : 'border-brass text-brass hover:bg-brass hover:text-charcoal'}`}
            >
              Putting Greens
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Showcase projects that demonstrate our commitment to luxury, innovation, and craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-brass/20 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-emerald/20 to-brass/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <project.icon className="h-16 w-16 text-brass/60 mx-auto mb-2" />
                      <span className="text-brass/80 font-medium">{project.type}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-brass text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
                  <CardDescription className="text-charcoal/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-charcoal/60 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-charcoal/70">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full group">
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Transformations
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              See how we transform ordinary backyards into extraordinary outdoor experiences 
              that enhance property value and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((transformation, index) => (
              <Card key={index} className="bg-off-white/5 border-brass/20 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-charcoal/40 to-emerald/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-brass text-lg font-semibold">Before & After</span>
                      <p className="text-off-white/70 mt-2">{transformation.type}</p>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-off-white">{transformation.title}</CardTitle>
                  <CardDescription className="text-off-white/70">
                    {transformation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-off-white/60 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {transformation.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {transformation.timeline}
                    </div>
                  </div>
                  <Button variant="luxury-outline" className="w-full">
                    View Transformation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Client Stories
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Hear from our clients about their experience with Backyard Funhouse 
              and how we've transformed their outdoor living spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-brass/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-brass text-brass" />
                    ))}
                  </div>
                  <CardDescription className="text-charcoal/80 italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-brass/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-brass">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                      <p className="text-sm text-charcoal/60">{testimonial.project}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brass text-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our gallery of satisfied clients. Schedule your consultation to start 
            designing your luxury outdoor experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="xl" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white">
              Request Project Quote
            </Button>
          </div>
        </div>
      </section>

      <AIConcierge />
    </main>
  )
}

const featuredProjects = [
  {
    title: "Championship Court Complex",
    description: "Full-size basketball court with professional lighting, custom logo, and spectator seating.",
    type: "Basketball Court",
    location: "Highland Park",
    year: "2024",
    icon: Star,
    features: [
      "50' x 84' full court dimensions",
      "LED lighting system",
      "Custom team logo integration",
      "Professional fencing",
      "Spectator seating area"
    ]
  },
  {
    title: "Resort-Style Infinity Pool",
    description: "Stunning infinity edge pool with spa, fire features, and smart automation.",
    type: "Custom Pool",
    location: "Southlake",
    year: "2024",
    icon: Star,
    features: [
      "Infinity edge design",
      "Integrated spa",
      "Fire bowl features",
      "Smart automation system",
      "Premium tile finishes"
    ]
  },
  {
    title: "Adventure Playground",
    description: "Multi-level playhouse with climbing walls, slides, and safety surfacing.",
    type: "Playhouse",
    location: "Frisco",
    year: "2023",
    icon: Star,
    features: [
      "Multi-level design",
      "Rock climbing wall",
      "Multiple slide options",
      "Safety surfacing",
      "Custom theming"
    ]
  },
  {
    title: "Professional Putting Green",
    description: "Championship-grade putting green with multiple holes and chipping area.",
    type: "Putting Green",
    location: "Plano",
    year: "2024",
    icon: Star,
    features: [
      "6-hole layout",
      "Complex contours",
      "Chipping area",
      "LED cup lighting",
      "Premium synthetic turf"
    ]
  },
  {
    title: "Inground Trampoline",
    description: "Safety-engineered inground trampoline with premium drainage and turf surround.",
    type: "Trampoline",
    location: "Allen",
    year: "2023",
    icon: Star,
    features: [
      "14-foot diameter",
      "Advanced drainage system",
      "Safety net enclosure",
      "Turf surround",
      "Professional installation"
    ]
  },
  {
    title: "Multi-Sport Complex",
    description: "Combined basketball court, putting green, and play area in one luxury installation.",
    type: "Multi-Sport",
    location: "Trophy Club",
    year: "2024",
    icon: Star,
    features: [
      "Half-court basketball",
      "Putting green",
      "Play structure",
      "Integrated lighting",
      "Unified design theme"
    ]
  }
]

const transformations = [
  {
    title: "Backyard to Basketball Paradise",
    description: "Transformed unused lawn space into a championship-grade basketball facility.",
    type: "Basketball Court",
    location: "Dallas",
    timeline: "6 weeks"
  },
  {
    title: "Pool Deck to Resort Oasis",
    description: "Complete pool renovation with infinity edge, spa, and luxury finishes.",
    type: "Pool Renovation",
    location: "Fort Worth",
    timeline: "8 weeks"
  },
  {
    title: "Empty Yard to Adventure Land",
    description: "Created a complete outdoor play experience with multiple activity zones.",
    type: "Complete Backyard",
    location: "McKinney",
    timeline: "10 weeks"
  },
  {
    title: "Lawn to Putting Paradise",
    description: "Converted side yard into a professional-grade putting and chipping facility.",
    type: "Putting Green",
    location: "Prosper",
    timeline: "4 weeks"
  }
]

const testimonials = [
  {
    quote: "The team exceeded our expectations in every way. Our basketball court is absolutely perfect and the kids use it every day.",
    name: "Michael Johnson",
    initials: "MJ",
    location: "Highland Park",
    project: "Basketball Court"
  },
  {
    quote: "Our infinity pool is the centerpiece of our backyard. The craftsmanship and attention to detail is outstanding.",
    name: "Sarah Williams",
    initials: "SW",
    location: "Southlake",
    project: "Infinity Pool"
  },
  {
    quote: "The playhouse is like something out of a fairy tale. Our daughter and her friends absolutely love it.",
    name: "Jennifer Davis",
    initials: "JD",
    location: "Frisco",
    project: "Custom Playhouse"
  }
]
