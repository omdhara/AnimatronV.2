const tl = gsap.timeline({defaults: {duration: 1.25}, ease: "power1.out"})

tl.fromTo('.cookie-cotainer', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5})
tl.fromTo('.cookie', {opacity: 0, y:+50, rotation: '-45deg'}, {opacity: 1, y:0, rotation: '0deg',}, '<50%')
tl.fromTo('.text', {y:+50, opacity: 0}, {y:0, opacity: 1}, '<')

tl.fromTo('.cookie', {y:-0, rotation: '0deg'}, {y:-20,rotation: '-20deg', yoyo: true, repeat: -1})

const button = document.querySelector('button');

button.addEventListener('click', () => {
    gsap.to('.cookie-cotainer', {opacity: 0, y:100, duration: 0.75, ease: 'power1.out'})
})