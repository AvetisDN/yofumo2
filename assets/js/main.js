;(function () {

    $(document).ready(function () {
        setTimeout(function () {
            $('.double-bounce1, .double-bounce2').addClass('hide');
        },2000);
        setTimeout(function () {
            $('.preloader').fadeOut();
            $('.wrap').fadeIn();
        },3000);
    });

})();