import { motion } from 'framer-motion'
import { Shield, Award, Users, MapPin } from 'lucide-react'

const features = [
  { icon: Shield, title: 'MNRE Approved', desc: 'Certified and approved by the Ministry of New and Renewable Energy, Government of India.' },
  { icon: Award, title: 'Top Brands', desc: 'We install panels from Tata Power Solar, Waaree, Adani Solar, and Vikram Solar.' },
  { icon: Users, title: 'Expert Team', desc: 'Certified technicians with years of experience in solar installations across Telangana.' },
  { icon: MapPin, title: 'Local Service', desc: 'Based in Hanamkonda & Mancherial with dedicated after-sales support.' },
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
              We partner with India's top solar brands — Tata Power Solar, Waaree, Adani Solar, and Vikram Solar — to deliver reliable, high-performance solar systems with 25+ year warranties.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {['Tata Power Solar', 'Waaree', 'Adani Solar', 'Vikram Solar'].map((brand, i) => (
                <div key={i} className="bg-card px-4 py-2 rounded-lg subtle-shadow text-sm font-semibold text-muted-foreground">
                  {brand}
                </div>
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
