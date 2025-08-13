import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Droplets, Thermometer, Zap, Shield, Waves, Settings } from "lucide-react"
import Link from "next/link"

export default function PoolsPage() {
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
              <Link href="/pools" className="text-brass border-b border-brass">Pools</Link>
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
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-emerald/10 to-charcoal/90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Resort-Style
            <span className="text-brass block">Custom Pools</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-off-white/80 max-w-2xl mx-auto">
            Infinity edges, smart automation, luxury finishes, and cutting-edge technology. 
            Transform your backyard into a private resort oasis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="luxury" size="xl" className="group">
                Design Your Pool
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="luxury-outline" size="xl">
              View Pool Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Pool Styles Section */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Luxury Pool Styles
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              From infinity edges to geometric designs, each pool is custom-crafted 
              to complement your home's architecture and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poolStyles.map((style, index) => (
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
                  <div className="text-sm text-charcoal/60 mb-4">
                    Starting from <span className="text-brass font-semibold">{style.startingPrice}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-charcoal/70 mb-6">
                    {style.features.map((feature, featureIndex) => (
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

      {/* Premium Features */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Premium Pool Features
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Every pool includes cutting-edge technology and luxury amenities for the ultimate experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poolFeatures.map((feature, index) => (
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

      {/* Process Section */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Pool Design Process
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              From initial consultation to final handoff, we guide you through every step 
              of creating your dream pool.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-brass text-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create Your Pool Oasis?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your complimentary design consultation and receive a custom 3D visualization 
            of your dream pool with detailed specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
                Start Pool Design
              </Button>
            </a>
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="xl" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white">
                Book Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

const poolStyles = [
  {
    name: "Infinity Edge",
    description: "Stunning vanishing edge pools that blend seamlessly with the horizon.",
    startingPrice: "$175,000",
    icon: Waves,
    features: [
      "Vanishing edge design",
      "Catch basin system",
      "Premium tile finishes",
      "Integrated lighting"
    ]
  },
  {
    name: "Geometric Modern",
    description: "Clean lines and contemporary design for modern luxury homes.",
    startingPrice: "$125,000",
    icon: Shield,
    features: [
      "Angular design elements",
      "Integrated spa",
      "LED lighting system",
      "Smart automation"
    ]
  },
  {
    name: "Natural Lagoon",
    description: "Organic shapes with natural stone and tropical landscaping.",
    startingPrice: "$150,000",
    icon: Droplets,
    features: [
      "Natural stone coping",
      "Tropical landscaping",
      "Beach entry option",
      "Rock waterfalls"
    ]
  },
  {
    name: "Resort Style",
    description: "Multi-level pools with spas, bars, and entertainment areas.",
    startingPrice: "$200,000",
    icon: Settings,
    features: [
      "Multi-level design",
      "Swim-up bar",
      "Integrated spa",
      "Entertainment areas"
    ]
  },
  {
    name: "Lap Pool",
    description: "Streamlined pools designed for fitness and exercise.",
    startingPrice: "$100,000",
    icon: ArrowRight,
    features: [
      "50+ foot length",
      "Current systems",
      "Lane markers",
      "Timing systems"
    ]
  },
  {
    name: "Plunge Pool",
    description: "Compact luxury pools perfect for smaller spaces.",
    startingPrice: "$75,000",
    icon: Thermometer,
    features: [
      "Compact design",
      "Heating system",
      "Premium finishes",
      "Smart controls"
    ]
  }
]

const poolFeatures = [
  {
    title: "Smart Automation",
    description: "Complete pool control from your smartphone with intelligent systems.",
    icon: Settings,
    specs: [
      "App-controlled systems",
      "Automated cleaning",
      "Chemical monitoring",
      "Energy optimization",
      "Remote diagnostics"
    ]
  },
  {
    title: "Premium Finishes",
    description: "Luxury materials and finishes that define elegance and durability.",
    icon: Shield,
    specs: [
      "Natural stone coping",
      "Glass tile options",
      "Pebble-tec surfaces",
      "Custom tile work",
      "Waterline accents"
    ]
  },
  {
    title: "Advanced Lighting",
    description: "LED lighting systems that transform your pool into a nighttime oasis.",
    icon: Zap,
    specs: [
      "Color-changing LEDs",
      "Underwater lighting",
      "Landscape integration",
      "Smart scheduling",
      "Energy efficient"
    ]
  },
  {
    title: "Heating Systems",
    description: "Extend your swimming season with efficient heating solutions.",
    icon: Thermometer,
    specs: [
      "Heat pump systems",
      "Solar heating options",
      "Gas heater backup",
      "Temperature control",
      "Energy monitoring"
    ]
  },
  {
    title: "Water Features",
    description: "Custom water features that add movement and sound to your pool.",
    icon: Droplets,
    specs: [
      "Custom waterfalls",
      "Fountains & jets",
      "Spillover spas",
      "Deck jets",
      "Laminar jets"
    ]
  },
  {
    title: "Safety Systems",
    description: "Advanced safety features for peace of mind and compliance.",
    icon: Shield,
    specs: [
      "Safety covers",
      "Pool alarms",
      "Fencing options",
      "Non-slip surfaces",
      "Emergency shutoffs"
    ]
  }
]

const processSteps = [
  {
    title: "Consultation",
    description: "Initial meeting to discuss your vision, budget, and site requirements."
  },
  {
    title: "Design",
    description: "Custom 3D design with detailed specifications and material selections."
  },
  {
    title: "Permits",
    description: "We handle all permits, HOA approvals, and regulatory requirements."
  },
  {
    title: "Construction",
    description: "Professional installation with regular updates and quality control."
  }
]
