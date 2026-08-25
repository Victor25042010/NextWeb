gsap.registerPlugin(ScrollTrigger);

const intro = gsap.timeline();

intro
    .from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
    })

    .from(".page-tag", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.4")

    .from(".sobre-hero h1", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.3")

    .from(".sobre-hero p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.8")

    .from(".scroll-indicator", {
        opacity: 0,
        duration: 0.8
    }, "-=0.4");


gsap.to(".circle-a", {
    y: 180,
    x: -100,

    scrollTrigger: {
        trigger: ".sobre-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


gsap.to(".circle-b", {
    y: -100,
    x: 100,

    scrollTrigger: {
        trigger: ".sobre-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


gsap.from(".work .section-label", {
    scrollTrigger: {
        trigger: ".work",
        start: "top 80%"
    },

    y: 30,
    opacity: 0,
    duration: 0.8
});


gsap.from(".work-intro", {
    scrollTrigger: {
        trigger: ".work-intro",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".process-card", {
    scrollTrigger: {
        trigger: ".process-grid",
        start: "top 80%"
    },

    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});


gsap.from(".expect-content", {
    scrollTrigger: {
        trigger: ".expect",
        start: "top 75%"
    },

    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".expect-card", {
    scrollTrigger: {
        trigger: ".expect-grid",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out"
});


gsap.to(".expect-bg-text", {
    x: -150,

    scrollTrigger: {
        trigger: ".expect",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});


gsap.from(".transparency-content", {
    scrollTrigger: {
        trigger: ".transparency",
        start: "top 75%"
    },

    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".transparency-quote", {
    scrollTrigger: {
        trigger: ".transparency-quote",
        start: "top 85%"
    },

    x: -150,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".pricing-content", {
    scrollTrigger: {
        trigger: ".pricing",
        start: "top 75%"
    },

    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".price-point", {
    scrollTrigger: {
        trigger: ".pricing-points",
        start: "top 80%"
    },

    y: 100,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out"
});


gsap.to(".pricing-glow", {
    x: -200,
    y: 150,

    scrollTrigger: {
        trigger: ".pricing",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});


gsap.from(".young-content", {
    scrollTrigger: {
        trigger: ".young",
        start: "top 75%"
    },

    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.to(".young-background-text", {
    x: 250,

    scrollTrigger: {
        trigger: ".young",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});


gsap.from(".sobre-cta-content", {
    scrollTrigger: {
        trigger: ".sobre-cta",
        start: "top 70%"
    },

    y: 100,
    opacity: 0,
    duration: 1.3,
    ease: "power4.out"
});


gsap.to(".cta-line-1", {
    rotation: 360,
    duration: 30,
    repeat: -1,
    ease: "none"
});


gsap.to(".cta-line-2", {
    rotation: -360,
    duration: 50,
    repeat: -1,
    ease: "none"
});


const mouseGlow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (event) => {

    gsap.to(mouseGlow, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.8,
        ease: "power3.out"
    });

});


document.querySelectorAll(
    ".process-card, .expect-card, .price-point"
).forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.4,
            ease: "power2.out"
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "power3.out"
        });

    });

});