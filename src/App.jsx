import './App.css'
import './App.css';
import DownExt from "./component/downloadExt/DownloadExt";
import Feq from "./component/fEQ/feq";
import Powerful from './component/ourPowerful/Powerful';
import HeroSection from './component/heroSection/HeroSection';
import NavBar from './component/comman/navBar';
import AdvancedCrashEngine from './component/advCrash/AdvancedCrashEngine';
import { SeeAction } from './component/seeAction/SeeAction';


function App() {


  return (
    <div className=''>
      <div className='flex items-center justify-center relative'>
        <NavBar />
      </div>
      <HeroSection />
      <Powerful />
      <AdvancedCrashEngine />
      <DownExt />
      <SeeAction />
      <Feq />
    </div>
  )
}

export default App
