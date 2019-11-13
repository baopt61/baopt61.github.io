(function ($) {

  $(".navbar-button").on("click", function() {
    $(this).toggleClass("is-active");

    if($(this).hasClass("is-active")) {
      $("#navbarSupportedContent").fadeIn(300);
      $(".backdrop").fadeIn(300);
      $("body").addClass("lock");
    }
    else {
      $("#navbarSupportedContent").fadeOut(300);
      $(".backdrop").fadeOut(300);
      $("body").removeClass("lock");
    }
  });

  $(".backdrop").on("click", function() {
    $(this).fadeOut(300);
    $(".navbar-button").removeClass("is-active");
    $("#navbarSupportedContent").fadeOut(300);
    $("body").removeClass("lock");
  });

  $('.js-news').owlCarousel({
    margin: 30,
    loop: false,
    autoWidth: true,
    items: 4,
    nav: true,
    dots: false
  });

  $('.js-memory').owlCarousel({
    loop: false,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    animateOut: 'fadeOut'
  });

  $('.js-banner').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    animateOut: 'fadeOut'
  });

  $('.js-gallery').owlCarousel({
    margin: 15,
    loop: false,
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    responsive:{
      768 : {
        margin: 30,
        items: 2
      }
    }
  });

  $('.js-photos').owlCarousel({
    margin: 15,
    loop: false,
    nav: true,
    items: 1,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    responsive:{
      768 : {
        items: 2,
        margin: 30
      },
      1400 : {
        items: 3,
      }
    }
  });

  $('#countdown').countdown('2019/12/6', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div><strong>%D</strong><span>ngày</span></div>'
      + '<div><strong>%H</strong><span>giờ</span></div>'
      + '<div><strong>%M</strong><span>phút</span></div>'
      + '<div><strong>%S</strong><span>giây</span></div>'));
  });

  $(".c-news li").clone().appendTo(".list-related")
  $(".list-related figure, .list-related p").remove();

  $(".data-modal").on("click", function(e) {
    e.preventDefault();
    var postID = $(this).attr("href");
    $(".js-modal-content").removeClass("is-active");
    $(postID).addClass("is-active");
    $(".list-related li").removeClass("d-none");
    $(".list-related a[href='"+postID+"']").closest("li").addClass("d-none");
    $(".js-modal").addClass("is-active");
    $(".c-overlay").fadeIn(300);
    $(".c-news-detail__content").scrollTop(0);
  });

  $(".js-modal-close").on("click", function() {
    $(".js-modal-content").removeClass("is-active");
    $(".js-modal").removeClass("is-active");
    $(".c-overlay").fadeOut(300);
  });

  // Scroll to section

  var headerHeight = $(".navbar").height();

  $('.navbar-nav a').bind('click', function(e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - headerHeight
    }, 600);

    // Close Navbar
    $(".navbar-button").removeClass("is-active");
    $("#navbarSupportedContent").fadeOut(300);
    $(".backdrop").fadeOut(300);
    $("body").removeClass("lock");

    return false;
  });

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance + headerHeight) {
        $('.navbar-nav li a.active').removeClass('active');
        $('.navbar-nav li').eq(i).find('a').addClass('active');
      }
    });
  }).scroll();

})($);

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Auto play video

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-placeholder', {
    width: "100%",
    height: "100%",
    videoId: 'Xa0Q0J5tOP0',
    playerVars: {
      color: 'white'
    }
  });
}

$('.c-video-thumbnail').on('click', function () {
  $(this).fadeOut(300);
  player.playVideo();
});