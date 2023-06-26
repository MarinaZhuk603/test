$(document).ready(function() {
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
    appendArrows: $('.btn-slider')
  });

  $('.slider-mini').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
  });
});