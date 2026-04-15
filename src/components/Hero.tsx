import { motion } from 'framer-motion'
import { Sun, Zap, Phone, Menu, X, ArrowRight } from 'lucide-react'
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
    <div className="relative min-h-screen w-full overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#071324]">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40 brightness-[0.7] contrast-[1.1] grayscale-[0.2]" 
          width={1920} 
          height={1080} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d] via-transparent to-[#0a1f3d]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3d]/80 via-transparent to-[#0a1f3d]/80" />
      </div>

      {/* Decorative sun rays */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-solar-orange/10 blur-[120px]" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-solar-green/10 blur-[100px]" />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-black/20 backdrop-blur-sm border-b border-white/10 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={logo} alt="Sri Ananthaguna Enterprises" className={`h-12 w-12 rounded-full p-0.5 shadow-lg group-hover:scale-105 transition-all duration-300 ${isScrolled ? 'bg-solar-blue/5' : 'bg-white'}`} />
              {!isScrolled && <div className="absolute -inset-1 bg-solar-yellow/20 rounded-full blur group-hover:bg-solar-yellow/40 transition-colors duration-300"></div>}
            </div>
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-base leading-tight block transition-colors duration-300 ${isScrolled ? 'text-solar-blue' : 'text-white drop-shadow-md'}`}>Sri Ananthaguna</span>
              <span className={`text-sm font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-solar-orange' : 'text-solar-yellow drop-shadow-sm'}`}>ENTERPRISES</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={`font-bold text-sm tracking-wide transition-all duration-300 ${isScrolled ? 'text-solar-blue hover:text-solar-orange' : 'text-white hover:text-solar-yellow drop-shadow-sm'}`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:9848977723" className="hidden sm:flex items-center gap-2 bg-solar-orange hover:bg-solar-orange-dark text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-solar-orange/30 hover:shadow-solar-orange/50 transition-all duration-300 active:scale-95">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-solar-blue hover:bg-solar-blue/5' : 'text-white hover:bg-white/10'}`}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed top-0 right-0 h-full w-80 bg-solar-blue z-50 p-8 pt-24"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-solar-yellow font-bold text-xl py-3 border-b border-white/5 transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="tel:9848977723" className="mt-8 flex items-center justify-center gap-3 bg-solar-orange text-white font-bold px-6 py-4 rounded-xl shadow-xl shadow-solar-orange/40 active:scale-95 transition-transform">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-16 lg:pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full relative">
          
          {/* Popping Floating Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ type: 'spring', delay: 1.5, stiffness: 200 }}
            className="absolute -top-12 right-[10%] hidden xl:flex bg-solar-green text-white px-6 py-4 rounded-3xl shadow-2xl z-20 flex-col items-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">MNRE Approved</span>
            <span className="text-2xl font-bold">Solar Expert</span>
            <div className="absolute -bottom-2 translate-y-full right-8 w-4 h-4 bg-solar-green rotate-45"></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-solar-green/30 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold mb-8 border border-white/10 shadow-lg">
              <Sun className="w-4 h-4 text-solar-yellow" /> MNRE Approved · Govt Subsidy Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-500 tracking-tighter leading-[1.05] mb-8 pb-2 drop-shadow-2xl">
              Go Solar with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 block sm:inline">Expert</span> Installation
            </h1>
            <p className="text-white/90 text-xl mb-10 max-w-xl font-normal leading-relaxed drop-shadow-lg tracking-wide">
              Get up to <strong className="text-solar-yellow font-bold underline underline-offset-4 decoration-solar-yellow/40">₹78,000</strong> government subsidy under Pradhan Mantri Surya Ghar Yojana. Save on electricity bills for 25+ years.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#pricing" className="bg-solar-orange hover:bg-solar-orange-dark text-white font-bold px-10 py-4 rounded-xl shadow-2xl shadow-solar-orange/40 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 text-lg">
                View Plans & Pricing <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#calculator" className="bg-white/10 backdrop-blur-md border border-white/30 hover:border-solar-yellow text-white hover:text-solar-yellow font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 text-lg">
                Solar Calculator
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8 mt-14">
              {[
                { icon: Sun, text: '25 Year Warranty', color: 'text-solar-orange' },
                { icon: Zap, text: 'Free Maintenance', color: 'text-solar-green' }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-sm">
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                  <span className="text-white font-bold text-sm tracking-wide">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero stats card */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-solar-yellow/10 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-[#0a1f3d]/40 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h3 className="text-white font-heading font-bold text-2xl mb-8 text-center tracking-tight border-b border-white/10 pb-4">Why Go Solar?</h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '₹78,000', label: 'Max Govt Subsidy' },
                  { value: '0%', label: 'Down Payment' },
                  { value: '25+', label: 'Years Free Power' },
                  { value: '4-5 Yrs', label: 'ROI Period' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-3xl font-black text-solar-yellow mb-2 drop-shadow-sm">{stat.value}</div>
                    <div className="text-white font-bold text-sm tracking-wide opacity-80 uppercase">{stat.label}</div>
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
