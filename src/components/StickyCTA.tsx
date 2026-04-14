import { Phone, MessageCircle } from 'lucide-react'

export function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href="https://wa.me/919848977723?text=Hi%2C%20I%27m%20interested%20in%20solar%20panels"
        target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg gentle-animation hover:scale-110"
        aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href="tel:9848977723"
        className="w-14 h-14 rounded-full bg-solar-orange hover:bg-solar-orange-dark text-white flex items-center justify-center shadow-lg gentle-animation hover:scale-110 animate-pulse"
        aria-label="Call Now">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}
