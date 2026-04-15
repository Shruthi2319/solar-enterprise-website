import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import sbiLogo from '@/assets/SBI-Logo.png'
import hdfcLogo from '@/assets/HDFC-Bank-Logo.png'
import canaraLogo from '@/assets/Canara_bank.jpg'
import unionLogo from '@/assets/union_bank.jpg'
import indianLogo from '@/assets/Indian_bank.png'

const plans = [
  { kw: 1, total: '1,0,000', subsidy: '30,000', beneficiary: '74,720', netMetering: '2,950', tsredco: '1,770', units: 120, space: 90 },
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
  const handleGetQuote = (plan: any) => {
    const msg = encodeURIComponent(`Hi, I'm interested in the ${plan.kw}KW Solar Plan.
Total Price: ₹${plan.total}/-
Govt Subsidy: ₹${plan.subsidy}/-
Net Cost: ₹${plan.beneficiary}/-
Monthly Generation: ~${plan.units} Units
Please contact me for more details.`)
    window.open(`https://wa.me/919848977723?text=${msg}`, '_blank')
  }

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-solar-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block opacity-80">Investment Opportunity</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-solar-blue mt-2 mb-8 tracking-tighter">Sustainable Savings Plan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-normal leading-relaxed tracking-wide">
            Authorized MNRE Vendor. Get direct government subsidies and high-performance solar technology with transparent pricing.
          </p>
        </motion.div>

        {/* Highlight banner */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-8 mb-16 text-center shadow-3xl shadow-slate-200/40 border border-slate-100">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-base sm:text-lg font-bold text-solar-blue">
            <span className="flex items-center gap-3"><Check className="w-5 h-5 text-solar-green" /> Govt Subsidy up to ₹78,000</span>
            <span className="flex items-center gap-3"><Check className="w-5 h-5 text-solar-green" /> Warranty up to 25 Years</span>
            <span className="flex items-center gap-3"><Check className="w-5 h-5 text-solar-green" /> Certified Installations</span>
            <span className="flex items-center gap-3"><Check className="w-5 h-5 text-solar-green" /> MNRE Approved</span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`rounded-[2rem] p-8 border-2 transition-all duration-500 hover:-translate-y-3 flex flex-col ${
                plan.popular 
                  ? 'border-solar-green bg-solar-green/5 shadow-2xl shadow-solar-green/10 relative' 
                  : 'border-slate-100 bg-white shadow-xl shadow-slate-200/50'
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-green text-white text-xs font-black px-6 py-2 rounded-full flex items-center gap-2 shadow-lg tracking-widest uppercase">
                  <Star className="w-4 h-4 fill-white" /> Popular
                </div>
              )}
              <div className="text-center mb-8">
                <div className="text-5xl font-heading font-extrabold text-solar-blue mb-2 tracking-tighter">{plan.kw} KW</div>
                <div className="bg-solar-blue/5 text-solar-blue text-[10px] uppercase font-black tracking-widest py-1.5 px-4 rounded-full inline-block">{plan.units} Units / Month</div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-center border border-slate-100">
                <div className="text-sm text-slate-400 line-through font-bold mb-1">₹{plan.total}/-</div>
                <div className="text-3xl font-black text-solar-green mb-1">₹{plan.beneficiary}/-</div>
                <div className="text-[10px] text-solar-orange font-black uppercase tracking-tighter">Net Cost After Subsidy</div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {[
                  { label: 'Govt Subsidy', value: `₹${plan.subsidy}/-`, highlight: true },
                  { label: 'Space Needed', value: `${plan.space} sq.ft` },
                  { label: 'Net Metering', value: `₹${plan.netMetering}/-` },
                  { label: 'Processing Fee', value: `₹${plan.tsredco}/-` },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-bold">{item.label}</span>
                    <span className={`font-black ${item.highlight ? 'text-solar-green text-base' : 'text-solar-blue'}`}>{item.value}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => handleGetQuote(plan)}
                className={`w-full block text-center font-black py-4 rounded-2xl transition-all duration-300 shadow-lg hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-solar-green hover:bg-solar-green-dark text-white shadow-solar-green/30 active:scale-95'
                    : 'bg-solar-blue hover:bg-black text-white shadow-solar-blue/20 active:scale-95'
                }`}>
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bank Partner Logos */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="font-heading font-extrabold text-2xl text-solar-blue mb-2 tracking-tight">Our Financing Partners</h3>
            <p className="text-slate-500 font-bold tracking-widest uppercase text-[10px] opacity-60">Easy EMI & Solar Loans Available Through</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500 group">
            {[
              { name: 'SBI', logo: sbiLogo },
              { name: 'HDFC', logo: hdfcLogo },
              { name: 'Canara Bank', logo: canaraLogo },
              { name: 'Union Bank', logo: unionLogo },
              { name: 'Indian Bank', logo: indianLogo },
            ].map((bank, i) => (
              <img key={i} src={bank.logo} alt={bank.name} className="h-8 md:h-12 w-auto transition-all duration-300 object-contain hover:scale-110" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
