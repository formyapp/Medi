
/********************
        sticky nav
*********************/
$(function() {

    //show/hide nav
    showHideNav();
    $(window).scroll(function() {
        //show/hide on window's scroll
    showHideNav();
    });

    function showHideNav() {
        if($(window).scrollTop() > 150) {

            $('nav').addClass('custom-navbar');
            
            // show back to top button
            $("#back-to-top").fadeIn();
            
        } else {
            $('nav').removeClass('custom-navbar');

            // hide back to top button
            $("#back-to-top").fadeOut();

        }
    }
});


