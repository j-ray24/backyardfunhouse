import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target, Droplets, Ruler, Settings, Trophy, Zap } from "lucide-react"
import Link from "next/link"
import AIConcierge from "@/components/sections/ai-concierge"

export default function GreensPage() {
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
              <Link href="/greens" className="text-brass border-b border-brass">Putting Greens</Link>
              <Link href="/gallery" className="hover:text-brass transition-colors">Gallery</Link>
              <Link href="/service-areas" className="hover:text-brass transition-colors">Service Areas</Link>
              <Button variant="luxury" size="lg">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-emerald/10 to-charcoal/90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Professional
            <span className="text-brass block">Putting Greens</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-off-white/80 max-w-2xl mx-auto">
            Tour-quality putting greens with custom contours, premium synthetic turf, 
            and professional installation. Perfect your short game at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" className="group">
              Design Your Green
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="luxury-outline" size="xl">
              View Green Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Green Types */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Custom Green Designs
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              From simple putting practice to complex multi-hole layouts with chipping areas, 
              each green is tailored to your skill level and available space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-brass/20 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-emerald/20 to-brass/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <type.icon className="h-16 w-16 text-brass/60" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{type.name}</CardTitle>
                  <CardDescription className="text-charcoal/70">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-sm text-charcoal/60">Typical Size: </span>
                    <span className="font-semibold text-brass">{type.size}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-charcoal/70 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="luxury" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Tour-Quality Construction
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Every green is built to professional standards with premium materials 
              and precision engineering for authentic putting experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalFeatures.map((feature, index) => (
              <Card key={index} className="bg-off-white/5 border-brass/20 hover:bg-off-white/10 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-brass/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-brass" />
                  </div>
                  <CardTitle className="text-xl font-serif text-off-white">{feature.title}</CardTitle>
                  <CardDescription className="text-off-white/70">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-off-white/60">
                    {feature.specs.map((spec, specIndex) => (
                      <li key={specIndex}>• {spec}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Precision Installation
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Our certified installation team ensures perfect contours, drainage, 
              and playing characteristics for years of enjoyment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brass">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{step.title}</h3>
                <p className="text-charcoal/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Care */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Low Maintenance Excellence
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Our synthetic turf systems require minimal maintenance while providing 
              consistent playing conditions year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenanceInfo.map((info, index) => (
              <Card key={index} className="bg-off-white/5 border-brass/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-brass/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-brass" />
                  </div>
                  <CardTitle className="text-xl font-serif text-off-white">{info.title}</CardTitle>
                  <CardDescription className="text-off-white/70">
                    {info.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Improve Your Game at Home
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Practice anytime with consistent conditions that help develop muscle memory 
              and improve your putting accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Game Improvement Benefits</h3>
              <div className="space-y-6">
                {gameImprovementBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brass/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Trophy className="h-4 w-4 text-brass" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-charcoal/70 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-charcoal/5 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-6">Practice Features</h3>
              <div className="space-y-4">
                {practiceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    </div>
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brass text-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Perfect Your Putting Game
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation to design your custom putting green with professional 
            contours and features tailored to your skill level and space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
              Start Green Design
            </Button>
            <Button variant="outline" size="xl" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white">
              View Installation Guide
            </Button>
          </div>
        </div>
      </section>

      <AIConcierge />
    </main>
  )
}

const greenTypes = [
  {
    name: "Practice Putting Green",
    description: "Simple, effective greens perfect for daily putting practice and skill development.",
    size: "12' x 20'",
    icon: Target,
    features: [
      "2-3 hole locations",
      "Gentle contours",
      "Fringe area",
      "Cup lighting",
      "Basic drainage"
    ]
  },
  {
    name: "Championship Green",
    description: "Complex multi-hole layouts with challenging contours and professional features.",
    size: "20' x 30'",
    icon: Trophy,
    features: [
      "4-6 hole locations",
      "Complex contours",
      "Multiple pin positions",
      "Chipping area",
      "Sand bunker option"
    ]
  },
  {
    name: "Mini Golf Course",
    description: "Fun family layouts with obstacles, themed holes, and entertainment features.",
    size: "Custom",
    icon: Zap,
    features: [
      "Multiple themed holes",
      "Fun obstacles",
      "Scorecard system",
      "Decorative elements",
      "Family-friendly design"
    ]
  }
]

const professionalFeatures = [
  {
    title: "Premium Synthetic Turf",
    description: "Tour-quality synthetic grass with realistic ball roll and consistent speed.",
    icon: Target,
    specs: [
      "Bentgrass simulation",
      "Consistent ball roll",
      "UV-resistant fibers",
      "Professional stimp speeds",
      "Weather resistant"
    ]
  },
  {
    title: "Custom Contours",
    description: "Precisely engineered slopes and breaks for challenging and realistic putting.",
    icon: Ruler,
    specs: [
      "Professional grade breaks",
      "Multiple difficulty levels",
      "Realistic green speeds",
      "Strategic pin placements",
      "Tournament-style challenges"
    ]
  },
  {
    title: "Advanced Drainage",
    description: "Comprehensive drainage systems ensure perfect playing conditions year-round.",
    icon: Droplets,
    specs: [
      "Multi-layer base system",
      "French drain perimeter",
      "Quick-dry surface",
      "Slope optimization",
      "Weather protection"
    ]
  }
]

const installationSteps = [
  {
    title: "Design & Survey",
    description: "Site analysis and custom green design with contour mapping."
  },
  {
    title: "Excavation",
    description: "Precise excavation and base preparation for optimal drainage."
  },
  {
    title: "Base Installation",
    description: "Multi-layer base system with drainage and contour formation."
  },
  {
    title: "Turf & Finishing",
    description: "Professional turf installation with cups, lighting, and final details."
  }
]

const maintenanceInfo = [
  {
    title: "Minimal Upkeep",
    description: "Simple brushing and occasional cleaning keeps your green in perfect condition.",
    icon: Settings
  },
  {
    title: "All-Weather Play",
    description: "Consistent playing conditions regardless of weather or season.",
    icon: Droplets
  },
  {
    title: "Long-Term Durability",
    description: "Premium materials designed for decades of regular use and enjoyment.",
    icon: Trophy
  }
]

const gameImprovementBenefits = [
  {
    title: "Consistent Practice",
    description: "Practice anytime with consistent green speeds and conditions that build muscle memory."
  },
  {
    title: "Stroke Development",
    description: "Work on putting mechanics, alignment, and distance control in a controlled environment."
  },
  {
    title: "Pressure Training",
    description: "Create competitive scenarios and practice under pressure to improve course performance."
  },
  {
    title: "Short Game Focus",
    description: "Dedicated space for chipping and pitching practice to lower your scores."
  }
]

const practiceFeatures = [
  "Multiple hole locations for variety",
  "Distance markers and alignment aids",
  "Putting mirrors and training aids",
  "Scorekeeping and progress tracking",
  "LED cup lighting for night practice",
  "Chipping areas with different lies",
  "Sand bunker practice areas",
  "Fringe putting practice zones"
]
