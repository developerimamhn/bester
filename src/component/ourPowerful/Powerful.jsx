import imageone from '../../assets/image/autocardon.png';
import imagetwo from '../../assets/image/autocardtwo.svg';
import imagethree from '../../assets/image/autocardthree.svg';
import imagefive from '../../assets/image/lowcard.svg';
import imagesix from '../../assets/image/imagesix.svg';


const Powerful = () => {
  const cards = [
    {
      id: 1,
      image: imageone,
      title: "Auto analysis",
      desc: "Real-time pattern recognition and crash probability analysis running in the background.",
    },
  {
    id: 2,
    image: imagetwo,
    title: "Live dashboard",
    desc: "Comprehensive overlay showing live stats, next prediction window, and historical metrics.",
  },
  {
    id: 3,
    image: imagethree,
    title: "Safety modes",
    desc: "Conservative, balanced, and aggressive signal modes with configurable risk thresholds.",
  },
  {
    id: 4,
    image: imagetwo,
    title: "Smart notifications",
    desc: "Instant alerts when high-confidence triggers are detected with customizable sound options.",
  },
  {
    id: 5,
    image: imagefive,
    title: "Low overhead",
    desc: "Optimized algorithms ensure minimal CPU and memory usage while maintaining precision.",
  },
  {
    id: 6,
    image: imagesix,
    title: "Local only processing",
    desc: "All calculations run locally in your browser. No data ever leaves your machine.",
  },
  ];

  return (
    <div className=''>
      
      <div className='container mx-auto py-9 sm:py-10 md:py-12 lg:py-16 xl:py-24 2xl:py-30 '>
        <div className='flex items-center justify-between'>
          <h1 className='ourpowerfullh1'>Our Powerful <br className='hidden sm:block'/> Features</h1>
          <p className='discovertheezma'>Everything you need for informed crash game <br className='hidden md:block'/> analysis in one streamlined extension.</p>
        </div>
        <div className='pt-6 sm:pt-8 md:pt-9 lg:pt-10 xl:pt-12 2xl:pt-15'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.75 sm:gap-3 md:gap-3.25 lg:gap-3.5 xl:gap-3.75 2xl:gap-4'>
              {cards.map((item) => (
                  <div
                    key={item.id}
                    className={`powerfullcard flex flex-col items-start justify-between ${
                      item.id % 2 === 0 ? "flex-col-reverse" : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt="autocard"
                      className="powerfullcardimg"
                    />

                    <div>
                      <h3 className="powerfullautaiwtl">{item.title}</h3>
                      <p className="powerfullautaiwtlp">{item.desc}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Powerful
