$(document).ready(function(){

    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    $('.main-slider').on('beforeChange', function(event, slick, currentSlide){
      $('.main-slider').slick('slickPlay');
      theVideo.pause();
    });

    $('.main-slider').on('afterChange', function(event, slick, currentSlide){
      if (currentSlide == 2) {
          $('.main-slider').slick('slickPause');
          theVideo.play();
      }
    });

    document.getElementById('theVideo').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      $('.main-slider').slick('slickPlay');
    }		



});