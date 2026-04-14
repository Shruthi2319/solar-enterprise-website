import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

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
          className="text-center mb-16">
          <span className="text-solar-green font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-4">Book Your Free Consultation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
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
                <a href="tel:9848977723" className="text-solar-blue font-semibold text-lg hover:text-solar-orange gentle-animation block">98489 77723</a>
                <a href="tel:8106785265" className="text-solar-blue font-semibold text-lg hover:text-solar-orange gentle-animation block">8106785265</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-solar-orange" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Main Office</h3>
                <p className="text-muted-foreground text-sm">H.No. 5-11-491, Srinagar Colony, Naim Nagar, Hanamkonda - 506001</p>
                <h3 className="font-heading font-bold mt-4 mb-1">Branch Office</h3>
                <p className="text-muted-foreground text-sm">#19-46, Behind Garmilla SBI Bank, Ram Nagar, Mancherial - 504208</p>
              </div>
            </div>

            <div className="bg-accent rounded-xl p-6 border border-solar-orange/20">
              <h3 className="font-heading font-bold mb-3 text-accent-foreground">All Banks EMI Facility Available</h3>
              <div className="flex flex-wrap gap-3">
                {['SBI', 'HDFC Bank', 'Union Bank', 'Canara Bank', 'Indian Bank', 'Telangana Grameena Bank'].map((bank, i) => (
                  <span key={i} className="bg-card px-3 py-1.5 rounded-lg text-xs font-semibold subtle-shadow">{bank}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 subtle-shadow space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Your Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground" placeholder="Enter your name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground" placeholder="Your phone number" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground resize-none" placeholder="I'm interested in solar panels for my home..." />
              </div>
              <button type="submit"
                className="w-full bg-solar-green hover:bg-solar-green-dark text-white font-bold py-3.5 rounded-lg gentle-animation">
                Send via WhatsApp
              </button>
              <p className="text-center text-muted-foreground text-xs">Or call directly: <a href="tel:9848977723" className="text-solar-orange font-semibold">98489 77723</a></p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
