

// ===== HEADER =====
$(document).ready(function() {
	// top header left
	$("#top-header .option-cate a.option-item").click(function() {
		$("#top-header .option-cate a.option-item").removeClass('active');
		$(this).addClass('active');
		return false;
	});

	// list-notification
	var index = $("#top-header ul.list-notification li.active").index();
	var last_index = $("#top-header ul.list-notification li:last-child").index();
	setInterval(function() {
		$("#top-header ul.list-notification li").removeClass('active');
		index ++;
		if(index > last_index) {
			index = 0;
		}
		$("#top-header ul.list-notification li").eq(index).addClass('active');
	},2000);

	// top header right 
	$("#top-header .option-cate.icons .option-item").hover(function() {
		$(this).children('.dropdown-option').stop().show();
	}, function() {
		$(this).children('.dropdown-option').stop().hide();
	})




	// navnar menu dropdown
	$("#bottom-header nav.nav-sec-menu .navbar-nav .nav-sec-item").hover(function() {
		$(this).children('.sec-dropdown-menu').stop().show();
	}, function() {
		$(this).children('.sec-dropdown-menu').stop().hide();
	})
});	

// ===== WP-CONTENT =====
$(document).ready(function() {
	// section-item item change color
	setInterval(function() {
		$(".section-item.item-10 .option-Selection ul.list-option li.option-item a").toggleClass('active');
		$("#footer .right-footer a.logo").toggleClass('active');
	},1000);


	// section-item item carousel
	$('.owl-carousel').owlCarousel({
		loop:false,
		margin:20,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
});


// ===== BACKTOP =====
$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 300) {
			$("#option-support").stop().fadeIn();
		} else $("#option-support").stop().fadeOut();
	});
	$("#option-support .backtop").click(function() {
		$("html, body").animate({
			scrollTop : 0
		},1000)
	});
});

// ===== POPUP MODAL PROMOTION =====
$(document).ready(function() {
	$(".popup-modal-control").click(function() {
		$(".pupop-modal-promotion").toggleClass('active');
		$(this).toggleClass('active');
		$(".popup-modal-control-item .icon-control").toggleClass('fa-caret-left fa-caret-right');
		// $(".popup-modal-pane").toggleClass('active');
		$(".popup-modal-promotion").toggleClass('active');
	});
});





