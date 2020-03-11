$(document).ready(function() {
    // ===== ZOOM =====
    $(window).scroll(function() {
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 0 ) {
            $(".product-1").addClass('aos-animate');
            if($(window).scrollTop() > 100) {
                $(".product-2").addClass('aos-animate');
                if($(window).scrollTop() > 700) {
                    $(".product-3").addClass('aos-animate');
                    if($(window).scrollTop() > 1300) {
                        $(".product-4").addClass('aos-animate');
                        if($(window).scrollTop() > 1800) {
                            $(".product-5").addClass('aos-animate');
                            if($(window).scrollTop() > 2400) {
                                $(".product-6").addClass('aos-animate');
                                if($(window).scrollTop() > 3100) {
                                    $(".product-7").addClass('aos-animate');
                                    if($(window).scrollTop() > 3600) {
                                        $(".product-8").addClass('aos-animate');
                                        if($(window).scrollTop() > 4200) {
                                            $(".product-9").addClass('aos-animate');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}); 
$(document).ready(function() {
    $("section#top-product .box .list-product-sort ul.list li a").click(function() {
        $("section#top-product .box .list-product-sort ul.list li a").removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $("section#top-product .box nav.wp-pagination ul.pagination li a").click(function() {
        $("section#top-product .box nav.wp-pagination ul.pagination li a").removeClass('active');
        $(this).addClass('active');
        return false;
    })
});