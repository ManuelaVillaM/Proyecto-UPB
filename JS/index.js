window.onload = () => {
  init();
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
    gsap.from(".box", {
      duration: 2,
      scale: 0.5, 
      opacity: 0, 
      delay: 0.5, 
      stagger: 0.2,
      ease: "elastic", 
      force3D: true
    });
  }, 2500);

  function init () {
    gsap.from(".box", {
      duration: 2,
      scale: 0.5, 
      opacity: 0, 
      delay: 0.5, 
      stagger: 0.2,
      ease: "elastic", 
      force3D: true
    });
    gsap.from("#logo", {duration: 3, x: 300, opacity: 0, scale: 0.5});
  }

  
}
 
