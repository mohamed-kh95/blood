$(window).on('load', function () {
    $('.loading-override').fadeOut(1000, function () {
        $('body').css({
            overflow: 'auto'
        })
    })
})