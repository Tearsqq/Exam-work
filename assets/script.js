var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".test", {
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    },
    920: {
      slidesPerView: 4,
    }
  }
});

