import './App.css';
import GsapAnimations from './gsapAnimations';
import DownExt from "./component/downloadExt/DownloadExt";
import Feq from "./component/fEQ/feq";
import Powerful from './component/ourPowerful/Powerful';
import HeroSection from './component/heroSection/HeroSection';
import NavBar from './component/comman/navBar';
import AdvancedCrashEngine from './component/advCrash/AdvancedCrashEngine';
import { SeeAction } from './component/seeAction/SeeAction';
import Footer from './component/footerSection/Footer';

import Lenis from 'lenis'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }

  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // NavBar animation
      gsap.from('nav', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out"
      })

      // Main content fade in
      gsap.from('.overflow-hidden > div:nth-child(3)', {
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full h-36! pointer-events-none z-[1000] select-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0" style={{maskImage:'linear-gradient(to bottom, transparent 0%, black 20%, black 40%, transparent 60%)',WebkitMaskImage:'linear-gradient(to bottom, transparent 0%, black 20%, black 40%, transparent 60%)',backdropFilter:'blur(0.218rem)',WebkitBackdropFilter:'blur(0.218rem)'}}/>
          <div className="absolute inset-0" style={{maskImage:'linear-gradient(to bottom, transparent 20%, black 40%, black 60%, transparent 80%)',WebkitMaskImage:'linear-gradient(to bottom, transparent 20%, black 40%, black 60%, transparent 80%)',backdropFilter:'blur(0.379rem)',WebkitBackdropFilter:'blur(0.379rem)'}}/>
          <div className="absolute inset-0" style={{maskImage:'linear-gradient(to bottom, transparent 40%, black 60%, black 80%, transparent 100%)',WebkitMaskImage:'linear-gradient(to bottom, transparent 40%, black 60%, black 80%, transparent 100%)',backdropFilter:'blur(0.660rem)',WebkitBackdropFilter:'blur(0.660rem)'}}/>
          <div className="absolute inset-0" style={{maskImage:'linear-gradient(to bottom, transparent 60%, black 80%, black 100%)',WebkitMaskImage:'linear-gradient(to bottom, transparent 60%, black 80%, black 100%)',backdropFilter:'blur(1.149rem)',WebkitBackdropFilter:'blur(1.149rem)'}}/>
          <div className="absolute inset-0" style={{maskImage:'linear-gradient(to bottom, transparent 80%, black 100%)',WebkitMaskImage:'linear-gradient(to bottom, transparent 80%, black 100%)',backdropFilter:'blur(2.000rem)',WebkitBackdropFilter:'blur(2.000rem)'}}/>
        </div>
      </div>
    <div ref={appRef} className='overflow-hidden'>
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
    </div>
  )
}

export default App