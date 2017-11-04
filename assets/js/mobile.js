$(document).ready(function () {

    particlesJS.load('particles-js', '../assets/js/particlesjs-config.json', function () {
    });


    $('.close-btn').on('click', function (e) {
        e.preventDefault();
        $('#main-menu').removeClass('vis');
    });
    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $('#main-menu').addClass('vis');
    });
    $('#main-menu li:has(ul)>a').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('shown');
    });

    var hammertime = new Hammer($('body')[0]);
    hammertime.on('swiperight', function(ev) {
        $('#main-menu').addClass('vis');
    });
    hammertime.on('swipeleft', function(ev) {
        $('#main-menu').removeClass('vis');
    });

    $('.footer-menu li:has(ul) a').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('clicked');
        $('#menu-underlay').show();
    });

    $('#menu-underlay').click(function () {
        $('.footer-menu li.clicked').removeClass('clicked');
        $('#menu-underlay').hide();
    });

    $('.form-opener').click(function (e) {
        e.preventDefault();
        $(this).addClass('opened');
    });
    $(document).mouseup(function (e) {
        var container = $(".form-container>div:visible");
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            container.hide();
            container.parent().removeClass('opened');
        }
    });

    $('#sendmail-form, #sendmail-form-2').submit(function (e) {
        e.preventDefault();
        var data = {
            name: $(this).find('input[name=name]').val(),
            mail: $(this).find('input[name=mail]').val(),
            wish: $(this).attr('data-product')
        };
        var that = $(this).parent();
        $.ajax({
            url: '../mail.php',
            type: 'post',
            data: data,
            success: function(result) {
                if(result==1){
                    that.find('form').hide();
                    that.find('.err').hide();
                    that.find('.msg').show();
                } else {
                    //that.find('form').hide();
                    that.find('.err').show();
                    that.find('.msg').hide();
                }
            }
        });
    });

});