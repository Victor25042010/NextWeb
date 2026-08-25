gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".navbar", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})

.from(".hero-tag", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.5")

.from(".hero h1", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.5")

.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.8")

.from(".hero-buttons", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.6")

.from(".hero-side", {
    opacity: 0,
    duration: 1
}, "-=0.5");


gsap.to(".circle-1", {
    y: 100,
    x: -80,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".circle-2", {
    y: -100,
    x: 80,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


gsap.from(".about .section-label", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});


gsap.from(".about h2", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});


gsap.from(".about-text", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 65%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".statement h2", {
    scrollTrigger: {
        trigger: ".statement",
        start: "top 75%"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".team-header", {
    scrollTrigger: {
        trigger: ".team",
        start: "top 75%"
    },
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


gsap.from(".team-card", {
    scrollTrigger: {
        trigger: ".team-grid",
        start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out"
});


gsap.from(".cta p", {
    scrollTrigger: {
        trigger: ".cta",
        start: "top 75%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7
});


gsap.from(".cta h2", {
    scrollTrigger: {
        trigger: ".cta",
        start: "top 70%"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".cta-button", {
    scrollTrigger: {
        trigger: ".cta",
        start: "top 60%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});


const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power3.out"
    });

});