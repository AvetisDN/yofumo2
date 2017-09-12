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
            $('.content, .product-teaser, .placeholder, .products-testimonial,footer, .gallery').fadeIn(500);

            particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {});
            if($('body').hasClass('homepage')) {
                slider();
                $(document).mousewheel(function () {
                    $('footer').addClass('show');
                });
                $('.scroll-icon').click(function () {
                    $('footer').addClass('show');
                });
            }
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
        if(activeSlide===0) {
            $('#slide0-bg').fadeIn(400);
        } else {
            $('#slide0-bg').fadeOut(400);
        }
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


    $('.clickme').click(function (e) {
        e.preventDefault();
        $('.teaser-main').css({
            background: 'url("assets/img/teaser/teaser-3.jpg") bottom center no-repeat'
        });
        $('.teaser-quest').fadeOut(400);
        $('.teaser-quest-2').fadeIn(400);
        setTimeout(function () {
            $('#close').click();
        }, 5000);
    });
    $('#close').click(function (e) {
        e.preventDefault();
        $('.teaser-main').css({
            background: 'url("assets/img/teaser/teaser-result.jpg") bottom center no-repeat',
            backgroundSize: 'cover'
        });
        $('.content').css({
            height: .49*$(window).width()
        });
        $('body').removeClass('stage1').addClass('stage3');
    });

    $('.header-menu li:has(ul)').hover(function () {
        $('header').addClass('dark');
    }, function () {
        $('header').removeClass('dark');
    });

    $('.gallery>article>a').click(function (e) {
        e.preventDefault();
        $('.detailed-view').fadeIn(500);
    });
    $('#close2').click(function (e) {
        e.preventDefault();
        $('.detailed-view').fadeOut(300);
    });
    gallery();
    function gallery(){
        var galActive = 0;
        $('.detailed-view a.gallery-prev').click(function (e) {
            e.preventDefault();
            galActive--;
            if(galActive<0) galActive = $('.small-picture a').length - 1;
            changePic();
        });
        $('.detailed-view a.gallery-next').click(function (e) {
            e.preventDefault();
            galActive++;
            if(galActive>$('.small-picture a').length - 1) galActive = 0;
            changePic();
        });
        $('.small-picture a').click(function (e) {
            e.preventDefault();
            galActive = $(this).index();
            changePic();
        });

        function changePic(){
            $('.small-picture a').removeClass('active');
            $('.small-picture a').eq(galActive).addClass('active');
            $('.big-picture-showcase').css({
                backgroundImage: "url('"+$('.small-picture a').eq(galActive).attr('href')+"')"
            });
        }
    }

    function returnFalse() {
        return false;
    }

    if($('.sketchfab-page')) {
        $(window).scroll(function () {
            console.log($(this).scrollTop() + ":" + $('#sketchfab-block').offset().top);
            if ($(this).scrollTop() > $('#sketchfab-block').offset().top - 40 && $(this).scrollTop() < $('#sketchfab-block').offset().top + 40){
                $('.overlayed').fadeOut();
            } else {
                $('.overlayed').fadeIn();
            }
        });
    }

})();