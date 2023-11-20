var swiper = new Swiper(".card_Swiper", {
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000
    },
    navigation: {
      nextEl: ".custom-prev-arrow",
      prevEl: ".custom-next-arrow"
    },
    pagination: {
      el: ".swiper-pagination"
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 6,
      }
    }
  });

