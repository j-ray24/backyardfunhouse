import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Droplets, Wind, Wrench, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"
import AIConcierge from "@/components/sections/ai-concierge"

export default function TrampolinesPage() {
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
              <Link href="/trampolines" className="text-brass border-b border-brass">Trampolines</Link>
              <Link href="/playhouses" className="hover:text-brass transition-colors">Playhouses</Link>
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
            Inground
            <span className="text-brass block">Trampolines</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-off-white/80 max-w-2xl mx-auto">
            Safety-engineered inground trampolines with premium drainage, professional installation, 
            and beautiful turf surrounds that blend seamlessly with your landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="xl" className="group">
              Design Your Trampoline
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="luxury-outline" size="xl">
              View Safety Features
            </Button>
          </div>
        </div>
      </section>

      {/* Why Inground Section */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Inground?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Inground trampolines are significantly safer, more aesthetically pleasing, 
              and provide a better bouncing experience than traditional above-ground models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-brass/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-brass/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-brass" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{benefit.title}</CardTitle>
                  <CardDescription className="text-charcoal/70">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering & Safety */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Engineering Excellence
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Our inground trampolines feature advanced engineering for safety, drainage, 
              and optimal performance in all weather conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6 text-off-white">Safety First Design</h3>
              <div className="space-y-6">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brass/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="h-4 w-4 text-brass" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-off-white mb-2">{feature.title}</h4>
                      <p className="text-off-white/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-off-white/5 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold mb-6 text-off-white">Technical Specifications</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-off-white/10">
                    <span className="text-off-white/70">{spec.feature}</span>
                    <span className="text-off-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-off-white text-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Professional Installation
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Our certified installation team handles every aspect from excavation to final landscaping, 
              ensuring perfect integration with your outdoor space.
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
                <div className="mt-4 text-xs text-charcoal/50">
                  Timeline: {step.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-off-white">
              Low Maintenance, High Enjoyment
            </h2>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto">
              Our trampolines are designed for minimal maintenance while providing years of safe family fun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenanceInfo.map((info, index) => (
              <Card key={index} className="bg-off-white/5 border-brass/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-brass/20 rounded-lg flex items-center justify-center mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-brass text-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready for Safe Family Fun?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your consultation to discuss size options, placement, and safety features 
            for your inground trampoline installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-charcoal text-off-white hover:bg-charcoal/90">
              Get Site Assessment
            </Button>
            <Button variant="outline" size="xl" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white">
              View Safety Guide
            </Button>
          </div>
        </div>
      </section>

      <AIConcierge />
    </main>
  )
}

const benefits = [
  {
    title: "Enhanced Safety",
    description: "Ground-level access eliminates dangerous falls and reduces injury risk significantly.",
    icon: Shield,
    features: [
      "No elevated platform",
      "Reduced fall distance",
      "Professional safety padding",
      "Secure net enclosures"
    ]
  },
  {
    title: "Superior Aesthetics",
    description: "Seamlessly integrates with your landscape design for a clean, professional look.",
    icon: Heart,
    features: [
      "Flush with ground level",
      "Custom turf surrounds",
      "Hidden drainage systems",
      "Landscape integration"
    ]
  },
  {
    title: "Better Performance",
    description: "Improved bounce quality and stability compared to above-ground alternatives.",
    icon: CheckCircle,
    features: [
      "Enhanced bounce response",
      "Reduced wind resistance",
      "Stable platform",
      "Professional-grade materials"
    ]
  }
]

const safetyFeatures = [
  {
    title: "Advanced Drainage System",
    description: "Multi-layer drainage prevents water accumulation and ensures year-round usability.",
    icon: Droplets
  },
  {
    title: "Ventilation Design",
    description: "Proper airflow underneath prevents moisture buildup and extends equipment life.",
    icon: Wind
  },
  {
    title: "Professional Padding",
    description: "High-density foam padding covers all springs and frame edges for maximum protection.",
    icon: Shield
  },
  {
    title: "Quality Materials",
    description: "UV-resistant, weatherproof materials designed for decades of outdoor use.",
    icon: Wrench
  }
]

const specifications = [
  { feature: "Available Sizes", value: "8ft - 17ft diameter" },
  { feature: "Excavation Depth", value: "3-4 feet typical" },
  { feature: "Drainage Layers", value: "3-layer system" },
  { feature: "Safety Padding", value: "2-inch high-density foam" },
  { feature: "Net Height", value: "6-8 feet" },
  { feature: "Warranty", value: "10 years frame/springs" }
]

const installationSteps = [
  {
    title: "Site Assessment",
    description: "Evaluate location, utilities, drainage, and access requirements.",
    timeline: "Day 1"
  },
  {
    title: "Excavation",
    description: "Professional excavation with proper depth and drainage preparation.",
    timeline: "Days 2-3"
  },
  {
    title: "Installation",
    description: "Trampoline assembly, safety features, and drainage system installation.",
    timeline: "Days 4-5"
  },
  {
    title: "Landscaping",
    description: "Turf installation, final grading, and landscape integration.",
    timeline: "Days 6-7"
  }
]

const maintenanceInfo = [
  {
    title: "Seasonal Care",
    description: "Simple seasonal maintenance keeps your trampoline in perfect condition year-round.",
    icon: CheckCircle
  },
  {
    title: "Drainage Maintenance",
    description: "Our advanced drainage system requires minimal maintenance and prevents water issues.",
    icon: Droplets
  },
  {
    title: "Safety Inspections",
    description: "Annual safety inspections ensure continued safe operation for your family.",
    icon: Shield
  }
]
