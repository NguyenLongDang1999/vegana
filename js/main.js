$(function () {
  // slider
  $(".slick-slider").slick({
    infinite: true,
    fade: true,
    autoplay: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // product
  $(".slick-product").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev pull-left shadow'><i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right shadow'><i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // nav fixed

  // detail
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
  });
});
