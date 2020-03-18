// Scroller

$('.goTop').on('click', function() {
    console.log('hi')
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

//goTop
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('.goTop').fadeIn(500);
        $('.fixed-link').addClass('scroll')
    } else {
        $('.goTop').fadeOut(500);
        $('.fixed-link').removeClass('scroll')
    }
});