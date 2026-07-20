import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/hero/Hero'
import TrustBand from './components/sections/TrustBand'
import Stats from './components/sections/Stats'
import Features from './components/sections/Features'
import Clients from './components/sections/Clients'
import StandaloneSection from './components/sections/StandaloneSection'
import ForSection from './components/sections/ForSection'
import HowItWorks from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import Faq from './components/sections/Faq'
import CtaBand from './components/sections/CtaBand'
import Footer from './components/Footer'
import Modal from './components/ui/Modal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Nav onDemoClick={openModal} />
      <main>
        <Hero onDemoClick={openModal} />
        <TrustBand />
        <Stats />
        <Clients />
        <Features />
        <StandaloneSection />
        <ForSection onDemoClick={openModal} />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <CtaBand onDemoClick={openModal} />
      </main>
      <Footer onDemoClick={openModal} />
      <Modal open={modalOpen} onClose={closeModal} />
    </>
  )
}
