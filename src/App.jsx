import { useState } from 'react'
import './App.css'
import DownExt from "./component/downloadExt/DownloadExt";
import Feq from "./component/fEQ/feq";
import Powerful from './component/ourPowerful/Powerful'
import HeroSection from './component/heroSection/HeroSection'

const App = () => {
  return (
    <div className="relative bg-[#000002] overflow-hidden">

      {/* Blob 1 - Right side (DownloadExtension) */}
      <div
        className="absolute pointer-events-none bg-[#3B42E8]"
        style={{
          width: "1033px",
          height: "1369px",
          left: "1248px",
          top: "0px",
          opacity: 0.5,
          filter: "blur(750px)",
        }}
      />

      {/* Blob 2 - Left side (FAQ) */}
      <div
        className="absolute pointer-events-none bg-[#3B42E8]"
        style={{
          width: "1033px",
          height: "1369px",
          left: "-375px",
          top: "900px",
          opacity: 0.5,
          filter: "blur(750px)",
        }}
      />

      <div className="relative z-10">
        <HeroSection />
        <Powerful />
        <DownExt />
        <Feq />
      </div>

    </div>
  )
}

export default App