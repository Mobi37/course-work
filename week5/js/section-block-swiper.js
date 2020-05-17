var swiper = new Swiper('.lineswiper__infoslider-js', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: '.button-top-next',
      prevEl: '.button-top-prev',
    },
    breakpoints: {
      1:{
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 2,
      },
      840:{
        slidesPerView: 3,
      },
      1280:{
        slidesPerView:4,
      }
    }
  
  });

  var swiper = new Swiper('.lineswiper__infoslider2-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: '.button-swiper-scroll-next',
      prevEl: '.button-swiper-scroll-prev',
    },

    breakpoints: {
      1:{
        slidesPerView: 1,
      },
      840:{
        slidesPerView: 2,
      },
      1280:{
        slidesPerView:3,
      }
    }
  });