import Swiper, { Navigation, Pagination } from 'swiper';

// инициализация Swiper:
export const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    // loop: true,
    // centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
});

const swiper2 = new Swiper('.mySwiper2', {
    modules: [Navigation, Pagination],
    // loop: true,
    spaceBetween: 30,
    thumbs: {
        swiper: swiper,
    },
});

// swiper.controller.control = swiper2;
// swiper2.controller.control = swiper;


/* swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1; */

/* export const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
}); */