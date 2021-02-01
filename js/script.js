/*===================================
          Preloader
======================================*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/*===================================
            Team 
======================================*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 500,
    margin: 10,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false
  });
});

/*===================================
            Progress Bars 
======================================*/
$(document).ready(function () {
  $('#progress-elements').waypoint(function() {
    $('.progress-bar').each(function() {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + '%'
      }, 1500);
    });
    this.destroy();
  }, { 
    offset: 'bottom-in-view' 
  }); 
});