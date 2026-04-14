import { motion } from 'framer-motion'
import { Shield, Award, Users, MapPin } from 'lucide-react'

const features = [
  { icon: Shield, title: 'MNRE Approved', desc: 'Certified and approved by the Ministry of New and Renewable Energy, Government of India.' },
  { icon: Award, title: 'Top Brands', desc: 'We install panels from Tata Power Solar, Waaree, Adani Solar, and Vikram Solar.' },
  { icon: Users, title: 'Expert Team', desc: 'Certified technicians with years of experience in solar installations across Telangana.' },
  { icon: MapPin, title: 'Local Service', desc: 'Based in Hanamkonda & Mancherial with dedicated after-sales support.' },
]

const solarBrands = [
  { name: 'Tata Power Solar', color: '#00457C', textColor: '#ffffff' },
  { name: 'Waaree', color: '#E31E24', textColor: '#ffffff' },
  { name: 'Adani Solar', color: '#004B93', textColor: '#ffffff' },
  { name: 'Vikram Solar', color: '#F7941D', textColor: '#ffffff' },
]

export function About() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-solar-green font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-6">Sri Ananthaguna Enterprises</h2>
            <p className="text-muted-foreground mb-4">
              We are a trusted solar energy provider based in Hanamkonda and Mancherial, Telangana. As an MNRE-approved vendor, we help homes and businesses switch to clean, affordable solar energy with full government subsidy support.
            </p>
            <p className="text-muted-foreground mb-8">
              We partner with India's top solar brands to deliver reliable, high-performance solar systems with 25+ year warranties.
            </p>

            {/* Solar Brand Logos */}
            <h3 className="font-heading font-bold text-lg mb-4">Our Solar Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {solarBrands.map((brand, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl p-4 flex items-center justify-center text-center shadow-md gentle-animation hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: brand.color }}
                >
                  <span className="font-bold text-sm leading-tight" style={{ color: brand.textColor }}>{brand.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 subtle-shadow">
                <div className="w-12 h-12 rounded-lg bg-solar-green/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-solar-green" />
                </div>
                <h3 className="font-heading font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
