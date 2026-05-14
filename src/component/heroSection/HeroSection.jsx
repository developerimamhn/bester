import React from 'react'
import button_bg_img from "../../assets/img/button&bold_bg_img.png";
import icon from "../../assets/img/icon.png";
import hero_bg_img from "../../assets/img/hero_bg_img.png";
import hero_bg from "../../assets/img/hero_bg.png";
import icon_1 from "../../assets/img/icon_1.png";
import icon_2 from "../../assets/img/icon_2.png";
import icon_3 from "../../assets/img/icon_3.png";

const stats = [
    {
        id: 1,
        icon: icon_1,
        value: "874,520",
        label: "Rounds analyzed live",
    },
    {
        id: 2,
        icon: icon_2,
        value: "4 Modes",
        label: "Signal strategies",
    },
    {
        id: 3,
        icon: icon_3,
        value: "99%",
        label: "Uptime stability",
    },
];

const HeroSection = () => {
    return (
        <div className='relative w-full h-auto flex flex-col items-center'>
            <img src={hero_bg_img} alt="bg" className='absolute inset-0 w-full h-full object-cover rounded-3xl z-0' />
            <img src={hero_bg} alt="bg" className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-1 pointer-events-none' />
            <div className='relative flex flex-col items-center justify-center pt-30'>
                <div className='rounded-[80px] border border-[#FFFFFF14] py-1 px-2 sm:px-3 md:px-4 mb-1 sm:mb-2 bg-[linear-gradient(90.8deg,rgba(255,255,255,0.08)_15.13%,rgba(255,255,255,0)_50.66%,rgba(255,255,255,0.08)_85.52%)]'>
                    <p className='font-normal sm_text leading-[150%] tracking-[0%] text-center uppercase text-[#FFFFFF]'>
                        Approved mathematical Algorithms
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
                    <h1 className='flex items-center justify-center font-semibold heading_text leading-[120%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_-67.03%,#FFFFFF_46.74%,rgba(255,255,255,0)_167.28%)] bg-clip-text text-transparent'>
                        Precision Crash Predictions
                    </h1>
                    <p className='font-normal prg_text leading-[150%] tracking-[0%] text-center text-[#EFEDFDB2]'>
                        Advanced time-range crash window forecasting with 85% accuracy, 6% daily target, and 1 trigger <br /> per 10 minutes. Powered by sophisticated probability modeling.
                    </p>
                    <div className='rounded-2xl border border-[#FFFFFF] p-1 sm:p-1.5 md:p-2 bg-[#FFFFFF66]'>
                        <button className='relative z-10 rounded-xl py-2 pr-2 bg-[#3B42E8] shadow-[0px_3.71px_4.85px_0px_#3B42E827,0px_10.27px_13.4px_0px_#3B42E838,0px_24.72px_32.26px_0px_#3B42E830,0px_42px_107px_0px_#3B42E857,inset_0px_1px_4px_2px_#DFE0FF,inset_0px_1px_18px_2px_#CFD1FF] cursor-pointer'>
                            <div className='absolute inset-0 rounded-xl p-px btn-indigo-border' />
                            <img src={button_bg_img} alt="bg" className='absolute inset-0 w-full h-full object-cover opacity-40' />
                            <span className='flex items-center justify-center'>
                                <span className='relative z-10 flex items-center justify-center px-2.5 sm:px-4 md:px-5 lg:px-6 font-medium prg_text leading-[150%] capitalize text-[#FFFFFF]'>
                                    Download Now
                                </span>
                                <span className='flex items-center justify-center w-4 sm:w-5 md:w-6 lg:w-8.5 h-4 sm:h-5 md:h-6 lg:h-8.5 rounded-[5px] bg-[#E9E9E9] shadow-[inset_0px_1px_1px_0px_#3B42E899,inset_0px_4px_4px_0px_#3B42E840,inset_0px_-1px_1px_0px_#FFFFFF]'>
                                    <img src={icon} alt="bg" className='w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7.25' />
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 lg:gap-16 pt-40 sm:pt-50 md:pt-60 lg:pt-70 xl:pt-80 2xl:pt-91 pb-24 sm:pb-26 md:pb-30 lg:pb-34 xl:pb-38 2xl:pb-42">
                {stats.map((item) => (
                    <div key={item.id} className="flex gap-4">
                        <div className="flex items-center justify-center w-9.75 h-9.75 rounded-full bg-[#FFFFFF0A]">
                            <img src={item.icon} alt="icon" className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white font-normal heading3_text leading-[110%] tracking-[0%] capitalize">
                                {item.value}
                            </h3>
                            <p className="text-[#C4C4C4] font-light prg_text leading-[110%] tracking-[0%] capitalize">
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroSection
