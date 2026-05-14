import Chrome from "../../assets/image/Chrome.png";
import Edge from "../../assets/image/Edge.png";
import Firefox from "../../assets/image/Firefox.png";
import imgCardBg from "../../assets/image/Card.png";
import LogoBg from "../../assets/image/Browser_Circle.png";
import imgBlueBg from "../../assets/image/Dash_Image.png";
import imgButtonTexture from "../../assets/image/button_bg_img.png";


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
        <section className="bg-[#000002] w-full  py-6 flex flex-col items-center gap-[48px]">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-start gap-[12px]"><div
                className="fill_input border border-white/8 px-[16px] py-[3px] rounded-[80px]" >
                <span
                    className="all_font_normal uppercase text-white text-[10px] sm:text-[12px] lg:text-[14px] tracking-normal leading-[150%]">
                    Real-time predictions
                </span>
            </div>

                <h2 className="gradient-text text-[32px] sm:text-[42px] lg:text-[48px] font-medium capitalize">
                    Download Extension
                </h2>
                <p className="text_normal_poppins text-[#9796A1] text-[12px] sm:text-[14] lg:text-[16px]">
                    Choose your browser and get started in under a minute.
                </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
                {browsers.map((browser) => (
                    <div
                        key={browser.name}
                        className="relative w-full sm:w-[376px] h-[285px] rounded-[20px] border border-[rgba(255,255,255,0.1)] overflow-hidden">
                        <div className="blue-glow absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[230px]" />
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
                            <p
                                className="apk-title text-white text-center">
                                {browser.name}
                            </p>
                            <p className="steps-text text-[#9796A1] text-center">
                                {browser.steps}
                            </p>
                        </div>
                        <button
                            className="absolute bottom-6  sm:left-[24px] w-full sm:w-[328px] h-[38px] sm:h-[50px] rounded-xl bg-[#3B42E8] cursor-pointer shadow-[0px_3.71px_4.85px_0px_#3B42E827,0px_10.27px_13.4px_0px_#3B42E838,0px_24.72px_32.26px_0px_#3B42E830,0px_42px_107px_0px_#3B42E857,inset_0px_1px_4px_2px_#DFE0FF,inset_0px_1px_18px_2px_#CFD1FF] transition-all duration-300 hover:brightness-125 hover:scale-[1.02]"
                        >
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
                ))}
            </div>
            <div className="relative w-full max-w-[1160px] mx-auto rounded-t-2xl overflow-hidden px-4 py-10">

                <img
                    src={imgBlueBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
                />
                <div className="relative z-10 flex justify-center">

                    <div className="w-full sm:w-[576px] rounded-2xl border border-white/10 backdrop-blur-[100px] overflow-hidden bg-black/10">

                        <div className="px-4 py-3 border-b border-white/10">
                            <p className="text-white">Quick Install Guide</p>
                        </div>

                        <div className="p-4 sm:p-8 flex flex-col gap-5">

                            <div>
                                <p className="text-white font-medium">Chrome / Edge:</p>
                                <p className="text-gray-300 text-sm">
                                    Download zip → extract → extensions → developer mode → load unpacked.
                                </p>
                            </div>

                            <div>
                                <p className="text-white font-medium">Firefox:</p>
                                <p className="text-gray-300 text-sm">
                                    about:debugging → This Firefox → Load Temporary Add-on.
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



