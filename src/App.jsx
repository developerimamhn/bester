import './App.css';
import DownExt from "./component/downloadExt/DownloadExt";
import Feq from "./component/fEQ/feq";
import Powerful from './component/ourPowerful/Powerful';
import HeroSection from './component/heroSection/HeroSection';
import NavBar from './component/comman/navBar';

function App() {


  return (
    <div className=''>
      <div className='flex items-center justify-center relative'>
        <NavBar />
      </div>
      <HeroSection />
      <Powerful />
      <DownExt />
      <Feq />
    </div>
  )
}

export default App
