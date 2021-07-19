$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    responsiveClass: true,
    responsive: {
      1200: {
        items: 3,
        loop: false,
        mouseDrag: false,
        touchDrag: false
      },
    }
  });
});