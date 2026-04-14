import logo from '@/assets/logo.png'
import { Sun } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-solar-blue text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sri Ananthaguna Enterprises" className="h-12 w-12 rounded-full bg-white p-0.5" />
              <div>
                <div className="font-heading font-bold">Sri Ananthaguna</div>
                <div className="text-solar-yellow text-sm">Enterprises</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">MNRE approved solar energy provider. Complete solar solutions for homes and businesses in Telangana.</p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {['Services', 'Plans & Pricing', 'Solar Calculator', 'About Us', 'Contact'].map((link, i) => (
                <a key={i} href={`#${['services', 'pricing', 'calculator', 'about', 'contact'][i]}`}
                  className="block text-white/70 hover:text-solar-yellow gentle-animation">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>📞 98489 77723 / 8106785265</p>
              <p>📍 Srinagar Colony, Naim Nagar, Hanamkonda - 506001</p>
              <p>📍 Ram Nagar, Mancherial - 504208</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Sri Ananthaguna Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Sun className="w-4 h-4 text-solar-yellow" />
            <span>Powering a greener future</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
