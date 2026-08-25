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

    .from(".contact-hero h1", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.2")

    .from(".contact-hero p", {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.7")

    .from(".contact-scroll", {
        opacity: 0,
        duration: 0.6
    }, "-=0.3");


gsap.to(".orb-1", {
    x: -150,
    y: 150,

    scrollTrigger: {
        trigger: ".contact-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


gsap.to(".orb-2", {
    x: 120,
    y: -100,

    scrollTrigger: {
        trigger: ".contact-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});


gsap.from(".contact-intro-content", {
    scrollTrigger: {
        trigger: ".contact-intro",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


gsap.from(".form-header", {
    scrollTrigger: {
        trigger: ".contact-form-section",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});


document.querySelectorAll(".form-step").forEach((step) => {

    gsap.from(step, {
        scrollTrigger: {
            trigger: step,
            start: "top 85%"
        },

        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

});


gsap.from(".extra-card", {
    scrollTrigger: {
        trigger: ".contact-extra",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,

    stagger: 0.15,

    duration: 0.8,

    ease: "power3.out"
});


gsap.from(".contact-final-content", {
    scrollTrigger: {
        trigger: ".contact-final",
        start: "top 75%"
    },

    y: 100,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"
});


gsap.to(".contact-final-bg", {
    x: -200,

    scrollTrigger: {
        trigger: ".contact-final",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});


const form = document.getElementById("projectForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const button = document.querySelector(".submit-button");

    button.innerHTML = `
        <span>Solicitação enviada!</span>
        <span class="button-arrow">✓</span>
    `;

    button.style.pointerEvents = "none";

    gsap.fromTo(
        button,
        {
            scale: 0.97
        },
        {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)"
        }
    );

});


document.querySelectorAll(".project-option").forEach((option) => {

    option.addEventListener("mousemove", (event) => {

        const rect = option.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        gsap.to(option, {
            rotateX: (y - centerY) / 40,
            rotateY: (centerX - x) / 40,

            duration: 0.4,

            ease: "power2.out"
        });

    });


    option.addEventListener("mouseleave", () => {

        gsap.to(option, {
            rotateX: 0,
            rotateY: 0,

            duration: 0.5,

            ease: "power3.out"
        });

    });

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