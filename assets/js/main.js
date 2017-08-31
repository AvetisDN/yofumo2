;(function () {

    $(document).ready(function () {
        console.log(1);
        $('.double-bounce1, .double-bounce2').addClass('hide');
        setTimeout(function () {
            $('.preloader').fadeOut();
            $('.wrap').fadeIn();
        },1000);
    });

})();