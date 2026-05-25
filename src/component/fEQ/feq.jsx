import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagess from '../../assets/image/Ellipse 1636.png';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: "What types of loans do you offer ?",
        answer: "We offer personal loans, business loans, home loans, and auto loans. Check our loan options to find the best fit for your needs.",
    },
    {
        question: "How do I apply for a loan ?",
        answer: "You can apply online through our website or visit any of our branches. The process takes less than 10 minutes.",
    },
    {
        question: "What is the minimum and maximum loan amount ?",
        answer: "Our loans range from $1,000 to $500,000 depending on the loan type and your eligibility.",
    },
    {
        question: "How long does it take to get approved ?",
        answer: "Most applications are approved within 24-48 hours after submitting all required documents.",
    },
    {
        question: "Who is eligible to apply ?",
        answer: "Anyone aged 18 or above with a valid ID and stable income source can apply for a loan.",
    },
    {
        question: "What documents do I need ?",
        answer: "You will need a valid government-issued ID, proof of income, and proof of address.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.from(headingRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            // FAQ items stagger animation
            itemsRef.current.forEach((item, i) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 88%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="FAQ" ref={sectionRef} className="w-full  py-16 px-4 sm:px-6 relative">
            <img src={imagess} alt="bg" className='w-4/5 absolute top-1/2 -translate-y-1/2 left-0 h-auto z-[2]' />
            <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-10 lg:gap-[48px] relative z-10">
                <div className="shrink-0 pt-0 lg:pt-[8px] text-center lg:text-left">
                    <h2 ref={headingRef} className="hero_gradient_title text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        Frequently Asked<br /> Questions
                    </h2>
                </div>
                <div className="flex-1 flex flex-col gap-3 sm:gap-[12px]">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            ref={el => itemsRef.current[index] = el}
                            className={`rounded-2xl sm:rounded-[32px] duraction-300
                                        overflow-hidden
                                        cursor-pointer
                                        transition-all
                                        ${openIndex === index
                                    ? "accordion_card_active"
                                    : "accordion_card"}
                              `}
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <div className="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5">
                                <p className="faq_question text-sm sm:text-base lg:text-lg">
                                    {faq.question}
                                </p>

                                <span
                                    className="shrink-0 ml-4 transition-transform duration-300"
                                    style={{
                                        transform:
                                            openIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </div>
                            {openIndex === index && (
                                <div className="px-4 sm:px-5 pb-5 sm:pb-6">
                                    <p className="faq_answer text-sm sm:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default FAQ;