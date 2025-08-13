"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const serviceAreas = [
  { name: "Dallas", slug: "dallas", description: "Highland Park, University Park, Preston Hollow" },
  { name: "Fort Worth", slug: "fort-worth", description: "Westover Hills, Tanglewood, River Crest" },
  { name: "Frisco", slug: "frisco", description: "Stonebriar, West Frisco, Frisco Lakes" },
  { name: "Plano", slug: "plano", description: "West Plano, East Plano, Willow Bend" },
  { name: "McKinney", slug: "mckinney", description: "Stonebridge, Adriatica, Craig Ranch" },
  { name: "Allen", slug: "allen", description: "Watters Creek, Bethany Lakes, Twin Creeks" },
  { name: "Prosper", slug: "prosper", description: "Whitley Place, Windsong Ranch, Light Farms" },
  { name: "Southlake", slug: "southlake", description: "Timarron, Carroll ISD, Town Square" },
  { name: "Highland Park", slug: "highland-park", description: "University Park, Park Cities" },
  { name: "Celina", slug: "celina", description: "Mustang Lakes, Light Farms, Celina Square" },
  { name: "Trophy Club", slug: "trophy-club", description: "Trophy Club Country Club, Solana" },
  { name: "Colleyville", slug: "colleyville", description: "Pleasant Run, Bransford, Glade Road" }
]

export function ServiceAreasDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href="/service-areas" 
        className="flex items-center gap-1 hover:text-brass transition-colors"
      >
        Service Areas
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-charcoal/10 z-50"
          >
            <div className="p-4">
              <div className="text-sm font-semibold text-charcoal mb-3 border-b border-charcoal/10 pb-2">
                Dallas-Fort Worth Service Areas
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="block p-3 rounded-md hover:bg-brass/10 transition-colors group"
                  >
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-brass mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-charcoal group-hover:text-brass transition-colors">
                          {area.name}
                        </div>
                        <div className="text-xs text-charcoal/60 mt-1">
                          {area.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-charcoal/10">
                <Link
                  href="/service-areas"
                  className="text-sm text-brass hover:text-brass/80 transition-colors font-semibold"
                >
                  View All Service Areas →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
