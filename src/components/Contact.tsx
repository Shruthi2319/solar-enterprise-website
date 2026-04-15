import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import sbiLogo from '@/assets/SBI-Logo.png'
import hdfcLogo from '@/assets/HDFC-Bank-Logo.png'
import canaraLogo from '@/assets/Canara_bank.jpg'
import unionLogo from '@/assets/union_bank.jpg'
import indianLogo from '@/assets/Indian_bank.png'
import tgBankLogo from '@/assets/Telangana_Grameena_bank.jpg'

const bankLogos = [
  { name: 'SBI', logo: sbiLogo },
  { name: 'HDFC', logo: hdfcLogo },
  { name: 'Canara', logo: canaraLogo },
  { name: 'Union', logo: unionLogo },
  { name: 'Indian', logo: indianLogo },
  { name: 'TG Bank', logo: tgBankLogo },
]

export function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMsg = encodeURIComponent(`Hi, I'm ${name}. ${message}. Please contact me at ${phone}.`)
    window.open(`https://wa.me/919848977723?text=${whatsappMsg}`, '_blank')
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <span className="text-solar-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block opacity-80">Get In Touch</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-solar-blue tracking-tighter mt-2 mb-8">Free Consultation</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-normal leading-relaxed tracking-wide">
            Contact us today for a free site survey and customized solar solution for your home or business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-solar-green/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-solar-green" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Call Us</h3>
                <a href="tel:9848977723" className="text-solar-blue font-bold text-lg hover:text-solar-orange gentle-animation block tracking-wide">98489 77723</a>
                <a href="tel:8106785265" className="text-solar-blue font-bold text-lg hover:text-solar-orange gentle-animation block tracking-wide">8106785265</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-solar-orange" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Main Office</h3>
                <p className="text-slate-700 text-sm font-semibold tracking-wide">H.No. 5-11-491, Srinagar Colony, Naim Nagar, Hanamkonda - 506001</p>
                <h3 className="font-heading font-bold mt-4 mb-1">Branch Office</h3>
                <p className="text-slate-700 text-sm font-semibold tracking-wide">#19-46, Behind Garmilla SBI Bank, Ram Nagar, Mancherial - 504208</p>
              </div>
            </div>

            {/* Project Partners in Contact */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-3xl shadow-slate-200/40">
              <h3 className="font-heading font-bold text-xl text-solar-blue mb-2 tracking-tight">Strategic Project Partners</h3>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-8 opacity-60">Trusted banking & technology associates</p>
              <div className="flex flex-wrap gap-x-8 gap-y-6 transition-all duration-500">
                {bankLogos.map((bank, i) => (
                  <img key={i} src={bank.logo} alt={bank.name} className="h-6 w-auto object-contain grayscale-0 opacity-100 hover:scale-110 transition-transform" />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-10 shadow-3xl shadow-slate-200/40 border border-slate-100 space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.2em] mb-2 block opacity-80">Your Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-foreground font-semibold" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.2em] mb-2 block opacity-80">Phone Number</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-foreground font-semibold" placeholder="Your active contact number" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.2em] mb-2 block opacity-80">Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-foreground font-semibold resize-none" placeholder="How can we assist you with solar today?" />
              </div>
              <button type="submit"
                className="w-full bg-solar-green hover:bg-solar-green-dark text-white font-bold py-4 rounded-xl shadow-2xl shadow-solar-green/40 transition-all duration-300">
                Consult via WhatsApp
              </button>
              <p className="text-center text-slate-500 text-[10px] font-bold tracking-widest uppercase">Or dial expert directly: <a href="tel:9848977723" className="text-solar-orange font-bold">98489 77723</a></p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
