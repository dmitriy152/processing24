var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  disableOnInteraction: true,
  stopOnLastSlide: false,
  loop: true,
  clickable: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

setInterval(() => {
  swiper.slideNext();
}, 5000);

