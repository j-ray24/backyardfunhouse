import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Phone, Clock, CheckCircle, Star, Home } from "lucide-react"
import Link from "next/link"
import AIConcierge from "@/components/sections/ai-concierge"

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-charcoal text-off-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-md border-b border-brass/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold text-brass">
              Backyard Funhouse
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courts" className="hover:text-brass transition-colors">Courts</Link>
              <Link href="/pools" className="hover:text-brass transition-colors">Pools</Link>
              <Link href="/trampolines" className="hover:text-brass transition-colors">Trampolines</Link>
              <Link href="/playhouses" className="hover:text-brass transition-colors">Playhouses</Link>
              <Link href="/greens" className="hover:text-brass transition-colors">Putting Greens</Link>
              <Link href="/gallery" className="hover:text-brass transition-colors">Gallery</Link>
              <Link href="/service-areas" className="text-brass border-b border-brass">Service Areas</Link>
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-emerald/10 to-charcoal/90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Serving
            <span className="text-brass block">DFW Metro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-off-white/80 max-w-2xl mx-auto">
            Proudly serving luxury homes and estates across the Dallas-Fort Worth metroplex 
            with premium outdoor builds and white-glove service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="luxury" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('cities-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Find Your Area
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="luxury-outline" size="xl">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Service Territory
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              We serve the entire Dallas-Fort Worth metroplex, bringing luxury outdoor builds 
              to discerning homeowners across North Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Coverage Area</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald" />
                  <span className="text-lg">Complete DFW Metroplex Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald" />
                  <span className="text-lg">15+ Cities and Communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald" />
                  <span className="text-lg">Local Permit and HOA Knowledge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald" />
                  <span className="text-lg">Same-Day Site Visits Available</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-brass/10 rounded-lg border border-brass/20">
                <h4 className="font-semibold text-brass mb-3">Service Guarantee</h4>
                <p className="text-charcoal/70 text-sm">
                  We provide comprehensive service throughout the DFW area with local expertise, 
                  fast response times, and deep knowledge of regional regulations and requirements.
                </p>
              </div>
            </div>

            <div className="bg-charcoal/5 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-center">DFW Service Map</h3>
              <div className="aspect-square bg-gradient-to-br from-emerald/20 to-brass/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-brass mx-auto mb-4" />
                  <p className="text-brass font-semibold">Interactive Service Map</p>
                  <p className="text-charcoal/60 text-sm mt-2">
                    Detailed coverage area visualization coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section id="cities-section" className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Cities We Serve
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              From urban Dallas to suburban communities, we bring luxury outdoor experiences 
              to homes throughout North Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => {
              const citySlug = area.city.toLowerCase().replace(/\s+/g, '-')
              return (
                <Card key={index} className="bg-off-white/5 border-brass/20 hover:bg-off-white/10 transition-colors group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-brass/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brass/30 transition-colors">
                      <MapPin className="h-6 w-6 text-brass" />
                    </div>
                    <CardTitle className="text-xl font-serif text-off-white group-hover:text-brass transition-colors">{area.city}</CardTitle>
                    <CardDescription className="text-off-white/70">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm text-off-white/60 mb-4">
                      <div className="flex items-center justify-between">
                        <span>Recent Projects:</span>
                        <span className="text-brass font-medium">{area.projects}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Avg Response:</span>
                        <span className="text-brass font-medium">{area.responseTime}</span>
                      </div>
                    </div>
                    <Link href={`/service-areas/${citySlug}`}>
                      <Button 
                        variant="luxury-outline" 
                        size="sm" 
                        className="w-full border-2 border-brass text-brass hover:bg-brass hover:text-charcoal transition-all duration-200 font-semibold group-hover:bg-brass group-hover:text-charcoal group-hover:border-brass"
                      >
                        View {area.city} Projects
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Local Expertise Matters
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Our deep knowledge of DFW regulations, climate, and community standards 
              ensures smooth project execution and lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localExpertise.map((expertise, index) => (
              <Card key={index} className="text-center border-brass/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <expertise.icon className="h-8 w-8 text-brass" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{expertise.title}</CardTitle>
                  <CardDescription className="text-charcoal/70">
                    {expertise.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    {expertise.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Fast Response, Quality Service
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              We pride ourselves on quick response times and efficient project delivery 
              throughout the DFW metroplex.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {responseStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-brass" />
                </div>
                <div className="text-3xl font-bold text-brass mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-off-white mb-2">{stat.title}</h3>
                <p className="text-off-white/70 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-brass text-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your complimentary consultation. We'll visit your property 
            to discuss your vision and provide expert recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
                Schedule Site Visit
              </Button>
            </a>
            <a href="tel:+12145550123">
              <Button variant="outline" size="xl" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white">
                Call (214) 555-0123
              </Button>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-charcoal/80">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              (214) 555-0123
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Mon-Sat: 7AM-7PM
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              DFW Metro Area
            </div>
          </div>
        </div>
      </section>

      <AIConcierge />
    </main>
  )
}

const serviceAreas = [
  {
    city: "Dallas",
    description: "Urban luxury homes and high-end estates",
    projects: "45+",
    responseTime: "Same Day"
  },
  {
    city: "Fort Worth",
    description: "Historic neighborhoods and modern developments",
    projects: "32+",
    responseTime: "Same Day"
  },
  {
    city: "Frisco",
    description: "Master-planned communities and luxury subdivisions",
    projects: "38+",
    responseTime: "Same Day"
  },
  {
    city: "Plano",
    description: "Established neighborhoods and executive homes",
    projects: "41+",
    responseTime: "Same Day"
  },
  {
    city: "McKinney",
    description: "Historic charm meets modern luxury",
    projects: "29+",
    responseTime: "Next Day"
  },
  {
    city: "Allen",
    description: "Family-focused communities and custom homes",
    projects: "26+",
    responseTime: "Next Day"
  },
  {
    city: "Prosper",
    description: "Luxury estates and acreage properties",
    projects: "22+",
    responseTime: "Next Day"
  },
  {
    city: "Southlake",
    description: "Prestigious community with luxury standards",
    projects: "35+",
    responseTime: "Same Day"
  },
  {
    city: "Highland Park",
    description: "Historic luxury enclave in Dallas",
    projects: "18+",
    responseTime: "Same Day"
  },
  {
    city: "University Park",
    description: "Academic community with upscale homes",
    projects: "15+",
    responseTime: "Same Day"
  },
  {
    city: "Celina",
    description: "Rural luxury and custom estate properties",
    projects: "12+",
    responseTime: "Next Day"
  },
  {
    city: "Trophy Club",
    description: "Golf course community and luxury homes",
    projects: "19+",
    responseTime: "Same Day"
  },
  {
    city: "Colleyville",
    description: "Upscale suburban community",
    projects: "24+",
    responseTime: "Same Day"
  },
  {
    city: "Argyle",
    description: "Rural estates and luxury acreage",
    projects: "14+",
    responseTime: "Next Day"
  },
  {
    city: "Flower Mound",
    description: "Master-planned community with luxury amenities",
    projects: "27+",
    responseTime: "Same Day"
  }
]

const localExpertise = [
  {
    title: "Permit & Regulations",
    description: "Navigate local building codes, HOA requirements, and permit processes seamlessly.",
    icon: CheckCircle,
    benefits: [
      "HOA pre-approval assistance",
      "Building permit management",
      "Code compliance guarantee",
      "Inspection coordination"
    ]
  },
  {
    title: "Climate Considerations",
    description: "Designs optimized for North Texas weather patterns and seasonal conditions.",
    icon: Star,
    benefits: [
      "Heat-resistant materials",
      "Drainage for heavy rains",
      "Wind-resistant construction",
      "UV protection features"
    ]
  },
  {
    title: "Community Standards",
    description: "Understanding of local aesthetics and community expectations for luxury builds.",
    icon: Home,
    benefits: [
      "Neighborhood compatibility",
      "Property value enhancement",
      "Aesthetic guidelines compliance",
      "Community reputation protection"
    ]
  }
]

const responseStats = [
  {
    title: "Initial Response",
    value: "< 4hrs",
    description: "Average response time to initial inquiries",
    icon: Phone
  },
  {
    title: "Site Visit",
    value: "24-48hrs",
    description: "Consultation scheduling within metro area",
    icon: Home
  },
  {
    title: "Project Start",
    value: "2-3 weeks",
    description: "From contract to construction start",
    icon: CheckCircle
  },
  {
    title: "Completion",
    value: "On Time",
    description: "98% of projects completed on schedule",
    icon: Star
  }
]
