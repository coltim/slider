const cardsContainer = document.querySelector('#cardsContainer');
const langButtonHU = document.getElementById('langButtonHU');
const langButtonEN = document.getElementById('langButtonEN');
console.log(cardsContainer);

for (let i = 0; i <= 12; i++) {
  fetch('images/menu0' + i + '.jpg', { method: 'HEAD' })
    .then((response) => {
      if (response.ok) {
        console.log('File exists ' + i);
        cardsContainer.innerHTML += `<div class="swiper-slide">
        <div class="swiper-zoom-container">
        <img src="images/menu0${i}.jpg" loading="lazy" class="card" alt="card" />
        </div>
      </div>`;
      } else {
        console.log('File does not exist ' + i);
      }
    })
    .catch((error) => {
      console.log('An error occurred: ', error);
    });
}

langButtonEN.addEventListener('click', () => {
  console.log('magyar gomb');
  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    slide.style.backgroundColor = '#4d4d4d';
  });
});
langButtonHU.addEventListener('click', () => {
  console.log('magyar gomb');
  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    slide.style.backgroundColor = '#faebd7';
  });
});

var mainSwiper = new Swiper('.mySwiper', {
  direction: 'vertical',

  slidesPerView: 1.2,
  lazy: true,
  zoom: {
    maxRatio: 2,
    minRatio: 1,
  },
  mousewheel: true,
  spaceBetween: 0,
  //centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      direction: 'horizontal',
    },
  },
});
