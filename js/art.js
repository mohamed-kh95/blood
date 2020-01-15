$(function () {
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
});