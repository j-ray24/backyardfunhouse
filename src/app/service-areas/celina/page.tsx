import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Phone, Star, Users, Award, Zap } from "lucide-react"
import { ServiceAreasDropdown } from "@/components/ui/service-areas-dropdown"

export default function CelinaPage() {
  const localProjects = [
    {
      type: "Multi-Sport Complex",
      neighborhood: "Mustang Lakes",
      features: ["Basketball court", "Putting green", "Play area"]
    },
    {
      type: "Custom Playhouse Village",
      neighborhood: "Light Farms",
      features: ["Multi-structure design", "Adventure features", "Safety systems"]
    },
    {
      type: "Championship Putting Green",
      neighborhood: "Celina Square",
      features: ["Professional turf", "Multiple holes", "Practice bunkers"]
    }
  ]

  const stats = [
    { icon: Users, label: "Celina Projects", value: "35+" },
    { icon: Star, label: "Client Rating", value: "5.0/5" },
    { icon: Award, label: "Growing Community", value: "Trusted Builder" },
    { icon: Zap, label: "Response Time", value: "Same Day" }
  ]

  return (
    <div className="min-h-screen bg-off-white">
      {/* Navigation */}
      <nav className="bg-charcoal text-off-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-brass">
              Backyard Funhouse
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courts" className="hover:text-brass transition-colors">Courts</Link>
              <Link href="/pools" className="hover:text-brass transition-colors">Pools</Link>
              <Link href="/trampolines" className="hover:text-brass transition-colors">Trampolines</Link>
              <Link href="/playhouses" className="hover:text-brass transition-colors">Playhouses</Link>
              <Link href="/greens" className="hover:text-brass transition-colors">Putting Greens</Link>
              <Link href="/gallery" className="hover:text-brass transition-colors">Gallery</Link>
              <ServiceAreasDropdown />
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
      <section className="py-20 bg-gradient-to-br from-emerald/80 via-brass/60 to-charcoal text-off-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-6 w-6 text-brass" />
            <span className="text-brass font-semibold">Celina, Texas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Premium Builds in
            <span className="text-brass block">Celina</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-off-white/90">
            Creating exceptional outdoor experiences in Celina's growing communities. 
            From Mustang Lakes to Light Farms, we bring luxury to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="luxury" size="xl" className="group">
                Start Your Celina Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/gallery">
              <Button variant="luxury-outline" size="xl">
                View Celina Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal text-off-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-brass mx-auto mb-4" />
                <div className="text-3xl font-bold text-brass mb-2">{stat.value}</div>
                <div className="text-off-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal font-serif">
              Recent Celina Projects
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Discover how we've enhanced Celina homes with our luxury outdoor installations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-emerald/20 to-brass/20 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-charcoal">{project.type}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald" />
                    {project.neighborhood}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-charcoal/80">
                        <div className="w-2 h-2 bg-emerald rounded-full"></div>
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald to-brass/90 text-off-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Transform Your Celina Backyard?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-off-white/90">
            Schedule your complimentary design consultation and receive a custom 3D visualization 
            of your dream outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/gobegreat124?background_color=0f1115&text_color=f4f4f2&primary_color=d6b26e" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="xl" className="bg-brass text-charcoal hover:bg-brass/90">
                <Phone className="mr-2 h-5 w-5" />
                Book Celina Consultation
              </Button>
            </a>
            <Button variant="outline" size="xl" className="border-2 border-brass text-brass hover:bg-brass hover:text-charcoal font-semibold">
              <Clock className="mr-2 h-5 w-5" />
              Same-Day Response
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-off-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brass mb-4">Backyard Funhouse</h3>
              <p className="text-off-white/80">
                Luxury outdoor builds for the Dallas-Fort Worth metroplex.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-off-white/80">
                <li><Link href="/courts" className="hover:text-brass transition-colors">Basketball Courts</Link></li>
                <li><Link href="/pools" className="hover:text-brass transition-colors">Swimming Pools</Link></li>
                <li><Link href="/trampolines" className="hover:text-brass transition-colors">Trampolines</Link></li>
                <li><Link href="/playhouses" className="hover:text-brass transition-colors">Playhouses</Link></li>
                <li><Link href="/greens" className="hover:text-brass transition-colors">Putting Greens</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Areas</h4>
              <ul className="space-y-2 text-off-white/80">
                <li><Link href="/service-areas/dallas" className="hover:text-brass transition-colors">Dallas</Link></li>
                <li><Link href="/service-areas/fort-worth" className="hover:text-brass transition-colors">Fort Worth</Link></li>
                <li><Link href="/service-areas/frisco" className="hover:text-brass transition-colors">Frisco</Link></li>
                <li><Link href="/service-areas/plano" className="hover:text-brass transition-colors">Plano</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-off-white/80">
                <li>Celina, TX</li>
                <li>24/7 Emergency Service</li>
                <li>Licensed & Insured</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-off-white/20 mt-8 pt-8 text-center text-off-white/60">
            <p>&copy; 2024 Backyard Funhouse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
