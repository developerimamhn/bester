import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapAnimations = () => {
  useEffect(() => {
    let hoverHandlers = [];
    const ctx = gsap.context(() => {
      gsap.from('.header-nav', {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.nav-link', {
        y: 10,
        opacity: 0,
        stagger: 0.08,
        duration: 0.55,
        ease: 'power3.out',
      });

      const heroTl = gsap.timeline();
      heroTl.from('.hero-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from('.hero-copy', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.7')
      .from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
      }, '-=0.7')
      .from('.hero-stat-card', {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');

      gsap.from('.powerful-section .features-heading', {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.powerful-section',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.powerful-section .features-copy', {
        y: 30,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.powerful-section',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.powerful-section .powerfullcard', {
        y: 40,
        opacity: 0,
        stagger: 0.14,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.powerful-section',
          start: 'top 80%',
          once: true,
        },
      });

      const advancedCrashTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.advanced-crash-section',
          start: 'top 85%',
          once: true,
        },
      });

      advancedCrashTl
        .from('.advanced-crash-section .section-title', {
          y: 30,
          opacity: 0,
          duration: 0.95,
          ease: 'power2.out',
        })
        .from('.advanced-crash-section .section-subtitle', {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
        }, '-=0.7')
        .from('.advanced-crash-section .feature-list', {
          x: -40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        }, '-=0.5')
        .from('.advanced-crash-section .visual-container', {
          x: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        }, '-=0.95')
        .from('.advanced-crash-section .feature-item', {
          y: 24,
          opacity: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power2.out',
        }, '-=0.85')
        .from('.advanced-crash-section .feature-grid-card', {
          y: 32,
          opacity: 0,
          stagger: 0.14,
          duration: 0.9,
          ease: 'power2.out',
        }, '-=0.75');

      gsap.from('.see-action-section', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.see-action-section',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.video-container', {
        scale: 0.98,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.see-action-section',
          start: 'top 85%',
        },
      });

      gsap.from('.download-section .download-card', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.download-section',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.download-copy', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.download-section',
          start: 'top 90%',
          once: true,
        },
      });

      

      gsap.from('.footer', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 95%',
          once: true,
        },
      });

      gsap.to('.hero-bg', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      const hoverTargets = gsap.utils.toArray('.powerfullcard, .download-card, .play-button-container, .hero-cta');
      hoverHandlers = hoverTargets.map((item) => {
        const onEnter = () => gsap.to(item, { scale: 1.03, duration: 0.25, ease: 'power2.out' });
        const onLeave = () => gsap.to(item, { scale: 1, duration: 0.35, ease: 'power2.out' });

        item.addEventListener('mouseenter', onEnter);
        item.addEventListener('mouseleave', onLeave);
        return { item, onEnter, onLeave };
      });
    });

    return () => {
      hoverHandlers.forEach(({ item, onEnter, onLeave }) => {
        item.removeEventListener('mouseenter', onEnter);
        item.removeEventListener('mouseleave', onLeave);
      });
      ctx.revert();
    };
  }, []);

  return null;
};

export default GsapAnimations;
