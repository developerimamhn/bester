import './App.css';
import DownExt from "./component/downloadExt/DownloadExt";
import Feq from "./component/fEQ/feq";
import Powerful from './component/ourPowerful/Powerful'
import HeroSection from './component/heroSection/HeroSection'

function App() {


  return (
    <div className=''>
      <HeroSection />
      <Powerful />
      <DownExt />
      <Feq />
    </div>
  )
}

export default App
