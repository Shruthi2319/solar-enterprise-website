import logo from '@/assets/logo.png'
import { Sun } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-24 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="Sri Ananthaguna Enterprises" className="h-14 w-14 rounded-full bg-white p-0.5 shadow-2xl" />
              <div>
                <div className="font-heading font-bold text-xl tracking-tight">Sri Ananthaguna</div>
                <div className="text-solar-orange text-xs font-bold uppercase tracking-[0.3em]">Enterprises</div>
              </div>
            </div>
            <p className="text-white/60 text-base font-normal leading-relaxed max-w-sm tracking-wide">
              MNRE approved solar energy provider. Delivering high-performance, sustainable energy solutions across Telangana since 2012.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-tight">Quick Links</h4>
            <div className="space-y-4">
              {['Services', 'Plans & Pricing', 'Solar Calculator', 'About Us', 'Contact'].map((link, i) => (
                <a key={i} href={`#${['services', 'pricing', 'calculator', 'about', 'contact'][i]}`}
                  className="block text-white/60 hover:text-white font-bold transition-all tracking-wide">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-tight">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-solar-orange mb-1">Direct Lines</span>
                <div className="flex flex-col text-sm font-bold gap-1 text-white/80">
                  <a href="tel:9848977723" className="hover:text-white transition-colors">98489 77723</a>
                  <a href="tel:8106785265" className="hover:text-white transition-colors">8106785265</a>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-solar-orange mb-1">Service Areas</span>
                <p className="text-white/60 font-bold text-sm leading-relaxed">Hanamkonda & Mancherial regions,<br/>Telangana, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8 opacity-40">
          <p className="text-xs font-bold tracking-widest uppercase">© {new Date().getFullYear()} Sri Ananthaguna Enterprises</p>
          <div className="flex items-center gap-3">
            <Sun className="w-4 h-4 text-solar-orange" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em]">Powering the future</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
