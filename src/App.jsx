import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Marquee from './sections/Marquee.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Occasions from './sections/Occasions.jsx'
import Gallery from './sections/Gallery.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import FloatingActions from './sections/FloatingActions.jsx'

// Un seul site, responsive avec les breakpoints Tailwind (sm / md / lg / xl).
export default function App() {
  return (
    <div id="top" className="overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Occasions />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
