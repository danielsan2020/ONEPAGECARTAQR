(function ($) {
    "use strict";

    //    Preloader  ======================

    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });



    //  slicknav ====================

    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });


    //      Main Slider Area   ==============
    
    $('.slide-1').owlCarousel({
        smartSpeed: 1000,
        loop: true,
        mouseDrag: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        items: 1,
        autoplay:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    $(".slide-1").on("translate.owl.carousel", function () {
        $(".hero2 h1").removeClass("animated fadeInDown").css("opacity", "0");
        $(".hero2 p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".hero2 .theme-color1").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slide-1").on("translated.owl.carousel", function () {
        $(".hero2 h1").addClass("animated fadeInDown").css("opacity", "0");
        $(".hero2 p").addClass("animated fadeInUp").css("opacity", "0");
        $(".hero2 .theme-color1").addClass("animated fadeInDown").css("opacity", "0");
    });


    //    Blog-page Slider  ==========*/

    $('.right-slider').owlCarousel({
        smartSpeed: 950,
        loop: true,
        nav: false,
        mouseDrag: true,
        dots: true,
        touchDrag: true,
        items: 1,
        autoplay: true,
    });

    //============= Photo gallery     

    $('.photo-gallery').owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-caret-right"></i>', '<i class="fas fa-caret-left"></i>'],
        mouseDrag: true,
        dots: false,
        touchDrag: true,
        items: 1,
        autoplay: true,
    });



    // ======== all-client  slider

    $('.all-client').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 1000,
        rtl: true,
        center: true,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            600: {
                items: 1,
                loop: true,
            },
            1000: {
                items: 5,
                loop: true,
            }
        }
    });


    //=======  reservation-slider

    $('.reservation-slide').owlCarousel({
        slideSpeed: 2000,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            600: {
                items: 3,
                loop: true,
            },
            1000: {
                items: 5,
                loop: true,
            }
        }
    });

    //=======  reservation-slider

    $('.corpo-client').owlCarousel({
        slideSpeed: 2000,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        margin:10,
        responsive: {
            0: {
                items: 2,
                loop: true,
            },
            400: {
                items: 3,
                loop: true,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    //   WOW js  ==================================*/

    new WOW().init();

})(jQuery);
