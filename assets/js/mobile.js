$(document).ready(function () {

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

});