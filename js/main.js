

// jQuery.event.special.touchstart = {
//     setup: function( _, ns, handle ){
//         this.addEventListener("touchstart wheel", handle, { passive: true });
//     }
// };


$(document).ready(function ($) { 
    var windowWidth = $(window).width();

    // navigation
    $('.nav-main > li').each(function(){
        if ($(this).find('.sub-nav').length) {
            $(this).addClass('has-child');
        } else {
            
        }
    });

    $('.nav-main > li').mouseenter(function(event) {
        /* Act on the event */
        if ($(this).find('.sub-nav').length) {
            $(this).addClass('open');
        }
    }).mouseleave(function(event) {
        $(this).removeClass('open');
    });

    // Head search
    $('#Search').click(function (e) { 
        e.preventDefault();
        if (!$('.head-search').hasClass('head-search-open')) {
            $('.head-search').addClass('head-search-open');
        } else {
            $('.head-search').removeClass('head-search-open');
        }
    });
    $('.head-search .clear span').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings('.search-field').find('input').val('').focus();
    });

    //Mainvisual sliders
    if ($('.main-sliders').length) {
        $('.main-sliders').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'ease',
            pauseOnHover: false
        });
    }

    //Catalog sliders
    if ($('.catalog-sliders').length) {
        $('.catalog-sliders').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 500,
            slidesToShow: 9,
            slidesToScroll: 3,
            autoplay: false,
            dots: true,
            prevArrow: $('.catalog-prev'),
            nextArrow: $('.catalog-next'),
            pauseOnHover: false
        });
    }

    //News sliders
    if ($('.news-sliders').length) {
        $('.news-sliders').slick({
            autoplay: true,
            // centerMode: true,
            // autoplaySpeed: 3000,
            // speed: 1500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
            variableWidth: false,
            pauseOnHover: false
            
            // autoplaySpeed: 1500,
            // speed: 500,
            // slidesToShow: 4,
            // slidesToScroll: 1,
            // autoplay: false,
            // dots: true,
            // pauseOnHover: false
        });
    }

    //Logos sliders
    if ($('.logo-sliders').length) {
        $('.logo-sliders').slick({
            autoplay: false,
            autoplaySpeed: 1500,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: false,
            prevArrow: $('.logo-prev'),
            nextArrow: $('.logo-next'),
            pauseOnHover: false
        });
    }

    // Target click
    $(document).on('click touchstart', function (event) {
        if($(event.target).closest('#Menu, #Gnav').length === 0){
            $('body').removeClass('is-menu');
            $('#Gnav').removeClass('is-show');
            $('#Menu').removeClass('is-active');
        }
    });

    // Target click
    $(document).on('click touchstart', function (event) {

        //Nav
        if($(event.target).closest('.navbar-nav').length === 0){
            $('.nav-main li').removeClass('open');
            $('.sub-nav li').removeClass('s-nav-open');
        }

        // head search
        if($(event.target).closest('.head-search, #Search').length === 0){
            $('.head-search').removeClass('head-search-open');
        }

    });
});
