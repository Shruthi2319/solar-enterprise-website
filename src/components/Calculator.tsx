import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator as CalcIcon, Zap, IndianRupee, Sun } from 'lucide-react'

const systemData: Record<number, { subsidy: number; space: number; units: number; total: number }> = {
  1: { subsidy: 30000, space: 90, units: 120, total: 100000 },
  2: { subsidy: 60000, space: 150, units: 240, total: 150000 },
  3: { subsidy: 78000, space: 240, units: 360, total: 220000 },
  4: { subsidy: 78000, space: 320, units: 480, total: 270000 },
  5: { subsidy: 78000, space: 400, units: 600, total: 320000 },
  6: { subsidy: 78000, space: 480, units: 720, total: 380000 },
  7: { subsidy: 78000, space: 560, units: 840, total: 450000 },
  8: { subsidy: 78000, space: 640, units: 960, total: 520000 },
  9: { subsidy: 78000, space: 720, units: 1080, total: 600000 },
  10: { subsidy: 78000, space: 800, units: 1200, total: 650000 },
}

export function Calculator() {
  const [kw, setKw] = useState(3)
  const [monthlyBill, setMonthlyBill] = useState('3000')

  // Auto-recommend KW based on monthly bill (approx 1kW for every ₹1000 bill)
  const handleBillChange = (val: string) => {
    setMonthlyBill(val)
    const numericVal = Number(val) || 0
    const recommendedKw = Math.max(1, Math.min(10, Math.round(numericVal / 1000)))
    setKw(recommendedKw)
  }

  const billValue = Number(monthlyBill) || 0
  const data = systemData[kw] || systemData[Math.max(1, Math.min(10, Math.round(kw)))] || systemData[3]
  const netCost = (data?.total || 0) - (data?.subsidy || 0)
  const monthlySaving = Math.round((data?.units || 0) * 7) // Average ₹7 per unit
  const yearlySaving = monthlySaving * 12
  const paybackYears = Math.round(netCost / (yearlySaving || 1) * 10) / 10
  const savings25Years = yearlySaving * 25 - netCost

  const handleGetQuote = () => {
    const msg = encodeURIComponent(`Hi, I used your Solar Calculator. For my ₹${billValue} monthly bill, it recommended a ${kw}KW system.
Total Cost: ₹${data.total.toLocaleString('en-IN')}
Subsidy: ₹${data.subsidy.toLocaleString('en-IN')}
Net Cost: ₹${netCost.toLocaleString('en-IN')}
Savings in 25 Years: ₹${savings25Years.toLocaleString('en-IN')}
Please provide a final quotation.`)
    window.open(`https://wa.me/919848977723?text=${msg}`, '_blank')
  }

  return (
    <section className="py-24 px-4 bg-[#0a1f3d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-solar-blue-light blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] bg-solar-orange blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-solar-yellow font-bold text-xs uppercase tracking-[0.4em] mb-4 block opacity-80">Smart Savings</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-8 text-white tracking-tighter leading-tight">Solar Investment Calculator</h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg font-normal leading-relaxed tracking-wide">Estimate your costs, government subsidies, and long-term electricity savings in seconds.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-10 lg:p-14 border border-white/10 shadow-3xl">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Controls */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-white font-bold text-lg tracking-tight">System Size</label>
                  <span className="text-solar-yellow font-bold text-4xl">{kw} <span className="text-sm uppercase font-semibold tracking-widest text-white/60">KW</span></span>
                </div>
                <div className="relative pt-2">
                  <input type="range" min={1} max={10} value={kw} onChange={e => setKw(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-white/20 appearance-none cursor-pointer accent-solar-orange border border-white/10" />
                  <div className="flex justify-between text-white/60 text-[10px] font-bold uppercase mt-4 tracking-wider">
                    <span>Min (1 KW)</span>
                    <span>Max (10 KW)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-white font-black text-lg tracking-tight block">Avg. Monthly Bill</label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-solar-yellow font-black text-xl">₹</div>
                  <input type="number" value={monthlyBill} onChange={e => handleBillChange(e.target.value)}
                    className="w-full bg-white/5 border-2 border-white/10 group-hover:border-solar-orange/50 focus:border-solar-orange rounded-2xl px-12 py-5 text-white font-black text-2xl transition-all duration-300 outline-none shadow-inner" />
                </div>
                <p className="text-white/30 text-xs font-bold leading-relaxed">System size is automatically recommended based on your bill. You can adjust the slider above manual override.</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Space Area', value: `${data.space} sq.ft`, icon: Sun },
                  { label: 'Energy/Mo', value: `${data.units} Units`, icon: Zap },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-3xl p-6 border border-white/5">
                    <div className="text-white/40 font-black text-[10px] uppercase tracking-widest mb-2">{item.label}</div>
                    <div className="text-white font-black text-xl tracking-tight">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { label: 'Total System Price', value: `₹${data.total.toLocaleString('en-IN')}`, icon: IndianRupee, color: 'bg-white/10 text-white' },
                { label: 'Government Subsidy', value: `- ₹${data.subsidy.toLocaleString('en-IN')}`, icon: Sun, color: 'bg-solar-yellow/20 text-solar-yellow', highlight: true },
                { label: 'Final Net Cost', value: `₹${netCost.toLocaleString('en-IN')}`, icon: CalcIcon, color: 'bg-solar-orange/20 text-solar-orange' },
                { label: '25-Year Net Savings', value: `₹${savings25Years.toLocaleString('en-IN')}`, icon: Zap, color: 'bg-solar-green/20 text-solar-green' },
              ].map((item, idx) => (
                <div key={idx} className={`${item.color} rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 border border-white/10 group hover:bg-white/20 transition-all duration-300`}>
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-black/30`}>
                      <item.icon className="w-5 h-5 font-bold" />
                    </div>
                    <span className="font-semibold text-sm tracking-wide opacity-90">{item.label}</span>
                  </div>
                  <div className="text-2xl font-bold tracking-tighter">{item.value}/-</div>
                </div>
              ))}
              
              <button onClick={handleGetQuote}
                className="w-full bg-white hover:bg-solar-yellow text-solar-blue font-black py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1">
                <Sun className="w-5 h-5" /> Get Final Quote on WhatsApp
              </button>
              
              <a href="tel:9848977723" className="mt-6 block p-8 bg-solar-orange rounded-3xl text-center shadow-2xl shadow-solar-orange/20 relative group overflow-hidden">
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <p className="text-white/80 font-bold text-xs mb-1 uppercase tracking-widest">Immediate Consultation</p>
                  <p className="text-white font-black text-lg leading-snug">
                    Get Free Site Survey within 24 Hours! <span className="underline decoration-solar-yellow/50 underline-offset-4">Call Now</span>
                  </p>
                </div>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-3xl"></div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
 }
