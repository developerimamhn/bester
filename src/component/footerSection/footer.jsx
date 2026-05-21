import footer_bg from "../../assets/image/footer_bg(1).png";
import copy from "../../assets/image/copy.png";
import icon from "../../assets/image/footer_icon.png";
import icon_1 from "../../assets/image/footer_icon_1.png";
import icon_2 from "../../assets/image/Link.png";
import facebook from "../../assets/image/facebook.png";
import twitter from "../../assets/image/twitter.png";
import instagram from "../../assets/image/instagram.png";
import telegram from "../../assets/image/telegram.png";
// import imagess from '../../assets/image/Ellipse 1632.png';

const wallets = [
    {
        icon: icon,
        name: "USDT (TRC20)",
        network: "Tron Network",
    },
    {
        icon: icon_1,
        name: "Bitcoin",
        network: "BTC Network",
    },
    {
        icon: icon_1,
        name: "EVM Wallets",
        network: "ETH / BSC / Polygon",
    },
];

const footerLinks = [
    {
        links: [
            { name: "Features", id: "features" },
            { name: "Engine", id: "engine" },
            { name: "Demo", id: "demo" },
            { name: "Download", id: "download" },
            { name: "FAQ", id: "FAQ" },
        ],
    },
    {
        links: [
            { name: "Terms of Services", id: "terms" },
            { name: "Privacy Policy", id: "privacy" },
        ],
    },
];

const socialLinks = [
    { icon: facebook, hasWrapper: false, id: "facebook" },
    { icon: twitter, hasWrapper: false, id: "twitter" },
    { icon: instagram, hasWrapper: true, id: "instagram" },
    { icon: telegram, hasWrapper: false, id: "telegram" },
];

const footer = () => {

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className='relative bg-[#000002]'>
            <img src={footer_bg} alt=" bg" className='absolute inset-0 w-full h-full object-cover -z-px' />
            <div className='relative container mx-auto px-4 w-full h-auto z-10'>
                <div className='flex items-center justify-center badge-wrapper'>
                    <div className='badge-pill bg-[linear-gradient(90.8deg,rgba(255,255,255,0.08)_15.13%,rgba(255,255,255,0)_50.66%,rgba(255,255,255,0.08)_85.52%)]'>
                        <p className='badge-text'>
                            Support & Development
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center section-content'>
                    <h1 className='flex items-center justify-center font-semibold section-heading leading-[120%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_-67.03%,#FFFFFF_46.74%,rgba(255,255,255,0)_167.28%)] bg-clip-text text-transparent'>
                        Donate & Support
                    </h1>
                    <p className='section-subtext'>
                        If you find this tool valuable, consider supporting continued development.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-3.75 xl:gap-4 2xl:gap-4.75 pt-6 sm:pt-8 md:pt-9 lg:pt-10 xl:pt-12 2xl:pt-16'>
                    {wallets.map((wallet, index) => (
                        <div key={index} className='flex flex-col justify-between wallet-card'>
                            <div className='flex items-center wallet-card-gap'>
                                <div className='wallet-icon-wrapper'>
                                    <img src={wallet.icon} alt="icon" className='wallet-icon' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='wallet-name'>
                                        {wallet.name}
                                    </p>
                                    <p className='wallet-network'>
                                        {wallet.network}
                                    </p>
                                </div>
                            </div>
                            <div className='wallet-address-box'>
                                <p className='wallet-address-text'>
                                    0x0e6d5be3b58347dfe04c688df600<br />b4b7259b43e72d0a08a08cae0d24b<br />c2ab963
                                </p>
                                <div className='flex items-center justify-center wallet-copy-btn'>
                                    <img src={copy} alt="icon" className='wallet-copy-icon cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col md:flex-row justify-between footer-top'>
                    <div className='flex flex-col footer-brand'>
                        <a onClick={handleScrollToTop} href="/" >
                            <img src={icon_2} alt="icon" className='footer-logo' />
                        </a>
                        <p className='footer-desc'>
                            Advanced crash prediction engine powered{" "}
                            <br className='hidden md:block' />
                            by sophisticated mathematical algorithms.{" "}
                            <br className='hidden md:block' />
                            Analyze smarter, not harder.
                        </p>
                    </div>
                    <div className='flex gap-9 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-30'>
                        {footerLinks.map((column, colIndex) => (
                            <div key={colIndex} className='flex flex-col footer-links-column'>
                                {column.links.map((link, linkIndex) => (
                                    <a key={linkIndex} href={`#${link.id}`} className='footer-link'>
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='z-10 flex flex-col md:flex-row justify-between footer-bottom '>
                    <p className='footer-copyright'>
                        © 2026 BC Crash Bot. For educational purposes only. Gambling involves risk.
                    </p>
                    <div className='flex'>
                        {socialLinks.map((social, index) =>
                            social.hasWrapper ? (
                                <div key={index} className='flex items-center justify-center footer-social-wrapper'>
                                    <a href={`#${social.id}`} >
                                        <img src={social.icon} alt="icon" className='footer-social-icon-sm' />
                                    </a>
                                </div>
                            ) : (
                                <a key={index} href={`#${social.id}`}>
                                    <img key={index} src={social.icon} alt="icon" className='footer-social-wrapper' />
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer

