const cardsContainer = document.querySelector('#cardsContainer');
console.log(cardsContainer);
for (let i = 1; i <= 5; i++) {
  cardsContainer.innerHTML += `<div class="swiper-slide">
  <div class="swiper-zoom-container">
    <img src="images/card${i}.jpg" alt="card" class="card" />
  </div>
</div>`;
}

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
