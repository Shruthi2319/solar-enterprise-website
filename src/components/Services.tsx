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
  {
    icon: Banknote,
    title: 'EMI & Financing',
    description: 'Easy EMI options through SBI, HDFC, Union Bank, Canara Bank & Indian Bank. 0% down payment available.',
  },
]

export function Services() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-solar-green font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">Complete Solar Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From consultation to installation, we handle everything. MNRE approved with top-tier solar brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 subtle-shadow hover:elevated-shadow gentle-animation group">
              <div className="w-14 h-14 rounded-xl bg-solar-green/10 flex items-center justify-center mb-5 group-hover:bg-solar-green/20 gentle-animation">
                <service.icon className="w-7 h-7 text-solar-green" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
