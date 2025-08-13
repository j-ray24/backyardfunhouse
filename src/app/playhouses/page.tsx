import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Home, Shield, Palette, Users, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import AIConcierge from "@/components/sections/ai-concierge"

export default function PlayhousesPage() {
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
              <Link href="/playhouses" className="text-brass border-b border-brass">Playhouses</Link>
              <Link href="/greens" className="hover:text-brass transition-colors">Putting Greens</Link>
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
            Custom Playhouses
            <span className="text-brass block">& Mini-Parks</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-off-white/80 max-w-2xl mx-auto">
            Magical custom playhouses and adventure parks designed to spark imagination, 
            built with premium materials and safety-first engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" className="group">
              Design Your Playhouse
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="luxury-outline" size="xl">
              View Playhouse Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Playhouse Styles */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Endless Possibilities
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              From fairy tale castles to modern adventure towers, each playhouse is custom-designed 
              to match your child's dreams and your home's aesthetic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playhouseStyles.map((style, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-brass/20 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-emerald/20 to-brass/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <style.icon className="h-16 w-16 text-brass/60" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{style.name}</CardTitle>
                  <CardDescription className="text-charcoal/70">
                    {style.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-charcoal/70 mb-6">
                    {style.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Explore Design
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Materials */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Safety-First Engineering
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Every playhouse meets or exceeds safety standards with premium materials, 
              professional installation, and child-safe design principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
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

      {/* Age-Appropriate Design */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Designed for Every Age
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Our playhouses grow with your children, featuring age-appropriate elements 
              and adaptable designs for years of enjoyment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="text-center border-brass/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-brass" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{group.ageRange}</CardTitle>
                  <CardDescription>{group.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    {group.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Endless Customization
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Make it uniquely theirs with custom colors, themes, accessories, and features 
              that reflect your child's personality and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-8 w-8 text-brass" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-off-white">{option.title}</h3>
                <p className="text-off-white/70 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brass text-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Create Magical Memories
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's design the perfect playhouse for your children. Schedule a consultation 
            to explore designs, safety features, and customization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
              Start Design Process
            </Button>
            <Button variant="outline" size="xl" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white">
              View Design Gallery
            </Button>
          </div>
        </div>
      </section>

      <AIConcierge />
    </main>
  )
}

const playhouseStyles = [
  {
    name: "Fairy Tale Castle",
    description: "Enchanting castle designs with towers, turrets, and magical details.",
    icon: Home,
    features: [
      "Multi-level design",
      "Tower with spiral slide",
      "Drawbridge entrance",
      "Flag poles and banners",
      "Secret passages"
    ]
  },
  {
    name: "Modern Adventure Tower",
    description: "Contemporary multi-level structures with climbing walls and slides.",
    icon: Star,
    features: [
      "Rock climbing wall",
      "Multiple slide options",
      "Rope bridge connections",
      "Observation deck",
      "Modern aesthetic"
    ]
  },
  {
    name: "Pirate Ship",
    description: "Swashbuckling adventures with ship wheels, masts, and treasure chests.",
    icon: Sparkles,
    features: [
      "Ship wheel and mast",
      "Crow's nest lookout",
      "Plank walkway",
      "Treasure chest storage",
      "Nautical theming"
    ]
  },
  {
    name: "Tree House Style",
    description: "Elevated natural designs that blend with landscape elements.",
    icon: Home,
    features: [
      "Elevated platform",
      "Natural wood finishes",
      "Rope ladder access",
      "Covered roof area",
      "Landscape integration"
    ]
  },
  {
    name: "Mini Mansion",
    description: "Scaled-down luxury homes with realistic architectural details.",
    icon: Star,
    features: [
      "Multiple rooms",
      "Working shutters",
      "Front porch",
      "Realistic details",
      "Custom paint schemes"
    ]
  },
  {
    name: "Adventure Park",
    description: "Complete play systems with multiple activities and challenges.",
    icon: Sparkles,
    features: [
      "Multiple play elements",
      "Obstacle courses",
      "Swing attachments",
      "Sandbox integration",
      "Modular design"
    ]
  }
]

const safetyFeatures = [
  {
    title: "Premium Materials",
    description: "Weather-resistant, child-safe materials built to last decades.",
    icon: Shield,
    specs: [
      "Cedar and composite lumber",
      "Stainless steel hardware",
      "Non-toxic finishes",
      "UV-resistant coatings",
      "Splinter-free surfaces"
    ]
  },
  {
    title: "Safety Surfacing",
    description: "Professional safety surfacing to cushion falls and prevent injuries.",
    icon: Shield,
    specs: [
      "Rubber mulch options",
      "Engineered wood fiber",
      "Poured-in-place rubber",
      "Proper depth installation",
      "ADA compliant options"
    ]
  },
  {
    title: "Code Compliance",
    description: "Meets or exceeds all safety codes and accessibility standards.",
    icon: Shield,
    specs: [
      "CPSC guidelines",
      "ADA accessibility",
      "Local building codes",
      "HOA compliance",
      "Professional inspection"
    ]
  }
]

const ageGroups = [
  {
    ageRange: "2-5 Years",
    title: "Toddler Safe",
    features: [
      "Lower platform heights",
      "Wider stairs with railings",
      "Enclosed play areas",
      "Soft-close doors",
      "Rounded edges throughout"
    ]
  },
  {
    ageRange: "5-12 Years",
    title: "Adventure Ready",
    features: [
      "Climbing challenges",
      "Multiple slide options",
      "Secret hideouts",
      "Interactive elements",
      "Social play spaces"
    ]
  },
  {
    ageRange: "All Ages",
    title: "Family Fun",
    features: [
      "Multi-level access",
      "Adult-friendly spaces",
      "Adaptable features",
      "Growing room",
      "Timeless design"
    ]
  }
]

const customizationOptions = [
  {
    title: "Color Schemes",
    description: "Custom paint colors and stain options to match your home and landscape.",
    icon: Palette
  },
  {
    title: "Themed Elements",
    description: "Add themed accessories, decorations, and interactive features.",
    icon: Star
  },
  {
    title: "Lighting Options",
    description: "Solar lights, string lights, and safety lighting for extended play.",
    icon: Sparkles
  },
  {
    title: "Storage Solutions",
    description: "Built-in storage for toys, games, and outdoor play equipment.",
    icon: Home
  }
]
