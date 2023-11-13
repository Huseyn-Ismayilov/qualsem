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
	this.slidesQuantity = this.querySelectorAll(".productFeatures .swiper-slide").length;

	// Swiper initialization
	new Swiper(this, {
		speed: 800,
		loop: false,
		direction: 'horizontal',
		pagination: {
			el: this.querySelector(".productFeatures .swiper-pagination")
		},
		navigation: {
			nextEl: '.productFeatures .next_arrow',
			prevEl: '.productFeatures .prev_arrow',
		},
		on: {
			init: updSwiperNumericPagination,
			slideChange: updSwiperNumericPagination
		},
		breakpoints: {
			// 640: {
			// 	slidesPerView: 2,
			// 	spaceBetween: 20,
			// },
			// 768: {
			// 	slidesPerView: 4,
			// 	spaceBetween: 40,
			// },
			1024: {
				direction: "vertical",
			},
		},
	});
});

// End


if ($(window).width() < 991) {
	$(".industry0 .slider").each(function () {
		// Getting slides quantity before slider clones them
		this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

		// Swiper initialization
		new Swiper(this, {
			speed: 800,
			spaceBetween: 30,
			pagination: {
				el: this.querySelector(".industry0 .swiper-pagination")
			},
			navigation: {
				nextEl: '.industry0 .next_arrow',
				prevEl: '.industry0 .prev_arrow',
			},
			on: {
				init: updSwiperNumericPagination,
				slideChange: updSwiperNumericPagination
			}
		});
	});
}

// 



// 


// $(document).ready(function () {
// 	$('.hero .icon img').draggable();
// });
$(function () {
	$(".hero .icon img").draggable();
});

//header animation on load
$(document).ready(function () {
	setTimeout(function () {
		$(".hero .icons").addClass("opened");
		$(".hero .logo").slideDown()
		$(".hero .content h3").slideDown()
	}, 150);
});



var medical_intro = new Swiper(".medical_intro .slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
	loop: true,
});


// var arge_content_block = new Swiper(".arge_content_block .slider", {
// 	slidesPerView: 4,
// 	centeredSlides: true,
// 	spaceBetween: 30,
// 	freeMode: true,
// 	loop: true,
// })

new Swiper('.arge_content_block .slider', {
	spaceBetween: 20,
	// centeredSlides: true,
	loop: true,
	direction: "vertical",
	slidesPerView: "auto",
	breakpoints: {
		// 640: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 20,
		// },
		// 768: {
		// 	slidesPerView: 4,
		// 	spaceBetween: 40,
		// },
		1024: {
			slidesPerView: 4,
			spaceBetween: 50,
			freeMode: true,
			direction: "horizontal",
		},
	},
});



$(".industry_intro .slider").each(function () {
	// Getting slides quantity before slider clones them
	this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

	// Swiper initialization
	new Swiper(this, {
		speed: 800,
		loop: false,
		spaceBetween: 150,
		pagination: {
			el: this.querySelector(".industry_intro .swiper-pagination")
		},
		navigation: {
			nextEl: '.industry_intro .next_arrow',
			prevEl: '.industry_intro .prev_arrow',
		},
		on: {
			init: updSwiperNumericPagination,
			slideChange: updSwiperNumericPagination
		}
	});
});


new Swiper('.arge_intro .slider', {
	slidesPerView: "auto",
	freeMode: true,
	spaceBetween: 20,
	loop: true,
	breakpoints: {
		1024: {
			spaceBetween: 50,
		},
	},
});