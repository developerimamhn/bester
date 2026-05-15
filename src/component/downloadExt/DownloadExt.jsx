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
        <section className="bg-transparent w-full py-6 flex flex-col items-center gap-[48px]">

            {/* Glow Blob */}
           

            {/* Header */}
            <div className="w-full max-w-5xl mx-auto flex flex-col items-start gap-[12px]">
                <div className="border border-white/10 px-[16px] py-[10px] rounded-[80px] bg-white/5">
                    <span className="uppercase text-white text-[10px] sm:text-[12px] lg:text-[14px] block text-center tracking-widest leading-[150%]">
                        Real-time predictions
                    </span>
                </div>

                <h2 className="gradient-text text-[32px] sm:text-[42px] lg:text-[48px] font-medium capitalize">
                    Download Extension
                </h2>
                <p className="text-[#9796A1] text-[12px] sm:text-[14px] lg:text-[16px]">
                    Choose your browser and get started in under a minute.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {browsers.map((browser) => (
                    <div
                        key={browser.name}
                        className="relative rounded-[20px] border border-[rgba(255,255,255,0.1)] overflow-hidden flex flex-col pb-[86px]"
                        style={{ minHeight: "285px" }}
                    >
                        {/* Top glow line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[230px] bg-gradient-to-r from-transparent via-[#3B42E8] to-transparent z-10" />

                        {/* Card BG image */}
                        <img
                            src={imgCardBg}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />

                        {/* Card Content */}
                        <div className="relative flex flex-col items-center pt-[24px] px-[24px] gap-[16px]">
                            <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center">
                                <img
                                    src={LogoBg}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                                />
                                <img
                                    src={browser.icon}
                                    alt={browser.name}
                                    className="relative z-10 w-[36px] h-[36px] object-contain"
                                />
                            </div>
                            <p className="text-white font-medium text-[16px] text-center">
                                {browser.name}
                            </p>
                            <p className="text-[#9796A1] text-[13px] text-center leading-relaxed">
                                {browser.steps}
                            </p>
                        </div>

                        {/* Download Button */}
                        <div className="absolute bottom-5 left-4 right-4">
                            <button
                                className="relative w-full h-[48px] rounded-xl bg-[#3B42E8] cursor-pointer overflow-hidden
                                    shadow-[0px_4px_5px_rgba(59,66,232,0.15),0px_10px_14px_rgba(59,66,232,0.22),0px_25px_32px_rgba(59,66,232,0.19),0px_42px_107px_rgba(59,66,232,0.34),inset_0px_1px_4px_2px_#DFE0FF,inset_0px_1px_18px_2px_#CFD1FF]
                                    transition-all duration-300 hover:brightness-125 hover:scale-[1.02]"
                            >
                                <div className="absolute inset-0 rounded-xl border border-white/20" />
                                <img
                                    src={imgButtonTexture}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-fill rounded-xl opacity-100"
                                />
                                <span className="relative z-10 flex items-center justify-center font-medium text-[14px] lg:text-[16px] leading-[150%] capitalize text-white">
                                    Download Zip
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Install Guide */}
            <div className="relative w-full max-w-[1160px] mx-auto rounded-t-2xl overflow-hidden px-4 py-10">
                <img
                    src={imgBlueBg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                />
                <div className="relative z-10 flex justify-center">
                    <div className="w-full sm:w-[576px] rounded-2xl border border-white/10 backdrop-blur-[100px] overflow-hidden bg-black/20">
                        <div className="px-4 py-3 border-b border-white/10">
                            <p className="text-white font-medium text-[14px]">Quick Install Guide</p>
                        </div>
                        <div className="p-4 sm:p-8 flex flex-col gap-5">
                            <div>
                                <p className="text-white font-medium text-[14px] mb-1">Chrome / Edge:</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Download zip → extract → extensions → developer mode → load unpacked.
                                </p>
                            </div>
                            <div>
                                <p className="text-white font-medium text-[14px] mb-1">Firefox:</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
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