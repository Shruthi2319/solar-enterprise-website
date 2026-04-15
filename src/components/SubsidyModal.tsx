import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sun, Zap, ArrowRight } from 'lucide-react'

export function SubsidyModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('hasSeenSubsidyModal')
      if (!hasSeen) {
        setIsOpen(true)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenSubsidyModal', 'true')
  }

  const handleApply = () => {
    const msg = encodeURIComponent(`Hi, I'm interested in applying for the ₹78,000 government subsidy under PM Surya Ghar Yojana. Please guide me through the process.`)
    window.open(`https://wa.me/919848977723?text=${msg}`, '_blank')
    closeModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-[#0a1f3d]/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            className="relative w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-solar-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-solar-orange hover:text-white transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-1 p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-solar-green mb-8 shadow-xl shadow-solar-green/20 rotate-3 animate-pulse">
                <Sun className="w-10 h-10 text-white" />
              </div>

              <span className="block text-solar-orange font-bold text-xs uppercase tracking-[0.4em] mb-4 opacity-70">Limited Time Opportunity</span>
              
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-solar-blue mb-6 tracking-tighter leading-tight">
                Unlock <span className="text-solar-green">₹78,000</span> Support
              </h2>
              
              <p className="text-slate-600 font-bold text-lg mb-10 leading-relaxed tracking-wide">
                Under the PM Surya Ghar Yojana, you can now get the maximum government subsidy with <span className="text-solar-blue font-bold">Expert Guidance.</span>
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-solar-green/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-solar-green" />
                  </div>
                  <span className="text-solar-blue font-bold text-xs uppercase text-left tracking-wider">Clean Energy</span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-solar-orange/10 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-solar-orange" />
                  </div>
                  <span className="text-solar-blue font-bold text-xs uppercase text-left tracking-wider">Expert Advice</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={handleApply}
                  className="bg-solar-orange hover:bg-solar-orange-dark text-white font-bold py-5 rounded-2xl text-xl shadow-3xl shadow-solar-orange/20 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
                >
                  Apply For Subsidy Now <ArrowRight className="w-6 h-6" />
                </button>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] leading-relaxed">Available for Hanamkonda & Mancherial regions</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
