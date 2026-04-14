import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Calculator } from './components/Calculator'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { StickyCTA } from './components/StickyCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section id="hero"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="pricing"><Pricing /></section>
        <section id="calculator"><Calculator /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
