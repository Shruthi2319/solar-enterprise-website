import { motion } from 'framer-motion'
import { Sun, Home, Building, Wrench, ShieldCheck, Banknote } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Complete rooftop solar solutions for homes. 1KW to 10KW systems with government subsidy under PM Surya Ghar Yojana.',
  },
  {
    icon: Building,
    title: 'Commercial Solar',
    description: 'Large-scale solar installations for offices, factories, and commercial buildings. Reduce operational costs significantly.',
  },
  {
    icon: Sun,
    title: 'On-Grid Systems',
    description: 'Grid-connected solar systems with net metering. Sell surplus electricity back to TSSPDCL/NPDCL and earn revenue.',
  },
  {
    icon: Wrench,
    title: 'Installation & Setup',
    description: 'Professional installation by certified technicians. Complete setup including panels, inverter, and net metering.',
  },
  {
    icon: ShieldCheck,
    title: 'Subsidy Assistance',
    description: 'End-to-end support for government subsidy applications. MNRE approved vendor for Pradhan Mantri Surya Ghar Yojana.',
  },
]

export function Services() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-24">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 font-black text-lg md:text-2xl uppercase tracking-[0.2em] mb-4 block opacity-100 drop-shadow-sm">Our Expertise</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-red-500 tracking-tighter mt-2 mb-8 pb-2">Complete Solar Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-normal leading-relaxed tracking-wide">
            From expert consultation to seamless installation, we handle everything. MNRE approved vendor with top-tier solar equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-3xl shadow-slate-200/40 border border-slate-100 hover:shadow-solar-green/10 hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              <div className="flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-solar-green group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-solar-green group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-solar-blue tracking-tight mb-4 group-hover:text-solar-green transition-colors">{service.title}</h3>
                <p className="text-slate-600 font-normal leading-relaxed tracking-wide mb-8">{service.description}</p>
              </div>
              <button 
                onClick={() => {
                  const msg = encodeURIComponent(`Hi, I'm interested in your ${service.title} service. Please provide more information.`)
                  window.open(`https://wa.me/919848977723?text=${msg}`, '_blank')
                }}
                className="w-full py-4 rounded-xl border-2 border-slate-100 text-solar-blue font-bold text-sm tracking-wide hover:bg-solar-green hover:border-solar-green hover:text-white transition-all duration-300">
                Quick Inquiry
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
