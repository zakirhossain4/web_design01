
$(function () {

    $('.banner-slider-wrapper').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
      }); 

      $('.counter').counterUp({
        delay: 10,
        time: 2500
    })
})
