$(document).ready(function () {
    var sliderDuration = 12000;
    var sliderDurationClick = 22000;
    var sliderTimer = null;
    var activeSlide = 0;

    function nextSlide() {
        activeSlide++;
        if (activeSlide === $('#slider figure').length) activeSlide = 0;
        slider();
    }

    if ($('#particles-js').length > 0) {
        particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function () {
        });
    }

    slider();

    function slider() {
        $('#slider figure.ani').removeClass('ani').fadeOut(300);
        $('#slider figure').eq(activeSlide).fadeIn(300, function () {
            $(this).addClass('ani');
        });
        $('.slider-navigation li.active').removeClass('active');
        $('.slider-navigation li').eq(activeSlide).addClass('active');
        $('#slide0-bg,#slide1-bg,#slide2-bg,#slide6-bg,#slide7-bg').not($('[id^=slide]').eq(activeSlide)).fadeOut(400);
        if (activeSlide === 0) {
            $('#slide0-bg').fadeIn(400);
        }
        if (activeSlide === 1) {
            $('#slide1-bg').fadeIn(400);
        }
        if (activeSlide === 2) {
            $('#slide2-bg').fadeIn(400);
        }
        if (activeSlide === 3) {
            $('#slide6-bg').fadeIn(400);
        }
        if (activeSlide === 4) {
            $('#slide7-bg').fadeIn(400);
        }
    }

    sliderTimer = setInterval(nextSlide, sliderDuration);
    $('.slider-navigation li').click(function () {
        activeSlide = $(this).index();
        clearInterval(sliderTimer);
        sliderTimer = null;
        slider();
        sliderTimer = setInterval(nextSlide, sliderDuration);
    });

    $('.product-overview-icon-switcher a').click(function (e) {
        e.preventDefault();
        if ($('.switcher-slider').attr('data-state') === 'left') {
            $('.product-overview-icon-switcher a:first').removeClass('active');
            $('.product-overview-icon-switcher a:last').addClass('active');
            $('#icons-full').animate({height: 253}, 500);
            $('#icons-quick').animate({height: 0}, 500);
            $('.switcher-slider').attr('data-state', 'right').removeClass('left-pos').addClass('right-pos');
        } else {
            $('.product-overview-icon-switcher a:first').addClass('active');
            $('.product-overview-icon-switcher a:last').removeClass('active');
            $('#icons-full').animate({height: 0}, 500);
            $('#icons-quick').animate({height: 181}, 500);
            $('.switcher-slider').attr('data-state', 'left').addClass('left-pos').removeClass('right-pos');
        }
    });

    $('.view-full').click(function (e) {
        e.preventDefault();
        $('.product-overview-full-tech-lists').toggleClass('shown');
    });

    var testimonial = 0;
    $('.products-testimonial a.arrow-prev').click(function (e) {
        e.preventDefault();
        testimonial--;
        if (testimonial < 0) testimonial = $('.products-testimonial ul li').length - 1;
        changeTestimonial();
    });
    $('.products-testimonial a.arrow-next').click(function (e) {
        e.preventDefault();
        testimonial++;
        if (testimonial > $('.products-testimonial ul li').length - 1) testimonial = 0;
        changeTestimonial();
    });
    function changeTestimonial() {
        $('.products-testimonial ul li:visible').fadeTo(400, 0, function () {
            $(this).css({display: 'none'});
        });
        $('.products-testimonial ul li').eq(testimonial).css({display: 'flex'}).fadeTo(400, 1);
    }


    $('.clickme').click(function (e) {
        e.preventDefault();
        $('.teaser-main-2').fadeIn(200);
        $('.teaser-quest').fadeOut(400);
        $('.teaser-quest-2').fadeIn(400);
        setTimeout(function () {
            $('#close').click();
        }, 2000);
    });
    $('#close').click(function (e) {
        e.preventDefault();
        $('.teaser-main-3').fadeIn(400);
        $('header .logo-img img').attr('src', 'assets/svg/logo-icon.svg');
        $('.content').animate({
            height: .49 * $(window).width()
        }, 500);
        $('body').removeClass('stage1').addClass('stage3');
    });

    $('.header-menu li:has(ul)').hover(function () {
        $('header').addClass('dark');
    }, function () {
        $('header').removeClass('dark');
    });


    var smallImages = [];
    var galActive = 0;
    var galTotal = $('.gallery>article').length;
    var prepender, appender, delay;
    for (var i = 0; i < galTotal; i++) {
        smallImages.push($('.gallery>article').eq(i).find('a').attr('href'));
    }
    $('.gallery>article').click(function (e) {
        e.preventDefault();
        galActive = $(this).index();
        $('.detailed-view').fadeIn(500);
        $('.big-picture-showcase').css({backgroundImage: 'url(' + smallImages[galActive] + ')'});
        gallerySmallImg();
    });
    $('#close2').click(function (e) {
        e.preventDefault();
        $('.detailed-view').fadeOut(300);
    });
    function gallerySmallImg() {
        $('.detailed-footer .small-picture').empty();
        $('.detailed-footer .small-picture').append('<a href="' + smallImages[galActive] + '" class="active"><img src="' + smallImages[galActive] + '"></a>');
        for (var j = 1; j <= 4; j++) {
            delay = j * 50;
            if (galActive - j >= 0) prepender = galActive - j;
            else prepender = galTotal - 5 + j;
            $('.detailed-footer .small-picture a:first').before('<a href="' + smallImages[prepender] + '" class="del' + delay + '"><img src="' + smallImages[prepender] + '"></a>');

            if (galActive + j < galTotal) appender = galActive + j;
            else appender = j - 1;
            $('.detailed-footer .small-picture a:last').after('<a href="' + smallImages[appender] + '" class="del' + delay + '"><img src="' + smallImages[appender] + '"></a>');
        }

        $('.small-picture a').click(function (e) {
            e.preventDefault();
            for (var s = 0; s < smallImages.length; s++) {
                if (smallImages[s] === $(this).attr('href')) {
                    galActive = s;
                }
            }
            changePic();
        });
    }

    $('.detailed-view a.gallery-prev').click(function (e) {
        e.preventDefault();
        galActive--;
        if (galActive < 0) galActive = $('.small-picture a').length - 1;
        changePic();
    });
    $('.detailed-view a.gallery-next').click(function (e) {
        e.preventDefault();
        galActive++;
        if (galActive > $('.small-picture a').length - 1) galActive = 0;
        changePic();
    });

    function changePic() {
        $('.fader').fadeIn(200, function () {
            $('.big-picture-showcase').css({
                backgroundImage: "url('" + smallImages[galActive] + "')"
            });
            $('.fader').fadeOut(200);
        });
        gallerySmallImg();
    }

    function returnFalse() {
        return false;
    }


    $('a[href*="sendmail"]:has(div:hidden)').click(function (e) {
        e.preventDefault();
        $(this).find('div:first').show(400);
        clearInterval(sliderTimer);
        sliderTimer = null;
    });
    $(document).mouseup(function (e) {
        var container = $("a[href*='sendmail'] div:visible");
        if (container.length>0 && !container.is(e.target) && container.has(e.target).length === 0) {
            container.hide(400);
            sliderTimer = setInterval(nextSlide, sliderDurationClick);
        }
    });
    $('.form-opener-1').click(function (e) {
        e.preventDefault();
        $('#sendmail').show(400);
        clearInterval(sliderTimer);
        sliderTimer = null;
    });
    $('.form-opener-2').click(function (e) {
        e.preventDefault();
        $('#sendmail2').show(400);
        clearInterval(sliderTimer);
        sliderTimer = null;
    });

    $('#sendmail-form-1, #sendmail-form-2').submit(function (e) {
        e.preventDefault();
        var data = {
            name: $(this).find('input[name=name]').val(),
            mail: $(this).find('input[name=mail]').val(),
            wish: $(this).attr('data-product')
        };
        var that = $(this);
        $.ajax({
            url: 'mail.php',
            type: 'post',
            data: data,
            success: function (result) {
                if (result == 1) {
                    that.find('form').hide();
                    that.find('.err').hide();
                    that.find('.msg').show();
                    sliderTimer = setInterval(nextSlide, sliderDuration);
                } else {
                    //that.find('form').hide();
                    that.find('.err').show();
                    that.find('.msg').hide();
                }
            }
        });
    });

});
