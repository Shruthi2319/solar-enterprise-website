import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export function StickyCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919848977723?text=Hi%2C%20I%27m%20interested%20in%20solar%20panels"
        target="_blank" rel="noopener noreferrer"
        className="group relative flex items-center justify-end"
        aria-label="WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white/95 backdrop-blur-sm text-solar-blue px-4 py-2 rounded-xl text-[10px] font-normal uppercase tracking-[0.2em] shadow-3xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/20 mb-1">
          Chat with Us
        </span>
        <div className="w-14 h-14 rounded-2xl bg-[#10b981] text-white flex items-center justify-center shadow-3xl shadow-[#10b981]/20 relative overflow-hidden">
          <MessageCircle className="w-6 h-6 relative z-10" />
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </div>
      </motion.a>

      {/* Call Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        href="tel:9848977723"
        className="group relative flex items-center justify-end"
        aria-label="Call Now"
      >
        <span className="absolute right-full mr-4 bg-white/95 backdrop-blur-sm text-solar-blue px-4 py-2 rounded-xl text-[10px] font-normal uppercase tracking-[0.2em] shadow-3xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/20 mb-1">
          Call Experts
        </span>
        <div className="w-14 h-14 rounded-2xl bg-solar-orange text-white flex items-center justify-center shadow-3xl shadow-solar-orange/20 relative overflow-hidden">
          <Phone className="w-6 h-6 relative z-10" />
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </div>
      </motion.a>
    </div>
  )
}
