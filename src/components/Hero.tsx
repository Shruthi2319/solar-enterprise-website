import { motion } from 'framer-motion'
import { Sun, Zap, IndianRupee, Phone, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import logo from '@/assets/logo.png'
import heroBg from '@/assets/solar-hero-bg.jpg'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Plans', href: '#pricing' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-solar-blue/90 via-[#0f2847]/85 to-[#0a1f3d]/80" />
      </div>

      {/* Decorative sun rays */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-solar-orange/10 blur-[120px]" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-solar-green/10 blur-[100px]" />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-solar-blue shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img src={logo} alt="Sri Ananthaguna Enterprises" className="h-12 w-12 rounded-full bg-white p-0.5" />
            <div className="hidden sm:block">
              <span className="text-white font-heading font-bold text-sm leading-tight block">Sri Ananthaguna</span>
              <span className="text-solar-yellow text-xs font-medium">Enterprises</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-white hover:text-solar-yellow font-medium text-sm gentle-animation">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:9848977723" className="hidden sm:flex items-center gap-2 bg-solar-orange hover:bg-solar-orange-dark text-white font-semibold px-5 py-2.5 rounded-lg gentle-animation">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 h-full w-72 bg-solar-blue z-50 p-6 pt-20"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-solar-yellow font-medium text-lg py-2 border-b border-white/10">
                  {link.label}
                </a>
              ))}
              <a href="tel:9848977723" className="mt-4 flex items-center justify-center gap-2 bg-solar-orange text-white font-semibold px-5 py-3 rounded-lg">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-solar-green/20 text-solar-leaf px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sun className="w-4 h-4" /> MNRE Approved · Govt Subsidy Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
              Go Solar with <span className="text-solar-orange">₹0 Down</span> Payment
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Get up to <strong className="text-solar-yellow">₹78,000</strong> government subsidy under Pradhan Mantri Surya Ghar Yojana. Save on electricity bills for 25+ years.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="bg-solar-orange hover:bg-solar-orange-dark text-white font-bold px-8 py-3.5 rounded-lg gentle-animation inline-flex items-center gap-2">
                <Zap className="w-5 h-5" /> View Plans & Pricing
              </a>
              <a href="#calculator" className="border-2 border-white/30 hover:border-solar-yellow text-white hover:text-solar-yellow font-semibold px-8 py-3.5 rounded-lg gentle-animation">
                Solar Calculator
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-solar-yellow" />
                <span>EMI Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-solar-orange" />
                <span>25 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-solar-green" />
                <span>Free Maintenance</span>
              </div>
            </div>
          </motion.div>

          {/* Hero stats card */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-white font-heading font-bold text-xl mb-6 text-center">Why Go Solar?</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '₹78,000', label: 'Max Govt Subsidy' },
                  { value: '0%', label: 'Down Payment' },
                  { value: '25+', label: 'Years Free Power' },
                  { value: '4-5 Yrs', label: 'ROI Period' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-solar-yellow mb-1">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
