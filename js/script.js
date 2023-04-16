var mainSwiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  slidesPerView: 1,
  zoom: {
    maxRatio: 2,
    minRatio: 1,
  },
  mousewheel: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    dynamicBullets: true,
    clickable: true,
    type: 'fraction',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
/*
var fractionSwiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction',
  },
});
*/
/*

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination2',
    dynamicBullets: true,
  },
});

mainSwiper.controller.control = swiper;*/
