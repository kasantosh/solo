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
  $('#team-members').owlCarousel({
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

/*===================================
            Responsive Tabs 
======================================*/
$(document).ready(function() {
  $('#services-tabs').responsiveTabs({
    animation: 'slide',
    duration: 500
  });
});

/*===================================
        Porfolio Isotope plugin 
======================================*/
$(window).on('load', function() {
  // Initialize Isotope
  $('#isotope-container').isotope({

  });
  // filter items on button click
  $('#isotope-filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('#isotope-container').isotope({ filter: filterValue });

    // active button
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });

});

/*===================================
        Magnific Popup plugin 
======================================*/
$(function() {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a', //<a> child item will open up
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/*===================================
            Testimonials 
======================================*/
$(document).ready(function(){
  $('#testimonial-slider').owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false
  });
});

/*===================================
            Stats 
======================================*/
$(document).ready(function() {
  $('.counter').counterUp({
    delay: 100,
    time: 2000
  });
});

/*===================================
            Clients 
======================================*/
$(document).ready(function(){
  $('#clients-list').owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false
  });
});
