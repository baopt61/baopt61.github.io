
$(document).ready(function () {
    FixedHeader();
    VideoLightbox();
    ClickToScroll();
    ActiveTabs();

    $(window).on('resize', function () {
        ActiveTabs();
    })


    /*var video = $("#video-bg");
    var btn = $("#video-btn");
    var play_pause_status = "play";


    if (video.length) {
        btn.click(function () {
            if (play_pause_status == 'play') {
                video[0].play();
                play_pause_status = 'pause'
            } else {
                video[0].pause();
                play_pause_status = 'play'
            }
        })
    }*/


    // slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        controls: false
    });
    /*var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        effect: 'fade'
    });*/


    $('.ls-voice').owlCarousel({
        margin: 10,
        loop: false,
        items: 2,
        nav: true,
        dots: false,
        responsive : {
            768 : {
                items: 3,
                margin: 20
            }
        }
      });

});

function Loading() {
    setTimeout(function () {
        $('#loading').fadeOut()
    }, 1000);
}
function FixedHeader() {
    var lastTop = 0;
    var _hd = $('header');
    var _hdHeight = _hd.outerHeight(true);
    $(window).on('scroll', function () {
        var valScroll = $(this).scrollTop();

        if (_hd.length) {
            if (valScroll > _hdHeight && valScroll > lastTop) {

                _hd.stop(true, true).addClass('header-scroll').removeClass('header-showdown');

            } else if (_hd.hasClass('header-scroll')) {
                _hd.css({
                    'visibility': ''
                });

                _hd.stop(true, true).removeClass('header-scroll').addClass('header-showdown');
            }

            if (valScroll == 0) {
                _hd.stop(true, true).removeClass('header-showdown');
            }
        }
        lastTop = valScroll;
    })
}

function VideoLightbox() {
    var item = $('[data-popup]'),
        popup = $('.ld-video'),
        popup_if = $('.ld-video iframe');
        closeBtn = $('.closepopup'),
        overlay = $('.overlay');

    closeBtn.on('click', function () {
        var parent_vd = $(this).parents('.ld-video');
        var parent_if = parent_vd.find("iframe");

        overlay.removeClass('overlay-active');
        parent_vd.hide();
        parent_if.attr('src', parent_if.attr('src'));
        return false;
    });

    overlay.on('click', function () {
        var parent_if = $(".ld-video:visible iframe");
        parent_if.attr('src', parent_if.attr('src'));
        $(this).removeClass('overlay-active');
        popup.css('display','');
        return false;
    });

    item.off('click').each(function () {
        $(this).on('click', function () {
            var _this = $(this);
            var dataId = _this.attr('data-popup');

            popup.css('display','');

            if (dataId != '' && dataId != undefined) {
                $('#' + dataId).show();
                overlay.addClass('overlay-active');
            } else {
                $('#' + dataId).hide();
                overlay.removeClass('overlay-active');
            }
        });
    });
}

// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    var item_video = $('.ld-video .ld-video-inner');
    $(item_video).each(function () {
        var player_id = $(this).find('iframe').attr("id");

        var player = new YT.Player( player_id, {
            events: {
                'onReady': function (event) {
                    $('.closepopup, .overlay').on('click', function () {
                        player.stopVideo();
                    });
                }
            }
        });
    });
}

function ClickToScroll() {
    var link_scroll = $('a[href*="#"]:not([href="#"])');
    var hd_h =$('.ld-hd').outerHeight(true);

    link_scroll.click(function(e) {
        e.preventDefault()

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                var yScroll = target.offset().top;

                $('html, body').animate({
                    scrollTop: yScroll - hd_h
                }, 700);


                return false;
            }
        }
    });
}

function ActiveTabs () {
    var item = $('.ld-sticky-item > a')
    var winw = $(window).width();

    if (winw < 768) {

        item.on('click', function (e) {
            e.stopPropagation();

            item.removeClass('active')
            $(this).addClass('active')
        })

        $('body').on('click', function () {
            if (item.hasClass('active')) {
                item.removeClass('active')
            }
        })

    } else {
        item.removeClass('active')
    }
}