;(function () {

    $(document).ready(function () {
        setTimeout(function () {
            $('.logo-img, .logo-img2').addClass('hide');
        },2000);
        setTimeout(function () {
            $('.logo-text').slideDown();
            $('.logo-img img').fadeIn();
            $('.scroll-icon').fadeIn();
        },2000);
        setTimeout(function () {
            $('.header-menu').slideDown();
        },2500);
        setTimeout(function () {
            $('.content, .product-teaser, .product-page footer').fadeIn(500);
            particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {});
            slider();
            $(document).mousewheel(function () {
                $('footer').addClass('show');
            });
            $('.scroll-icon').click(function () {
                $('footer').addClass('show');
            });
        },3000);
    });

    var activeSlide = 0;

    function slider() {
        $('#slider figure.ani').removeClass('ani').fadeOut(300);
        $('#slider figure').eq(activeSlide).fadeIn(300, function () {
            $(this).addClass('ani');
        });
        $('.slider-navigation li.active').removeClass('active');
        $('.slider-navigation li').eq(activeSlide).addClass('active');
    }
    $('.slider-navigation li').click(function () {
        activeSlide = $(this).index();
        slider();
    });



})();