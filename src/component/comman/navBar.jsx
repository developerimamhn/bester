import { useEffect, useRef, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../../assets/image/Logo.svg';
import button_bg_img from "../../assets/image/button&bold_bg_img.png";


const navLinks = [
  { name: "Home", id: "Home" },
  { name: "About", id: "About" },
  { name: "Services", id: "Services" },
  { name: "Tokenomics", id: "Tokenomics" },
  { name: "Contact", id: "Contact" },
];


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
      setToggle(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 50);
      if (currentScrollPos < 50) {
        setIsVisible(true);
      } else if (currentScrollPos > prevScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [prevScrollPos]);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`header w-full mt-3.25 sm:mt-3.5 md:mt-3.75 lg:mt-4 xl:mt-5 2xl:mt-6 rounded-2xl container mx-auto left-1/2 -translate-x-1/2 ${scrolled ? "scrolled" : ""} ${
        isVisible
          ? "translate-y-0 transition-transform duration-300"
          : "translate-y-[-130%] transition-transform duration-300"
      }`}
    >
      <header className="p-2.75 sm:p-3 md:p-3.25 lg:p-3.5 xl:p-3.75 2xl:p-4 flex justify-between items-center relative  ">

        <div className="linersext absolute bottom-0 left-0 w-full h-0.5 z-10" />
        {/* Logo */}
        <a
          onClick={handleScrollToTop}
          href="/"
          className="cursor-pointer flex items-center justify-start"
        >
          <img src={logo} alt="Logo" className="h-8 xl:h-9 2xl:h-11 w-auto" />
        </a>

        {/* Mobile hamburger */}
        <div className="sm:hidden relative -top-2.75 -left-6">
          <div
            className={`transition-transform duration-300 ease-in-out ${
              toggle ? "opacity-100" : "opacity-0 -translate-x-2"
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <VscChromeClose className="text-white text-[24px] absolute" />
          </div>
          <div
            ref={menuButtonRef}
            className={`transition-transform duration-300 ease-in-out ${
              toggle ? "opacity-0 translate-x-2" : "opacity-100"
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <LiaBarsSolid className="text-white text-[24px] absolute" />
          </div>
        </div>

        {/* Nav links */}
        <nav
          ref={menuRef}
          className={`absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[998] sm:opacity-100 flex justify-start sm:justify-start items-start sm:items-center gap-3.5 sm:gap-3.75 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7.5 sm:bg-transparent bg-[#15161B] sm:flex-row flex-col p-5 sm:p-0 sm:w-fit w-full h-screen sm:h-full pl-6 sm:pl-8 md:pl-9 lg:pl-10 xl:pl-12 2xl:pl-[60px] ${
            toggle ? "left-0 opacity-100" : "left-[120%] opacity-10"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="Link-manu-bar group relative cursor-pointer flex flex-col items-center justify-center  transition-all duration-300"
            >
              <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                {link.name}
              </span>
              <span className="opacity-0">{link.name}</span>
              <span className="absolute -bottom-5 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-white">
                {link.name}
              </span>
            </a>
          ))}

          {/* Mobile language selector */}
          <ul className="sm:hidden flex  gap-4 shadow-[0px_3.71px_4.85px_0px_rgba(59,66,232,0.15),0px_10.27px_13.4px_0px_rgba(59,66,232,0.22),0px_24.72px_32.26px_0px_rgba(59,66,232,0.19),0px_42px_107px_0px_rgba(59,66,232,0.34),inset_0px_1px_4px_2px_rgba(223,224,255,1),inset_0px_1px_18px_2px_rgba(207,209,255,1)] rounded-3xl">
          <button className="growingstabtn group  relative">
            <div className="relative h-full flex items-center justify-center gap-3.25 sm:gap-3.5 md:gap-3.75 lg:gap-4 xl:gap-5 2xl:gap-6 ">
              <div className="relative  flex items-center justify-center z-[2]">
                <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                  Get Extension
                </span>
                <span className="opacity-0">Get Extension</span>
                <span className="absolute -bottom-5 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  Get Extension
                </span>
              </div>
              <svg className="w-4 sm:w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-4 sm:h-4 md:h-5 lg:h-6 xl:h-7 2xl:h-8 shrink-0" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_iii_2118_488)">
                  <rect width="34" height="34" rx="5" fill="#E9E9E9"/>
                  <mask id="mask0_2118_488" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="9" y="9" width="16" height="17">
                    <rect x="9" y="9.5" width="16" height="16" fill="#F95501"/>
                  </mask>
                  <g mask="url(#mask0_2118_488)">
                    <path d="M12 17.019H22M16.7552 22.5L22 17.019L16.7552 11.5" stroke="#3B42E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_iii_2118_488" x="0" y="-1" width="34" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.258824 0 0 0 0 0.909804 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2118_488"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.258824 0 0 0 0 0.909804 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow_2118_488" result="effect2_innerShadow_2118_488"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow_2118_488" result="effect3_innerShadow_2118_488"/>
                  </filter>
                </defs>
              </svg>
               <img src={button_bg_img} alt="bg" className='absolute inset-0 w-full h-full object-cover opacity-40 select-none ' />
            </div>
          </button>
        </ul>
        </nav>

        {/* Desktop */}
        <ul className="sm:flex hidden gap-4 shadow-[0px_3.71px_4.85px_0px_rgba(59,66,232,0.15),0px_10.27px_13.4px_0px_rgba(59,66,232,0.22),0px_24.72px_32.26px_0px_rgba(59,66,232,0.19),0px_42px_107px_0px_rgba(59,66,232,0.34),inset_0px_1px_4px_2px_rgba(223,224,255,1),inset_0px_1px_18px_2px_rgba(207,209,255,1)] rounded-3xl">
          <button className="growingstabtn group  relative">
            <div className="relative h-full flex items-center justify-center gap-3.25 sm:gap-3.5 md:gap-3.75 lg:gap-4 xl:gap-5 2xl:gap-6 ">
              <div className="relative  flex items-center justify-center [z-2]">
                <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                  Get Extension
                </span>
                <span className="opacity-0">Get Extension</span>
                <span className="absolute -bottom-5 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  Get Extension
                </span>
              </div>
              <svg className="w-4 sm:w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-4 sm:h-4 md:h-5 lg:h-6 xl:h-7 2xl:h-8 shrink-0" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_iii_2118_488)">
                  <rect width="34" height="34" rx="5" fill="#E9E9E9"/>
                  <mask id="mask0_2118_488" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="9" y="9" width="16" height="17">
                    <rect x="9" y="9.5" width="16" height="16" fill="#F95501"/>
                  </mask>
                  <g mask="url(#mask0_2118_488)">
                    <path d="M12 17.019H22M16.7552 22.5L22 17.019L16.7552 11.5" stroke="#3B42E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_iii_2118_488" x="0" y="-1" width="34" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.258824 0 0 0 0 0.909804 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2118_488"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.258824 0 0 0 0 0.909804 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow_2118_488" result="effect2_innerShadow_2118_488"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow_2118_488" result="effect3_innerShadow_2118_488"/>
                  </filter>
                </defs>
              </svg>
               <img src={button_bg_img} alt="bg" className='absolute inset-0 w-full h-full object-cover opacity-40 select-none ' />
            </div>
          </button>
        </ul>
      </header>

      <div className="navbarunderborder" />
    </div>
  );
};

export default NavBar;