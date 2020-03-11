$(document).ready(function() {
    $(window).resize(function() {
        if($(window).width() < 992) {
            $("#content .container").toggleClass('container container-fluid');
        } else $("#content .container-fluid").toggleClass('container-fluid container');
    });
});