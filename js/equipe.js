gsap.registerPlugin(ScrollTrigger);

const intro = gsap.timeline();

intro
    .from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    .from(".page-tag", {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.3")

    .from(".team-hero h1", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.2")

    .from(".team-hero p", {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.7")

    .from(".hero-location", {
        opacity: 0,
        x: 30,
        duration: 0.8
    }, "-=0.4");


gsap.to(".orb-left", {
    x: 150,
    y: 100,

    scrollTrigger: {
        trigger: ".team-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


gsap.to(".orb-right", {
    x: -120,
    y: -120,

    scrollTrigger: {
        trigger: ".team-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


gsap.from(".team-intro-content", {
    scrollTrigger: {
        trigger: ".team-intro",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"
});


gsap.from(".locations-header", {
    scrollTrigger: {
        trigger: ".locations-section",
        start: "top 75%"
    },

    y: 70,
    opacity: 0,

    duration: 1,

    ease: "power4.out"
});


gsap.from(".location-card", {
    scrollTrigger: {
        trigger: ".locations-grid",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,

    stagger: 0.15,

    duration: 0.9,

    ease: "power3.out"
});


gsap.from(".map-header", {
    scrollTrigger: {
        trigger: ".team-map-section",
        start: "top 75%"
    },

    y: 70,
    opacity: 0,

    duration: 1,

    ease: "power4.out"
});


gsap.from(".connection-map", {
    scrollTrigger: {
        trigger: ".connection-map",
        start: "top 75%"
    },

    scale: 0.96,
    opacity: 0,

    duration: 1.2,

    ease: "power3.out"
});


gsap.from(".map-point", {
    scrollTrigger: {
        trigger: ".connection-map",
        start: "top 65%"
    },

    scale: 0,
    opacity: 0,

    stagger: 0.3,

    duration: 0.8,

    ease: "back.out(2)"
});


gsap.from(".member-card", {
    scrollTrigger: {
        trigger: ".members-grid",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,

    stagger: 0.12,

    duration: 0.8,

    ease: "power3.out"
});


gsap.from(".philosophy-content", {
    scrollTrigger: {
        trigger: ".team-philosophy",
        start: "top 75%"
    },

    x: 80,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"
});


gsap.from(".philosophy-number", {
    scrollTrigger: {
        trigger: ".team-philosophy",
        start: "top 75%"
    },

    opacity: 0,

    duration: 0.7
});


gsap.from(".team-final-content", {
    scrollTrigger: {
        trigger: ".team-final",
        start: "top 75%"
    },

    y: 100,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"
});


gsap.to(".team-final-bg", {
    x: -200,

    scrollTrigger: {
        trigger: ".team-final",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});


const mouseGlow = document.querySelector(".mouse-glow");

if (mouseGlow) {

    document.addEventListener("mousemove", (event) => {

        gsap.to(mouseGlow, {
            x: event.clientX,
            y: event.clientY,

            duration: 0.8,

            ease: "power3.out"
        });

    });

}


document.querySelectorAll(".member-card").forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 900) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        gsap.to(card, {
            rotateX: (y - centerY) / 55,
            rotateY: (centerX - x) / 55,

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