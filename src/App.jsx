import { useState } from 'react'
import './App.css'
import Powerful from './component/ourPowerful/Powerful'
import HeroSection from './component/heroSection/HeroSection'
import Footer from './component/footer/footer'

function App() {

  return (
    <div className=''>
      <HeroSection />
      <Powerful />
      <Footer />
    </div>
  )
}

export default App
