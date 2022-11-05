$(function () {
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        autoplay: true, 
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            }
          ]
      })
})
