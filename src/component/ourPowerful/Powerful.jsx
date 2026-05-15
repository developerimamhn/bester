import React from 'react'
import AutoAnalysisCard from './AutoAnalysisCard'
import icon_4 from "../../assets/img/icon_4.png";
import icon_5 from "../../assets/img/icon_5.png";
import icon_6 from "../../assets/img/icon_6.png";
import icon_7 from "../../assets/img/icon_7.png";
import icon_8 from "../../assets/img/icon_8.png";

const Powerful = () => {
  return (
    <div className='w-full max-w-309 mx-auto min-h-screen flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-between'>
        <h2 className='font-medium text-[48px] leading-[110%] capitalize bg-[linear-gradient(90deg,rgba(255,255,255,0)_-67.03%,#FFFFFF_46.74%,rgba(255,255,255,0)_167.28%)] bg-clip-text text-transparent'>
          Our powerful <br /> features
        </h2>
        <p className='text-[#9796A1] font-normal text-[16px] leading-[150%] tracking-[0%]'>
          Everything you need for informed crash game <br /> analysis in one streamlined extension.
        </p>
      </div>

      <div className='w-full grid grid-cols-3 gap-6 mt-16'>
        <div className='w-full rounded-3xl p-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[100px] border border-white/10'>
          <AutoAnalysisCard />
          <div className='flex flex-col gap-1.25'>
            <p className='font-medium text-[16px] leading-[150%] tracking-[0%] text-white'>
              Auto analysis
            </p>
            <p className='text-[#ADB2B9] font-normal text-[14px] leading-[150%] tracking-[0%]'>
              Real-time pattern recognition and crash probability <br /> analysis running in the background.
            </p>
          </div>
        </div>

        <div className='gap-4 rounded-3xl border border-[#FFFFFF1A] p-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[100px]'>
          <div className='flex flex-col gap-1.25'>
            <p className='text-white font-medium text-[16px] leading-[150%] tracking-[0%]'>
              Live dashboard
            </p>
            <p className='text-[#ADB2B9] font-normal text-[14px] leading-[150%] tracking-[0%]'>
              Comprehensive overlay showing live stats, next <br /> prediction window, and historical metrics.
            </p>
          </div>
          <div className='flex flex-col gap-2.5 pt-6'>
            <div className='relative flex items-center justify-between px-4.25 py-4.25 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[22.6px] '>
              <div className='absolute inset-0 rounded-2xl p-px glass-panel-border' />
              <div className='flex items-center gap-[10.91px]'>
                <img src={icon_4} alt="bg" className='w-[12.54198169708252px] h-[13.186047554016113px]' />
                <div className="w-18 h-2.25 rounded-full bg-white/15" />
              </div>
              <div className='flex items-center gap-[10.91px]'>
                <img src={icon_5} alt="bg" className='w-[10.82767105102539px] h-[13.187002182006836px]' />
                <div className="w-8.75 h-2.25 rounded-full bg-white" />
              </div>
            </div>
            <div className='relative flex items-center justify-between rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[22.6px]'>
              <div className='absolute inset-0 rounded-2xl p-px glass-panel-border' />
              <div className='flex flex-col gap-[17.73px] px-[16.37px] py-[14.38px] '>
                <div className='flex items-center gap-[10.91px]'>
                  <img src={icon_6} alt="bg" className='w-[13.393937110900879px] h-[13.210445404052734px]' />
                  <div className="w-15 h-2.25 rounded-full bg-white/15" />
                </div>
                <div className='flex items-center gap-[10.91px]'>
                  <img src={icon_7} alt="bg" className='w-[13.91094970703125px] h-[11.147164344787598px]' />
                  <div className="w-10.5 h-2.25 rounded-full bg-white/15" />
                </div>
                <div className='flex items-center gap-[10.91px]'>
                  <img src={icon_8} alt="bg" className='w-[12.172128677368164px] h-[13.71909236907959px]' />
                  <div className="w-20.25 h-2.25 rounded-full bg-white/15" />
                </div>
              </div>
              <div className="w-0 h-[102.31px] border-[0.68px] border-[#FFFFFF0F] opacity-100" />
              <div className='flex flex-col gap-[10.91px] px-[16.37px] py-[14.38px] '>
                <div className="w-15 h-2.25 rounded-full bg-white/15" />
                <div className="w-10.5 h-2.25 rounded-full bg-white/15" />
                <div className="w-12.5 h-2.25 rounded-full bg-white/15" />
                <div className="w-7 h-2.25 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className='h-50 bg-white/10 rounded-2xl text-white'>abdullah</div>
        <div className='gap-4 rounded-3xl border border-[#FFFFFF1A] p-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[100px]'>
          <div className='flex flex-col gap-1.25'>
            <p className='text-white font-medium text-[16px] leading-[150%] tracking-[0%]'>
              Smart notifications
            </p>
            <p className='text-[#ADB2B9] font-normal text-[14px] leading-[150%] tracking-[0%]'>
              Instant alerts when high-confidence trigers are <br /> detected with custozable sound options.
            </p>
          </div>
          <div className='flex flex-col gap-2.5 pt-6'>
            <div className='relative flex items-center justify-between px-4.25 py-4.25 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[22.6px] '>
              <div className='absolute inset-0 rounded-2xl p-px glass-panel-border' />
              <div className='flex items-center gap-[10.91px]'>
                <img src={icon_4} alt="bg" className='w-[12.54198169708252px] h-[13.186047554016113px]' />
                <div className="w-18 h-2.25 rounded-full bg-white/15" />
              </div>
              <div className='flex items-center gap-[10.91px]'>
                <img src={icon_5} alt="bg" className='w-[10.82767105102539px] h-[13.187002182006836px]' />
                <div className="w-8.75 h-2.25 rounded-full bg-white" />
              </div>
            </div>
            <div className='relative flex items-center justify-between rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[22.6px]'>
              <div className='absolute inset-0 rounded-2xl p-px glass-panel-border' />
              <div className='flex flex-col gap-[17.73px] px-[16.37px] py-[14.38px] '>
                <div className='flex items-center gap-[10.91px]'>
                  <img src={icon_6} alt="bg" className='w-[13.393937110900879px] h-[13.210445404052734px]' />
                  <div className="w-15 h-2.25 rounded-full bg-white/15" />
                </div>
                <div className='flex items-center gap-[10.91px]'>
                  <img src={icon_7} alt="bg" className='w-[13.91094970703125px] h-[11.147164344787598px]' />
                  <div className="w-10.5 h-2.25 rounded-full bg-white/15" />
                </div>
                <div className='flex items-center gap-[10.91px]'>
                  <img src={icon_8} alt="bg" className='w-[12.172128677368164px] h-[13.71909236907959px]' />
                  <div className="w-20.25 h-2.25 rounded-full bg-white/15" />
                </div>
              </div>
              <div className="w-0 h-[102.31px] border-[0.68px] border-[#FFFFFF0F] opacity-100" />
              <div className='flex flex-col gap-[10.91px] px-[16.37px] py-[14.38px] '>
                <div className="w-15 h-2.25 rounded-full bg-white/15" />
                <div className="w-10.5 h-2.25 rounded-full bg-white/15" />
                <div className="w-12.5 h-2.25 rounded-full bg-white/15" />
                <div className="w-7 h-2.25 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className='h-50 bg-white/10 rounded-2xl'></div>
        <div className='h-50 bg-white/10 rounded-2xl'></div>
      </div>
    </div>

  )
}

export default Powerful
