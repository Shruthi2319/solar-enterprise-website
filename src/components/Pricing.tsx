import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const plans = [
  { kw: 1, total: '1,00,000', subsidy: '30,000', beneficiary: '74,720', netMetering: '2,950', tsredco: '1,770', units: 120, space: 90 },
  { kw: 2, total: '1,50,000', subsidy: '60,000', beneficiary: '94,720', netMetering: '2,950', tsredco: '1,770', units: 240, space: 150 },
  { kw: 3, total: '2,20,000', subsidy: '78,000', beneficiary: '1,46,720', netMetering: '2,950', tsredco: '1,770', units: 360, space: 240, popular: true },
  { kw: 4, total: '2,70,000', subsidy: '78,000', beneficiary: '1,96,720', netMetering: '2,950', tsredco: '1,770', units: 480, space: 320 },
  { kw: 5, total: '3,20,000', subsidy: '78,000', beneficiary: '2,46,720', netMetering: '2,950', tsredco: '1,770', units: 600, space: 400, popular: true },
  { kw: 6, total: '3,80,000', subsidy: '78,000', beneficiary: '3,06,720', netMetering: '2,950', tsredco: '1,770', units: 720, space: 480 },
  { kw: 7, total: '4,50,000', subsidy: '78,000', beneficiary: '3,76,720', netMetering: '2,950', tsredco: '1,770', units: 840, space: 560 },
  { kw: 8, total: '5,20,000', subsidy: '78,000', beneficiary: '4,46,720', netMetering: '2,950', tsredco: '1,770', units: 960, space: 640 },
  { kw: 9, total: '6,00,000', subsidy: '78,000', beneficiary: '5,26,720', netMetering: '2,950', tsredco: '1,770', units: 1080, space: 720 },
  { kw: 10, total: '6,50,000', subsidy: '78,000', beneficiary: '5,76,720', netMetering: '2,950', tsredco: '1,770', units: 1200, space: 800 },
]

export function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-6">
          <span className="text-solar-orange font-semibold text-sm uppercase tracking-wider">Pradhan Mantri Surya Ghar Yojana</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">Plans & Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Government subsidized solar plans. 0% down payment with easy EMI options from all major banks.
          </p>
        </motion.div>

        {/* Highlight banner */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-gradient-to-r from-solar-green to-solar-green-dark text-primary-foreground rounded-2xl p-6 mb-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-sm sm:text-base font-medium">
            <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Govt Subsidy up to ₹78,000</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5" /> 0% Down Payment</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5" /> All Bank EMI Available</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5" /> MNRE Approved</span>
          </div>
        </motion.div>

        {/* Pricing cards - show top 4 as cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.slice(0, 4).map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 border-2 gentle-animation hover:scale-105 ${
                plan.popular ? 'border-solar-orange bg-accent shadow-lg relative' : 'border-border bg-card'
              }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-solar-orange text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Best Value
                </div>
              )}
              <div className="text-center mb-4">
                <div className="text-4xl font-heading font-extrabold text-solar-blue">{plan.kw} KW</div>
                <div className="text-muted-foreground text-sm mt-1">{plan.units} units/month</div>
              </div>
              <div className="text-center mb-4">
                <div className="text-sm text-muted-foreground line-through">₹{plan.total}/-</div>
                <div className="text-2xl font-bold text-solar-green">₹{plan.beneficiary}/-</div>
                <div className="text-xs text-solar-orange font-medium">You pay (after subsidy)</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Govt Subsidy</span><span className="font-semibold text-solar-green">₹{plan.subsidy}/-</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Space Required</span><span className="font-medium">{plan.space} sq.ft</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Net Metering</span><span className="font-medium">₹{plan.netMetering}/-</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">TSREDCO Fee</span><span className="font-medium">₹{plan.tsredco}/-</span></div>
              </div>
              <a href="tel:9848977723"
                className={`mt-6 w-full block text-center font-semibold py-3 rounded-lg gentle-animation ${
                  plan.popular
                    ? 'bg-solar-orange hover:bg-solar-orange-dark text-white'
                    : 'bg-solar-green hover:bg-solar-green-dark text-white'
                }`}>
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Full pricing table */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-solar-blue text-white">
                <th className="px-4 py-3 text-left font-semibold">Capacity</th>
                <th className="px-4 py-3 text-right font-semibold">Total Cost</th>
                <th className="px-4 py-3 text-right font-semibold">Net Metering</th>
                <th className="px-4 py-3 text-right font-semibold">TSREDCO Fee</th>
                <th className="px-4 py-3 text-right font-semibold">Govt Subsidy</th>
                <th className="px-4 py-3 text-right font-semibold">You Pay</th>
                <th className="px-4 py-3 text-right font-semibold">Units/Month</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, i) => (
                <tr key={i} className={`border-t border-border ${i % 2 === 0 ? 'bg-muted/30' : 'bg-card'} hover:bg-muted/50`}>
                  <td className="px-4 py-3 font-semibold">{plan.kw} KW</td>
                  <td className="px-4 py-3 text-right">₹{plan.total}/-</td>
                  <td className="px-4 py-3 text-right">₹{plan.netMetering}/-</td>
                  <td className="px-4 py-3 text-right">₹{plan.tsredco}/-</td>
                  <td className="px-4 py-3 text-right text-solar-green font-semibold">₹{plan.subsidy}/-</td>
                  <td className="px-4 py-3 text-right font-bold text-solar-orange">₹{plan.beneficiary}/-</td>
                  <td className="px-4 py-3 text-right">{plan.units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
