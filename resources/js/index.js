$(document).ready(function(){
  $('.carousel').slick({
    dots: false,
    draggable: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    speed: 4000
  });


  var $userScroll = 0;
  $userScroll.scroll(function(){
    var y = $(this).scrollTop();

    if (y - x > 50) {
      var z = $('.navbar').css('height');
    }


    $('.navbar').animate({top: '-' + z}, 150);


  })

});
