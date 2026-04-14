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
  const [monthlyBill, setMonthlyBill] = useState(3000)
  const data = systemData[kw]
  const netCost = data.total - data.subsidy
  const monthlySaving = Math.round(data.units * 6)
  const yearlySaving = monthlySaving * 12
  const paybackYears = Math.round(netCost / yearlySaving * 10) / 10
  const savings25Years = yearlySaving * 25 - netCost

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-solar-blue via-[#0f2847] to-[#0a1f3d]">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-solar-yellow font-semibold text-sm uppercase tracking-wider">Solar Calculator</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4 text-white">Calculate Your Savings</h2>
          <p className="text-white/70 max-w-xl mx-auto">See how much you can save with solar energy. Adjust the system size to match your needs.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="text-white font-medium mb-3 block">System Size: <span className="text-solar-yellow font-bold text-xl">{kw} KW</span></label>
                <input type="range" min={1} max={10} value={kw} onChange={e => setKw(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-white/20 appearance-none cursor-pointer accent-solar-orange" />
                <div className="flex justify-between text-white/50 text-xs mt-1"><span>1 KW</span><span>10 KW</span></div>
              </div>
              <div>
                <label className="text-white font-medium mb-3 block">Monthly Electricity Bill</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">₹</span>
                  <input type="number" value={monthlyBill} onChange={e => setMonthlyBill(Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-8 py-3 text-white font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-white/60 mb-1">Space Required</div>
                  <div className="text-white font-bold text-lg">{data.space} sq.ft</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-white/60 mb-1">Monthly Generation</div>
                  <div className="text-white font-bold text-lg">{data.units} units</div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="bg-solar-green/20 rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-solar-green/30 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-solar-leaf" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Total System Cost</div>
                  <div className="text-white font-bold text-xl">₹{data.total.toLocaleString('en-IN')}/-</div>
                </div>
              </div>
              <div className="bg-solar-orange/20 rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-solar-orange/30 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-solar-yellow" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Govt Subsidy</div>
                  <div className="text-solar-yellow font-bold text-xl">- ₹{data.subsidy.toLocaleString('en-IN')}/-</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <CalcIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">You Pay (After Subsidy)</div>
                  <div className="text-solar-orange font-bold text-xl">₹{netCost.toLocaleString('en-IN')}/-</div>
                </div>
              </div>
              <div className="bg-solar-green/20 rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-solar-green/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-solar-leaf" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">25-Year Net Savings</div>
                  <div className="text-solar-leaf font-bold text-xl">₹{savings25Years.toLocaleString('en-IN')}/-</div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-white/60 text-sm">Investment recovery in approx. <span className="text-solar-yellow font-bold">{paybackYears} years</span>, then <span className="text-solar-leaf font-bold">25+ years FREE</span> electricity!</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
