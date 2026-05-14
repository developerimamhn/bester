import { useEffect, useRef, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";


const navLinks = [
  { name: "Home", id: "Home" },
  { name: "About", id: "About" },
  { name: "Services", id: "Services" },
  { name: "Tokenomics", id: "Tokenomics" },
  { name: "Contact", id: "Contact" },
];

const options = [
  { label: "English", image: "/flag-en.svg" },
  { label: "Spanish", image: "/flag-es.svg" },
  { label: "French", image: "/flag-fr.svg" },
  { label: "German", image: "/flag-de.svg" },
];


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`header w-full ${scrolled ? "scrolled" : ""} ${
        isVisible
          ? "translate-y-0 transition-transform duration-300"
          : "-translate-y-full transition-transform duration-300"
      }`}
    >
      <header className="px-6 md:px-7.5 lg:px-7.5 xl:px-10 2xl:px-[50px] flex justify-between items-center py-[14px] sm:py-4 lg:py-5 relative">

        <div className="linersext absolute bottom-0 left-0 w-full h-[2px] z-10" />

        {/* Logo */}
        <a
          onClick={handleScrollToTop}
          href="/"
          className="cursor-pointer flex items-center justify-start"
        >
          
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
          className={`absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[998] sm:opacity-100 flex justify-start sm:justify-start items-start sm:items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-9 2xl:gap-10 sm:bg-transparent bg-[#15161B] sm:flex-row flex-col p-5 sm:p-0 sm:w-fit w-full h-screen sm:h-full pl-6 sm:pl-8 md:pl-9 lg:pl-10 xl:pl-12 2xl:pl-[60px] ${
            toggle ? "left-0 opacity-100" : "left-[120%] opacity-10"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="Link-manu-bar group relative cursor-pointer flex flex-col items-center justify-center overflow-hidden transition-all duration-300"
            >
              <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                {link.name}
              </span>
              <span className="opacity-0">{link.name}</span>
              <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-white">
                {link.name}
              </span>
            </a>
          ))}

          {/* Mobile language selector */}
          <ul className="sm:hidden flex flex-col ml-auto gap-4">
            <div className="relative inline-block">
              <div
                className="selectboxseZ text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center px-[13px] sm:px-[14px] md:px-[15px] lg:px-4 xl:px-5 2xl:px-6 py-[11px] sm:py-3 md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-4 gap-[5px] lg:gap-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={selected.image}
                  alt={selected.label}
                  width={10}
                  height={10}
                  className="rounded-full object-cover"
                />
                <span className="text-sm font-medium">{selected.label}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.2802 5.96667L8.93355 10.3133C8.42021 10.8267 7.58022 10.8267 7.06688 10.3133L2.72021 5.96667"
                    stroke="white"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isOpen && (
                <div className="absolute top-full mt-1 left-0 w-32 bg-[#ffffff0a] rounded border border-[#ffffff1f] z-50">
                  {options.map((option, idx) => (
                    <div
                      key={idx}
                      className="p-2 cursor-pointer flex items-center gap-2 hover:bg-white/5 transition-colors"
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                    >
                      <img
                        src={option.image}
                        alt={option.label}
                        width={16}
                        height={16}
                        className="rounded-full"
                      />
                      <span className="text-white text-sm">{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <ul className="sm:flex hidden gap-4">
          <button className="growingstabtn group overflow-hidden relative">
            <div className="relative overflow-hidden h-full flex items-center justify-center">
              <span className="absolute top-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-700 ease-in-out">
                Get Started
              </span>
              <span className="opacity-0">Get Started</span>
              <span className="absolute bottom-[-20px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                Get Started
              </span>
            </div>
          </button>
        </ul>
      </header>

      <div className="navbarunderborder" />
    </div>
  );
};

export default NavBar;