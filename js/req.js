$(function () {
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
});