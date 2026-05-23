import './seeaction.css';
import VideoImg from '../../assets/image/videosection.png';
import Arrow from './assets/button-ar.svg';
import imagess from '../../assets/image/Ellipse 1636.png';

export const SeeAction = () => {
    return (
        <div id="demo" className='relative'>
            <img src={imagess} alt="bg" className='w-2/3 absolute top-1/2 -translate-y-1/2 left-0 h-auto z-0' />
            <section className="see-action-section action-section px-4 sm:px-0 relative z-1">
                <div className="action-header">
                    <span className="badge">Real-Time Predictions</span>
                    <h2 className="section-title">See It In Action</h2>
                    <p className="section-subtitle">
                        Watch the bot analyze rounds and generate predictions in real-time.
                    </p>
                </div>
                <div className="video-wrapper container mx-auto">
                    <div className='w-full h-[36%] absolute bottom-0 left-0 pointer-events-none select-none gradentbgvideo z-10'></div>
                    <div className="video-ambient-beam" />

                    <div className="video-container">
                        
                        <img
                            src={VideoImg}
                            className="video-screenshot"
                            alt="Dashboard Preview"
                        />
                        <div className="video-overlay" />

                        <button className="play-button-container cursor-pointer" aria-label="Play Video">
                            <div className="play-pulse-ring ring-1" />
                            <div className="play-pulse-ring ring-2" />
                            <div className="play-button-core">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#0d0f14] translate-x-px">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>

                            <div className="watch-label-wrapper">
                                <img src={Arrow} alt="" />
                                <span className="watch-label">Watch video</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
