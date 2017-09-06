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

    $('.product-overview-icon-switcher a').click(function (e) {
        e.preventDefault();
        if($('.switcher-slider').attr('data-state')==='left') {
            $('.product-overview-icon-switcher a:first').removeClass('active');
            $('.product-overview-icon-switcher a:last').addClass('active');
            $('#icons-full').animate({height:253},500);
            $('#icons-quick').animate({height:0},500);
            $('.switcher-slider').attr('data-state','right').removeClass('left-pos').addClass('right-pos');
        } else {
            $('.product-overview-icon-switcher a:first').addClass('active');
            $('.product-overview-icon-switcher a:last').removeClass('active');
            $('#icons-full').animate({height:0},500);
            $('#icons-quick').animate({height:181},500);
            $('.switcher-slider').attr('data-state','left').addClass('left-pos').removeClass('right-pos');
        }
    });

    var testimonial = 0;
    $('.products-testimonial a.arrow-prev').click(function(e){
        e.preventDefault();
        testimonial--;
        if (testimonial<0) testimonial = $('.products-testimonial ul li').length-1;
        changeTestimonial();
    });
    $('.products-testimonial a.arrow-next').click(function(e){
        e.preventDefault();
        testimonial++;
        if (testimonial>$('.products-testimonial ul li').length-1) testimonial = 0;
        changeTestimonial();
    });
    function changeTestimonial() {
        console.log(testimonial);
        $('.products-testimonial ul li:visible').fadeTo(400, 0, function () {
            $(this).css({display:'none'});
        });
        $('.products-testimonial ul li').eq(testimonial).css({display:'flex'}).fadeTo(400, 1);
    }


})();