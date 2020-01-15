$(function () {
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
$(window).on('load', function () {
    $('.loading-override').fadeOut(1000, function () {
        $('body').css({
            overflow: 'auto'
        })
    })
})