$(function () {
    // Header
    $('header').innerHeight($('.carousel').innerHeight() - 200);
    // Login Profile
    $('.login-profile .profile-name .profile').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.login-profile .dropdown-login').fadeToggle(300)
    });
    $(window).on('click', function() {
        if ($('.login-profile .dropdown-login').css('display', 'none')) {
            false
        } else {
            $('.login-profile .dropdown-login').fadeOut(300);
        }
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 400) {
            if ($('.login-profile .dropdown-login').css('display', 'none')) {
                false
            } else {
                $('.login-profile .dropdown-login').fadeOut(300);
            }
        }
    });
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600: {
                items: 1
            },
            750:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    // Card
    $('.card .icon').on('click', function () {
        $(this).toggleClass('like');
    });
    // Req
    $('.req .choose-blood, .req .choose-city').on('click', function (e) {
        e.stopPropagation();
        if($(this).find('.items').hasClass('req-toggle')) {
            $(this).find('.items').toggleClass('req-toggle');
        } else {
            $('.req .items').removeClass('req-toggle');
            $(this).find('.items').toggleClass('req-toggle');
        }
    });
    
    $('body').on('click', function () {
        $('.req .items').removeClass('req-toggle');
    });
    $(window).on('scroll', function () {
        if($('.req .items').hasClass('req-toggle')) {
            $('.req .items').removeClass('req-toggle')
        }
    });
    // Req Items
    $('.req .item').on('click', function () {
        $(this).parent('.items').siblings().find('bdi').text($(this).text())
    });
    // Details Blood
    $('.details-row .blood').innerHeight($('.details-row .info-details').innerHeight());
    $('.details-row .blood').innerWidth($('.details-row .info-details').innerHeight());
    // Scroll To Top
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 800) {
        $(".to-top").fadeIn(500);
        } else {
        $(".to-top").fadeOut(500);
        }
    });
    $(".to-top").on("click", function() {
        $("html").animate(
        {
            scrollTop: 0
        },
        1500
        );
    });
    
});