AOS.init();
let doc = document
let body = doc.body
let button_menu = doc.querySelector('.burger__menu')
let navigation_menu = doc.querySelector('.menu')
let top_line = doc.querySelector('.top__line')
let center_line = doc.querySelector('.center__line')
let bottom_line = doc.querySelector('.bottom__line')
let button__add__card = doc.querySelector('.button__add__card')
let modal_window = doc.querySelector('.wrap__okno')
let cross = doc.querySelector('.button__cross')
cross.addEventListener('click', () => {
    modal_window.classList.toggle('not__active')
    body.style.overflow = 'auto'
})
button__add__card.addEventListener('click', () => {
    modal_window.classList.toggle('not__active')
    body.style.overflow = 'hidden'
})
button__add__card.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
        modal_window.classList.add('not__active')
        body.style.overflow = 'auto'
    }
})
button_menu.addEventListener('click', function () {
    navigation_menu.classList.toggle('active')
    button_menu.classList.toggle('fix')
    top_line.classList.toggle('rotate__top')
    center_line.classList.toggle('delete__center')
    bottom_line.classList.toggle('rotate__bottom')
})
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    grabCursor: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        565: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    },
});
let swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: true,
            translate: ["120%", 0, -500],
        },
    },
});