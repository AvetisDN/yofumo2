;(function () {

    $(document).ready(function () {
        setTimeout(function () {
            $('.double-bounce1, .double-bounce2').addClass('hide');
        },1000);
        setTimeout(function () {
            $('.preloader').fadeOut();
            $('.wrap').fadeIn();
        },2000);
    });

})();