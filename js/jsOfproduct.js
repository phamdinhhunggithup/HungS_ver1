$(document).ready(function() {
    // main browser 
    $("#main-product .info-product .relative ul.list-color li a").click(function() {
        // handling add active when click to list color -> a
        $("#main-product .info-product .relative ul.list-color li a").removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $("#main-product .info-product .relative ul.list-color li a").click(function() {
        let this_link_img = $(this).children('img').attr('src');
        $(this).parents('.parent_').children('div').children('div').children('div').children('.img-product').children('.thumb-img').children('img').attr('src',this_link_img);
    });
    // sub browser 
    $(document).ready(function() {
        $(".photo-realistic .owl-carousel a.see-all").click(function() {
            let this_link_img = $(this).children('img').attr('src');
            $(".box-img-header").children('div').children('div').children('div').children('img').attr('src',this_link_img);
        });

        var list_img = new Array();
        count_img = 0;
        $(".photo-realistic .owl-carousel a.see-all img").each(function() {
            count_img ++;
            var get_src_img = $(this).attr('src');
            list_img[count_img] = get_src_img;
            var count_img_2 = 0;
            $("#tab-pane-photo-realistic .box-img button[type='button'].btn-control.next").click(function() {
                count_img_2 ++;
                if(count_img_2 > count_img ) {
                    count_img_2 = 0;
                }
                console.log(count_img)
                var x = list_img[count_img_2];
               $("div.thumb-img img").attr('src',x);
            });
            $("#tab-pane-photo-realistic .box-img button[type='button'].btn-control.prev").click(function() {
                count_img_2 --;
                if(count_img_2 < 1) {
                    count_img_2 = count_img;
                }
                var x = list_img[count_img_2];
                $("div.thumb-img img").attr('src',x);
            });
        })

        $("#tab-pane-photo-realistic .box-img button[type='button'].btn-control.next").click(function() {
            $("tab-pane-photo-realistic .box-img button[type='button'].btn-control").removeClass('active');
            $(this).addClass('active');
        });
        // show and hide sub browser
        $(".photo-realistic .owl-carousel a.see-all").click(function() {
            $("#tab-pane-photo-realistic").stop().fadeIn();
            return false;
        });
        $("#tab-pane-photo-realistic .close-pane i").click(function(){
            $("#tab-pane-photo-realistic").stop().fadeOut();
        });
    });  
});
// handle redirects upon Response
$(document).ready(function() {
    $(window).resize(function() {
        if($(window).width() <1200) {
            $("#main-product .info-product .action-option a.btn-action-p").attr('data-toggle','');
        } else $("#main-product .info-product .action-option a.btn-action-p").attr('data-toggle','modal');
    })
});
// ===== ANIMATE ZOOM =====
$(document).ready(function() {
	$(window).scroll(function() {
        if($(window).scrollTop() > 500 ){
            $(".animate-1").addClass('aos-animate');
            if($(window).scrollTop() > 1400 ){
                $(".animate-2").addClass('aos-animate')
                if($(window).scrollTop() > 2200 ){
                    $(".animate-3").addClass('aos-animate')
                    if($(window).scrollTop() > 3000 ){
                        $(".animate-4").addClass('aos-animate')
                    }
                }
            }
        }
        if($(window).scrollTop() < 200) {
            $("body div").removeClass('aos-animate');
        }
	});
});