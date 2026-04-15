import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  const handleClick = () => {
    const msg = encodeURIComponent("Hi Sri Ananthaguna Enterprises, I'm interested in solar installation. Please contact me.")
    window.open(`https://wa.me/919848977723?text=${msg}`, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 group overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap relative z-10">
        Chat with Us
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-2xl animate-ping bg-[#25D366]/40 -z-10"></span>
    </motion.button>
  )
}
