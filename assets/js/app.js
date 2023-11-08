$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 10) {
		$(".site_header").addClass("scroll_down");
	} else {
		$(".site_header").removeClass("scroll_down");
	}
});



$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('body').toggleClass('overflow_hidden');
	$('.site_header .toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});



$('.select_language .btn').click(function () {
	$(this).toggleClass('active');
	$(this).next().slideToggle()
});


// 

function updSwiperNumericPagination() {
	this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + "</span>";
}

$(".productFeatures .slider").each(function () {
	// Getting slides quantity before slider clones them
	this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

	// Swiper initialization
	new Swiper(this, {
		speed: 800,
		loop: false,
		direction: 'vertical',
		pagination: {
			el: this.querySelector(".swiper-pagination")
		},
		navigation: {
			nextEl: '.next_arrow',
			prevEl: '.prev_arrow',
		},
		on: {
			init: updSwiperNumericPagination,
			slideChange: updSwiperNumericPagination
		}
	});
});

// End
