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

 /*===================================
            Google map 
======================================*/
$(window).on('load', function() {

  var addressString = '230 Broadway, NY, New York 10007, USA';
  var myLatLng = { lat: 40.712300, lng: -74.007930 };

  // Render map
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: myLatLng
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Click to View Address'
    });

    // Info window
    var infoWindow = new google.maps.InfoWindow({
      content: addressString
    })
    // Show info window when uses clicks maker
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

});

 /*===================================
            Navigation 
======================================*/
// Show & Hide white navigation
$(function() {
  // Show/hide nac on page load
  showHideNav();

  $(window).scroll(function() {
    // Show/hide nav on page scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 150) {
      // Show White 
      $('nav').addClass('white-nav-top');
      // Show dark logo
      $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
      // Show home button
      $('#back-to-top').fadeIn();
    } else {
      // Hide White Nav
      $('nav').removeClass('white-nav-top');
      // SHow white logo
      $('.navbar-brand img').attr('src', 'img/logo/logo.png');
      // Hide back to top button
      $('#back-to-top').fadeOut();
    }
  }
});

 /*===================================
            Smooth Scrolling 
======================================*/
// $(function() {
//   $('a.smooth-scroll').click(function(event) {
//     event.preventDefault();
//     // get section id like #about, #services, #team etc..
//     var section_id = $(this).attr('href');
//     $('html, body').animate({ 
//       scrollTop: $(section_id).offset().top - 64
//     });
//   }, 1250, 'easeInOutExpo');
// })