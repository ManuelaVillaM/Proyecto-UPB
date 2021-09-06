window.onload = () => {
  const swiper = new Swiper('.swiper', {
    // speed: 400,
    // spaceBetween: 100,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',


  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const swiperr = document.querySelector('.swiper').swiper;

  setInterval(() => {
    swiperr.slideNext();
  }, 2500);
}
 
