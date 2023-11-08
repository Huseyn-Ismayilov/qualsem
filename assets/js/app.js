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


var mySwiper = new Swiper('.productFeatures .slider', {
	loop: true,
	initialSlide: 0,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	// pagination: {
	// 	el: '.swiper-pagination',
	// },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

function change() {
	var offer = document.getElementById('numberSlides');
	offer.innerHTML = (mySwiper.realIndex + 1) + '/' + (mySwiper.slides.length - 2) + 'Offers';
}

change();
document.getElementById(".productFeatures .prev_arrow").addEventListener("click", change);
document.getElementById(".productFeatures .next_arrow").addEventListener("click", change); 