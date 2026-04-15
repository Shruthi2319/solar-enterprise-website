import { motion } from 'framer-motion'
import { Shield, Award, Users, MapPin } from 'lucide-react'
import tataLogo from '@/assets/Tata Power.png'
import waareeLogo from '@/assets/waree_solar.png'
import adaniLogo from '@/assets/adani_solar.webp'
import vikramLogo from '@/assets/Vikram_Solar_logo.png'

const features = [
  { icon: Shield, title: 'MNRE Approved', desc: 'Certified and approved by the Ministry of New and Renewable Energy, Government of India.' },
  { icon: Award, title: 'Top Brands', desc: 'We install panels from Tata Power Solar, Waaree, Adani Solar, and Vikram Solar.' },
  { icon: Users, title: 'Expert Team', desc: 'Certified technicians with years of experience in solar installations across Telangana.' },
  { icon: MapPin, title: 'Local Service', desc: 'Based in Hanamkonda & Mancherial with dedicated after-sales support.' },
]

export function About() {
  return (
    <section className="py-24 px-4 bg-slate-50 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-green/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-solar-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block opacity-80">Who We Are</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-solar-blue mt-2 mb-8 tracking-tighter leading-[1.1]">Sri Ananthaguna Enterprises</h2>
            <div className="space-y-6 text-slate-600 font-normal text-lg leading-relaxed tracking-wide">
              <p>
                We are a trusted solar energy provider based in <span className="text-solar-blue font-bold">Hanamkonda</span> and <span className="text-solar-blue font-bold">Mancherial</span>, Telangana.
              </p>
              <p>
                As an MNRE-approved vendor, we help homeowners and businesses switch to clean, affordable solar energy with end-to-end support for government subsidies under the PM Surya Ghar Yojana.
              </p>
            </div>

            <h3 className="font-heading font-bold text-xl text-solar-blue mt-12 mb-6 tracking-tight">Our Premium Solar Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { name: 'Tata Power', logo: tataLogo },
                { name: 'Waaree', logo: waareeLogo },
                { name: 'Adani Solar', logo: adaniLogo },
                { name: 'Vikram Solar', logo: vikramLogo },
              ].map((brand, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2rem] p-6 flex items-center justify-center h-28 shadow-3xl shadow-slate-200/20 border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <img src={brand.logo} alt={brand.name} className="max-h-12 max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute -inset-4 bg-solar-green/5 -rotate-2 rounded-3xl -z-10"></div>
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-3xl shadow-slate-200/20 border border-slate-100 hover:border-solar-green transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-solar-green/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-solar-green" />
                </div>
                <h3 className="font-heading font-bold text-solar-blue text-xl mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 font-normal text-sm leading-relaxed tracking-wide">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
