gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
    }) 
    gsap.fromTo('.header-hero', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header-hero',
            start: 'center',
            end: 900,
            scrub: true
        }
    })
    gsap.fromTo('.achievments', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.achievments',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.cards-slider', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.cards-slider',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.description', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.description',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.services', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.services',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.preferences', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.preferences',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.works', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.works',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.section-form', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.section-form',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
}

