gsap.from('.from', {
    x: 400, 
    duration: 3,
})

gsap.to('.to', { 
    x: 400, 
    duration: 3 
})

gsap.fromTo('.fromTo', 
    { opacity: 0 },
    { x: 400, opacity: 1, duration: 3 },
)
