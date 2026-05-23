import './App.css';
import GsapAnimations from './gsapAnimations';
import DownExt from "./component/downloadExt/DownloadExt";
import Feq from "./component/fEQ/feq";
import Powerful from './component/ourPowerful/Powerful';
import HeroSection from './component/heroSection/HeroSection';
import NavBar from './component/comman/navBar';
import AdvancedCrashEngine from './component/advCrash/AdvancedCrashEngine';
import { SeeAction } from './component/seeAction/SeeAction';
import Footer from './component/footerSection/footer';

import Lenis from 'lenis'
import { useEffect } from 'react'

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }

  }, [])

  return (
    <div className='overflow-hidden'>
      <GsapAnimations />

      <div className='flex items-center justify-center relative'>
        <NavBar />
      </div>

      <HeroSection />
      <Powerful />
      <AdvancedCrashEngine />
      <SeeAction />
      <DownExt />
      <Feq />
      <Footer />
    </div>
  )
}

export default App