let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


function check_side_width() {
    var window_width = jQuery(window).width();
    var container_w = jQuery('.container-w').width();
    var haft_w = (jQuery(window).width() - jQuery('.container-w').width()) / 2;
    jQuery('#Mainvisual, #Subvisual').css('margin-right', haft_w);
}

// jQuery.event.special.touchstart = {
//     setup: function( _, ns, handle ){
//         this.addEventListener("touchstart wheel", handle, { passive: true });
//     }
// };

function navMobile() {
    if( $(window).width() <= 1330){
        $('.navbar-collapse').mCustomScrollbar({
            theme: "dark",
            alwaysShowScrollbar: 0,
            autoHideScrollbar: false,
            setTop: 0,
            axis:"yx"
        });
    }else{
        $('.navbar-collapse').mCustomScrollbar('destroy');
        if ($('.navbar-nav li').hasClass('open')) {
            $('.navbar-nav li').removeClass('open')
        }
    }
}

jQuery(document).ready(function ($) {
    var windowWidth = $(window).width();

    // navigation
    $('.navbar-nav > li').each(function(){
        if ($(this).find('.sub-nav').length) {
            $(this).addClass('has-child');
        } else {
            
        }
    });

    // head nav
    $('.head-nav ul > li').each(function(){
        if ($(this).find('.s-nav').length) {
            $(this).addClass('has-child');
        } else {
            
        }
    });

    $('.navbar-nav > li').mouseenter(function(event) {
		/* Act on the event */
		if ($(this).find('.sub-nav').length) {
			$(this).addClass('open');
		}
	}).mouseleave(function(event) {
		$(this).removeClass('open');
	});

    // s-sub-nav
    $('.sub-nav > li').mouseenter(function(event) {
		/* Act on the event */
		if ($(this).find('ul').length) {
			$(this).addClass('s-nav-open');
		}
	}).mouseleave(function(event) {
		$(this).removeClass('s-nav-open');
	});

    // head-nav
    $('.head-nav ul > li').mouseenter(function(event) {
		/* Act on the event */
		if ($(this).find('ul').length) {
			$(this).addClass('s-head-nav-open');
		}
	}).mouseleave(function(event) {
		$(this).removeClass('s-head-nav-open');
	});

    //navigation dropdown
    $('.navbar-toggler').bind("click", function () {
        if (!$(this).siblings('.wrap-nav').hasClass('wrap-nav-show')) {
            $('body').addClass('stop-scroll');
            $(this).siblings('.wrap-nav').addClass('wrap-nav-show');
            if ($('.wrap-nav-show').length > 0) {
                $('#backdrop').addClass('open');
            }
        }
        else {
            $(this).siblings('.wrap-nav').addClass('wrap-nav-show');
            $('#backdrop').removeClass('open');
            $('body').removeClass('stop-scroll');
        }
    });
    $('.close-nav a').click(function (e) { 
        e.preventDefault();
        $(this).parents('.wrap-nav').removeClass('wrap-nav-show');
        $('#backdrop').removeClass('open');
        $('body').removeClass('stop-scroll');
    });

    // Nav mobile
    navMobile();

    // head nav
    $('.head-nav .ico-nav span').click(function (e) { 
        e.preventDefault();
        var $self = $(this).parent().siblings('ul');
        if (!$self.hasClass('open')){
            $self.addClass('open');
            $(this).parent().addClass('ico-nav-active');
        }
        else {
            $self.removeClass('open');
            $(this).parent().removeClass('ico-nav-active');
        }
    });
    
    // device detect
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        
        $('.head-action .lang').on('click', function(e){
            if($(this).hasClass('mask-lang')){
                $(this).addClass('current').removeClass('mask-lang');
            }
            else {
            }
        });
        $('.head-action .lang a').on('click', function(e){
            if (!$(this).hasClass('active')) {
                $('.head-action .lang').addClass('mask-lang').removeClass('current');
            } else {
            }
        });
        
        // Navigation
        $('.navbar-nav > li').unbind('mouseenter mouseleave');
        $('.sub-nav > li').unbind('mouseenter mouseleave');
        $('.head-nav ul > li').unbind('mouseenter mouseleave');

        $('.navbar-nav > li > a').unbind().click(function (e) {
            if ($(this).siblings('.sub-nav').length) {
                e.preventDefault();
            }
            if(!$(this).parent().hasClass('open')){
                $(this).parents().find('li').removeClass('open');
                $(this).parents().find('li').removeClass('s-nav-open');
                $(this).parent().addClass('open');
            }
            else {
                $(this).parent().removeClass('open');
            }
        });
    
        // s-sub-nav
        $('.sub-nav > li a').click(function (e) {
            if ($(this).siblings('ul').length) {
                e.preventDefault();
                $(this).parent().addClass('s-nav-open');
            }
        });

        // head nav
        $('.head-nav ul > li a').click(function (e) {
            if ($(this).siblings('.s-nav').length) {
                e.preventDefault();
                if (!$(this).parent('li').hasClass('s-head-nav-open')) {
                    $(this).parent().addClass('s-head-nav-open');
                } else {
                    $(this).parent().removeClass('s-head-nav-open');
                }
            }
        });

    }
    else {
        $('.head-action .lang').hover(function () {
            // over
            $(this).addClass('current').removeClass('mask-lang');    
        }, function () {
            // out
            $(this).removeClass('current').addClass('mask-lang');
        });
    }

    // Head search
    $('.search li span').click(function (e) { 
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

    // Mainvisual
    if ($('#Mainvisual .main-slide').length) {
        $('#Mainvisual .main-slide').slick({
            autoplay: true,
            swipe: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: false,
            dots: true,
            fade: true,
            // autoplaySpeed: 2000,
            infinite: true,
            speed: 1800,
        });
    }

    // News slide
    if ($('.card-list .row-list').length) {
        $('.card-list').each(function(){
            $(this).find('.row-list').slick({
                autoplay: true,
                swipe: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                pauseOnHover: true,
                arrows: true,
                dots: false,
                // autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });

            // Thêm dòng này set equal height
            $(this).on('setPosition', function () {
                $(this).find('.slick-slide').height('auto');
                var slickTrack = $(this).find('.slick-track');
                var slickTrackHeight = $(slickTrack).height();
                $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
            });
        });
    }

    // Library
    if ( $('.slider-main').length ) {
        var $slider = $('.slider-main')
        .on('init', function(slick) {
            $('.slider-main').fadeIn(1000);
        })
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            lazyLoad: 'ondemand',
            autoplaySpeed: 3000,
            asNavFor: '.slider-thumb'
        });

    var $slider2 = $('.slider-thumb')
        .on('init', function(slick) {
            $('.slider-thumb').fadeIn(1000);
        })
        .slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-main',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            lazyLoad: 'ondemand',
            focusOnSelect: true,
            centerPadding: '30px',
        });

        //remove active class from all thumbnail slides
        $('.slider-thumb .slick-slide').removeClass('slick-active');

        //set active class to first thumbnail slides
        $('.slider-thumb .slick-slide').eq(0).addClass('slick-active');

        // On before slide change match active thumbnail to current slide
        $('.slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var mySlideNumber = nextSlide;
            $('.slider-thumb .slick-slide').removeClass('slick-active');
            $('.slider-thumb .slick-slide').eq(mySlideNumber).addClass('slick-active');
        });
    };
    
    // Tooltip
    if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });
    }

    // Checkbox
    if ($('input[type="checkbox"]').length > 0) {
        $('input[type="checkbox"]').each(function(index, el) {
            if($(this).is(':checked') && $(this).parents('label').length > 0) {
                $(this).parents('label').addClass('checked');
            }
            else {
                $(this).parents('label').removeClass('checked');
            }
        });

        $('input[type="checkbox"]').click(function(event) {
           if($(this).is(':checked') && $(this).parents('label').length > 0) {
                $(this).parents('label').addClass('checked');
            }
            else {
                $(this).parents('label').removeClass('checked');
            } 
        });
    }

    //background slide
    if ($('.bg-img').length) {
        $('.bg-img').each(function() {
            var imgSrc = $(this).children('p').find('img').attr('src');
            $(this).css('background', 'url("' + imgSrc + '")');
            $(this).children('p').find('img').hide();
            $(this).css('background-position', 'initial');
        });
    }

    // head banner
    $('.head-banner .bnr-close span').click(function (e) { 
        e.preventDefault();
        var num_bnr = $(this).parents('.head-banner').find('.bnr-item').length;
        if(num_bnr > 1){
            $(this).parents('.bnr-item').remove();
        }
        else {
            // $(this).parents('.bnr-item').remove();
            $(this).parents('.head-banner').remove();
        }
        
    });

    // Ads
    if ($('.ads-list-item ul').length) {
        $('.ads-list-item ul').slick({
            autoplay: true,
            fade: true,
            swipe: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 1800,
        });
    }
    $('.ads-close').click(function (e) { 
        e.preventDefault();
        $(this).parents('.ads, .section-item').remove();
    });

    // Member map
    $($('.m-area')).hover(function () {
            // over
            var state_id = $(this).attr('id');
            $('.'+state_id).addClass('fill-color');
            $('.stroke_'+state_id).addClass('fill-stroke');
        }, function () {
            // out
            var state_id = $(this).attr('id');
            $('.'+state_id).removeClass('fill-color');
            $('.stroke_'+state_id).removeClass('fill-stroke');
        }
    );

    $('.member-map-contact .m-area').on('click', function (e) {
        e.preventDefault()
        var point_id = $(this).attr('id');
        console.log('point id ', point_id);
        
        $('html, body').animate(
          {
            scrollTop: $('#item_'+point_id).offset().top,
          }, 500);
    });

    // Popover
    if ($('[data-toggle="popover"]').length > 0) {
        $("[data-toggle=popover]").each(function(i, obj) {
            $(this).popover({
                html: true,
                content: function() {
                    var id = $(this).attr('id');
                    console.log('id ', id);
                    return $('#item_'+id+ ' .item-info').html();
                }
            });
        });
        $('[data-toggle="popover"]').on('click', function (e) {
            $('[data-toggle="popover"]').not(this).popover('hide');        
        });
    }

    // Collapse
    $('.collapse-block .card').each(function (index, element) {
        if ($(this).find('.collapse').hasClass('show')) {
            $(this).find('.card-header').addClass('on-active');
        }
    });

    $('.collapse').on('show.bs.collapse', function () {
        $(this).siblings().addClass('on-active');
    });

    $('.collapse').on('hide.bs.collapse', function () {
        $(this).siblings().removeClass('on-active');
    });

    // Date picker
    if ($('.input-group.date').length) {
        $('.input-group.date').datepicker({
            format: 'dd/mm/yyyy',
            autoclose: true,
            todayHighlight: true
        });   
    }

    // Video
    $('.video-list .slick-arrow').click(function (e) { 
        e.preventDefault();
        $("video").each(function(){
            $(this).get(0).pause();
        });
    });
    var flag = 0;
    $('video').click(function (e) { 
        e.preventDefault();
        $("video").each(function(){
            $(this).get(0).pause();
        });
        if(flag == 0) {
            $(this).get(0).play();
            flag = 1;
        }
        else {
            $(this).get(0).pause();
            flag = 0;
        }
    });

    // modal
    if ($('.modal-event').length) {
        setTimeout(function() {
            $('#eventModal').modal('show');
        }, 3000);

        // $('.modal-event .more').click(function(){
        //     $('#eventModal').modal('hide');
        // });
    }

    // smooth scroll
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    // Page top
    if ($('.page-top').length > 0) {
        var scrollTrigger = 300, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.page-top').addClass('show');
                } else {
                    $('.page-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.page-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // Target click
    $(document).on('click touchstart', function (event) {
        //Nav
        if($(event.target).closest('.navbar-nav').length === 0){
            $('.navbar-nav li').removeClass('open');
            $('.sub-nav li').removeClass('s-nav-open');
        }

        // lang
        if($(event.target).closest('.head-action .lang').length === 0){
            $('.head-action .lang').removeClass('current');
        }

        if($(event.target).closest('.navbar-collapse').length === 0){
            $('.navbar-collapse').collapse('hide');
        }
        if($(event.target).closest('.navbar-toggler, .navbar-collapse').length === 0){
            $('.navbar-toggler').removeClass('open');
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-collapse').removeClass('show');
                $('#backdrop').removeClass('open');
            }
        }
        if($(event.target).closest('.wrap-nav, .navbar-toggler').length === 0){
            $('.wrap-nav').removeClass('wrap-nav-show');
            $('#backdrop').removeClass('open');
            $('body').removeClass('stop-scroll');
        }

        // head search
        if($(event.target).closest('.head-search, .search').length === 0){
            $('.head-search').removeClass('head-search-open');
        }

        // head nav
        
        if($(event.target).closest('.head-nav ul, .head-nav .ico-nav').length === 0){
            if ($('.ico-nav').hasClass('ico-nav-active')) {
                $('.ico-nav').removeClass('ico-nav-active');
            }
            if ($('.head-nav ul').hasClass('open')) {
                $('.head-nav ul').removeClass('open');
            }
            if ($('.head-nav ul li').hasClass('s-head-nav-open')) {
                $('.head-nav ul li').removeClass('s-head-nav-open');
            }
        }

        // Video
        if($(event.target).closest('video').length === 0){
            $("video").each(function(){
                $(this).get(0).pause();
            });
            flag = 1;
        }
    });

    //-- Stop scroll window --//
    $('.navbar-nav').bind('touchmove mousewheel DOMMouseScroll', function(e) {
        var scrollTo = null;

        if (e.type == 'mousewheel touchmove') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll touchmove') {
            scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }

        // Catch error touchmove devices
        if (e.cancelable) {
            cancelable=true;
           e.preventDefault();
        }
    });

    $(window).resize(function () {
        // Nav mobile
        navMobile();

        if($('#Mainvisual, #Subvisual').length > 0) {
            check_side_width();
        }

        if ($('.wrap-nav').hasClass('wrap-nav-show')) {
            $('.wrap-nav').removeClass('wrap-nav-show');
        } else {
        }
        $('#backdrop').removeClass('open');
        $('body').removeClass('stop-scroll');
    });
});


$(document).on("DOMContentLoaded", function(event) {
    if($('#Mainvisual, #Subvisual').length > 0) {
        check_side_width();
    }
    // if ($('.loading').length > 0) {
    //     var page_loading = $('.loading');
    //     page_loading.delay(1000).fadeOut('400', function() {
    //         $(this).fadeOut();
    //     });
    // }
});