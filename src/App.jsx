import './App.css';
import DownExt from "./component/downloadExt/DownloadExt";
import Feq from "./component/fEQ/feq";
import Powerful from './component/ourPowerful/Powerful';
import HeroSection from './component/heroSection/HeroSection';
import NavBar from './component/comman/navBar';
import AdvancedCrashEngine from './component/advCrash/AdvancedCrashEngine';
import { SeeAction } from './component/seeAction/SeeAction';
import Footer from './component/footerSection/footer';

function App() {

  return (
    <div className='overflow-hidden'>
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
