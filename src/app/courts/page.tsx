import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, Calendar, Ruler, Palette, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"

export default function CourtsPage() {
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
              <Link href="/courts" className="text-brass border-b border-brass">Courts</Link>
              <Link href="/pools" className="hover:text-brass transition-colors">Pools</Link>
              <Link href="/trampolines" className="hover:text-brass transition-colors">Trampolines</Link>
              <Link href="/playhouses" className="hover:text-brass transition-colors">Playhouses</Link>
              <Link href="/greens" className="hover:text-brass transition-colors">Putting Greens</Link>
              <Link href="/gallery" className="hover:text-brass transition-colors">Gallery</Link>
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
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-emerald/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Championship
            <span className="text-brass block">Basketball Courts</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-off-white/80 max-w-2xl mx-auto">
            Premium surfaces, professional lighting, custom logos, and championship-grade construction. 
            Design your court with our interactive configurator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="luxury" size="xl" className="group">
                Start Court Configurator
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="luxury-outline" size="xl">
              View Court Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Court Configurator Preview */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Design Your Perfect Court
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Use our advanced configurator to customize every aspect of your basketball court. 
              Get instant pricing and a detailed PDF summary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-brass/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Interactive Court Builder</CardTitle>
                  <CardDescription>
                    Configure your court step-by-step with real-time 3D preview
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {configuratorSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-brass/10 rounded-full flex items-center justify-center">
                          <step.icon className="h-4 w-4 text-brass" />
                        </div>
                        <span className="text-sm font-medium">{step.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-emerald/10 border border-emerald/20 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald mb-2">Instant Features</h4>
                    <ul className="text-sm space-y-1 text-charcoal/70">
                      <li>• Real-time price calculation</li>
                      <li>• 3D visualization with AR preview</li>
                      <li>• PDF summary with specifications</li>
                      <li>• Calendly integration for consultation</li>
                    </ul>
                  </div>
                  <Button variant="luxury" className="w-full" size="lg">
                    Launch Configurator
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-charcoal/5 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏀</div>
              <h3 className="text-2xl font-serif font-bold mb-4">3D Court Preview</h3>
              <p className="text-charcoal/70 mb-6">
                Interactive 3D model will appear here showing your custom court design 
                with real-time updates as you make changes.
              </p>
              <div className="bg-brass/10 border-2 border-dashed border-brass/30 rounded-lg h-64 flex items-center justify-center">
                <span className="text-brass font-medium">3D Configurator Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Court Specifications */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Premium Court Features
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Every court is built to championship standards with premium materials and precision engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courtFeatures.map((feature, index) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Court Investment Guide
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every court includes design, permits, and installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.featured ? 'border-brass border-2 scale-105' : 'border-brass/20'}`}>
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brass text-charcoal px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-brass">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-emerald rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant={tier.featured ? "luxury" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      Configure This Court
                    </Button>
                  </a>
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
            Ready to Build Your Dream Court?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with our configurator or schedule a consultation to discuss your vision with our design team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
              <Download className="mr-2 h-5 w-5" />
              Download Court Guide
            </Button>
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="xl" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

const configuratorSteps = [
  { name: "Court Size", icon: Ruler },
  { name: "Surface Type", icon: Shield },
  { name: "Colors & Logo", icon: Palette },
  { name: "Lighting", icon: Lightbulb },
  { name: "Equipment", icon: Shield },
  { name: "Fencing", icon: Shield },
]

const courtFeatures = [
  {
    title: "Premium Surfaces",
    description: "Championship-grade playing surfaces designed for performance and durability.",
    icon: Shield,
    specs: [
      "Multi-layer acrylic systems",
      "Professional line marking",
      "Non-slip texture finish",
      "UV-resistant coatings",
      "10-year surface warranty"
    ]
  },
  {
    title: "Professional Lighting",
    description: "LED lighting systems for optimal visibility and energy efficiency.",
    icon: Lightbulb,
    specs: [
      "LED flood lighting",
      "Smart controls & timers",
      "Uniform light distribution",
      "Glare reduction technology",
      "Energy efficient design"
    ]
  },
  {
    title: "Custom Design",
    description: "Personalized courts with custom logos, colors, and branding.",
    icon: Palette,
    specs: [
      "Custom logo integration",
      "Team color schemes",
      "Professional line layouts",
      "3D design visualization",
      "Brand compliance options"
    ]
  },
]

const pricingTiers = [
  {
    name: "Essential Court",
    price: "$45,000",
    description: "Perfect starter court with quality materials and professional installation.",
    featured: false,
    features: [
      "30' x 50' playing area",
      "Acrylic surface system",
      "Standard line marking",
      "Basic perimeter fencing",
      "Site preparation included",
      "1-year warranty"
    ]
  },
  {
    name: "Championship Court",
    price: "$75,000",
    description: "Full-size court with premium features and professional lighting.",
    featured: true,
    features: [
      "50' x 84' full court",
      "Premium multi-layer surface",
      "Custom logo & colors",
      "LED lighting system",
      "Professional fencing",
      "Equipment package",
      "5-year warranty"
    ]
  },
  {
    name: "Elite Estate Court",
    price: "$125,000+",
    description: "Luxury court with all premium features and custom amenities.",
    featured: false,
    features: [
      "Custom dimensions",
      "Premium surface options",
      "Integrated sound system",
      "Smart lighting controls",
      "Spectator seating",
      "Storage & equipment",
      "Lifetime warranty"
    ]
  },
]
