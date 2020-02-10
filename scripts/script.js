$(document).ready(function() {
    //color of nav
    $(window).scroll(function() {

        if ($(document).scrollTop() > 210) {
            $("#myNavbar").addClass("mrBlue");
        } else {
            $("#myNavbar").removeClass("mrBlue");

        }
    });

    // dropping
    var navActive = $("#myNavbar .navbar .collapse .nav-item");
    var dropping = $("#myNavbar .navbar .collapse .nav-item .btn-group")
    navActive.mouseenter(function() {
        $(this).addClass("show");
        $(this).children().eq(0).attr("aria-expanded", true);
        $(this).children().eq(1).addClass("show");
    });
    navActive.mouseleave(function() {
        $(this).removeClass("show");
        $(this).children().eq(0).attr("aria-expanded", false);
        $(this).children().eq(1).removeClass("show");
    });
    dropping.mouseenter(function() {
        $(this).children().eq(1).addClass("show");
    })
    dropping.mouseleave(function() {
        $(this).children().eq(1).removeClass("show");
    })

    $('#slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                center: false,
                items: 1,
                dots: true,
                stagePadding: 30,

            },
            768: {
                center: false,
                items: 2,
                dots: true,
                stagePadding: 30,
            },
            1024: {
                center: true,
                items: 4,
                dots: true,
            }

        }
    });

    $('#hearted-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        lazyLoad: true,
        responsive: {
            0: {
                center: false,
                items: 1,
                // dots: true,
                slideBy: 1,
                dotsEach: 1,

            },
            768: {
                center: false,
                items: 2,
                // dots: true,
                margin: 30,
                stagePadding: 0,
                slideBy: 2,
                dotsEach: 2,

            },
            1024: {
                center: true,
                items: 3,
                slideBy: 3,
                dotsEach: 3,
            }

        }
    })
});