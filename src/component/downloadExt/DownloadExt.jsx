import Chrome from "../../assets/image/chrome.png";
import Edge from "../../assets/image/Edge.png";
import Firefox from "../../assets/image/Firefox.png";
import imgCardBg from "../../assets/image/Card.png";
import LogoBg from "../../assets/image/Browser_Circle.png";
import imgBlueBg from "../../assets/image/Dash_Image.png";
import imgButtonTexture from "../../assets/image/button_bg_img.png";
import bgone from '../../assets/image/Ellipse 1635.png';
import linefore from '../../assets//image/Ellipse 1635ssss.png';


const browsers = [
    {
        icon: Chrome,
        name: "Chrome",
        steps: "Chrome → Extensions → Enable Developer Mode → Load unpacked",
    },
    {
        icon: Edge,
        name: "Edge",
        steps: "Edge → Extensions → Enable Developer Mode → Load unpacked",

    },
    {
        icon: Firefox,
        name: "Firefox",
        steps: "About:debugging → This Firefox → Load Temporary Add-on",
    },
];

const DownloadExtension = () => {
    return (
        <section id="download" className="download-section w-full  py-6 flex flex-col items-center gap-12 relative">
            <img src={linefore} alt="" className="w-full absolute top-1/2 -translate-y-1/2 right-0 h-auto z-0" />
            <img src={bgone} alt="" className="absolute top-0 right-0 w-1/2 h-full select-none pointer-events-none z-10" />
            <div className="download-copy w-full container mx-auto flex flex-col items-start gap-3">
                <div className="z-10 fill_input border border-white/8 px-4 py-0.75 rounded-[80px]" >
                    <span
                        className="all_font_normal uppercase text-white text-[10px] sm:text-[12px] lg:text-[14px] tracking-normal leading-[150%]">
                        Real-time predictions
                    </span>
                </div>

                <h2 className="z-10 gradient-text text-[32px] sm:text-[42px] lg:text-[48px] font-medium capitalize">
                    Download Extension
                </h2>
                <p className="z-10 text_normal_poppins text-[#9796A1] text-[12px] sm:text-[14px] lg:text-[16px]">
                    Choose your browser and get started in under a minute.
                </p>
            </div>
            <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-2.75 sm:gap-3 md:gap-3.25 lg:gap-3.5 xl:gap-3.75 2xl:gap-4 container mx-auto">
                {browsers.map((browser) => (
                    <div
                        key={browser.name}
                        className="download-card relative w-full rounded-[20px] border border-[rgba(255,255,255,0.1)] overflow-hidden group">

                        <div className='bg-[linear-gradient(90deg,rgba(59,66,232,0)_0%,#3B42E8_50%,rgba(59,66,232,0)_100%)] absolute top-0 left-1/2 -translate-x-1/2 z-10 w-1/3 h-px'></div>
                        <img
                            src={imgCardBg}
                            alt=""
                            className="absolute w-full h-auto object-cover pointer-events-none"
                        />

                        <div className="relative flex flex-col items-center pt-[24px] px-[38px] gap-[16px]">
                            <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center">
                                <img
                                    src={LogoBg}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover rounded-full opacity-100"
                                />
                                <img
                                    src={browser.icon}
                                    alt={browser.name}
                                    className="relative z-10 w-[36px] h-[36px] object-contain"
                                />
                            </div>
                            <p className="apk-title text-white text-center">
                                {browser.name}
                            </p>
                            <p className="steps-text text-[#9796A1] text-center">
                                {browser.steps}
                            </p>
                        </div>
                        <div className='px-6 pb-6 pt-3.5 sm:pt-3.75 md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-8'>
                            <button className="relative w-full py-[10px] lg:py-[13px] rounded-xl bg-[#3B42E8] cursor-pointer shadow-[0px_3.71px_4.85px_0px_#3B42E827,0px_10.27px_13.4px_0px_#3B42E838,0px_24.72px_32.26px_0px_#3B42E830,0px_42px_107px_0px_#3B42E857,inset_0px_1px_4px_2px_#DFE0FF,inset_0px_1px_18px_2px_#CFD1FF]  duration-400 group-hover:brightness-110 group-hover:scale-[1.02]">
                                <div className="absolute inset-0 rounded-xl btn-indigo-border" />
                                <img
                                    src={imgButtonTexture}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-fill opacity-100 rounded-xl"
                                />
                                <span className="relative z-10 flex items-center justify-center font-medium text-[14px] sm:text-[14px] lg:text-[16px] leading-[150%] capitalize text-white">
                                    Download Zip
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative w-full rounded-t-2xl px-4 py-10 container mx-auto">
                <img
                    src={imgBlueBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
                />
                <div className="relative z-10 flex justify-center">
                    <div className="w-full sm:w-[576px] rounded-2xl border border-white/10 backdrop-blur-[100px] overflow-hidden ">
                        <div className="px-4 py-3 border-b border-white/10 bg-white/10 flex items-center justify-between">
                            <p className="text-white">Quick Install Guide</p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8334 9.16683L17.6667 2.3335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3334 5.6665V1.6665H14.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.16662 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V10.8332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="p-4 sm:p-8 flex flex-col gap-5">
                            <div>
                                <p className="text-white font-medium">Chrome / Edge:</p>
                                <p className="text-[#9796A1] text-sm">
                                    Download the zip, extract it, open Extensions page <b className='font-medium text-white'>(chrome://extensions or edge://extensions)</b>, enable "Developer mode", click "Load unpacked", and select the extracted folder.
                                </p>
                            </div>
                            <div>
                                <p className="text-white font-medium">Firefox:</p>
                                <p className="text-[#9796A1] text-sm">
                                    Go to about:debugging, click <b className='font-medium text-white'>"This Firefox"</b>, then <b className='font-medium text-white'>"Load Temporary Add-on"</b> and select any file from the extracted folder.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadExtension;



